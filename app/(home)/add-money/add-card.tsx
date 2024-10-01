import {
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  Platform,
  Switch,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { useState, useRef } from 'react';
import {
  CreditCardView,
  CreditCardInput,
  LiteCreditCardInput,
  CreditCardFormData,
  CreditCardFormField,
  ValidationState,
  CreditCardFormValues,
} from 'react-native-credit-card-input';

/* const toStatusIcon = (status?: ValidationState) =>
  status === 'valid' ? '✅' : status === 'invalid' ? '❌' : '❓'; */

export default function AddCardScreen() {
  const [cardNumber, setCardNumber] = useState('')
  const [useLiteInput, setUseLiteInput] = useState(false);
  const [focusedField, setFocusedField] = useState<CreditCardFormField>();
  const [formData, setFormData] = useState<CreditCardFormData>();
  const [name, onChangeName] = useState('');
  const [alias, setAlias] = useState('');
  const scrollRef = useRef<ScrollView>(null);

  const handleCardNumber = (text: string)=>{
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      // @ts-ignore: Unreachable code error
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    setCardNumber(formattedText);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.scrollView} ref={scrollRef}>        
        <View style={{borderBottomWidth: 1, borderColor: 'lightgray', padding: 0, margin: 0,  position: 'relative', alignSelf: 'center'}}>
          <Text style={{fontSize: 16, margin: 0}}>{alias}</Text>
        </View>
      
     {/*  <Switch
        style={styles.switch}
        onValueChange={(v) => {
          setUseLiteInput(v);
          setFormData(undefined);
        }}
        value={useLiteInput}
      /> */}

      <CreditCardView
        focusedField={focusedField}
        type={formData?.values.type}
        number={formData?.values.number}
        expiry={formData?.values.expiry}
        cvc={formData?.values.cvc}
        style={styles.cardView}
        name={name}
      />

        <CreditCardInput
          //autoFocus
          style={styles.cardInput}
          onChange={setFormData}
          onFocusField={setFocusedField}
          labels={ 
            {
              number: 'Número de tarjeta',
              expiry: 'Expiración',
              cvc: 'CVC/CVV'
            }
          }
        />

      {/* <View style={styles.infoContainer}>
        <Text style={styles.info}>
          {formData?.valid
            ? '✅ Possibly valid card'
            : '❌ Invalid/Incomplete card'}
        </Text>

        <Text style={styles.info}>
          {toStatusIcon(formData?.status.number)}
          {' Number\t: '}
          {formData?.values.number}
        </Text>

        <Text style={styles.info}>
          {toStatusIcon(formData?.status.expiry)}
          {' Expiry\t: '}
          {formData?.values.expiry}
        </Text>

        <Text style={styles.info}>
          {toStatusIcon(formData?.status.cvc)}
          {' Cvc   \t: '}
          {formData?.values.cvc}
        </Text>

        <Text style={styles.info}>
          {'ℹ️ Type  \t: '}
          {formData?.values.type}
        </Text>
      </View> */}
        
        <View style={{ borderColor: 'lightgray', 
          paddingTop: 0,
          marginTop: 0,
          padding: 5, 
          margin: 5, 
          borderRadius: 20,  
          width: 350,
          //flex: 1
           /* backgroundColor: '#0077B6' */
           }}>
          {/* <View style={{display: 'flex', flexDirection: "row"}}>
            <TextInput style={[{flex: 1}, styles.input]} placeholder="Número de Tarjeta" placeholderTextColor='gray' inputMode="numeric" value={cardNumber} onChangeText={handleCardNumber}/> 
          </View> */}
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Nombre del Tarjetahabiente</Text>
            <TextInput style={styles.input} placeholder="PEDRO PEREZ" placeholderTextColor='gray' inputMode="text" value={name} onChangeText={onChangeName}
            onFocus={()=>{
              // @ts-ignore: Unreachable code error
                setFocusedField('name')
                scrollRef.current?.scrollToEnd()
            }
            } 
              />
          <Text style={styles.inputLabel}>Alias</Text>
          <TextInput style={[styles.input]} placeholder="Tarjeta Migo" placeholderTextColor='gray' inputMode="text" value={alias} onChangeText={setAlias} 
            onFocus={()=>
              scrollRef.current?.scrollToEnd()}/>
          </View>
        </View>
        <View style={{position: 'relative'}}>
          <Pressable > 
              {({pressed}) => (
                <View style={[pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'}, styles.rechargeButton]}>
                  <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Agregar</Text>
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
      </KeyboardAvoidingView>
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
    //justifyContent: "center",
    //alignItems: "center",
    //minHeight: Dimensions.get('screen').height
    //marginHorizontal: 10,
    //backgroundColor: 'pink',
  },
  input: {
    height: 40, 
    marginBottom: 10,
    borderBottomWidth: 1, 
    width: 300,
    //borderRadius: 20, 
    borderColor: 'lightgray',
    //backgroundColor: 'white',
  },
  inputLabel: {
    fontWeight: '600'
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
    //width: 300,
    //backgroundColor: '#90E0EF',
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50,  
    padding: 5,
    margin: 5, 
    flex: 1  
  },
  cancelButtom: {
    display: 'flex',
    flex: 1,
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
  switch: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cardView: {
    alignSelf: 'center',
    marginTop: 10,
  },
  cardInput: {
    marginTop: 5,
    borderColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 300,
    marginLeft: 15,
    
    //alignItems:  'center'
  },
  infoContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#dfdfdf',
    borderRadius: 5,
  },
  info: {
    fontFamily: Platform.select({
      ios: 'Courier',
      android: 'monospace',
      web: 'monospace',
    }),
  },
  inputBox: {
    //alignItems: 'center', 
    justifyContent: 'center',
    marginLeft: 15,
    paddingLeft: 5,
  }
});
