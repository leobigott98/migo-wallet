import { View, Pressable, Text, StyleSheet } from "react-native";
import { Link, Href } from "expo-router";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

type Style = {
    padding: string
}

/* interface Icon extends Element{
  
  name="cash-plus" size={45} color="black"
} */

type Props = {
    icon: React.ReactNode,
    setValue?: Dispatch<SetStateAction<string>>,
    value?: string,
    style?: object,
    pressedArray: boolean[],
    setPressedArray: Dispatch<SetStateAction<boolean[]>>
    optionIndex: number
}

export default function OptionCard2({icon, setValue, value, style, pressedArray, setPressedArray, optionIndex}: Props) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(()=>{
    setIsPressed(pressedArray[optionIndex])
  },[pressedArray[optionIndex]])

  const optionPressed =()=>{
    if(setValue && value){
      if(!isPressed) {
        setValue(value)
      }
      else {
        setValue('')
      }
      //setIsPressed(!isPressed)
      setPressedArray(pressedArray.map((value, index)=> {
        if(index === optionIndex) {
          return !isPressed
        }else {
          return false
        }}))
    }
    

  }

    return(
        <View style={[{ alignItems: "center", justifyContent: "center" }, style]}>
            <Pressable 
              onPress={optionPressed}> 
                {() => 
                  <View style={isPressed? styles.pressedOption : styles.notPressedOption}>
                    {icon}
                  </View>
                }
            </Pressable>
          </View>
    )
}

const styles = StyleSheet.create({
    pressedOption: {
        backgroundColor: '#FFFFFE',
        shadowOffset: {
            width: 0,
            height: 0,
          },
        shadowOpacity: 0.75,
        borderRadius: 20,
        margin: 5,
        width: 80,
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        elevation: 0,
    },
    notPressedOption: {
        backgroundColor: 'white',
        shadowOffset: {
            width: 4,
            height: 4,
          },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        borderRadius: 20,
        margin: 5,
        width: 80,
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
  });