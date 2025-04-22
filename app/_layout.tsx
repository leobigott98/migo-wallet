import { Stack, Redirect } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
//import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DevToolsBubble } from "react-native-react-query-devtools";
import * as Clipboard from "expo-clipboard";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Simulating authentication check
    const checkAuth = async () => {
      // Check for auth state (replace with actual auth logic)
      const user = false; // Replace with real auth logic
      setIsSignedIn(user);
    };

    checkAuth();
  }, []);

  // Define your copy function based on your platform
  const onCopy = async (text: string) => {
    try {
      // For Expo:
      await Clipboard.setStringAsync(text);
      // OR for React Native CLI:
      // await Clipboard.setString(text);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <GestureHandlerRootView>
          {/* <ThemeProvider value={DefaultTheme}> */}
          {isSignedIn ? (
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(home)" />
            </Stack>
          ) : (
            <>
              <Redirect href="/auth/verify-email" />
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="auth/verify-email" />
              </Stack>
            </>
          )}
          {/* </ThemeProvider> */}
        </GestureHandlerRootView>
      </PaperProvider>
      <DevToolsBubble onCopy={onCopy} />
    </QueryClientProvider>
  );
}
