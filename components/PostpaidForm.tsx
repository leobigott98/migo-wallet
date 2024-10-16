import { Text, View, StyleSheet, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { useState, Dispatch, SetStateAction } from 'react';
import WalletChooser from './WalletChooser';

type Options = {
    label: string
    value: string
}

type Props = { 
    conversionRate: number,
    bsAmount: string,
    setBsAmount: Dispatch<SetStateAction<string>>,
    dollarsAmount: number,
    setDollarAmount: Dispatch<SetStateAction<number>>,
    phoneNumber: string,
    setPhoneNumber: Dispatch<SetStateAction<string>>,
    selectedCurrency: string,
    setSelectedCurrency: Dispatch<SetStateAction<string>>,
    product: string,
}

export default function PostpaidForm(props: Props) {
    const [isLoading, setIsLoading] = useState(false);

    const checkDebt = ()=>{
      setIsLoading(true);
      setTimeout(()=>{
        setIsLoading(false);
        props.setBsAmount('100');
      }, 1000)
    }
    
    return(
        <>
            <View style={{ 
                paddingTop: 0,
                marginTop: 0,
                //padding: 5, 
                margin: 5, 
                //borderRadius: 20,  
                width: 350,}}>
                <View style={{margin: 0}}> 
                    <TextInput style={[{flex: 1}, styles.input]} placeholder="Número de Contrato" placeholderTextColor='gray' inputMode="numeric" value={props.phoneNumber} onChangeText={props.setPhoneNumber}/>
                    <Pressable onPress={checkDebt} > 
                    {({pressed}) => (
                        <View style={[pressed? {backgroundColor: '#048EA9'} : {backgroundColor: '#00B4D8'}, styles.rechargeButton, {marginHorizontal: 'auto'}]}>
                          {
                            isLoading? 
                              (
                                <ActivityIndicator color='white' size='small' />
                              ) : 
                              (
                              <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Consultar</Text>
                            ) 
                          }
                        </View>
                    )}
                    </Pressable>
                </View>
            </View>
            <Text>Monto de su factura</Text>
            <Text style={{fontSize: 32, fontWeight: 500, marginVertical: 10}}>Bs {props.bsAmount === ''? '0.00' : props.bsAmount }</Text>  
            <Text>Seleccione la billetera con la que efectuará el pago</Text> 
            <WalletChooser selectedCurrency={props.selectedCurrency} setSelectedCurrency={props.setSelectedCurrency}/>
            <Text style={{fontSize: 18}}>Pagará</Text>
            <Text style={{fontSize: 24, fontWeight: 500}}>{props.bsAmount === ''? '0.00' : props.selectedCurrency === 'Bs' ? 'Bs'+props.bsAmount : '$'+props.dollarsAmount.toPrecision(3)}</Text>
            <Text style={{fontSize: 18}}>de su wallet </Text>
        </>
    )
}

const styles = StyleSheet.create({
      input: {
        height: 40, 
        margin: 12, 
        padding: 10, 
        borderBottomWidth: 1, 
        //borderRadius: 20, 
        borderColor: 'lightgray',
        //backgroundColor: 'white'
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
})