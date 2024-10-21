import { Dropdown } from "react-native-element-dropdown";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import TransactionModal from "@/components/TransactionModal";

export default function Wallet2WalletScreen() {
  const [isFromFocused, setIsFromFocused] = useState(false);
  const [isToFocused, setIsToFocused] = useState(false);
  const [fromWallet, setFromWallet] = useState("");
  const [toWallet, setToWallet] = useState("");
  const [usdAmount, setUsdAmount] = useState('');
  const [bsAmount, setBsAmount] = useState('');
  const navigate = useNavigation();
  const [bs2UsdRate, setBs2UsdRate] = useState(39.04);
  const [isBsFocused, setIsBsFocused] = useState(false);
  const [isUsdFocused, setIsUsdFocused] = useState(false);
  const [availableBs, setAvailableBs] = useState('100');
  const [availableUsd, setAvailableUsd] = useState('55');
  const [fee, setFee] = useState('');
  const [totalFromWallet, setTotalFromWallet] = useState('0.00');
  const [totalReceived, setTotalReceived] = useState('');
  const [remaining, setRemaining] = useState('');
  const [bsFee, setBsFee] = useState('');
  const [usdFee, setUsdFee] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState('Transacción Exitosa')
  const [acceptTransaction, setAcceptTransaction] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [lockModal, setLockModal] = useState(false);

  const showModal = () => setIsModalVisible(true );
  const hideModal = () => setIsModalVisible(false);

  const data = [
    { value: "1", label: "USD Wallet" },
    { value: "2", label: "Bs Wallet" },
  ];

  const bs2usd = ()=>{
    if(Number.parseFloat(bsAmount) >= 0){
            setUsdAmount((Math.round(((Number.parseFloat(bsAmount) / bs2UsdRate) + Number.EPSILON)*100)/100).toString())
            if(fromWallet === '1')
                setUsdFee((Math.round(((Number.parseFloat(usdAmount) * 0.035) + Number.EPSILON)*100)/100).toString())
            else if (fromWallet === '2')
                setBsFee((Math.round(((Number.parseFloat(bsAmount) * 0.035) + Number.EPSILON)*100)/100).toString())
        }else{
        setUsdAmount('');
        setBsFee('');
        setUsdFee('');
    }
  };

  const usd2bs = ()=>{
    if(Number.parseFloat(usdAmount) >= 0){
        setBsAmount((Math.round(((Number.parseFloat(usdAmount) * bs2UsdRate) + Number.EPSILON)*100)/100).toString())
        if(fromWallet === '1'){
            setUsdFee((Math.round(((Number.parseFloat(usdAmount) * 0.035) + Number.EPSILON)*100)/100).toString())
        }
        else if (fromWallet === '2'){
            setBsFee((Math.round(((Number.parseFloat(bsAmount) * 0.035) + Number.EPSILON)*100)/100).toString()) 
        }
    }else{
        setBsAmount('');
        setBsFee('');
        setUsdFee('');
    }
  };

  const walletSwap = ()=>{
    setToWallet(fromWallet);
    setFromWallet(toWallet);
  };

  const totalize = ()=>{
    if((Number.parseFloat(usdAmount) >= 1)){
      if(fromWallet === '1'){
        setTotalFromWallet((Math.round(((Number.parseFloat(usdAmount) + Number.parseFloat(usdFee)) + Number.EPSILON)*100)/100).toString());
        setRemaining((Math.round(((Number.parseFloat(availableUsd) - (Number.parseFloat(usdAmount) + Number.parseFloat(usdFee))) + Number.EPSILON)*100)/100).toString());
      }else if(fromWallet === '2'){
        setTotalFromWallet((Math.round(((Number.parseFloat(bsAmount) + Number.parseFloat(bsFee)) + Number.EPSILON)*100)/100).toString());
        setRemaining((Math.round(((Number.parseFloat(availableBs) - (Number.parseFloat(bsAmount) + Number.parseFloat(bsFee))) + Number.EPSILON)*100)/100).toString());
      }else{
        setRemaining('')
      }
    }
    else{
      setRemaining('')
      setTotalFromWallet('')
    }
  }
  
  useEffect(()=>{
    if(fromWallet === '1')
      bs2usd();
    else if(fromWallet === '2')
      usd2bs();

  },[fromWallet])

  useEffect(()=>{
    if(isBsFocused){
        bs2usd();
    }else if(isUsdFocused){
        usd2bs();
    }
    totalize();
  },[bsAmount, usdAmount, isBsFocused, isUsdFocused, fromWallet, toWallet])

  useEffect(()=>{
    if(acceptTransaction){
      setTimeout(()=>{
        setLoadingTransaction(false);
        setAcceptTransaction(false);
        setSuccess(true);
        setMessage('Su recarga fue realizada.')
      }, 3000)
    }

  },[acceptTransaction])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <TransactionModal
              BsAmount={bsAmount}
              DollarsAmount={Number.parseFloat(usdAmount)}
              acceptTransaction={Number.parseFloat(remaining) >= 0? true : false}
              //phonePrefixes={digitelPhonePrefixes}
              error={error}
              //fijoPhonePrefix={phonePrefix}
              //fijoPhonePrefixes={fijoPhonePrefixes}
              hideModal={hideModal}
              isModalVisible={isModalVisible}
              loadingTransaction={loadingTransaction}
              lockModal={lockModal}
              message={message}
              navigate={navigate}
              //phoneNumber={phoneNumber}
              //phonePrefix={phonePrefix}
              product={'Transferencia entre Wallets'}
              //products={products}
              selectedCurrency={fromWallet}
              setAcceptTransaction={setAcceptTransaction}
              setLoadingTransaction={setLoadingTransaction}
              setLockModal={setLockModal}
              success={success}
              operadora="Digitel"
            />
        <View
          style={{
            borderRadius: 20,
            padding: 10,
            margin: 10,
            borderColor: "lightgray",
            borderWidth: 1,
            width: Dimensions.get("screen").width * 0.85,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 5,
                margin: 5,
              }}
            >
              <Text>De: </Text>
              <Dropdown
                style={[
                  styles.dropdown,
                  { flex: 1 },
                  isFromFocused && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                excludeItems={data.filter((value)=> value.value === toWallet)}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"USD Wallet"}
                //searchPlaceholder="Search..."
                value={fromWallet}
                onFocus={() => setIsFromFocused(true)}
                onBlur={() => setIsFromFocused(false)}
                onChange={(item) => {
                  setFromWallet(item.value);
                  setIsFromFocused(false);
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 5,
                margin: 5,
              }}
            >
              <Text>A: </Text>
              <Dropdown
                style={[
                  styles.dropdown,
                  { flex: 1 },
                  isToFocused && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                excludeItems={data.filter((value)=> value.value === fromWallet)}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"Bs Wallet"}
                //searchPlaceholder="Search..."
                value={toWallet}
                onFocus={() => setIsToFocused(true)}
                onBlur={() => setIsToFocused(false)}
                onChange={(item) => {
                  setToWallet(item.value);
                  setIsToFocused(false);
                }}
              />
            </View>
          </View>
          <View style={{ margin: 5 }}>
            <Pressable onPress={walletSwap}>
              {({pressed})=>(
                <Ionicons name="swap-vertical-outline" size={32} color={pressed? "lightgray" : "black"} />
              )   
              }
            </Pressable> 
          </View>
        </View>
        {
            fromWallet === '1' ? 
            (<Text style={{marginLeft: 'auto', marginRight: 10}}>Disponible: ${availableUsd}</Text>)
            : 
            fromWallet === '2' ? 
            ((<Text style={{marginLeft: 'auto', marginRight: 10}}>Disponible: Bs {availableBs}</Text>))
            : 
            ((<Text style={{marginLeft: 'auto', marginRight: 10}}></Text>))
        }
        {fromWallet && toWallet ? 
        (
        <>
        <Text style={{fontSize: 18}}>Monto</Text>
        <View
          style={{
            borderRadius: 20,
            padding: 10,
            margin: 10,
            borderColor: "lightgray",
            borderWidth: 1,
            width: Dimensions.get("screen").width * 0.85,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>USD</Text>
              <TextInput
                style={[{ flex: 1 }, styles.input]}
                placeholder="0.00"
                placeholderTextColor="gray"
                inputMode="decimal"
                textAlign="center"
                value={usdAmount}
                onChangeText={setUsdAmount}
                onFocus={()=>{
                    setIsUsdFocused(true)
                    setIsBsFocused(false)}}
              />
            </View>
            <View style={{ margin: 5 }}>
              <AntDesign name="swap" size={24} color="black" />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Bs</Text>
              <TextInput
                style={[{ flex: 1 }, styles.input]}
                placeholder="0.00"
                placeholderTextColor="gray"
                inputMode="decimal"
                textAlign="center"
                value={bsAmount}
                onChangeText={setBsAmount}
                onFocus={()=>{
                    setIsBsFocused(true)
                    setIsUsdFocused(false)}}
              />
            </View>
          </View>
          <Text style={{marginHorizontal: 'auto', color: 'gray'}}>{Number.parseFloat(bsAmount) < bs2UsdRate && Number.parseFloat(usdAmount) < 1 ? 'El monto debe ser mayor o igual a $1' : ''}</Text>
        </View>
        {
            fromWallet === '1' && usdAmount !== '' ? 
            (<Text style={{marginLeft: 'auto', marginRight: 10}}>Comisión: ${usdFee}</Text>)
            : 
            fromWallet === '2' && bsAmount !== '' ? 
            ((<Text style={{marginLeft: 'auto', marginRight: 10}}>Comisión: Bs {bsFee}</Text>))
            : 
            ((<Text style={{marginLeft: 'auto', marginRight: 10}}></Text>))
        }
        </>
        )
        : (<></>)     
        }
        {fromWallet && toWallet && Number.parseFloat(usdAmount) >= 1? 
        (
          <>
            <Text style={{fontSize: 18}}>Total</Text>
            <View
              style={{
                borderRadius: 20,
                padding: 10,
                margin: 10,
                borderColor: "lightgray",
                borderWidth: 1,
                width: Dimensions.get("screen").width * 0.85,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
          <View style={{display: "flex", flexDirection: "row", marginBottom: 10}}>
            <Text style={{fontSize: 18}}>Monto a Transferir: </Text>
            <Text style={{fontSize: 18}}>{fromWallet === '1' ? '$'+usdAmount : 'Bs '+bsAmount}</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", marginBottom: 10}}>
            <Text style={{fontSize: 18}}>Comisión: </Text>
            <Text style={{fontSize: 18}}>{fromWallet === '1' ? '$'+usdFee : 'Bs '+bsFee}</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", marginBottom: 10 }}>
            <Text style={{fontSize: 18}}>Total a debitar: </Text>
            <Text style={{fontSize: 18}}>{fromWallet === '1' ? '$'+totalFromWallet : 'Bs '+totalFromWallet}</Text>
          </View>
          <View style={{display: "flex", flexDirection: "row", marginBottom: 10}}>
            <Text >Saldo restante: </Text>
            <Text style={Number.parseFloat(remaining) < 0? {color: 'red'} : {color: 'black'}}>{fromWallet === '1' ? '$'+remaining : 'Bs '+remaining}</Text>
          </View>
          <Text style={{color: 'gray'}}>{Number.parseFloat(remaining) < 0? 'Fondos insuficientes' : ''}</Text>
        </View>  
         </>
        )
        : (<></>)
        
      }
        
      </ScrollView>
      <View style={{ position: "relative", marginTop: "auto" }}>
        <Pressable disabled={Number.parseFloat(remaining) >= 0? false: true} onPress={showModal}>
          {({ pressed }) => (
            <View
              style={[
                Number.parseFloat(remaining) >= 0? pressed ? styles.pressedRechargeButton : styles.rechargeButton : styles.disabledRechargeButton,
              ]}
            >
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                Transferir
              </Text>
            </View>
          )}
        </Pressable>
        <Pressable onPress={() => navigate.goBack()}>
          {({ pressed }) => (
            <View
              style={[
                pressed
                  ? { backgroundColor: "lightgray" }
                  : { backgroundColor: "white" },
                styles.cancelButtom,
              ]}
            >
              <Text style={{ fontSize: 14, color: "black" }}>Cancelar</Text>
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
    backgroundColor: "white",
    borderColor: "#D9D9D9",
    borderBottomWidth: 1,
    //width: 100
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    //marginHorizontal: 10,
    //backgroundColor: 'pink',
  },
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    height: 100,
    width: Dimensions.get("screen").width / 3,
    backgroundColor: "white",
    /* shadowColor: "black",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10, */
  },
  dropdown: {
    //height: 40,
    borderColor: "lightgray",
    borderBottomWidth: 1,
    /* margin: 12, 
        padding: 10, */
    //borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "gray",
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
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 20,
    borderColor: "lightgray",
    fontSize: 18
    //backgroundColor: 'white'
  },
  rechargeButton: {
    display: "flex",
    width: 300,
    backgroundColor: "#00B4D8",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 5,
    margin: 5,
  },
  cancelButtom: {
    display: "flex",
    width: 300,
    borderWidth: 1,
    borderColor: "lightgray",
    color: "lightgray",
    //backgroundColor: '#90E0EF',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 5,
    margin: 5,
  },
  pressedRechargeButton: {
    display: "flex",
    width: 300,
    backgroundColor: "#048EA9",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 5,
    margin: 5,
  },
  disabledRechargeButton: {
    display: 'flex',
    width: 300,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50,  
    padding: 5,
    margin: 5 
  },
});
