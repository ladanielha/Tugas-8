import { useState } from "react"
import { Alert, ScrollView, TouchableOpacity, View } from "react-native"
import { buttons, forms, layout, text } from "../../latte/styles.jsx";
import { Appbar, Button, RadioButton, Text, TextInput } from "react-native-paper";


export const Tugas01 = () => {
  const [data, setData] = useState({
    name: "",
    gender: "",
    program: ""
  });

  const handleSubmit = () => {
    Alert.alert("Pesan", JSON.stringify(data))
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Tugas 01" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={layout.container}>
        <Text variant="headlineSmall">Form Batch MERN</Text>
        <View style={forms.formGroup}>
          <TextInput 
            label={"Name"}
            mode="outlined"
            value={data.name}
            onChangeText={(value) => setData((values) => ({...values, name: value}))} 
          />
        </View>
        <View>
          <Text style={[forms.formLabel, {marginBottom: 16}]}>Jenis Kelamin</Text>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <RadioButton 
              value={data.gender}
              status={data.gender === 'Pria' ? 'checked':'unchecked' }
              onPress={() => setData((values) => ({...values, gender: "Pria"}))}
              label="Pria"
            />
            <Text style={forms.formLabel}>Pria</Text>
          </View>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <RadioButton 
              value={data.gender}
              status={data.gender === 'Wanita' ? 'checked':'unchecked' }
              onPress={() => setData((values) => ({...values, gender: "Wanita"}))}
            />
            <Text style={forms.formLabel}>Wanita</Text>
          </View>
        </View>

        <View style={forms.formGroup}>
          <TextInput 
            label={"Program Batch"}
            mode="outlined"
            value={data.program}
            onChangeText={(value) => setData((values) => ({...values, program: value}))} 
          />
        </View>
        <Button mode="contained" onPress={handleSubmit}>
          Tampilkan Pesan
        </Button>
      </ScrollView>
    </>
  )
}