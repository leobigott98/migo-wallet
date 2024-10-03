import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

import { ReactNode } from "react";

export default function OptionsCarousel(props: {children?: ReactNode[] | ReactNode}) {
    return(
        <ScrollView style={styles.optionsCarousel} horizontal contentContainerStyle={{}}>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    optionsCarousel: {
      paddingHorizontal: 10,
      paddingBottom: 15,
      paddingTop: 10,
    },
  });
  
  