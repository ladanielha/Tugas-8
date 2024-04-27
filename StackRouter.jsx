import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { DATA } from "./data";
import BelajarTextInput from "./components/BelajarTextInput";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BelajarFlatList from "./components/BelajarFlatlist";

const Stack = createStackNavigator();

const formatCurrency = (data) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(data);
};

const Presentasi = ({ email, callback }) => {
  return <Text onPress={callback}>Your email is {email}</Text>;
};

const Konten = ({ konten }) => {
  return <Text style={styles.konten}>{konten}</Text>;
};

export default function StackRouter() {
  const [judul, setJudul] = useState("Belajar Android React Native");
  const [konten, setKonten] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  );

  const onPress = () => {
    Alert.alert(konten);
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          headerShown:false
      }}>
          <Stack.Screen
            name="BelajarTextInput"
            component={BelajarTextInput}
            options={{ title: "Sign In"}}
          />
          <Stack.Screen
            name="BelajarFlatList"
            component={BelajarFlatList}
            options={{ title: "Flat List" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" backgroundColor='#3a0ca3' translucent={false} />

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    gap: 16,
  },
  judul: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000814",
    marginHorizontal: 20,
  },
  konten: {
    fontSize: 16,
    color: "#4a4e69",
  },
  button: {
    backgroundColor: "#ff006e",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});
