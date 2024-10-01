import {
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  Dimensions
} from "react-native";
import {useEffect, useState} from 'react'
import { Dropdown } from "react-native-element-dropdown";
import {Calendar, DateData} from 'react-native-calendars';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";

export default function PagoMovilP2CScreen() {
  const [BsAmount, setBsAmount] = useState('');
  const [DollarsAmount, setDollarsAmount] = useState(0.00);
  const [selected, setSelected] = useState('');
  const [bank, setBank] = useState('0');
  const [documentType, setDocumentType] = useState('0');
  const [phonePrefix, setPhonePrefix] = useState('0');
  const [isBankFocus, setIsBankFocus] = useState(false);
  const [isDocumentTypeFocus, setIsDocumentTypeFocus] = useState(false);
  const [isPhonePrefixFocus, setIsPhonePrefixFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const height = useSharedValue(30);
  const Bs2Dollars = 36.82;
  const documetTypes = [
    {label: 'V', value: '1'},
    {label: 'E', value: '2'},
    {label: 'J', value: '3'}
  ]
  const banks = [
    {label: 'Mercantil', value: '0105'},
    {label: 'Banesco', value: '0134'},
    {label: 'Venezuela', value: '0102'},
    {label: 'Provincial', value: '0104'},
    {label: 'Bancaribe', value: '0114'},
  ]
  const phonePrefixes = [
    {label: '0414', value: '1'},
    {label: '0424', value: '2'},
    {label: '0412', value: '3'},
    {label: '0416', value: '4'},
    {label: '0426', value: '5'},
  ]

  const calculateDollars = ()=>{
    setDollarsAmount(Number.parseFloat(BsAmount) / Bs2Dollars);
  }

  useEffect((()=>{
    calculateDollars()
  }), [BsAmount])

  const animatedStyles = useAnimatedStyle(()=>{
    if(isOpen){
        return {
        height: withTiming(height.value + 350)
      }
    } else return { 
      height: withTiming(height.value)
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={{fontSize: 18, marginBottom: 0}}>Recargar con Pago Móvil P2C</Text>
        {/* <LinearGradient
          colors={['#0077B6','#5de0e6']}
          start={[0, 0]}
          end={[1, 1]}
          style={{borderWidth: 1, borderColor: 'lightgray', padding: 20, margin: 5, borderRadius: 20, marginTop: 10, width: 300, backgroundColor: '#0077B6', position: 'relative', top: 100}}
        > */}
        <View style={{
          //borderWidth: 1, 
          borderColor: 'lightgray', 
          paddingTop: 0,
          marginTop: 0,
          padding: 5, 
          margin: 5, 
          borderRadius: 20,  
          width: 350,
          //flex: 1
           /* backgroundColor: '#0077B6' */
           }}>
          <View style={{display: 'flex', flexDirection: "row"}}>
            {/* <Text style={styles.inputLabel}>Número de Teléfono</Text> */}
            {/* <TextInput style={styles.input} placeholder="0414" placeholderTextColor='gray'/> */}
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
          </View>
          <View style={{display: 'flex', flexDirection: "row"}}>
            {/* <Text style={styles.inputLabel} >Número de Cédula</Text> */}
            <Dropdown
              style={[styles.dropdown, {width: 100, }, isDocumentTypeFocus && { borderColor: 'blue',}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={documetTypes}
              //search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isDocumentTypeFocus ? 'V' : '...'}
              //searchPlaceholder="Search..."
              value={documentType}
              onFocus={() => setIsDocumentTypeFocus(true)}
              onBlur={() => setIsPhonePrefixFocus(false)}
              onChange={item => {
                setDocumentType(item.value);
                setIsDocumentTypeFocus(false);
              }}
      />
            <TextInput style={[{flex: 1}, styles.input]} placeholder="Número de Cédula" placeholderTextColor='gray' inputMode="numeric"/>
          </View>
          <View>
            {/* <Text style={styles.inputLabel} >Banco</Text> */}
            {/* <TextInput style={styles.input} placeholder="Banco" placeholderTextColor='gray'/> */}
            <Dropdown
              style={[styles.dropdown, isBankFocus && { borderColor: 'blue', flex: 1 }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={banks}
              //search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isPhonePrefixFocus ? 'Banco' : '...'}
              //searchPlaceholder="Search..."
              value={bank}
              onFocus={() => setIsBankFocus(true)}
              onBlur={() => setIsBankFocus(false)}
              onChange={item => {
                setBank(item.value);
                setIsBankFocus(false);
              }}
      />
          </View>
          <View>
            {/* <Text style={styles.inputLabel} >Clave de Pago (OTP)</Text> */}
            <TextInput style={styles.input} placeholder="Número de Referencia" placeholderTextColor='gray' inputMode="numeric"/>
          </View>
          <View>
            <Text style={[styles.inputLabel, {marginVertical: 5}]} >Monto (Bs)</Text>
            <TextInput style={[{fontSize: 24}, styles.input, {marginVertical: 5}]} placeholder="0.00" placeholderTextColor='gray' value={BsAmount} onChangeText={setBsAmount} inputMode="decimal" />
            <Text style={{paddingLeft: 10, marginLeft: 'auto', marginRight: 12}}>Ref {BsAmount === ''? '0.00' : DollarsAmount.toPrecision(3)}</Text>
          </View>
          <View>
          <Text style={[styles.inputLabel, {marginVertical: 5}]} >Fecha del Pago</Text>
          <Animated.View style={[animatedStyles, styles.datePicker]}>
            <Pressable style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', height: 30, position: 'relative', top: 0}} onPress={()=>{setIsOpen((value) => !value) }}>
                <Text style={selected? {color: 'black', fontWeight: 'bold'} : {color: 'gray'}}>{selected? new Date(selected).toLocaleDateString() : 'Elija una fecha'}</Text>
            </Pressable>
             {isOpen? 
              <Calendar
                onDayPress={(day:DateData) => {
                  setSelected(day.dateString);
                }}
               theme={{
                textMonthFontFamily: 'monospace',
                textMonthFontSize: 20,
               }}
                enableSwipeMonths={true}
                maxDate={new Date().toDateString()}
                markedDates={{
                  [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
              /> : <></>}
          </Animated.View>
            {/* <Text style={styles.inputLabel} >Clave de Pago (OTP)</Text> */}
            {/* <TextInput style={styles.input} placeholder="Fecha del Pago" placeholderTextColor='gray' inputMode="numeric"/> */}
            
          </View>
          
          {/* <View >
            <Text style={styles.inputLabel} >Ref</Text>
            <Text style={[styles.input, {fontSize: 18, justifyContent: 'center'}]}>{DollarsAmount.toPrecision(3)}</Text>
          </View> */} 
        </View>
        
        {/* </LinearGradient> */}
        <View style={{position: 'relative', marginTop: 'auto'}}>
          <Pressable > 
              {({pressed}) => (
                <View style={[pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'}, styles.rechargeButton]}>
                  <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Validar</Text>
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
      </ScrollView>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    borderColor: '#D9D9D9',
    //borderBottomWidth: 1
    //width: 100
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    //marginHorizontal: 10,
    //backgroundColor: 'pink',
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
  inputLabel: {
    fontWeight: 'bold',
    padding: 10, 
    margin: 12, 
    //color: 'white'
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
  datePicker: {
    //backgroundColor: '#0077B6', #03045E
    //backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'lightgray',
    borderWidth: 1,
    //marginTop: 10,
    //alignItems: 'center',
    //padding: 10
    
  }
});
