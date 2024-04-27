import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Linking, SafeAreaView, StyleSheet, Text, View } from "react-native";

export const WidgetNavigationDrawer = (props) => {
    const logo = "https://icons.iconarchive.com/icons/justicon/free-simple-line/96/Website-Analysis-Browser-Seo-Data-icon.png";
    console.log(props);
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Image source={{uri: logo}} style={styles.logo} />
      <View></View>
      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props}/>
        {/* <DrawerItem
          label={(props) => <View style={{ flexDirection: "row", gap: 8, alignItems: 'center' }}>
          <Text style={{color: props.color}}>Inspired From</Text>
          <Image source={{uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/32/star-icon.png'}} 
            style={{width: 18, height: 18}}
          />
        </View>}
          onPress={() => Linking.openURL('https://github.com/yanwarrior/react-native-batch-20')}
        ></DrawerItem> */}
      </DrawerContentScrollView>
      <View style={styles.line}></View>
      <Text style={styles.author} onPress={() => Linking.openURL('https://github.com/ladanielha')}>
        Create by @ladanielha
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        marginBottom: 10,
      },
      logo: {
        marginTop: 20,
        marginBottom: 20,
        width: 128,
        height: 128,
        resizeMode: 'center',
        alignSelf: 'center'
      },
      author: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey',
        marginBottom: 16
      }
});
