import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        /* headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, */
      }}
      >
      <Stack.Screen name="index" />
      <Stack.Screen name="add-money" />
      <Stack.Screen name="withdraw" />
      <Stack.Screen name="pay" />
      <Stack.Screen name="transfer" />
      <Stack.Screen name="wallet-info/[id]" />
    </Stack>
  );
}
