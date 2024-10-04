import {View, Text, StyleSheet } from 'react-native';

export default function WalletButton() {
    return(
        <View style={styles.cardChoice}>
            <View style={styles.card}>
                <Text>USD</Text>
            </View>
            <View style={styles.card}>
                <Text>Bs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150, 
        borderWidth: 1, 
        borderColor: 'lightgray', 
        borderRadius: 20, 
        padding: 10, 
        margin: 10, 
        height: 100
    },
    cardChoice: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: 350
    }
})