import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

const AshokaChakraLoader = () => {
  const rotation = useRef(new Animated.Value(0)).current;
  const spokes = 24;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const generateSpokes = () => {
    return Array.from({ length: spokes }).map((_, index) => {
      const angle = (index * 360) / spokes;
      const animatedColor = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#FFFFFF", "#020CAC"],
      });

      return (
        <AnimatedLine
          key={index}
          x1="50"
          y1="50"
          x2="50"
          y2="5"
          stroke={animatedColor}
          strokeWidth="2"
          origin="50,50"
          rotation={angle}
        />
      );
    });
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Animated.View
        style={{
          transform: [
            {
              rotate: rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      >
        <Svg width="100" height="100" viewBox="0 0 100 100">
          {/* Outer Circle */}
          <Circle cx="50" cy="50" r="45" stroke="#020CAC" strokeWidth="5" fill="none" />
          {/* Spokes */}
          {generateSpokes()}
        </Svg>
      </Animated.View>
    </View>
  );
};

const AnimatedLine = Animated.createAnimatedComponent(Line);

export default AshokaChakraLoader;
