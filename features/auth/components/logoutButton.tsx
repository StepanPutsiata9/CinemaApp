import { IColorsTheme } from '@/features/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks';

interface ILogoutButtonProps {
  colors: IColorsTheme;
}
export const LogoutButton = ({ colors }: ILogoutButtonProps) => {
  const router = useRouter();
  const styles = useStyles(colors);
  const { handleLogout } = useAuth();
  const logout = () => {
    Alert.alert(
      'Выход',
      'Вы уверены, что хотите выйти?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Выйти',
          style: 'destructive',
          onPress: async () => {
            try {
              await handleLogout();
              router.replace('/(auth)/login');
            } catch (error) {
              console.error('Logout error:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={logout}>
      <Text style={styles.buttonText}>Выйти из аккаунта</Text>
      <MaterialIcons name="logout" size={24} color={colors.error} />
    </TouchableOpacity>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    button: {
      paddingVertical: 16,
      backgroundColor: colors.tabbar,
      borderRadius: 20,
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontFamily: 'MontserratBold',
      color: colors.error,
      marginRight: 15,
    },
  });
}

export default LogoutButton;
