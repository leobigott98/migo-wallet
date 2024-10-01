import { Children, ReactNode, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";
import { Href } from "expo-router";
import {
    Text,
    StyleSheet,
    Pressable,
  } from "react-native";

  export default function DropdownMenu ( props: { name: string, children?: ReactNode[] | ReactNode, height?: number} ){
    const [isOpen, setIsOpen] = useState(false)
    const height = useSharedValue(60);
    const opacity = useSharedValue(0);
    const nChildren = Children.count(props.children)

    const animatedStyles = useAnimatedStyle(()=>{
      if(isOpen){
          return {
          height: withTiming(height.value + height.value * nChildren)
        }
      } else return { 
        height: withTiming(height.value)
      }
    })

    const animatedDisplay = useAnimatedStyle(()=>{
      if(isOpen){
        return{
          opacity: withTiming(opacity.value + 1)
        }
      }else{
        return{
          opacity: withTiming(opacity.value - 1)
        }
      }
    })

    return(
      <Animated.View style={[animatedStyles, styles.rechargeOption]}>
          <Pressable style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', height: 60, position: 'relative', top: 0}} onPress={()=>{setIsOpen((value) => !value) }}>
              <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>{props.name}</Text>
          </Pressable>
            <Animated.View style={animatedDisplay}>
              {props.children}
          </Animated.View>    
      </Animated.View>
        
    )
  }

  const styles = StyleSheet.create({
    rechargeOption: {
      //backgroundColor: '#0077B6', #03045E
      backgroundColor: 'white',
      borderRadius: 20,
      borderColor: 'lightgray',
      borderWidth: 1,
      marginTop: 10,
      alignItems: 'center',
      //padding: 10
      
    }
  });
  