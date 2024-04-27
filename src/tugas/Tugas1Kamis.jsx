import { useState } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tugas1Kamis = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [program, setProgram] = useState("");

  const handleSubmit = async () => {
    Alert.alert(
      "Pesan",
      JSON.stringify({ name, gender, program }) // Corrected
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Nama</Text>
            <TextInput
              style={styles.formControl}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Jenis Kelamin</Text>
            <TextInput
              style={styles.formControl}
              value={gender}
              onChangeText={setGender}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Program Batch</Text>
            <TextInput
              style={styles.formControl}
              value={program}
              onChangeText={setProgram}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Simpan</Text>
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

export default Tugas1Kamis;