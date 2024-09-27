import { Stack } from 'expo-router';

export default function AddMoneyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitle: 'Recargar',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      <Stack.Screen 
        name="add-card" 
        options={{
          headerShown: true,
          title: 'Agregar Tarjeta',
          headerTitle: 'Agregar Tarjeta',
          presentation: 'modal',
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
          title: 'Recarga con Pago Móvil C2P',
          headerTitle: 'Pago Móvil C2P',
          presentation: 'modal',
        }} />
      <Stack.Screen 
        name="pago-movil-p2c"
        options={{
          headerShown: true,
          title: 'Recarga con Pago Móvil P2C',
          headerTitle: 'Pago Móvil P2C',
          presentation: 'modal'
        }} />
    </Stack>
  );
}
