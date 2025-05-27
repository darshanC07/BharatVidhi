import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
} from "react-native";
import Footer from "../components/Footer";
import {
  useFonts,
  PatrickHandSC_400Regular,
} from "@expo-google-fonts/patrick-hand-sc";
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { Iceland_400Regular } from "@expo-google-fonts/iceland";
import React, { useState, useEffect } from "react";
import { db } from "../firebaseSetup";
import { ref, onValue } from "firebase/database";
import AshokaChakraLoader from "./Preloader";

const Glossary = ({ word, meaning }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        alignSelf: "center",
        marginBottom: 10,
      }}
    >
      <View style={{ width: "40%" }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Itim_400Regular",
            flexWrap: "wrap",
          }}
        >
          {word}
        </Text>
      </View>
      <View style={{ width: 1, backgroundColor: "black" }}></View>
      <View style={{ width: "50%" }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Itim_400Regular",
            flexWrap: "wrap",
          }}
        >
          {meaning}
        </Text>
      </View>
    </View>
  );
};

export default function Gloss() {
  const [fontsLoaded] = useFonts({
    PatrickHandSC_400Regular,
    Itim_400Regular,
    Iceland_400Regular,
  });
  const [glossaryData, setGlossaryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const glossaryRef = ref(db, "glossary");

    onValue(glossaryRef, (snapshot) => {
      if (snapshot.exists()) {
        setGlossaryData(snapshot.val());
      } else {
        setGlossaryData({});
      }
      setLoading(false);
    });
  }, []);

  // Filter glossary data based on search query
  const filteredGlossary = glossaryData
    ? Object.entries(glossaryData).reduce((acc, [letter, words]) => {
        const filteredWords = words.filter((item) =>
          item.word.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredWords.length > 0) {
          acc[letter] = filteredWords;
        }
        return acc;
      }, {})
    : {};

  if (loading) {
    return <AshokaChakraLoader />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          padding: 20,
        }}
      >
        <View style={{ height: 60, paddingVertical: 10, flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 25,
              flex: 2,
              color: "#232ED1",
              fontWeight: "bold",
            }}
          >
            BHARAT VIDHI
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Image source={require("../assets/notification.png")} />
            <Image source={require("../assets/coins.png")} />
            <Image source={require("../assets/profile.png")} />
          </View>
        </View>
      </View>

      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontFamily: "PatrickHandSC_400Regular",
          marginBottom: "2%",
        }}
      >
        GLOSSARY
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search glossary..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.scroll}>
        {Object.keys(filteredGlossary).length > 0 ? (
          Object.entries(filteredGlossary).map(([letter, words]) => (
            <View key={letter}>
              <Text style={styles.scroll_text}>{letter}</Text>
              <View style={styles.scroll_view} />
              {words.map((item, index) => (
                <Glossary
                  key={`${item.word}-${index}`}
                  word={item.word}
                  meaning={item.meaning}
                />
              ))}
            </View>
          ))
        ) : (
          <Text style={styles.noResults}>No results found</Text>
        )}
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 20,
  },
  scroll_text: {
    fontFamily: "Itim_400Regular",
    fontSize: 24,
  },
  scroll_view: {
    height: 1,
    width: "100%",
    marginVertical: 10,
    backgroundColor: "black",
  },
  container: {
    backgroundColor: "white",
  },
  logout: {
    alignSelf: "center",
    backgroundColor: "white",
    top: 120,
    height: 40,
    width: 140,
    borderRadius: 10,
    opacity: 0.7,
  },
  set1: {
    top: 140,
    gap: 20,
  },
  set2: {
    top: 170,
    gap: 20,
  },
  score: {
    top: 120,
    height: 500,
    width: 350,
    gap: 50,
    backgroundColor: "#4C66F8",
    borderRadius: 20,
    fontFamily: "Iceland_400Regular",
  },
  block: {
    top: 100,
    height: 100,
    width: 100,
    backgroundColor: "#FFEEDD",
    borderRadius: 10,
  },
  info: {
    fontSize: 24,
    textAlign: "center",
    top: 60,
    fontFamily: "Itim_400Regular",
  },
  pfp: {
    top: 150,
    alignSelf: "center",
    zIndex: 2,
  },
  bg: {
    borderRadius: 15,
    height: 2000,
    width: "100%",
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontFamily: "Itim_400Regular",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  noResults: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Itim_400Regular",
    color: "#666",
    marginTop: 20,
  },
});