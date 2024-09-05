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
      <Stack.Screen name="digitel"
      options={{
        title: 'Pagar Digitel'
      }} />
      <Stack.Screen 
        name="movistar" 
        options={{
          headerShown: true,
          title: 'Pagar Movistar'
        }} />
      <Stack.Screen 
        name="movilnet" 
        options={{
          headerShown: true,
          title: 'Pagar Movilnet'
        }}/>
      <Stack.Screen 
        name="simpletv"
        options={{
          headerShown: true,
          title: 'Pagar SimpleTV'
        }} />
      <Stack.Screen 
        name="inter"
        options={{
          headerShown: true,
          title: 'Pagar Inter'
        }} />
      <Stack.Screen 
        name="cantv"
        options={{
          headerShown: true,
          title: 'Pagar Cantv'
        }} />
    </Stack>
  );
}