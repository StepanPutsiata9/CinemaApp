import { MyTabBar } from '@/features/shared';
import { useTheme } from '@/features/theme';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={props => <MyTabBar {...props} colors={colors} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="tickets" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
