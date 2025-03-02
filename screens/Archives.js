import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebaseSetup";
import { ref, onValue } from "firebase/database";
import AshokaChakraLoader from "../components/Preloader";

const ProductCard = ({
  name,
  description,
  price,
  image,
  quantity,
  acquiredQuantity,
  prod_id,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        navigation.navigate("Product", {
          p: {
            name,
            description,
            price,
            image,
            quantity,
            acquiredQuantity,
            prod_id,
          },
        })
      }
    >
      <Image
        source={{ uri: image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productDescription}>{description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>PRICE: {price}</Text>
          <Image
            source={require("../assets/coins.png")}
            style={styles.coinImage}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Archives({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("userSession");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUserUid(parsedUser.uid);
        }
      } catch (error) {
        console.error("Error fetching user session:", error);
      }
    };
    fetchUserSession();
  }, []);

  useEffect(() => {
    if (!userUid) return;

    const productsRef = ref(db, "products");
    const unsubscribe = onValue(
      productsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const productsArray = Object.entries(data).map(([id, product]) => ({
            id,
            ...product,
            acquiredQuantity: product.user?.[userUid] || 0,
          }));
          console.log("Products:", productsArray);
          setProducts(productsArray);
        } else {
          setProducts([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userUid]);

  if (loading) {
    return (
        <AshokaChakraLoader />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BHARAT VIDHI</Text>
        <View style={styles.headerIcons}>
          <Image source={require("../assets/notification.png")} />
          <Image source={require("../assets/coins.png")} />
          <Image source={require("../assets/profile.png")} />
        </View>
      </View>
      <Text style={styles.archivesTitle}>ARCHIVES</Text>
      <ScrollView style={styles.scroll}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            acquiredQuantity={product.acquiredQuantity}
            prod_id={product.prod_id}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  loaderContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    height: 50,
    flexDirection: "row",
    marginTop: "13%",
    paddingHorizontal: 20,
  },
  title: { fontSize: 25, color: "#232ED1", fontWeight: "bold" },
  headerIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "16%",
  },
  archivesTitle: {
    fontSize: 22,
    color: "#080606",
    textAlign: "center",
    marginTop: "2%",
  },
  scroll: {
    width: 340,
    borderRadius: 10,
    marginTop: "5%",
    marginBottom: "22%",
  },
  productCard: {
    backgroundColor: "rgba(255, 238, 221, 0.5)",
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    marginBottom: "4%",
  },
  productImage: { height: 130, width: 102 },
  productInfo: { marginLeft: "10%", justifyContent: "center" },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D3557",
    marginBottom: 2,
  },
  productDescription: { fontSize: 12, color: "#1D3557", marginBottom: 2 },
  priceContainer: {
    marginTop: "2%",
    flexDirection: "row",
    alignItems: "center",
  },
  productPrice: { fontSize: 16, fontWeight: "bold", color: "black" },
  coinImage: { height: 22, width: 22, marginLeft: "5%" },
});
