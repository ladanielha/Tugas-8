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

const Tugas02 = () => {
  const [angka1, setAngka1] = useState("");
  const [angka2, setAngka2] = useState("");
  const [result, setResult] = useState(null); 

  const handleSum = () => {
    const sum = parseFloat(angka1) + parseFloat(angka2);
    setResult(sum.toString()); 
  };

  const handleMin = () => {
    const min = parseFloat(angka1) - parseFloat(angka2);
    setResult(min.toString()); 
  };

  const handleMultiply = () => {
    const multiply = parseFloat(angka1) * parseFloat(angka2);
    setResult(multiply.toString()); 
  };

  const handleDevide = () => {
    const devide = parseFloat(angka1) / parseFloat(angka2);
    setResult(devide.toString()); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Angka Pertama</Text>
          <TextInput
            style={styles.formControl}
            value={angka1}
            onChangeText={setAngka1}
            keyboardType="numeric"
            type="number"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Angka Kedua</Text>
          <TextInput
            style={styles.formControl}
            value={angka2}
            onChangeText={setAngka2}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.buttonText}>Hasil Perhitungan  = {result}</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={handleSum} style={styles.button}>
            <Text style={styles.buttonText}>Penjumlahan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMin} style={styles.button}>
            <Text style={styles.buttonText}>Pengurangan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMultiply} style={styles.button}>
            <Text style={styles.buttonText}>Perkalian</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDevide} style={styles.button}>
            <Text style={styles.buttonText}>Pembagian</Text>
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

export default Tugas02;
