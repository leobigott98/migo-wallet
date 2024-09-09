//import { useState } from "react";
import { Href, Link } from "expo-router";
import {
    View,
    Text,
    StyleSheet,
    Pressable
  } from "react-native";
  import Ionicons from '@expo/vector-icons/Ionicons';

  export default function DropdownOption ( props: {redirect?: Href, name: string} ){
    //const [timesPressed, setTimesPressed] = useState(0)

    return(
      <View style={styles.dropdownOption}>
        <Link style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }} href={props.redirect? props.redirect : '/'}>
            <Ionicons name="add-circle-outline" size={24} color="black" style={{position: 'relative', right: '100%'}} />
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>{props.name}</Text>
        </Link>

      </View>
        
    )
  }

  const styles = StyleSheet.create({
    dropdownOption: {
      backgroundColor: '#90E0EF',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center', 
      justifyContent: 'center', 
      //padding: 20,
      
      width: '100%',
      height: 40,
      
      
    }
  });
  