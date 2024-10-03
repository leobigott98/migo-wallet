import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from "react-native";
import CardsCarousel from "../../components/CardsCarousel"; 
import TransactionsList from "@/components/TransactionsList";
import OptionsCarousel from "@/components/OptionsCarousel";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import OptionCard from "@/components/OptionCard";

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>  
        <Text style={{fontSize: 24, fontWeight: '600', position: 'relative', right: 80, margin: 10 }}>Hola Leonardo,</Text>
        <CardsCarousel/>       
        
        <Text style={{position: 'relative', right: 120, fontSize: 20, fontWeight: '500', marginTop: 5}}>Opciones</Text>
        <OptionsCarousel>
          <OptionCard href='/add-money' icon={<MaterialCommunityIcons name="cash-plus" size={45} color="black" />} name='Recargar' />
          <OptionCard href='/withdraw' icon={<MaterialCommunityIcons name="cash-fast" size={45} color="black" />} name='Retirar' />
          <OptionCard href='/pay' icon={<Ionicons name="receipt" size={35} color="black" style={{padding: 5}} />} name='Servicios' />
          <OptionCard href='/transfer' icon={<FontAwesome6 name="money-bill-transfer" size={35} color="black" style={{padding: 5}} />} name='Transferir' />
          <OptionCard href='/crediexpress' icon={<Fontisto name="wallet" size={35} color="black" style={{padding: 5}}/>} name='CrediExpress' nameFontSize={10}/>
        </OptionsCarousel>
        
        <Text style={{position: 'relative', right: 63, fontSize: 20, fontWeight: '500', marginBottom: 5}}>Últimas transacciones</Text>
        <TransactionsList/>
        <Link
          href={{
            pathname: "/wallet-info/[id]",
            params: { id: "123" },
          }}
        >
          View wallet details
        </Link>
      </ScrollView>
      <View style={styles.optionsBar}>
        <View style={styles.barOption}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Enviar</Text>
        </View>
        <View style={styles.barOption}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Recibir</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    //width: 100
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    //marginHorizontal: 10,
    //backgroundColor: 'pink',
  },
  optionsBar: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    width: Dimensions.get("screen").width,
    backgroundColor: "white",
    height: 70,
    shadowColor: "#000000",
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20
  },
  barOption: {
    width: 150,
    height: 35,
    backgroundColor: "#03045E",
    borderRadius: 100,
    margin: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  }
});

