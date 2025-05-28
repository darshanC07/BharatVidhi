// useFirebaseNotifications.js

import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../firebaseSetup';
import { ref, onValue } from 'firebase/database';

// Key for AsyncStorage to track shown notifications
const SHOWN_KEY = 'shown_notifications';

// Configure notification handler for foreground notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const NotificationListener = () => {
  useEffect(() => {
    const setup = async () => {
      try {
        // Request notification permissions
        const granted = await requestNotificationPermission();
        if (!granted) {
          Alert.alert(
            'Permission Denied',
            'Notification permissions are required to show alerts.',
          );
          return;
        }

        // Reference to Firebase Realtime Database notifications path
        const notifRef = ref(db, 'notifications');

        // Set up real-time listener
        const unsubscribe = onValue(
          notifRef,
          async (snapshot) => {
            try {
              const now = Date.now();
              const notifs = snapshot.val() || {};

              // Retrieve shown notifications from AsyncStorage
              const shownRaw = await AsyncStorage.getItem(SHOWN_KEY);
              const shownList = shownRaw ? JSON.parse(shownRaw) : [];
              console.log(shownList);

              for (const [key, notif] of Object.entries(notifs)) {
                const { title, body, createdAt, expiresAt } = notif;

                const shouldShow =
                  !shownList.includes(key) &&
                  createdAt <= now &&
                  expiresAt >= now;
                if (shouldShow) {
                  await Notifications.scheduleNotificationAsync({
                    content: {
                      title: title || 'Notification',
                      body: body || 'New notification received',
                      sound: 'default',
                    },
                    trigger: null,
                  });


                  // Update shown notifications list
                  const updatedList = [...shownList, key];
                  await AsyncStorage.setItem(
                    SHOWN_KEY,
                    JSON.stringify(updatedList),
                  );
                  console.log("stored");
                }
              }
            } catch (error) {
              console.error('Error processing notifications:', error);
            }
          },
          (error) => {
            console.error('Firebase listener error:', error);
          },
        );

        // Cleanup listener on unmount
        return () => unsubscribe();
      } catch (error) {
        console.error('Setup error:', error);
      }
    };

    setup();
  }, []);

  return null; // Component doesn't render anything
};

export default NotificationListener;

async function requestNotificationPermission() {
  try {
    // Set up Android notification channel
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    // Check existing permission status
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    // Request permission if not granted
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowSound: true,
          allowBadge: true,
        },
      });
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.warn('Notification permission not granted:', finalStatus);
      return false;
    }

    // For testing in Expo Go, log the push token
    if (__DEV__) {
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('Expo Push Token:', token);
    }

    return true;
  } catch (error) {
    console.error('Permission request error:', error);
    return false;
  }
}