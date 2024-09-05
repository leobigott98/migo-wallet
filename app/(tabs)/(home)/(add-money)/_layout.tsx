import { Stack } from 'expo-router';

export default function AddMoneyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      <Stack.Screen name="add_international-card"
      options={{
        title: 'Agregar Tarjeta Internacional'
      }} />
      <Stack.Screen 
        name="add-national-card" 
        options={{
          headerShown: true,
          title: 'Agregar Tarjeta Nacional'
        }} />
      <Stack.Screen 
        name="international-card" 
        options={{
          headerShown: true,
          title: 'Recarga con Tarjeta Internacional'
        }}/>
      <Stack.Screen 
        name="national-card"
        options={{
          headerShown: true,
          title: 'Recarga con Tarjeta Nacional'
        }} />
      <Stack.Screen 
        name="pago-movil-c2p"
        options={{
          headerShown: true,
          title: 'Recarga con Pago Móvil C2P'
        }} />
      <Stack.Screen 
        name="pago-movil-p2c"
        options={{
          headerShown: true,
          title: 'Recarga con Pago Móvil P2C'
        }} />
    </Stack>
  );
}
