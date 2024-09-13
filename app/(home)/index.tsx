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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>  
        <Text style={{fontSize: 24, fontWeight: '600', position: 'relative', right: 80, margin: 10 }}>Hola Leonardo,</Text>
        <View style={styles.card}>
          <LinearGradient
            colors={["#5de0e6", "#004aad"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.linearGradient}
          >
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.migo}>USD Wallet</Text>
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
        <ScrollView style={styles.optionsCarousel} horizontal contentContainerStyle={{}}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={styles.option}>
              <Link href="/add-money">
                <MaterialCommunityIcons
                  name="cash-plus"
                  size={45}
                  color="black"
                />
              </Link>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>Recargar</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={styles.option}>
              <Link href="/withdraw">
                <MaterialCommunityIcons
                  name="cash-fast"
                  size={45}
                  color="black"
                />
              </Link>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>Retirar</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={styles.option}>
              <Link href="/pay">
                <Ionicons name="receipt" size={38} color="black" />
              </Link>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>Servicios</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={styles.option}>
              <Link href="/transfer">
                <FontAwesome6
                  name="money-bill-transfer"
                  size={35}
                  color="black"
                />
              </Link>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>Transferir</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={styles.option}>
              <Fontisto name="wallet" size={32} color="black" />
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>
              CrediExpress
            </Text>
          </View>
        </ScrollView>
        <ScrollView style={styles.transactionsBox}>
          <View style={styles.transaction}>
            <View style={{ position: "relative", left: 20 }}>
              <Ionicons name="person-circle-outline" size={54} color="black" />
            </View>
            <View style={{ position: "relative", left: 40, width: 140 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16, margin: 2 }}>
                Leonardo Bigott
              </Text>
              <Text style={{ fontSize: 12, color: "grey", margin: 2 }}>
                20 de agosto
              </Text>
              <Text style={{ fontSize: 12, margin: 2, position: "relative" }}>
                Transferencia Recibida
              </Text>
            </View>
            <View
              style={{ position: "relative", left: 40, marginHorizontal: 20 }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  margin: 2,
                  color: "green",
                }}
              >
                +$50
              </Text>
            </View>
          </View>
          <View style={styles.transaction}>
            <View style={{ position: "relative", left: 20 }}>
              <Ionicons name="person-circle-outline" size={54} color="black" />
            </View>
            <View style={{ position: "relative", left: 40, width: 140 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16, margin: 2 }}>
                Leonardo Bigott
              </Text>
              <Text style={{ fontSize: 12, color: "grey", margin: 2 }}>
                20 de agosto
              </Text>
              <Text style={{ fontSize: 12, margin: 2, position: "relative" }}>
                Transferencia Enviada
              </Text>
            </View>
            <View
              style={{ position: "relative", left: 40, marginHorizontal: 20 }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  margin: 2,
                  color: "red",
                }}
              >
                -$25
              </Text>
            </View>
          </View>
          <View style={styles.transaction}>
            <View style={{ position: "relative", left: 20 }}>
              <Ionicons name="person-circle-outline" size={54} color="black" />
            </View>
            <View style={{ position: "relative", left: 40, width: 140 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16, margin: 2 }}>
                Pago Móvil
              </Text>
              <Text style={{ fontSize: 12, color: "grey", margin: 2 }}>
                20 de agosto
              </Text>
              <Text style={{ fontSize: 12, margin: 2, position: "relative" }}>
                Recarga Recibida
              </Text>
            </View>
            <View
              style={{ position: "relative", left: 40, marginHorizontal: 20 }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  margin: 2,
                  color: "green",
                }}
              >
                +$100
              </Text>
            </View>
          </View>
          <View style={styles.transaction}>
            <View style={{ position: "relative", left: 20 }}>
              <Ionicons name="person-circle-outline" size={54} color="black" />
            </View>
            <View style={{ position: "relative", left: 40, width: 140 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16, margin: 2 }}>
                Digitel
              </Text>
              <Text style={{ fontSize: 12, color: "grey", margin: 2 }}>
                20 de agosto
              </Text>
              <Text style={{ fontSize: 12, margin: 2, position: "relative" }}>
                Pago Realizado
              </Text>
            </View>
            <View
              style={{ position: "relative", left: 40, marginHorizontal: 20 }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  margin: 2,
                  color: "red",
                }}
              >
                -$25
              </Text>
            </View>
          </View>
          <View style={styles.transaction}>
            <Text>Ver Todas</Text>
          </View>
        </ScrollView>
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
  card: {
    //justifyContent: 'center',
    width: 320,
    height: 190,
    //alignItems: 'center', 
    margin: 10,  
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
    borderRadius: 10, 
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
  optionsCarousel: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  option: {
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    borderRadius: 100,
    margin: 5,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionsBox: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 10,
    height: 297,
    marginVertical: 5,
  },
  transaction: {
    display: "flex",
    flexDirection: "row",
    width: 320,
    height: 95,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    alignItems: "center",
    //justifyContent: 'center'
  },
  optionsBar: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    width: Dimensions.get("screen").width,
    backgroundColor: "white",
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 4,
      height: -4,
    },
    shadowOpacity: 0.25,
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
  },
  chipImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'relative',
    right: 10
  }
});

