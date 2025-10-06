import { store } from '@/store';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppNavigationStack />
    </Provider>
  );
}

function AppNavigationStack() {
  const user = true;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      {user ? <Stack.Screen name="(root)" /> : <Stack.Screen name="(auth)" />}
    </Stack>
  );
}
