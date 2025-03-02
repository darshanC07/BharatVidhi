import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProductDisplay = ({
  name,
  description,
  price,
  image,
  acquired,
  total,
  prod_id,
}) => {
  const navigation = useNavigation();
  console.log("Buying product:", prod_id);
  // State for acquired quantity and total quantity
  const [acquiredQuantity, setAcquiredQuantity] = useState(acquired);
  const [totalQuantity, setTotalQuantity] = useState(total);
  const handleBuy = async () => {
    try {
      let userUid = ""; // Use `let` so it can be reassigned
      const storedUser = await AsyncStorage.getItem("userSession");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        userUid = parsedUser.uid || ""; // Ensure `uid` exists
      }

      console.log("User UID:", userUid);

      const response = await fetch(
        "https://813prx4h-5000.inc1.devtunnels.ms/buy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_uid: userUid, // Now using dynamic user UID
            prod_id: prod_id,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setAcquiredQuantity((prev) => prev + 1);
        setTotalQuantity((prev) => prev - 1);
        alert(data.message || "Unknown error");
      } else {
        alert("Purchase failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error purchasing product:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <View style={styles.productContainer}>
      <View style={{ padding: 10 }}>
        {/* Back Button & Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../assets/back.png")} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.count}>
            {acquiredQuantity} / {totalQuantity}
          </Text>
        </View>

        {/* Product Image */}
        <Image
          source={{ uri: image }}
          style={styles.productImage}
          resizeMode="contain"
        />

        {/* Product Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Price Section */}
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>PRICE: {price}</Text>
          <Image
            source={require("../assets/coins.png")}
            style={styles.coinIcon}
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
            <Text style={styles.buttonText}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wishlistButton}
            onPress={() => console.log("Wishlist clicked")}
          >
            <Text style={styles.buttonText}>WISHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function Product({ route }) {
  const p = route?.params?.p || {
    name: "Default Product",
    description: "",
    price: 0,
    image: null,
    quantity: 10,
    acquiredQuantity: 2,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topHeader}>
        <Text style={styles.headerText}>BHARAT VIDHI</Text>
        <View style={styles.iconRow}>
          <Image
            source={require("../assets/icon1.png")}
            style={styles.icon}
          />
          <Image source={require("../assets/coins.png")} style={styles.icon} />
          <Image source={require("../assets/profile.png")} style={styles.icon} />
        </View>
      </View>

      <Text style={styles.archivesTitle}>ARCHIVES</Text>

      {/* Product Display */}
      <ProductDisplay
        name={p.name}
        description={p.description}
        price={p.price}
        image={p.image}
        total={p.quantity}
        acquired={p.acquiredQuantity}
        prod_id={p.prod_id}
      />

      {/* Footer */}
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
  topHeader: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: "13%",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    color: "#232ED1",
    fontWeight: "bold",
  },
  iconRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  archivesTitle: {
    fontSize: 22,
    color: "#080606",
    textAlign: "center",
    marginTop: "2%",
  },
  productContainer: {
    backgroundColor: "rgba(255, 238, 221, 0.4)",
    borderRadius: 10,
    padding: 10,
    height: "73%",
    width: "90%",
    marginBottom: "4%",
    marginTop: "2%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1D3557",
  },
  count: {
    fontSize: 18,
    marginLeft: "auto",
  },
  productImage: {
    height: "60%",
    width: "100%",
    justifyContent: "center",
    marginTop: "2%",
  },
  description: {
    fontSize: 18,
    color: "#1D3557",
    marginTop: "4%",
    textAlign: "center",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    justifyContent: "center",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  coinIcon: {
    height: 22,
    width: 22,
    marginLeft: "2%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: "8%",
    justifyContent: "center",
  },
  buyButton: {
    height: 60,
    width: "50%",
    backgroundColor: "rgba(255, 238, 221, 0.8)",
    justifyContent: "center",
    borderRadius: 10,
    borderBottomWidth: 3,
    borderColor: "#FFDCB9",
  },
  wishlistButton: {
    height: 60,
    width: "50%",
    backgroundColor: "rgba(255, 238, 221, 0.8)",
    marginLeft: "4%",
    justifyContent: "center",
    borderRadius: 10,
    borderBottomWidth: 3,
    borderColor: "#FFDCB9",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
});
