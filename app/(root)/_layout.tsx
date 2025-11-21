import { Stack } from 'expo-router';

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(ticketOrder)" />
      <Stack.Screen name="(movieInfo)" />
    </Stack>
  );
}
