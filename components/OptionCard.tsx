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
    name?: string,
    icon: React.ReactNode,
    href?: Href,
    nameFontSize?: number,
    setValue?: Dispatch<SetStateAction<string>>,
    value?: string,
    buttonPressed?: boolean[],
    setButtonPressed?: Dispatch<SetStateAction<boolean[]>>,
    index?: number
}

export default function OptionCard({name, icon, href, nameFontSize = 12, setValue, value, index}: Props) {
  const [isPressed, setIsPressed] = useState(false);
  /* useEffect(()=>{
    if(setButtonPressed){
      setButtonPressed(buttonPressed)
    }
    

  },[isPressed]) */

    return(
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {href? 
            <Link href={href} asChild >
              <Pressable > 
              {({pressed}) => (
              <View style={pressed? [{backgroundColor: 'lightgray'}, styles.option] : [{backgroundColor: 'white'}, styles.option]}>
              <Text style={{ fontWeight: "bold", fontSize: nameFontSize }}>{name}</Text> 
                  {icon}
              </View>
              )}
              </Pressable>
            </Link>
          : setValue && value ?
            <Pressable 
              onPress={()=> 
                {
                  !isPressed && setValue(value)
                  isPressed && setValue('')
                  setIsPressed(!isPressed)
                }}> 
                {() => 
                  <View style={isPressed? [{backgroundColor: 'lightgray', shadowColor: "#FFFFFF"}, styles.option] : [{backgroundColor: 'white', shadowColor: "#000000"}, styles.option]}>
                    {icon}
                  </View>
                }
            </Pressable>
          : <></>
          }
          </View>
    )
}

const styles = StyleSheet.create({
    option: {
      //backgroundColor: "white",
      //shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 20,
      margin: 5,
      width: 80,
      height: 90,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5
    },
  });