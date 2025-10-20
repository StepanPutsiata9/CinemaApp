import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const LoadingContainer = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'#FFA605'} size={'large'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
