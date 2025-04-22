import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../context/AuthContext";
import { DevToolsBubble } from "react-native-react-query-devtools";
import * as Clipboard from "expo-clipboard";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const queryClient = new QueryClient();

export default function RootLayout() {
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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <GestureHandlerRootView>
            <Slot />
          </GestureHandlerRootView>
        </PaperProvider>
        <DevToolsBubble onCopy={onCopy} />
      </QueryClientProvider>
    </AuthProvider>
  );
}
