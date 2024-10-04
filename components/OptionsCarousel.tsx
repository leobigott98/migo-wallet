import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

import { Children, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export default function OptionsCarousel(props: {children?: ReactNode[] | ReactNode, buttonPressedArray?: boolean[], setButtonPressedArray?: Dispatch<SetStateAction<boolean[]>>}) {
    useEffect(()=>{
        if(props.buttonPressedArray){
            // @ts-ignore: Unreachable code error
           props.setButtonPressedArray(Children?.map(props.children, ()=>{return false}))
        } 
    },
    [])
    return(
        <ScrollView style={styles.optionsCarousel} horizontal contentContainerStyle={{}}>
            {props.children}
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
  
  