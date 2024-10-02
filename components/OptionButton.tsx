import { Href, Link } from "expo-router";
import { ReactNode } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function OptionButton(props: {href: Href, children?: ReactNode[] | ReactNode, buttonColor: string, pressedButtonColor: string, styling?: object}) {
    return(
        <View style={{ justifyContent: "center" }}>
            <Link href={props.href} asChild >
                <Pressable > 
                {({pressed}) => (
                    <View style={[pressed? {backgroundColor: props.pressedButtonColor} : {backgroundColor: props.buttonColor}, styles.imageContainer, props.styling]}>
                        {props.children}
                    </View>
                )}
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        //backgroundColor: 'white',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        shadowColor: "#000000",
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.25,
      }
})