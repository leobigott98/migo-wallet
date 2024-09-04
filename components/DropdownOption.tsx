//import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable
  } from "react-native";
  import Ionicons from '@expo/vector-icons/Ionicons';

  export default function DropdownOption ( props: {type: string} ){
    //const [timesPressed, setTimesPressed] = useState(0)

    return(
        <Pressable style={styles.dropdownOption}>
            <Ionicons name="add-circle-outline" size={24} color="black" style={{position: 'relative', right: '100%'}} />
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Agregar Tarjeta</Text>
          </Pressable>
    )
  }

  const styles = StyleSheet.create({
    dropdownOption: {
      backgroundColor: '#90E0EF',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
      //padding: 20,
      justifyContent: 'center',
      width: '100%',
      height: 40,
      display: 'flex',
      flexDirection: 'row'
    }
  });
  