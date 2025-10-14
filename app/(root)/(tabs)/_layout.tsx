// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Tabs } from 'expo-router';
// import React, { useRef } from 'react';
// import { Animated, StyleSheet } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// export default function TabsLayout() {
//   const insets = useSafeAreaInsets();

//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }: any) => {
//           return <TabIcon focused={focused} route={route} size={size} color={color} />;
//         },
//         tabBarStyle: {
//           flexDirection: 'row',
//           height: 60,
//           backgroundColor: '#2B2B2B',
//           borderRadius: 25,
//           width: '80%',
//           marginHorizontal: '10%',
//           marginBottom: insets.bottom + 20,
//         },
//         tabBarItemStyle: {
//           flex: 1,
//           borderRadius: 25,
//         },
//         tabBarActiveTintColor: '#000000',
//         tabBarInactiveTintColor: '#FFFFFF',
//         tabBarShowLabel: false,
//         headerShown: false,
//       })}
//     >
//       <Tabs.Screen name="home" />
//       <Tabs.Screen name="tickets" />
//       <Tabs.Screen name="profile" />
//     </Tabs>
//   );
// }

// interface IIcon {
//   focused: boolean;
//   route: any;
//   size: number;
//   color: string;
// }

// function TabIcon({ focused, route, size, color }: IIcon) {
//   const bgColorAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   // useEffect(() => {
//   //   // Анимация фона
//   //   Animated.timing(bgColorAnim, {
//   //     toValue: focused ? 1 : 0,
//   //     duration: 300,
//   //     easing: Easing.out(Easing.ease),
//   //     useNativeDriver: false,
//   //   }).start();

//   //   // Анимация масштаба
//   //   if (focused) {
//   //     Animated.sequence([
//   //       Animated.timing(scaleAnim, {
//   //         toValue: 1.05,
//   //         duration: 150,
//   //         easing: Easing.out(Easing.ease),
//   //         useNativeDriver: true,
//   //       }),
//   //       Animated.timing(scaleAnim, {
//   //         toValue: 1,
//   //         duration: 150,
//   //         easing: Easing.out(Easing.ease),
//   //         useNativeDriver: true,
//   //       }),
//   //     ]).start();
//   //   } else {
//   //     Animated.timing(scaleAnim, {
//   //       toValue: 1,
//   //       duration: 150,
//   //       easing: Easing.out(Easing.ease),
//   //       useNativeDriver: true,
//   //     }).start();
//   //   }
//   // }, [bgColorAnim, focused, scaleAnim]);

//   let iconName: any;

//   switch (route.name) {
//     case 'home':
//       iconName = focused ? 'home' : 'home-outline';
//       break;
//     case 'tickets':
//       iconName = focused ? 'ticket' : 'ticket-outline';
//       break;
//     case 'profile':
//       iconName = focused ? 'person' : 'person-outline';
//       break;
//     default:
//       iconName = 'home-outline';
//   }

//   const bgColor = bgColorAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['rgba(43, 43, 43, 0)', 'rgba(255, 153, 0, 1)'],
//   });

//   return (
//     <Animated.View
//       style={[
//         styles.tabButton,
//         {
//           transform: [{ scale: scaleAnim }],
//           backgroundColor: bgColor,
//         },
//       ]}
//     >
//       {focused && (
//         <LinearGradient
//           colors={['#FF9900', '#FFB412']}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.gradientBackground}
//         />
//       )}

//       <Ionicons name={iconName} size={24} color={focused ? '#000000' : '#FFFFFF'} />
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   tabButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     width: 100,
//     position: 'relative',
//   },
//   gradientBackground: {
//     position: 'absolute',
//     height: 60,
//     width: 100,
//     borderRadius: 25,
//   },
// });
import { MyTabBar } from '@/features/shared/components';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs tabBar={props => <MyTabBar {...props} />}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="tickets" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
