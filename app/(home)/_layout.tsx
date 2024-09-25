import { Stack } from 'expo-router';
import { View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerRight: ()=>(
          <View style={{display:'flex', flexDirection: 'row'}}>
            <Ionicons name="scan" size={24} color="black" style={{margin: 10}}/>
            <Ionicons name="person-circle" size={28} color="black" style={{margin: 10}}/>
          </View> 
        ),
        headerTitle: 'MiGo Wallet',
        headerTitleAlign: 'left',
        //headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}
      >
      <Stack.Screen name="index"
      options={{
        title: 'Home',
        headerLeft: ()=>(
          <Image
            source={require('@/assets/images/logo_migo.png')}
            style={{width: 40, height: 40, resizeMode: 'contain', position: 'relative', }}
          />
        ),
      }} />
      <Stack.Screen 
        name="add-money" 
        options={{
          headerShown: true,
          title: 'Recargar',
        }} />
      <Stack.Screen 
        name="withdraw" 
        options={{
          headerShown: true,
          title: 'Retirar'
        }}/>
      <Stack.Screen 
        name="pay"
        options={{
          headerShown: true,
          title: 'Pagar',
          headerTitle: 'Pago de Servicios'
        }} />
      <Stack.Screen 
        name="transfer"
        options={{
          headerShown: true,
          title: 'Transferir'
        }} />
      <Stack.Screen 
        name="wallet-info/[id]"
        options={{
          headerShown: true
        }} />
        <Stack.Screen 
        name="transaction/[id]"
        options={({ route }) => ({
          headerShown: true,
          title: 'Transacción',
          // @ts-ignore: Unreachable code error
          headerTitle: `Transacción ${route.params && route.params.id ? route.params.id : '' }`
          
        })   
        } />
    </Stack>
  );
}
