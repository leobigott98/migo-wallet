import {
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
  } from "react-native";
  
  export default function MovilnetScreen() {
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text>Pagar Movilnet</Text>
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
  });
  