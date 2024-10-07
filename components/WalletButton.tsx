import {View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function WalletButton(props: {text: string, pressed: boolean, amountAvailable: string}) {
    return(
            <View style={props.pressed? [styles.pressedCard, styles.card] : [styles.notPressedCard, styles.card] }>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>{props.text}</Text>
                    {props.pressed? 
                    <FontAwesome name="check-square-o" size={24} color="green" />: 
                    <Feather name="square" size={24} color="gray" />
                    }
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={props.pressed? {fontSize: 24, fontWeight: '500'} : {fontSize: 18, fontWeight: '500'}}>{props.amountAvailable}</Text>  
                </View>
                              
            </View>
    )
}

const styles = StyleSheet.create({
    pressedCard: {
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
    },
    notPressedCard: {
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    card: { 
        //borderWidth: 1, 
        borderColor: 'lightgray', 
        borderRadius: 20, 
        padding: 10, 
        margin: 10, 
        height: 100,
        width: 150,
    }
})