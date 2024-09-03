import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function UtilityScreen() {
  return (
    <View style={styles.container}>
      <Text>Utility Bills Payment</Text>
      <Link href='/(home)/'>Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});