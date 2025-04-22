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
        name="sign-up"
        options={{
          headerShown: false,
          title: 'Sign-up',
          //presentation: 'modal'
        }} />
    </Stack>
  );
}