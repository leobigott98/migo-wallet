import {
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    View,
    Pressable,
    TextInput,
    Dimensions,
    ActivityIndicator
  } from "react-native";
import {useState, useEffect} from 'react';
import { Dropdown } from "react-native-element-dropdown";
import OptionsCarousel from "@/components/OptionsCarousel";
import OptionCard from "@/components/OptionCard";
import Carousel from 'react-native-reanimated-carousel';
import Card from "@/components/Card";
import WalletButton from "@/components/WalletButton";
import WalletChooser from "@/components/WalletChooser";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MyModal from "@/components/MyModal";
import { useNavigation } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
  
  export default function DigitelScreen() {
    const [isProductFocused, setIsProductFocused] = useState(false);
    const [product, setProduct] = useState('0');
    const [isDocumentTypeFocus, setIsDocumentTypeFocus] = useState(false);
    const [isPhonePrefixFocus, setIsPhonePrefixFocus] = useState(false);
    const [nroContrato, setNroContrato] = useState('')
    const [phonePrefix, setPhonePrefix] = useState('0');
    const [BsAmount, setBsAmount] = useState('');
    const [DollarsAmount, setDollarsAmount] = useState(0.00);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [acceptTransaction, setAcceptTransaction] = useState(false);
    const [loadingTransaction, setLoadingTransaction] = useState(false);
    const [success, setSucess] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('')
    const [lockModal, setLockModal] = useState(false)
    const [rechargeValues, setRechargeValues] = useState([''])
    const [Bs2Dollars, setBs2Dollars] = useState(36.82);
    const navigate = useNavigation();
    const width = Dimensions.get('window').width;
    const colors: [[string, string], [string, string]] = [
      ["#5de0e6", "#004aad"],
      ["#E6A45D", "#AD2300"]
  ]
  const currencies: [string, string] = [
      'USD', 
      'BS',
  ]
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

    useEffect(()=>{
      if(acceptTransaction){
        setTimeout(()=>{
          setLoadingTransaction(false);
          setAcceptTransaction(false);
          setSucess(true);
          setMessage('Su recarga fue procesada con éxito')
        }, 3000)
      }

    },[acceptTransaction])

    useEffect(()=>{
      if(product === '3' || product === '2')
        setPhonePrefix('0');
    },[product])

    useEffect(()=>{
      setRechargeValues(['50', '100', '150', '200', '300', '350', '500']);
      setBs2Dollars(37.5295)
    },[])

    const showModal = () => setIsModalVisible(true );
    const hideModal = () => setIsModalVisible(false);
    const loadTransaction =()=>{
      setAcceptTransaction(true);
      setLoadingTransaction(true);
      setLockModal(true);
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={{alignItems: 'center'}}>
            <MyModal 
              visible={isModalVisible}
              dismiss={hideModal}
              transparent={true}
              animationType="fade"
              lock={lockModal}

            >
              {loadingTransaction? 
              <>
                <Text style={[styles.confirmationModalTitle]}>Procesando...</Text>
                <Text style={{marginBottom: 20}}>En unos segundos su transacción estará lista</Text>
                <ActivityIndicator size='large' color='#00B4D8'  /> 
              </>
              : success ? 
              <>
              <AntDesign name="checkcircle" size={48} color="green" style={{margin: 15}} />
              <Text style={[styles.confirmationModalTitle, {marginVertical: 5}]}>¡Transacción exitosa!</Text>
              <Text style={{marginBottom: 20}}>{message}</Text>
              <Pressable onPress={()=>{
                hideModal
                setLockModal(false);
                navigate.goBack()}} > 
                    {({pressed}) => (
                      <View style={[pressed? {backgroundColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1, borderRadius: 20, padding: 10, width: 100, justifyContent: 'center', alignItems: 'center'} : {backgroundColor: 'white', borderColor: 'lightgray', borderWidth: 1, borderRadius: 20, padding: 10, width: 100, justifyContent: 'center', alignItems: 'center'}]}>
                        <Text style={{fontSize: 18, color: 'black'}}>Aceptar</Text>
                      </View>
                  )}
                </Pressable>

              </> 
              :
              <>
              <Text style={[styles.confirmationModalTitle]}>¿Seguro?</Text>
              <Text style={{marginBottom: 10}}>Verifica los datos antes de confirmar:</Text>
              <View style={{borderRadius: 20, backgroundColor: 'lightgray', padding: 10}}>
                <Text style={styles.confirmationModalInfo}>Recarga {products.find((element)=> element.value === product)?.label} Digitel</Text>
                <Text style={styles.confirmationModalInfo}>Número: {product === '3' ? fijoPhonePrefixes.find((element)=> element.value === phonePrefix)?.label : digitelPhonePrefixes.find((element)=> element.value === phonePrefix)?.label}-{phoneNumber}</Text>
                <Text style={styles.confirmationModalInfo}>Monto Bs: {BsAmount}</Text>
                <Text style={styles.confirmationModalInfo}>Monto $: {DollarsAmount.toPrecision(3)}</Text>
                <Text style={styles.confirmationModalInfo}>Wallet: {selectedCurrency} Wallet</Text>
              </View>
              <View style={{position: 'relative', marginTop: 'auto', flexDirection: 'row', flexGrow: 1, justifyContent: 'space-around', width: 300}}>
                <Pressable onPress={hideModal} > 
                    {({pressed}) => (
                      <View style={[pressed? {backgroundColor: 'lightgray'} : {backgroundColor: 'white'}, styles.confirmationButton, {borderColor: 'lightgray', borderWidth: 1}]}>
                        <Text style={{fontSize: 18, color: 'black'}}>Cancelar</Text>
                      </View>
                  )}
                </Pressable>
                <Pressable onPress={loadTransaction} > 
                    {({pressed}) => (
                      <View style={[pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'}, styles.confirmationButton]}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Pagar</Text>
                      </View>
                  )}
                </Pressable>
            </View>
            </>
            }
            </MyModal>
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
            <TextInput style={[{flex: 1}, styles.input]} placeholder="Número de Teléfono" placeholderTextColor='gray' inputMode="numeric" onChangeText={setPhoneNumber}/>
            </View>
            </View>
            <Text>Seleccione el monto a recargar</Text>
              <OptionsCarousel 
                automatic 
                values={rechargeValues} 
                setValue={setBsAmount} 
                icons={rechargeValues.map((value)=>{return (
                  <Text style={{fontSize: 18, fontWeight: '600'}}>Bs {value}</Text>
                )})
                }>
              </OptionsCarousel>  
              <Text>Seleccione la billetera con la que efectuará el pago</Text> 
              <WalletChooser selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
              <Text style={{fontSize: 18}}>Pagará</Text>
              <Text style={{fontSize: 24, fontWeight: 500}}>{BsAmount === ''? '0.00' : selectedCurrency === 'Bs' ? 'Bs'+BsAmount : '$'+DollarsAmount.toPrecision(3)}</Text>
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
          <Pressable onPress={showModal} disabled={selectedCurrency !== '' && BsAmount !== '' && phonePrefix !== '0' && phoneNumber !== '' && product !== '' ? false : true}> 
              {({pressed}) => (
                <View style={[selectedCurrency !== '' && BsAmount !== '' && phonePrefix !== '0' && phoneNumber !== '' && product !== '' ? pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'} : {backgroundColor: 'lightgray'} , styles.rechargeButton]}>
                  <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Pagar</Text>
                </View>
            )}
          </Pressable>
          <Pressable onPress={()=> navigate.goBack() }> 
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
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    confirmationModalTitle: {
      fontSize: 24, 
      fontWeight: '600', 
      marginBottom: 10

    },
    confirmationModalInfo:{
      fontSize: 20, 
      //fontWeight: '500', 
      marginBottom: 5
    },
    confirmationButton: {
      flexGrow: 1,
      width: 125,
      marginTop: 30,
      //backgroundColor: '#90E0EF',
      borderRadius: 20,
      alignItems: 'center', 
      justifyContent: 'center', 
      //height: 50,  
      //padding: 5,
      padding: 5   
    },
  });
  