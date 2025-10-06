import { store } from '@/store';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

function AppStack() {
  return <Stack />;
}
