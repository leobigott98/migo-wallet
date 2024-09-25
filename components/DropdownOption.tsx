import { Href, Link } from "expo-router";
import {
    View,
    Text,
    StyleSheet,
    Pressable
  } from "react-native";


  export default function DropdownOption ( props: {href: Href, name: string, buttonColor: string, pressedButtonColor: string, icon?: React.ReactNode, description?: string, styling?: object} ){

    return(
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Link href={props.href} asChild >
          <Pressable > 
          {({pressed}) => (
          <View style={[pressed? {backgroundColor: props.pressedButtonColor} : {backgroundColor: props.buttonColor}, styles.dropdownOption, props.styling]}>
            {props.icon}
            <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{color: 'white', fontSize: 8, fontWeight: 'bold'}}>{props.description}</Text>
          </View>
        )}
            </Pressable>
            </Link>
      </View>
        
    )
  }

  const styles = StyleSheet.create({
    dropdownOption: {
      display: 'flex',
      flexDirection: 'row',
      //backgroundColor: '#90E0EF',
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center', 
      justifyContent: 'center', 
      width: 250,
      height: 40,  
      padding: 5    
    }
  });
  