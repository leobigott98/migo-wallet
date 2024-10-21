import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Dimensions, 
  } from "react-native";
import OptionButton from "@/components/OptionButton";
  
  export default function TransferScreen() {
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.balanceBox}>
            <Text style={{fontWeight: '500'}}>Saldo disponible:</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline'}}>
              <Text style={{fontSize: 42}}>$185</Text>
              <Text style={{fontSize: 24}}>,00</Text>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.rechargeOptionsBox}>
            <Text style={{fontWeight: '500'}}>Opciones de Transferencia:</Text>
            <OptionButton buttonColor="white" href="/(home)/transfer/migo2migo" pressedButtonColor="lightgray">
              <Text>Enviar Dinero a otra Migo</Text>
            </OptionButton>
            <OptionButton buttonColor="white" href="/(home)/transfer/wallet2wallet" pressedButtonColor="lightgray">
              <Text>Cambiar dinero entre mis Wallets</Text>
            </OptionButton>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: StatusBar.currentHeight,
      backgroundColor: 'white',
      borderColor: '#D9D9D9',
      borderBottomWidth: 1
      //width: 100
    },
    scrollView: {
      justifyContent: "center",
      alignItems: "center",
      //marginHorizontal: 10,
      //backgroundColor: 'pink',
    },
    balanceBox:{
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: '#D9D9D9',
      borderWidth: 1,
      height: Dimensions.get("screen").height*0.15,
      padding: 15,
      margin: 20,
      width: Dimensions.get("screen").width*0.85,
      justifyContent: 'space-between',
    },
    rechargeOptionsBox:{
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: '#D9D9D9',
      borderWidth: 1,
      height: 'auto',
      padding: 15,
      width: Dimensions.get("screen").width*0.85,
      justifyContent: 'space-between',
    },
    rechargeOption: {
      backgroundColor: '#0077B6',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  