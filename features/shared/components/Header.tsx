import { StyleSheet, View } from 'react-native';
import { AuthBanner } from '../utils/AuthBanner';

export const Header = () => {
  return (
    <View style={styles.header}>
      <AuthBanner />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
});
