import { IColorsTheme } from '@/features/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import TabbarButton from './TabbarButton';

interface ITabbarProps {
  colors: IColorsTheme;
}
export function MyTabBar({
  state,
  descriptors,
  navigation,
  colors,
}: BottomTabBarProps & ITabbarProps) {
  const { buildHref } = useLinkBuilder();
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const buttonWidth = dimensions.width / state.routes.length;
  const styles = useStyles(colors);
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };
  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: tabPositionX.value }] };
  });
  return (
    <View onLayout={onTabbarLayout} style={styles.tabbar}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            borderRadius: 35,
            height: dimensions.height,
            width: buttonWidth,
          },
        ]}
      >
        <LinearGradient
          colors={[colors.primary.start, colors.primary.finish]}
          style={{
            flex: 1,
            borderRadius: 35,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, { duration: 500 });
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabbarButton
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label as ReactNode}
          />
        );
      })}
    </View>
  );
}
function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    tabbar: {
      position: 'absolute',
      bottom: 50,
      backgroundColor: colors.tabbar,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 40,
      paddingVertical: 25,
      borderRadius: 35,
    },
  });
}
