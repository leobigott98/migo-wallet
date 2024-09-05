import { useState } from "react";
import {
    Text,
    StyleSheet,
    Pressable,
    Animated
  } from "react-native";
import DropdownOption from "./DropdownOption";

  export default function DropdownMenu ( props: { name: string, type: string } ){
    const [timesPressed, setTimesPressed] = useState(0)

    return(
        <Pressable style={[timesPressed%2 == 0? {height: 60} : {height: 100}, styles.rechargeOption]} onPress={()=>{setTimesPressed(timesPressed + 1) }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>{props.name}</Text>
            {timesPressed%2 == 0? <></> : <DropdownOption type={props.type} redirect="add-national-card"/>}
          </Pressable>
    )
  }

  const styles = StyleSheet.create({
    rechargeOption: {
      backgroundColor: '#0077B6',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      padding: 20
      //justifyContent: 'center'
    }
  });
  