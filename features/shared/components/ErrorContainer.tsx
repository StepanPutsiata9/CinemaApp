import { IColorsTheme } from '@/features/theme';
import { StyleSheet, Text, View } from 'react-native';
interface IErrorContainerProps {
  error: string;
  colors: IColorsTheme;
}
export const ErrorContainer = ({ error, colors }: IErrorContainerProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>{error}</Text>
    </View>
  );
};
function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });
}
