import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TransactionInfoScreen() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.transactionSummary}>
        <Ionicons name="person-circle-outline" size={54} color="black" />
          <Text>Name on Transaction {id} </Text>
          <Text>Date and Time on Transaction {id} </Text>
          <Text>Amount of {id} </Text>
        </View>
        <View style={styles.transactionSummary}>
          <Text>De</Text>
          <Text>Medio de Pago</Text>
          <Text>Usuario</Text>
        </View>
        <View style={styles.transactionSummary}>
          <Text>Para</Text>
          <Text>Medio de Pago</Text>
          <Text>Usuario</Text>
        </View>
        <View style={styles.transactionSummary}>
          <Text>Mensaje</Text>
          <Text>Message of Transaction {id} </Text>
        </View>
        <View style={[{borderBottomWidth: 1},styles.transactionSummary]}>
          <Text>ID de la transacción </Text>
          <Text>{id}</Text>
        </View> 
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //width: '100%',
    //paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    //borderColor: '#D9D9D9',
    //borderBottomWidth: 1
    //width: 100
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    //width: '100%'
    //marginHorizontal: 10,
    //backgroundColor: 'pink',
  },
  transactionSummary: {
    flex: 1,
    display: 'flex',
    //flexDirection: "row",
    width: Dimensions.get("screen").width,
    justifyContent: "center",
    //alignItems: "center",
    borderTopWidth: 1,
    borderColor: 'lightgray',
    padding: 10
  }
});