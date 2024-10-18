import MyModal from "./MyModal";
import { Text, StyleSheet, Pressable, View, ActivityIndicator } from 'react-native';
import { Dispatch, SetStateAction, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

type Options = {
    label: string
    value: string
}

type Props = {
    isModalVisible: boolean,
    hideModal: ()=>void,
    lockModal: boolean,
    setLockModal: Dispatch<SetStateAction<boolean>>,
    error: boolean,
    success: boolean,
    navigate: NavigationProp<ReactNavigation.RootParamList>,
    selectedCurrency: string,
    message: string,
    product: string,
    BsAmount: string,
    DollarsAmount: number,
    phonePrefix?: string,
    fijoPhonePrefix?: string,
    products: Options[],
    fijoPhonePrefixes?: Options[],
    phonePrefixes?: Options[],
    phoneNumber: string,
    acceptTransaction: boolean,
    setAcceptTransaction: Dispatch<SetStateAction<boolean>>,
    loadingTransaction: boolean,
    setLoadingTransaction: Dispatch<SetStateAction<boolean>>, 
    operadora: string
}

export default function TransactionModal(props: Props) {

    const loadTransaction =()=>{
        props.setAcceptTransaction(true);
        props.setLoadingTransaction(true);
        props.setLockModal(true);
      }

    return(
        <MyModal 
              visible={props.isModalVisible}
              dismiss={props.hideModal}
              transparent={true}
              animationType="fade"
              lock={props.lockModal}
            >
              {props.loadingTransaction? 
              <>
                <Text style={[styles.confirmationModalTitle]}>Procesando...</Text>
                <Text style={{marginBottom: 20}}>En unos segundos su transacción estará lista</Text>
                <ActivityIndicator size='large' color='#00B4D8'  /> 
              </>
              : props.success ? 
              <>
              <AntDesign name="checkcircle" size={48} color="green" style={{margin: 15}} />
              <Text style={[styles.confirmationModalTitle, {marginVertical: 5}]}>¡Transacción exitosa!</Text>
              <Text style={{marginBottom: 20}}>{props.message}</Text>
              <Pressable onPress={()=>{
                props.hideModal
                props.setLockModal(false);
                props.navigate.goBack()}} > 
                    {({pressed}) => (
                      <View style={[pressed? {backgroundColor: 'lightgray', borderColor: 'lightgray', borderWidth: 1, borderRadius: 20, padding: 10, width: 100, justifyContent: 'center', alignItems: 'center'} : {backgroundColor: 'white', borderColor: 'lightgray', borderWidth: 1, borderRadius: 20, padding: 10, width: 100, justifyContent: 'center', alignItems: 'center'}]}>
                        <Text style={{fontSize: 18, color: 'black'}}>Aceptar</Text>
                      </View>
                  )}
                </Pressable>

              </> 
              : props.error ? 
              <>
              <Feather name="x-circle" size={48} color="red" style={{margin: 15}}/>
              <Text style={[styles.confirmationModalTitle, {marginVertical: 5}]}>{`Ha ocurrido un error :(`}</Text>
              <Text style={{marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>{props.message}</Text>
              <Pressable onPress={()=>{
                props.hideModal
                props.setLockModal(false);
                props.navigate.goBack();
                }} > 
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
                <Text style={styles.confirmationModalInfo}>Recarga {props.products.find((element)=> element.value === props.product)?.label} {props.operadora}</Text>
                <Text style={styles.confirmationModalInfo}>{props.product === '3' ? 'Número: ' + props.fijoPhonePrefixes?.find((element)=> element.value === props.phonePrefix)?.label : props.product === '2'? 'Contrato: ' : 'Número: ' + props.phonePrefixes?.find((element)=> element.value === props.phonePrefix)?.label + '-'}{props.phoneNumber}</Text>
                <Text style={styles.confirmationModalInfo}>Monto Bs: {props.BsAmount}</Text>
                <Text style={styles.confirmationModalInfo}>Monto $: {props.DollarsAmount.toPrecision(3)}</Text>
                <Text style={styles.confirmationModalInfo}>Wallet: {props.selectedCurrency} Wallet</Text>
              </View>
              <View style={{position: 'relative', marginTop: 'auto', flexDirection: 'row', flexGrow: 1, justifyContent: 'space-around', width: 300}}>
                <Pressable onPress={props.hideModal} > 
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
    )
}

const styles = StyleSheet.create({
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
})