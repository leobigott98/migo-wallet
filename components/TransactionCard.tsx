import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TransactionCard() {
    return(
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