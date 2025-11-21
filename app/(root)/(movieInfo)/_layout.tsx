import { Stack } from 'expo-router';

export default function MovieInfoLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="movieInfo" />
    </Stack>
  );
}
