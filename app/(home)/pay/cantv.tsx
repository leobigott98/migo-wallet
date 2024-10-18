import {
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  View,
  Pressable,
} from "react-native";
import {useState, useEffect} from 'react';
import { useNavigation } from "expo-router";
import TransactionModal from "@/components/TransactionModal";
import PostpaidForm from "@/components/PostpaidForm";

export default function CantvScreen() {
  const [product, setProduct] = useState('0');
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
  const [message, setMessage] = useState('');
  const [lockModal, setLockModal] = useState(false);
  const [Bs2Dollars, setBs2Dollars] = useState(36.82);
  const navigate = useNavigation();

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
        setMessage('Su recarga fue realizada.')
      }, 3000)
    }

  },[acceptTransaction])

  useEffect(()=>{
    setPhonePrefix('0');
    setPhoneNumber('');
    setSelectedCurrency('');
    setBsAmount('');
  },[product])

  useEffect(()=>{
    setBs2Dollars(37.5295)
  },[])

  const showModal = () => setIsModalVisible(true );
  const hideModal = () => setIsModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{alignItems: 'center'}}>
        <TransactionModal
            BsAmount={BsAmount}
            DollarsAmount={DollarsAmount}
            acceptTransaction={acceptTransaction}
            error={error}
            hideModal={hideModal}
            isModalVisible={isModalVisible}
            loadingTransaction={loadingTransaction}
            lockModal={lockModal}
            message={message}
            navigate={navigate}
            phoneNumber={phoneNumber}
            product={product}
            selectedCurrency={selectedCurrency}
            setAcceptTransaction={setAcceptTransaction}
            setLoadingTransaction={setLoadingTransaction}
            setLockModal={setLockModal}
            success={success}
            operadora="Cantv"
          />
        </View>          
        <PostpaidForm
          bsAmount={BsAmount}
          conversionRate={Bs2Dollars}
          dollarsAmount={DollarsAmount}
          phoneNumber={phoneNumber}
          product={product}
          selectedCurrency={selectedCurrency}
          setBsAmount={setBsAmount}
          setDollarAmount={setDollarsAmount}
          setPhoneNumber={setPhoneNumber}
          setSelectedCurrency={setSelectedCurrency}
        />
      </ScrollView>
      <View style={{position: 'relative', marginTop: 'auto'}}>
        <Pressable onPress={showModal} disabled={selectedCurrency !== '' && BsAmount !== '' && phonePrefix !== '0' && phoneNumber !== '' ? false : true}> 
            {({pressed}) => (
              <View style={[selectedCurrency !== '' && BsAmount !== '' && phonePrefix !== '0' && phoneNumber !== '' ? pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'} : {backgroundColor: 'lightgray'} , styles.rechargeButton]}>
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
});