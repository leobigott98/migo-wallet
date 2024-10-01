import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions, 
  Pressable
} from "react-native";
import { Link } from "expo-router";

export default function WithdrawScreen() {

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
          <Text style={{fontWeight: '500'}}>Opciones de Retiro</Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Link href="/(home)/withdraw/pago-movil" asChild >
                <Pressable > 
                  {({pressed}) => (
                    <View style={[pressed? {backgroundColor: 'lightgray'} : {backgroundColor: 'white'}, styles.dropdownOption]}>
                      <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>Pago Móvil</Text>
                    </View>
                  )}
                </Pressable>
              </Link>
            </View>
        
      </View>
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
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  dropdownOption: {
    display: 'flex',
    //backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    //backgroundColor: '#90E0EF',
    marginTop: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 40,  
    padding: 5,
    position: 'relative', 
    top: 0   
  }
});
