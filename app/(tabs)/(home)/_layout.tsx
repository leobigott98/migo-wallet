import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          //backgroundColor: '#f4511e',
          
        },
        //headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      <Stack.Screen name="index"
      options={{
        title: 'Home'
      }} />
      <Stack.Screen 
        name="add-money" 
        options={{
          headerShown: true,
          title: 'Recargar'
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
    </Stack>
  );
}
