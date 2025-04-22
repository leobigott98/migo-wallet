import { Link, router } from "expo-router";
import * as React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
//import { useSignIn } from "@/hooks/useSignIn";
import { useAuth } from "@/context/AuthContext";

export default function SignInScreen() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const auth = useAuth();
  //const mutation = useSignIn();

  const handleSignIn = async () => {
    await auth?.login(email.toLowerCase(), password)
    router.replace('/(home)');
    /* mutation.mutate({
      password,
      email: email.toLowerCase(),
    }); */
  };

  //const { signIn } = React.useContext(AuthContext);

  return (
    <>
      {/* <SafeAreaView style={{backgroundColor: theme.colors.background}} > */}
      <ScrollView contentContainerStyle={styles.scrollView}>
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
        <View style={{ width: "100%", marginVertical: 40 }}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={[styles.textInputContainer, { marginTop: 10 }]}
            inputMode="email"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.textInputContainer}
            inputMode="text"
            secureTextEntry
          />
        </View>
        <View style={{}}>
          <Pressable
            style={{
              backgroundColor: "#5de0e6",
              borderRadius: 10,
              marginHorizontal: 30,
              marginBottom: 20,
              padding: 15,
              alignItems: "center",
            }}
            disabled={auth?.loading}
            onPress={handleSignIn}
          >
            <Text style={{ color: "black", fontSize: 16 }}>
              {auth?.loading ? "Procesando..." : "Iniciar Sesión"}
            </Text>
          </Pressable>
          <Text style={{ marginBottom: 10, marginHorizontal: "auto" }}>
            ¿No tienes cuenta?
          </Text>
          <Link href={"/sign-up"} asChild>
            <Pressable
              style={{
                backgroundColor: "#004aad",
                borderRadius: 10,
                marginHorizontal: 30,
                padding: 15,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Regístrate</Text>
            </Pressable>
          </Link>
          <Link href={"/forgot-password"} asChild>
            <Pressable
              style={{
                //backgroundColor: "#004aad",
                //borderRadius: 10,
                marginHorizontal: 30,
                padding: 15,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#004aad", fontSize: 16 }}>Olvidé mi contraseña</Text>
            </Pressable>
          </Link>

          {/* <View style={{backgroundColor: '#5de0e6', borderRadius: 10, marginHorizontal: 30, marginBottom: 20, padding: 5}}>
            <Button title="Iniciar Sesión" color='black'  />
          </View>
          
          <View style={{backgroundColor: '#004aad', borderRadius: 10, marginHorizontal: 30, padding: 5}}>
            <Button title="Regístrate" color='white' onPress={() => console.log({ username: email, password })} />
          </View> */}
        </View>
      </ScrollView>
    </>
    /* </SafeAreaView> */
  );
  /* const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  ); */
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
    //backgroundColor: 'white',
    paddingBottom: 50,
    width: "100%",
    height: "100%",
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
