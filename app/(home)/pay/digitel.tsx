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
import {useState, useEffect} from 'react';
import { Dropdown } from "react-native-element-dropdown";
import OptionsCarousel from "@/components/OptionsCarousel";
import OptionCard from "@/components/OptionCard";
  
  export default function DigitelScreen() {
    const [isProductFocused, setIsProductFocused] = useState(false);
    const [product, setProduct] = useState('0');
    const [isDocumentTypeFocus, setIsDocumentTypeFocus] = useState(false);
    const [isPhonePrefixFocus, setIsPhonePrefixFocus] = useState(false);
    const [nroContrato, setNroContrato] = useState('')
    const [phonePrefix, setPhonePrefix] = useState('0');
    const [BsAmount, setBsAmount] = useState('');
    const [DollarsAmount, setDollarsAmount] = useState(0.00);
    const Bs2Dollars = 36.82;
    const products=[
      {value: '1', label: 'Móvil Prepago'},
      {value: '2', label: 'Móvil Pospago'},
      {value: '3', label: 'Fija'},
      {value: '4', label: 'Internet'}
    ]
    const digitelPhonePrefixes = [
      {label: '0412', value: '1'},
    ]
    const fijoPhonePrefixes = [
      {label: '0212', value: '1'},
      {label: '0238', value: '2'},
      {label: '0245', value: '3'},
      {label: '0267', value: '4'},
      {label: '0259', value: '5'},
    ]

    const calculateDollars = ()=>{
      setDollarsAmount(Number.parseFloat(BsAmount) / Bs2Dollars);
    }
  
    useEffect((()=>{
      calculateDollars()
    }), [BsAmount])
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Indique los datos del servicio a pagar</Text>
            <Dropdown
              style={[styles.dropdown, {width: 200,}, isProductFocused && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={products}
              //search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isProductFocused ? 'Producto' : '...'}
              //searchPlaceholder="Search..."
              value={product}
              onFocus={() => setIsProductFocused(true)}
              onBlur={() => setIsProductFocused(false)}
              onChange={item => {
                setProduct(item.value);
                setIsProductFocused(false);
              }}
          />
          </View>          
        {
          product === '1' || product === '3' || product === '4'?
          (<>
          <View style={{
            //borderColor: 'lightgray', 
            paddingTop: 0,
            marginTop: 0,
            //padding: 5, 
            margin: 5, 
            //borderRadius: 20,  
            width: 350,}}>
            <View style={{display: 'flex', flexDirection: "row", margin: 0}}> 
              <Dropdown
                style={[styles.dropdown, {width: 100,}, isPhonePrefixFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={product === '1' || product === '4'? digitelPhonePrefixes : fijoPhonePrefixes}
                //search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isPhonePrefixFocus && (product === '1' || product === '4') ? '0412' : !isPhonePrefixFocus && product === '3' ? '0212' : '...'}
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
            </View>
            </View>
              <OptionsCarousel>
                <OptionCard icon={<Text style={{fontSize: 18, fontWeight: '600'}}>Bs 50</Text>} value='50' setValue={setBsAmount} />
                <OptionCard icon={<Text style={{fontSize: 18, fontWeight: '600'}}>Bs 100</Text>} value='100' setValue={setBsAmount} />
                <OptionCard icon={<Text style={{fontSize: 18, fontWeight: '600'}}>Bs 150</Text>} value='150' setValue={setBsAmount} />
                <OptionCard icon={<Text style={{fontSize: 18, fontWeight: '600'}}>Bs 200</Text>} value='200' setValue={setBsAmount} />
                <OptionCard icon={<Text style={{fontSize: 18, fontWeight: '600'}}>Bs 300</Text>} value='300' setValue={setBsAmount} />
              </OptionsCarousel>   
              <Text style={{fontSize: 18}}>Pagará</Text>
              <Text style={{fontSize: 24, fontWeight: 500}}>${BsAmount === ''? '0.00' : DollarsAmount.toPrecision(3)}</Text>
              <Text style={{fontSize: 18}}>de su wallet </Text>
            </>
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
  