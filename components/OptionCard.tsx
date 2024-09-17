import { View, Pressable, Text, StyleSheet } from "react-native";
import { Link, Href } from "expo-router";

type Style = {
    padding: string
}

/* interface Icon extends Element{
  
  name="cash-plus" size={45} color="black"
} */

type Props = {
    name: string,
    icon: React.ReactNode,
    href: Href,
    nameFontSize?: number
}

export default function OptionCard({name, icon, href, nameFontSize = 12}: Props) {
    return(
        <View style={{ alignItems: "center", justifyContent: "center" }}>
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
          </View>
    )
}

const styles = StyleSheet.create({
    option: {
      //backgroundColor: "white",
      shadowColor: "#000000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      borderRadius: 20,
      margin: 5,
      width: 80,
      height: 90,
      alignItems: "center",
      justifyContent: "center",
    },
  });