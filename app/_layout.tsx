import { useAuth } from '@/features/auth';
import { store } from '@/store';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

function AppNavigationStack() {
  const { user } = useAuth();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(root)" />
      </Stack.Protected>
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}

SplashScreen.preventAutoHideAsync();
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
      <AppNavigationStack />
    </Provider>
  );
}
