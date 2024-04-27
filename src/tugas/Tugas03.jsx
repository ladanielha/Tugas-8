import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Tugas03 = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [totalPrice, settotalPrice] = useState(null); 

  const handleCountPrice = () => {
    const tPrice = parseFloat(price) * parseFloat(quantity);
    settotalPrice(tPrice.toString()); 
  };

  const handleReset =() => {
    setProductName(""),
    setPrice(0),
    setQuantity(0)
    settotalPrice(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Nama Barang </Text>
          <TextInput
            style={styles.formControl}
            value={productName}
            onChangeText={setProductName}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Harga </Text>
          <TextInput
            style={styles.formControl}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            textContentType="numeric"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Quantity </Text>
          <TextInput
            style={styles.formControl}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.buttonText}>Jumlah yang harus dibayar  = {totalPrice}</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={handleCountPrice} style={styles.button}>
            <Text style={styles.buttonText}>Hitung Total </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleReset} style={styles.button}>
            <Text style={styles.buttonText}>Reset </Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  wrapper: {
    backgroundColor: "grey",
    justifyContent: "center",
    height: "100%",
    gap: 24,
  },
  button: {
    backgroundColor: "#ff006e",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginHorizontal: 58,
    borderRadius: 20,
    borderColor: "#fb6f92",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },
  formGroup: {
    marginHorizontal: 58,
    gap: 8,
  },
  formLabel: {
    fontSize: 16,
    color: "#fff",
  },
  formControl: {
    backgroundColor: "#ffe5ec",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: "#0d1b2a",
    borderColor: "#fb6f92",
    borderWidth: 0.3,
    borderRadius: 4,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoThumb: {
    justifyContent: "center",
    gap: 16,
    flexDirection: "row",
  },
});

export default Tugas03;
