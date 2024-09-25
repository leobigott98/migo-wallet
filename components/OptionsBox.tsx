import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { ReactNode } from "react";

type Props = {
    title: string, 
    children: ReactNode
}


export default function OptionsBox({title, children}: Props) {
    return(
        <ScrollView contentContainerStyle={styles.rechargeOptionsBox}>
            <Text style={{fontWeight: '500'}}>{title}</Text>
            {children}
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    rechargeOptionsBox:{
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: '#D9D9D9',
      borderWidth: 1,
      height: 'auto',
      padding: 15,
      width: Dimensions.get("screen").width*0.85,
      justifyContent: 'space-between',
    },
    rechargeOption: {
      backgroundColor: '#0077B6',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  