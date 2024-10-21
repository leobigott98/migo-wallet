import { Stack } from 'expo-router';

export default function TransferLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
      <Stack.Screen 
        name="migo2migo"
        options={{
          headerShown: true,
          title: 'Migo a Migo',
          presentation: 'modal'
        }} />
      <Stack.Screen 
        name="wallet2wallet" 
        options={{
          headerShown: true,
          title: 'Transferir entre mis Wallets',
          presentation: 'modal'
        }} />
    </Stack>
  );
}