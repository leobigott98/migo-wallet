import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

import { Children, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import OptionCard2 from "./OptionCard2";

export default function OptionsCarousel(props: {children?: ReactNode[] | ReactNode, icons?: ReactNode[],  automatic?: boolean, values?: string[], setValue?: Dispatch<SetStateAction<string>>}) {
    const [pressedArray, setPressedArray] = useState([false]);

    useEffect(()=>{
        if(props.automatic && props.icons && props.values && props.setValue && props.icons.length === props.values.length){
            setPressedArray(props.values.map(()=>{return false}))
        }
    },[])

    return(
        <ScrollView style={styles.optionsCarousel} horizontal contentContainerStyle={{}}>
            {props.automatic && props.icons && props.values && props.setValue && props.icons.length === props.values.length? 
            <>
                {props.icons.map((node, index, array)=>{
                    return(
                        <OptionCard2 icon={node} value={props.values? props.values[index] : ''} setValue={props.setValue} key={index} optionIndex={index} style={index === array.length -1? {marginRight: 20} : {}} pressedArray={pressedArray} setPressedArray={setPressedArray}/>
                    )
                })}
            </> : 
            <>
                {props.children}
            </>}            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    optionsCarousel: {
      paddingHorizontal: 10,
      paddingBottom: 15,
      paddingTop: 10,
    },
  });
  
  