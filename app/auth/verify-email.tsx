import { Link } from "expo-router";
import * as React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSendOTP } from "@/hooks/useSendOTP";

export default function EmailVerificationScreen() {
  const [name, setName] = React.useState("");
  const [startTimer, setStartTimer] = React.useState(true);
  const [timeLeft, setTimeLeft] = React.useState(180);
    const mutation = useSendOTP();
  
    const handleSendOTP = () => {
      mutation.mutate({
        email: 'l.bigott+05@puntogove.com',
      });
    };

  const restartTimer = ()=>{
    setTimeLeft(180);
    setStartTimer(true);
    handleSendOTP();
  }

  React.useEffect(()=>{
    let timerId: ReturnType<typeof setInterval>;

    if(startTimer && timeLeft >0){
      timerId = setInterval(()=>{
        setTimeLeft((prevTime)=>{
          if (prevTime <= 1){
            clearInterval(timerId);
            return 0;
          }
          return prevTime -1;
        });
      },1000);
    } 

    return ()=> clearInterval(timerId);
    
  },[startTimer, timeLeft])

  return (
    <SafeAreaView>
    <KeyboardAwareScrollView>
      <View>
        <View
          style={{
            height: 300,
            justifyContent: "flex-start",
            width: "100%",
            //backgroundColor: "#004aad",
            //borderBottomRightRadius: 10,
            //borderBottomLeftRadius: 10,
            //paddingTop: 50,
            paddingBottom: 20,
          }}
        >
          <Image
            source={require("@/assets/images/logo_migo.png")}
            style={{
              width: "28%",
              height: "40%",
              resizeMode: "stretch",
              marginHorizontal: "auto",
            }}
          />
          <Text style={styles.screenTitle}>Verificación de Correo</Text>
          <Text style={styles.screenSubTitle}>
            Hemos enviado un código a su correo.
          </Text>
          <Text style={styles.screenSubTitle}>
            Introdúcelo para completar tu registro.
          </Text>
        </View>
        <View style={{ width: "100%", marginVertical: 30, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TextInput
            placeholder="OTP"
            value={name}
            onChangeText={setName}
            style={{width: '50%', marginHorizontal: 'auto', borderBottomColor: 'lightgray', borderBottomWidth: 1, textAlign: 'center', height: 100, fontSize: 50}}
            //style={[styles.textInputContainer, { marginTop: 20 }]}
            inputMode="numeric"
            maxLength={6}
          />
          {/* <TextInput
            placeholder="Lastname"
            value={lastname}
            onChangeText={setLastname}
            //style={styles.textInputContainer}
            inputMode="numeric"
          />
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            //style={styles.textInputContainer}
            inputMode="numeric"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            //style={[styles.textInputContainer]}
            inputMode="numeric"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            //style={[styles.textInputContainer, { marginBottom: 20 }]}
            inputMode="numeric"
            //secureTextEntry
          /> */}
        </View>
        <View
          /* style={{
            height: 200,
          }} */
        >
          <Pressable
            style={{
              backgroundColor: "#5de0e6",
              borderRadius: 10,
              marginHorizontal: 30,
              //marginBottom: 10,
              padding: 15,
              alignItems: "center",
            }}
            /* disabled={mutation.isPending}
            onPress={handleSignUp} */
          >
            <Text style={{ color: "black", fontSize: 16 }}>
              Validar
            </Text>
          </Pressable>
            <Pressable
              style={{
                //backgroundColor: "#004aad",
                //borderRadius: 10,
                marginHorizontal: 30,
                padding: 15,
                alignItems: "center",
                cursor: 'pointer'
              }}
              onPress={restartTimer}
            >
              <Text style={[{fontSize: 16}, timeLeft > 0 ? { color: "gray"} : {color: '#004aad'}]}>
                Reenviar {timeLeft > 0? `en: ${timeLeft} segundos` : 'ahora'}
              </Text>
            </Pressable>
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
                Cerrar Sesión
              </Text>
            </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
    </SafeAreaView>
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
    color: "black",
  },
  screenSubTitle: {
    fontSize: 16,
    fontWeight: "500",
    //marginBottom: 20,
    marginHorizontal: "auto",
    color: "black",
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
