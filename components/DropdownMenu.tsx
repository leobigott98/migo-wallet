import { ReactElement, useState } from "react";
import { Href } from "expo-router";
import {
    Text,
    StyleSheet,
    Pressable,
    Animated
  } from "react-native";
import DropdownOption from "./DropdownOption";

type Props = {
  child: JSX.Element
}

  export default function DropdownMenu ( props: { name: string, children: ReactElement} ){
    const [timesPressed, setTimesPressed] = useState(0)

    return(
        <Pressable style={[timesPressed%2 == 0? {height: 60} : {height: 100}, styles.rechargeOption]} onPress={()=>{setTimesPressed(timesPressed + 1) }}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>{props.name}</Text>
            {timesPressed%2 == 0? <></> : <>
              {props.children}
            </>}
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
  