import { Stack } from 'expo-router';

export default function PayLayout() {
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
        name="digitel"
        options={{
          headerShown: true,
          title: 'Recarga Digitel',
          presentation: 'modal'
        }} />
      <Stack.Screen 
        name="movistar" 
        options={{
          headerShown: true,
          title: 'Pagar Movistar',
          presentation: 'modal'
        }} />
      <Stack.Screen 
        name="movilnet" 
        options={{
          headerShown: true,
          title: 'Pagar Movilnet',
          presentation: 'modal'
        }}/>
      <Stack.Screen 
        name="simpletv"
        options={{
          headerShown: true,
          title: 'Pagar SimpleTV',
          presentation: 'modal'
        }} />
      <Stack.Screen 
        name="inter"
        options={{
          headerShown: true,
          title: 'Pagar Inter',
          presentation: 'modal'
        }} />
      <Stack.Screen 
        name="cantv"
        options={{
          headerShown: true,
          title: 'Pagar Cantv',
          presentation: 'modal'
        }} />
    </Stack>
  );
}