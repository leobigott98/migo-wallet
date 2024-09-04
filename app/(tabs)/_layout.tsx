import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerRight: ()=>(
          <Ionicons name="scan" size={24} color="black" style={{right: 10}}/>
        ),
        headerLeft: ()=>(
          <Ionicons name="person-circle" size={28} color="black" style={{left: 10}} />
        ),
        tabBarStyle: {
          borderTopWidth: 0
    }
      }}>
      <Tabs.Screen 
        name="(home)"
        options={{
          title: 'MiGo Wallet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }} />
        <Tabs.Screen 
        name="(payments)"
        options={{
          title: 'Pagos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cash' : 'cash-outline'} color={color} />
          ),
        }} />
        <Tabs.Screen 
        name="(wallet)"
        options={{
          title: 'Billetera',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} color={color} />
          ),
        }} />
    </Tabs>
  );
}