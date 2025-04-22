import { Link } from "expo-router";
import * as React from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useHeaderHeight } from '@react-navigation/elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSignUp } from "@/hooks/useSignUp";

export default function SignInScreen() {
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const mutation = useSignUp();

  const handleSignUp = () => {
    mutation.mutate({
      name,
      lastname,
      password,
      email,
      phone
    })
  }

  //const height = useHeaderHeight()

  return (
    <KeyboardAwareScrollView >
          <View
            style={{
              //height: 'auto'
            }}
          >
                     
            <View
              style={{
                height: 300,
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#004aad",
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                paddingTop: 50,
                paddingBottom: 20,
              }}
            >
              <Image
                source={require("@/assets/images/logo_migo.png")}
                style={{
                  width: "55%",
                  height: "80%",
                  resizeMode: "stretch",
                  marginHorizontal: "auto",
                }}
              />
              <Text style={styles.screenTitle}>Migo Wallet</Text>
              <Text style={styles.screenSubTitle}>
                Maneja tu dinero con confianza
              </Text>
            </View>
            <View style={{ width: "100%", marginVertical: 30 }}>
              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={[styles.textInputContainer, { marginTop: 20 }]}
                inputMode="text"
              />
              <TextInput
                placeholder="Lastname"
                value={lastname}
                onChangeText={setLastname}
                style={styles.textInputContainer}
                inputMode="text"
              />
              <TextInput
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                style={styles.textInputContainer}
                inputMode="tel"
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={[styles.textInputContainer]}
                inputMode="email"
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={[styles.textInputContainer, {marginBottom: 20}]}
                inputMode="text"
                secureTextEntry
              />
            </View>
            <View style={{
              height: 200
            }}>
              <Pressable
                style={{
                  backgroundColor: "#5de0e6",
                  borderRadius: 10,
                  marginHorizontal: 30,
                  marginBottom: 20,
                  padding: 15,
                  alignItems: "center",
                }}
                disabled={mutation.isPending}
                onPress={handleSignUp}
              >
                <Text style={{ color: "black", fontSize: 16 }}>
                  {mutation.isPending? 'Registrando...' : '¡Unirme!'}
                </Text>
              </Pressable>
              <Text style={{ marginBottom: 10, marginHorizontal: "auto" }}>
                ¿Ya tienes cuenta?
              </Text>
              <Link href={"/sign-in"} 
                asChild
                >
                <Pressable
                  style={{
                    backgroundColor: "#004aad",
                    borderRadius: 10,
                    marginHorizontal: 30,
                    padding: 15,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    Inicia sesión
                  </Text>
                </Pressable>
              </Link>
            </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //marginVertical: 'auto',
    //paddingTop: StatusBar.currentHeight,
    //width: 100,
    //backgroundColor: 'pink'
  },
  scrollView: {
    //justifyContent: "center",
    //alignItems: "center",
    //marginHorizontal: 10,
    //backgroundColor: 'pink',
    //paddingBottom: 50,
    
    //flexGrow: 1
    //flexGrow: 0
    //width: "100%",
    //height: 'auto',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    marginHorizontal: "auto",
    color: "white",
  },
  screenSubTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    marginHorizontal: "auto",
    color: "white",
  },
  normalText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 20,
    marginHorizontal: "auto",
  },
  loginInfoContainer: {
    backgroundColor: "white",
    //shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,
    margin: 5,
    /* width: 80,
      height: 90, */
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    //paddingVertical: '5%'
  },
  textInputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    //width: '100%',
    height: "auto",
    padding: 20,
    marginHorizontal: 30,
    marginBottom: 30,
    borderColor: "lightgray",
    fontSize: 16,
  },
});
