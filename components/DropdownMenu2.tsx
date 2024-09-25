import { Children, ReactNode, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";
import { Href } from "expo-router";
import {
    Text,
    StyleSheet,
    Pressable,
  } from "react-native";

  export default function DropdownMenu2 ( props: { name: string, children?: ReactNode[] | ReactNode, height?: number} ){
    const [isOpen, setIsOpen] = useState(false)
    const height = useSharedValue(60);
    const opacity = useSharedValue(0);
    const nChildren = Children.count(props.children)

    const animatedStyles = useAnimatedStyle(()=>{
      if(isOpen){
          return {
          height: withTiming(height.value + 200 * nChildren)
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
              <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>{props.name}</Text>
          </Pressable>
            <Animated.View style={animatedDisplay}>
              {props.children}
          </Animated.View>    
      </Animated.View>
        
    )
  }

  const styles = StyleSheet.create({
    rechargeOption: {
      backgroundColor: '#0077B6',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      //padding: 10
      
    }
  });
  