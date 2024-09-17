import { ScrollView, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TransactionCard from "./TransactionCard";

export default function TransactionsList(){
    return(
        <ScrollView style={styles.transactionsBox}>
        <TransactionCard id='123' transactionDate={new Date("2024-08-20T00:00:00.000-04:00")} transactionName="Leonardo Bigott" amount={50} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Transferencia Recibida" /> 
        <TransactionCard id="456" transactionDate={new Date("2024-08-19T00:00:00.000-04:00")} transactionName="Leonardo Bigott" amount={-25} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Transferencia Enviada" />
        <TransactionCard id="789" transactionDate={new Date("2024-08-18T00:00:00.000-04:00")} transactionName="Pago Móvil" amount={100} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Recarga Recibida" />
        <TransactionCard id="012" transactionDate={new Date("2024-08-17T00:00:00.000-04:00")} transactionName="Digitel" amount={-25} icon={<Ionicons name="person-circle-outline" size={54} color="black" />} transactionType="Pago Realizado" />
          <View style={styles.transaction}>
            <Text>Ver Todas</Text>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    transactionsBox: {
      marginHorizontal: 20,
      backgroundColor: "white",
      borderRadius: 20,
      height: 297,
      marginVertical: 5,
    },
    transaction: {
      display: "flex",
      flexDirection: "row",
      width: 320,
      height: 95,
      //borderBottomColor: "lightgray",
      //borderBottomWidth: 1,
      alignItems: "center",
      //justifyContent: 'center'
    },
  });
