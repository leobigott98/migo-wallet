import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {

  return (
    <View style={styles.container}>
      <Text>Pay Money from Wallet</Text>
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