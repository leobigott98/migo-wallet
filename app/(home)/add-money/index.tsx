import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Dimensions,
  } from "react-native";
import OptionsBox from "@/components/OptionsBox";
import DropdownMenu from "@/components/DropdownMenu";
import DropdownMenu2 from "@/components/DropdownMenu2"
import DropdownOption from "@/components/DropdownOption";
import DropdownZelleInfo from "@/components/DropdownZelleInfo";
import Ionicons from '@expo/vector-icons/Ionicons';
  
  export default function AddMoneyScreen() {

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
          <OptionsBox title="Opciones de Recarga">
            <DropdownMenu name='Tarjeta de Crédito/Débito Nacional' >
                <DropdownOption name="Agregar Tarjeta" href="/(home)/add-money/add-national-card" buttonColor="#90E0EF" pressedButtonColor="#00B4D8" icon={<Ionicons name="add-circle-outline" size={24} color="black" style={{position: 'relative', right: '100%'}} />}/>
            </DropdownMenu>
              <DropdownMenu name='Tarjeta Internacional' >
                <DropdownOption name="Agregar Tarjeta" href="/(home)/add-money/add-international-card" buttonColor="#90E0EF" pressedButtonColor="#00B4D8" icon={<Ionicons name="add-circle-outline" size={24} color="black" style={{position: 'relative', right: '100%'}} />}/>
              </DropdownMenu>
              <DropdownMenu name='Pago Móvil' >
                <DropdownOption name="Pago Móvil C2P" description='Clave dinámica' styling={{flexDirection: 'column'}} href="/(home)/add-money/pago-movil-c2p" buttonColor="#00B4D8" pressedButtonColor="#048EA9" />
                <DropdownOption name="Pago Móvil P2C" description='Tradicional' styling={{flexDirection: 'column'}} href="/(home)/add-money/pago-movil-p2c" buttonColor="#00B4D8" pressedButtonColor="#048EA9" />
              </DropdownMenu>
              <DropdownMenu2 name='Zelle' >
                <DropdownZelleInfo/>
              </DropdownMenu2>
          </OptionsBox> 
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
  