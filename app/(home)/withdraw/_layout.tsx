import { Stack } from 'expo-router';

export default function WithdrawLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitle: 'Retirar',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      <Stack.Screen 
        name="pago-movil" 
        options={{
          headerShown: true,
          title: 'Retiro por Pago Móvil',
          headerTitle: 'Retiro por Pago Móvil',
          presentation: 'modal',
        }} />
    </Stack>
  );
}