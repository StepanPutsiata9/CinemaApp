import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
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
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Выйти из аккаунта</Text>
      <MaterialIcons name="logout" size={24} color="#FF1B44" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    backgroundColor: '#242424',
    borderRadius: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'MontserratBold',
    color: '#FF1B44',
    marginRight: 15,
  },
});

export default LogoutButton;
