import { IColorsTheme } from '@/features/theme';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface ILoadingContainer {
  colors: IColorsTheme;
}
export const LoadingContainer = ({ colors }: ILoadingContainer) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary.finish} size={'large'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
