import {
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  View,
  Pressable,
  TextInput
} from "react-native";
import {useState} from 'react';
import { Dropdown } from "react-native-element-dropdown";
import OptionsCarousel from "@/components/OptionsCarousel";

export default function CantvScreen() {
  const [isProductFocused, setIsProductFocused] = useState(false);
  const [product, setProduct] = useState('0');
  const [isDocumentTypeFocus, setIsDocumentTypeFocus] = useState(false);
  const [isPhonePrefixFocus, setIsPhonePrefixFocus] = useState(false);
  const [nroContrato, setNroContrato] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('0');
  const products=[
    {value: '1', label: 'Móvil Prepago'},
    {value: '2', label: 'Móvil Pospago'},
  ]
  const phonePrefixes = [
    {label: '0414', value: '1'},
    {label: '0424', value: '2'},
    {label: '0412', value: '3'},
    {label: '0416', value: '4'},
    {label: '0426', value: '5'},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <Text>Producto</Text>
      <Dropdown
            style={[styles.dropdown, {width: 250,}, isProductFocused && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={products}
            //search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isProductFocused ? 'Prepago' : '...'}
            //searchPlaceholder="Search..."
            value={product}
            onFocus={() => setIsProductFocused(true)}
            onBlur={() => setIsProductFocused(false)}
            onChange={item => {
              setProduct(item.value);
              setIsProductFocused(false);
            }}
    />
      {
        product === '1' ?
        (<View>
          <Text>Opciones de Prepago</Text>
          <Dropdown
            style={[styles.dropdown, {width: 100,}, isPhonePrefixFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={phonePrefixes}
            //search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isPhonePrefixFocus ? '0414' : '...'}
            //searchPlaceholder="Search..."
            value={phonePrefix}
            onFocus={() => setIsPhonePrefixFocus(true)}
            onBlur={() => setIsDocumentTypeFocus(false)}
            onChange={item => {
              setPhonePrefix(item.value);
              setIsPhonePrefixFocus(false);
            }}
    />
          <TextInput style={[{flex: 1}, styles.input]} placeholder="Número de Teléfono" placeholderTextColor='gray' inputMode="numeric"/> 
          <OptionsCarousel/>
        </View>
        ) : product === '2' ?
        (<View>
          <Text>Opciones de Pospago</Text>
          <TextInput style={[{flex: 1}, styles.input]} placeholder="Número de Contrato" placeholderTextColor='gray' inputMode="numeric"/>
          <Pressable > 
            {({pressed}) => (
              <View style={[pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'}, styles.rechargeButton]}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Consultar</Text>
              </View>
          )}
        </Pressable>
        </View>) : <></>
      }

      </ScrollView>
      <View style={{position: 'relative', marginTop: 'auto'}}>
        <Pressable > 
            {({pressed}) => (
              <View style={[pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'}, styles.rechargeButton]}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Pagar</Text>
              </View>
          )}
        </Pressable>
        <Pressable > 
            {({pressed}) => (
              <View style={[pressed? {backgroundColor: 'lightgray'} : {backgroundColor: 'white'}, styles.cancelButtom]}>
                <Text style={{fontSize: 14, color: 'black'}}>Cancelar</Text>
              </View>
          )}
        </Pressable>
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
  dropdown: {
    height: 40,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    margin: 12, 
    padding: 10,
    //borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  rechargeButton: {
    display: 'flex',
    width: 300,
    //backgroundColor: '#90E0EF',
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50,  
    padding: 5,
    margin: 5   
  },
  cancelButtom: {
    display: 'flex',
    width: 300,
    borderWidth: 1,
    borderColor: 'lightgray',
    color: 'lightgray',
    //backgroundColor: '#90E0EF',
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50,  
    padding: 5,
    margin: 5    
  },
  input: {
    height: 40, 
    margin: 12, 
    padding: 10, 
    borderBottomWidth: 1, 
    //borderRadius: 20, 
    borderColor: 'lightgray',
    //backgroundColor: 'white'
  },
});