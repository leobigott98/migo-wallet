import {
    View,
    Text,
    StyleSheet,
  } from "react-native";
  import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DropdownZelleInfo (){

    return(
      <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.dropdownOption}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>Conexiones Punto Express</Text>
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>zelle@puntogove.com</Text>
            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold', margin: 3, padding: 3}}>Ingrese el siguiente código en la descripción de la transacción Zelle:</Text>
            <View style={styles.info}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>0n3r4nd0m1d</Text>
            <MaterialIcons name="content-copy" size={20} color="black" />
          </View>
          </View>
      </View>   
    )
  }

  const styles = StyleSheet.create({
    dropdownOption: {
      display: 'flex',
      backgroundColor: '#00B4D8',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center', 
      justifyContent: 'center', 
      width: 250,
      height: 150,  
      padding: 5    
    }, info:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#90E0EF',
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
        width: 200,
        height: 40,  
        padding: 5 
    }   
  });
  