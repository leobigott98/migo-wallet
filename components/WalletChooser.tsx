import { Dispatch, SetStateAction, useState } from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import WalletButton from "./WalletButton";


export default function WalletChooser(props: {selectedCurrency: string, setSelectedCurrency: Dispatch<SetStateAction<string>>}) {
    const [bsSelected, setBsSelected] = useState(false);
    const [usdSelected, setUsdSelected] = useState(false);

    const selectBsWallet = ()=>{
        setBsSelected(!bsSelected);
        setUsdSelected(false);
        props.setSelectedCurrency(!bsSelected? 'Bs' : '')
    }

    const selectUsdWallet = ()=>{
        setUsdSelected(!usdSelected);
        setBsSelected(false);
        props.setSelectedCurrency(!usdSelected? 'USD' : '')
    }

    return(
        <View style={styles.cardChoice}>
            <Pressable onPress={selectUsdWallet}>
                <WalletButton text='USD Wallet' pressed={usdSelected} amountAvailable='$185,00'/> 
            </Pressable>
            <Pressable onPress={selectBsWallet}>
                <WalletButton text='Bs Wallet' pressed={bsSelected} amountAvailable='Bs1000,00' /> 
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    cardChoice: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: 350
    }
})