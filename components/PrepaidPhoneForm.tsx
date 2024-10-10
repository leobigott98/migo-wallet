import { Text, View, StyleSheet, TextInput } from 'react-native';
import OptionsCarousel from './OptionsCarousel';
import { Dropdown } from 'react-native-element-dropdown';
import { useState, Dispatch, SetStateAction } from 'react';
import WalletChooser from './WalletChooser';

type Options = {
    label: string
    value: string
}

type Props = {
    rechargeValues: string[], 
    product: string, 
    phonePrefixes: Options[], 
    fijoPhonePrefixes: Options[], 
    conversionRate: number,
    phonePrefix: string,
    setPhonePrefix: Dispatch<SetStateAction<string>>,
    bsAmount: string,
    setBsAmount: Dispatch<SetStateAction<string>>,
    dollarsAmount: number,
    setDollarAmount: Dispatch<SetStateAction<number>>,
    phoneNumber: string,
    setPhoneNumber: Dispatch<SetStateAction<string>>,
    selectedCurrency: string,
    setSelectedCurrency: Dispatch<SetStateAction<string>>,
    resetCarousel: boolean,  
    phonePrefixPlaceholder: string
}

export default function PrepaidPhoneForm(props: Props) {
    const [isDocumentTypeFocus, setIsDocumentTypeFocus] = useState(false);
    const [isPhonePrefixFocus, setIsPhonePrefixFocus] = useState(false);
    
    return(
        <>
            <View style={{ 
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
                        data={props.product === '3'? props.fijoPhonePrefixes : props.phonePrefixes }
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isPhonePrefixFocus && (props.product === '1' || props.product === '4') ? props.phonePrefixPlaceholder : !isPhonePrefixFocus && props.product === '3' ? '0212' : '...'}
                        //searchPlaceholder="Search..."
                        value={props.phonePrefix}
                        onFocus={() => setIsPhonePrefixFocus(true)}
                        onBlur={() => setIsDocumentTypeFocus(false)}
                        onChange={item => {
                        props.setPhonePrefix(item.value);
                        setIsPhonePrefixFocus(false);
                        }}
                    />
                    <TextInput style={[{flex: 1}, styles.input]} placeholder="Número de Teléfono" placeholderTextColor='gray' inputMode="numeric" onChangeText={props.setPhoneNumber} value={props.phoneNumber} />
                </View>
            </View>
            <Text>Seleccione el monto a recargar</Text>
              <OptionsCarousel 
                automatic 
                values={props.rechargeValues} 
                setValue={props.setBsAmount}
                reset={props.resetCarousel} 
                icons={props.rechargeValues.map((value)=>{return (
                  <Text style={{fontSize: 18, fontWeight: '600'}}>Bs {value}</Text>
                )})
                }>
              </OptionsCarousel>  
              <Text>Seleccione la billetera con la que efectuará el pago</Text> 
              <WalletChooser selectedCurrency={props.selectedCurrency} setSelectedCurrency={props.setSelectedCurrency}/>
              <Text style={{fontSize: 18}}>Pagará</Text>
              <Text style={{fontSize: 24, fontWeight: 500}}>{props.bsAmount === ''? '0.00' : props.selectedCurrency === 'Bs' ? 'Bs'+props.bsAmount : '$'+props.dollarsAmount.toPrecision(3)}</Text>
              <Text style={{fontSize: 18}}>de su wallet </Text>
        </>
    )
}

const styles = StyleSheet.create({
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
      input: {
        height: 40, 
        margin: 12, 
        padding: 10, 
        borderBottomWidth: 1, 
        //borderRadius: 20, 
        borderColor: 'lightgray',
        //backgroundColor: 'white'
      },
})