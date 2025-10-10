import { StyleSheet, View } from 'react-native';
import { HeaderLogo } from '../utils';

export const Header = () => {
  return (
    <View style={styles.header}>
      <HeaderLogo />
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
