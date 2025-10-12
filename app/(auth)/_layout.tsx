// import { useAuth } from '@/features/auth';
// import { Stack } from 'expo-router';
// import { useEffect, useState } from 'react';

// export default function AuthLayout() {
//   const { firstLaunch } = useAuth();
//   console.log('====================================');
//   console.log(firstLaunch);
//   console.log('====================================');
//   const [initialRoute, setInitialRoute] = useState<string>('login');

//   useEffect(() => {
//     if (firstLaunch !== undefined) {
//       setInitialRoute(firstLaunch ? 'greeting' : 'login');
//     }
//   }, [firstLaunch]);
//   console.log('====================================');
//   console.log(initialRoute);
//   console.log('====================================');
//   return (
//     <Stack
//       initialRouteName={initialRoute}
//       screenOptions={{
//         headerShown: false,
//         animation: 'fade',
//       }}
//     >
//       <Stack.Screen name="login" />

//       <Stack.Screen name="greeting" />
//       <Stack.Screen name="registration" />
//     </Stack>
//   );
// }

import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="greeting" />
      <Stack.Screen name="login" />
      <Stack.Screen name="registration" />
    </Stack>
  );
}
