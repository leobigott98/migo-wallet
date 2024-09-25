import { Link } from "expo-router";
import { ScrollView, View, Pressable, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import OptionCard from "./OptionCard";

export default function OptionsCarousel() {
    return(
        <ScrollView style={styles.optionsCarousel} horizontal contentContainerStyle={{}}>
            <OptionCard href='/add-money' icon={<MaterialCommunityIcons name="cash-plus" size={45} color="black" />} name='Recargar' />
            <OptionCard href='/withdraw' icon={<MaterialCommunityIcons name="cash-fast" size={45} color="black" />} name='Retirar' />
            <OptionCard href='/pay' icon={<Ionicons name="receipt" size={35} color="black" style={{padding: 5}} />} name='Servicios' />
            <OptionCard href='/transfer' icon={<FontAwesome6 name="money-bill-transfer" size={35} color="black" style={{padding: 5}} />} name='Transferir' />
            <OptionCard href='/crediexpress' icon={<Fontisto name="wallet" size={35} color="black" style={{padding: 5}}/>} name='CrediExpress' nameFontSize={10}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    optionsCarousel: {
      paddingHorizontal: 10,
      paddingBottom: 15,
      paddingTop: 10,
    },
    option: {
      //backgroundColor: "white",
      shadowColor: "#000000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      borderRadius: 20,
      margin: 5,
      width: 80,
      height: 90,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  