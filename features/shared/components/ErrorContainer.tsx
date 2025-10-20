import { StyleSheet, Text, View } from 'react-native';

export const ErrorContainer = ({ error }: { error: string }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>{error}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
