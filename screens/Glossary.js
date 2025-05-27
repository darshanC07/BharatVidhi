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
import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebaseSetup";
import { ref, onValue } from "firebase/database";
import AshokaChakraLoader from "./Preloader";

// Gemini API key (replace with a valid key from Google AI Studio in development; use environment variables in production for security)
const GEMINI_API_KEY = "AIzaSyArz7kEBkmebVe2Pb2gaK841VVcvx6tW4o";

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
      <View style={{ width: 1, backgroundColor: "black" }} />
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

// Custom hook for debouncing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
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
  const [aiMeaning, setAiMeaning] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const prevSearchQueryRef = useRef("");

  // Debounce search query to prevent rapid API calls
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const glossaryRef = ref(db, "glossary");

    const unsubscribe = onValue(
      glossaryRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setGlossaryData(snapshot.val());
        } else {
          setGlossaryData({});
        }
        setLoading(false);
      },
      (error) => {
        console.error("Firebase error:", error);
        setGlossaryData({});
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const fetchGeminiMeaning = async (word) => {
    if (!word.trim()) return;
    setAiLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Provide a short, clear, one-sentence definition of the term "${word}" in the Indian constitutional or legal context. If the term does not have any legal significance, clearly state this at the beginning of the definition but still provide its general meaning without legal relevance. Clearly state if it has legal significance in India, another country, or none at all. Do not include the term "${word}" in the definition; instead, rephrase it naturally without repeating the word. Use simple, beginner-friendly English suitable for a legal glossary, and avoid markdown or special formatting. Do not use any sentences that are contradictory or may confuse me. Follow this style: Citizen: A legally recognized member of a country. Acquittal: A legal judgment clearing a person of charges. Adjudication: Legal process of resolving disputes.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const meaning =
        data?.candidates?.[0]?.content?.parts?.[0]?.text + "\n[Ai Generated]" ||
        "No definition found.";
      setAiMeaning({ word, meaning });
    } catch (error) {
      console.error("Error fetching Gemini API:", error);
      setAiMeaning({ word, meaning: "Unable to fetch definition." });
    } finally {
      setAiLoading(false);
    }
  };

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

  useEffect(() => {
    // Only fetch if debounced search query has changed and is non-empty
    if (
      debouncedSearchQuery &&
      debouncedSearchQuery !== prevSearchQueryRef.current &&
      Object.keys(filteredGlossary).length === 0 &&
      !loading
    ) {
      fetchGeminiMeaning(debouncedSearchQuery);
      prevSearchQueryRef.current = debouncedSearchQuery;
    } else if (!debouncedSearchQuery || Object.keys(filteredGlossary).length > 0) {
      setAiMeaning(null);
      prevSearchQueryRef.current = debouncedSearchQuery;
    }
  }, [debouncedSearchQuery, filteredGlossary, loading]);

  if (loading || !fontsLoaded) {
    return <AshokaChakraLoader />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
          marginBottom: 10,
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
          autoCapitalize="none"
        />
      </View>

      <ScrollView style={styles.scroll}>
        {aiLoading ? (
          <ActivityIndicator
            size="large"
            color="#232ED1"
            style={{ marginTop: 20 }}
          />
        ) : Object.keys(filteredGlossary).length > 0 ? (
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
        ) : aiMeaning ? (
          <View>
            <Text style={styles.scroll_text}>
              {aiMeaning.word[0].toUpperCase()}{aiMeaning.word[0].toLowerCase()}
            </Text>
            <View style={styles.scroll_view} />
            <Glossary word={aiMeaning.word} meaning={aiMeaning.meaning} />
          </View>
        ) : (
          <Text style={styles.noResults}>
            {searchQuery ? "No results found in database" : "Type a word to search"}
          </Text>
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
    color: "#232ED1",
  },
  scroll_view: {
    height: 1,
    width: "100%",
    marginVertical: 10,
    backgroundColor: "black",
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