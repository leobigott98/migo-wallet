import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Dimensions, 
  Button,
  Pressable
} from "react-native";
import { Link } from "expo-router";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import {SetStateAction, useState} from 'react';


export default function WithdrawScreen() {
    const [result, setResult] = useState<WebBrowser.WebBrowserResult>();

    const _handlePressButtonAsync = async () => {
        let result: WebBrowser.WebBrowserResult = await WebBrowser.openBrowserAsync('https://google.com');
        setResult(result);
      };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.balanceBox}>
          <Text style={{fontWeight: '500'}}>Google Test</Text>
          <View style={{display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
          
{/*             <Link href="https://google.com">Open Google with Link</Link> */}
            <Button title="Open Google with Linking" onPress={() => Linking.openURL('https://google.com')} />
            <Button title="Open Google with WebBrowser" onPress={_handlePressButtonAsync} />
            <Text>{result && JSON.stringify(result)}</Text>
          </View>
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
    marginTop: 100,
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
