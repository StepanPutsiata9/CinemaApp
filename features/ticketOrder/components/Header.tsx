import { IColorsTheme } from '@/features/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
interface IOrderHeaderProps {
  colors: IColorsTheme;
  title: string;
}
export const OrderHeader = ({ colors, title }: IOrderHeaderProps) => {
  const styles = useStyles(colors);
  const router = useRouter();
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{title}</Text>
      <AntDesign
        name="close"
        size={24}
        color={colors.primary.start}
        onPress={() => router.back()}
      />
    </View>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    titleView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      paddingHorizontal: 16,
    },
    title: {
      fontFamily: 'MontserratBold',
      color: colors.primary.start,
      fontSize: 24,
    },
  });
}
