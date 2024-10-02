import { Link } from "expo-router";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Dimensions, 
    Image
  } from "react-native";
import OptionsBox from "@/components/OptionsBox";
import OptionButton from "@/components/OptionButton";
  
  export default function PayScreen() {
  
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
          <OptionsBox title='Opciones de Pago:' >
            <OptionButton buttonColor="white" href="/(home)/pay/digitel" pressedButtonColor="lightgray">
              <Image source={require('@/assets/images/logos/digitel-logo.png')} style={styles.optionImage}/>
            </OptionButton>
            <OptionButton href="/(home)/pay/movistar" buttonColor="white" pressedButtonColor="lightgray">
              <Image source={require('@/assets/images/logos/movistar-logo.png')} style={styles.optionImage}/>
            </OptionButton>
            <OptionButton href="/(home)/pay/movilnet" buttonColor="white" pressedButtonColor="lightgray">
              <Image source={require('@/assets/images/logos/movilnet-logo.png')} style={styles.optionImage}/>
            </OptionButton>
            <OptionButton href="/(home)/pay/simpletv" buttonColor="white" pressedButtonColor="lightgray">
              <Image source={require('@/assets/images/logos/simpletv-logo.png')} style={styles.optionImage}/>
            </OptionButton>
            <OptionButton href="/(home)/pay/inter" buttonColor="white" pressedButtonColor="lightgray">
              <Image source={require('@/assets/images/logos/inter-logo.png')} style={styles.optionImage}/>
            </OptionButton>
            <OptionButton href="/(home)/pay/cantv" buttonColor="white" pressedButtonColor="lightgray">
              <Image source={require('@/assets/images/logos/cantv-logo.png')} style={styles.optionImage}/>
            </OptionButton>
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
      display: 'flex',
      marginBottom: 10
    },
    rechargeOption: {
      backgroundColor: '#0077B6',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    optionImage:{
      width: 60,
      height: 60,
      resizeMode: 'contain'
    }, 
    imageContainer:{
      backgroundColor: 'white',
      borderColor: '#D9D9D9',
      borderWidth: 1,
      margin: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      shadowColor: "#000000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.25,
    }
  });