import { ScrollView, View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TransactionCard from "./TransactionCard";
import { Link } from "expo-router";

export default function TransactionsList(){
    return(
        <ScrollView style={styles.transactionsBox}>
        <TransactionCard id='123' transactionDate={new Date("2024-08-20T00:00:00.000-04:00")} transactionName="Leonardo Bigott" amount={50} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Transferencia Recibida" /> 
        <TransactionCard id="456" transactionDate={new Date("2024-08-19T00:00:00.000-04:00")} transactionName="Leonardo Bigott" amount={-25} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Transferencia Enviada" />
        <TransactionCard id="789" transactionDate={new Date("2024-08-18T00:00:00.000-04:00")} transactionName="Pago Móvil" amount={100} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Recarga Recibida" />
        <TransactionCard id="012" transactionDate={new Date("2024-08-17T00:00:00.000-04:00")} transactionName="Digitel" amount={-25} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Pago Realizado" />
          <View style={styles.transaction}>
            <Link href="/" asChild >
              <Pressable > 
                {({pressed}) => (
                  <View style={pressed? [{backgroundColor: 'lightgray'}, styles.option] : [{backgroundColor: 'white'}, styles.option]}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Ver Todas</Text> 
                  </View>
              )}
              </Pressable>
            </Link>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    transactionsBox: {
      marginHorizontal: 20,
      backgroundColor: "white",
      borderRadius: 20,
      height: 300,
      marginVertical: 5,
      //marginBottom: 10
    },
    transaction: {
      width: 320,
      height: 95,
      alignItems: "center",
      justifyContent: 'center',
      padding: 10,
      paddingBottom: 30
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
      width: Dimensions.get("screen").width * 0.50,
      height: Dimensions.get("screen").height * 0.05,
      alignItems: "center",
      justifyContent: "center",
    },
  });
