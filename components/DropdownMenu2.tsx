import { Children, ReactNode, useState } from "react";
import Animated, { useAnimatedStyle, withTiming} from "react-native-reanimated";
import { Href } from "expo-router";
import {
    Text,
    StyleSheet,
    Pressable,
  } from "react-native";

  export default function DropdownMenu2 ( props: { name: string, children?: ReactNode[] | ReactNode, height?: number} ){
    const [isOpen, setIsOpen] = useState(false)
    const nChildren = Children.count(props.children)

    const animatedStyles = useAnimatedStyle(()=>{
      return {
        height: withTiming(isOpen? 60+200*nChildren : 60)
      }
    })

    const animatedDisplay = useAnimatedStyle(()=>{
      return{
        opacity: withTiming(isOpen? 1:0)
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
      //backgroundColor: '#0077B6',
      backgroundColor: 'white',
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 20,
      marginTop: 10,
      alignItems: 'center',
      //padding: 10
      
    }
  });
  