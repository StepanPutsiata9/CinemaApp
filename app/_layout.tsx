import { useAuth } from '@/features/auth';
import { LoadingModal } from '@/features/shared/components';
import { store } from '@/store';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

function AppNavigationStack() {
  const { user, isLoading, loadApp } = useAuth();

  useEffect(() => {
    loadApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <LoadingModal visible={isLoading} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Protected guard={!!user}>
          <Stack.Screen name="(root)" />
        </Stack.Protected>
        <Stack.Protected guard={!user}>
          <Stack.Screen name="(auth)" />
        </Stack.Protected>
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat: require('@/assets/fonts/Montserrat.ttf'),
    MontserratBold: require('@/assets/fonts/MontserratBold.ttf'),
    MontserratRegular: require('@/assets/fonts/MontserratRegular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <KeyboardProvider>
        <AppNavigationStack />
      </KeyboardProvider>
    </Provider>
  );
}
