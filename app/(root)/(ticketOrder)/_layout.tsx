import { Stack } from 'expo-router';

export default function TicketOrderLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="date" />
      <Stack.Screen name="hall" />
    </Stack>
  );
}
