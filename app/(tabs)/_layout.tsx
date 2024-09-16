import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        //headerBackgroundContainerStyle: {backgroundColor: 'red'},
        headerStyle: {backgroundColor: 'transparent'},
        headerRight: ()=>(
          <View style={{display:'flex', flexDirection: 'row'}}>
            <Ionicons name="scan" size={24} color="black" style={{margin: 10}}/>
            <Ionicons name="person-circle" size={28} color="black" style={{margin: 10}}/>
          </View>
          
          
        ),
        headerLeft: ()=>(
          <Image
            source={require('@/assets/images/logo_migo.png')}
            style={{width: 40, height: 40, resizeMode: 'contain', position: 'relative', left: 10, marginLeft: 10}}
          />
        ),
        headerTitle: 'MiGo Wallet',
        headerTitleAlign: 'left',
        headerTitleStyle: {margin: 5},
        tabBarStyle: {
          borderTopWidth: 0
    }
      }}>
      <Tabs.Screen 
        name="(home)"
        options={{
          title: 'Home',
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