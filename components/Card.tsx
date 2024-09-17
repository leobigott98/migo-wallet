import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

type Props = {
    width: number,
    currency: string,
    colors: [string, string]
}

export default function Card({width, currency, colors}: Props){
    return(
        <View style={[{width: width}, styles.card]}>
          <LinearGradient
            colors={colors}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.linearGradient}
          >
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.migo}>{currency} Wallet</Text>
            <Image source={require('@/assets/images/logo_migo.png')} style={styles.chipImage}/>
            </View> 
          <Text style={styles.cardBearer}>$185,00</Text>
          <View style={styles.amountAvailable}>
            <Text style={styles.amountText}>Disponible</Text>
            <View style={styles.amount}>
              <Text style={styles.amountNumber}>$185,</Text>
              <Text style={styles.amountCents}>00</Text>
            </View>
          </View>
          </LinearGradient>
          
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      //justifyContent: 'center',
      height: 210,
      //alignItems: 'center', 
      //margin: 10,  
      shadowColor: "#000000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
    },
    linearGradient: {
      width: '100%',
      height: '100%',
      padding: 10,
      //backgroundColor: "#00B4D8",
      borderRadius: 20, 
    },
    migo: {
      fontSize: 12,
      color: "#000000",
      margin: 10,
      fontWeight: 'bold'
    },
    cardBearer: {
      fontSize: 18,
      color: "#ffffff",
      marginLeft: 10,
    },
    amountAvailable: {
      position: "relative",
      marginLeft: "auto",
      top: 10,
      right: 10,
    },
    amountText: {
      fontSize: 18,
      color: "#ffffff",
      marginLeft: 10,
    },
    amountNumber: {
      fontSize: 30,
      color: "#ffffff",
      marginLeft: 10,
      alignSelf: "flex-start",
      margin: 0,
      padding: 0,
    },
    amountCents: {
      fontSize: 18,
      color: "#ffffff",
      marginLeft: 0,
      alignSelf: "flex-start",
      marginTop: "auto",
    },
    amount: {
      display: "flex",
      width: 100,
      flexDirection: "row",
    },
    chipImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        position: 'relative',
        right: 10
      }
  });
