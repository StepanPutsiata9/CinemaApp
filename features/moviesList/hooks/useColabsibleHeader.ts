import { useRef } from 'react';
import { Animated } from 'react-native';
interface IHeaderConfigProps {
  expandedHeight?: number;
  collapsedHeight?: number;
  fadeStart?: number;
  fadeEnd?: number;
  translateStart?: number;
  translateEnd?: number;
}
export const useCollapsibleHeader = (config: IHeaderConfigProps) => {
  const {
    expandedHeight = 100,
    collapsedHeight = 60,
    fadeStart = 0,
    fadeEnd = 50,
    translateStart = 0,
    translateEnd = 50,
  } = config;

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [expandedHeight, collapsedHeight],
    extrapolate: 'clamp',
  });

  const greetingOpacity = scrollY.interpolate({
    inputRange: [fadeStart, fadeEnd],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const greetingTranslateY = scrollY.interpolate({
    inputRange: [translateStart, translateEnd],
    outputRange: [0, -10],
    extrapolate: 'clamp',
  });

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
    useNativeDriver: false,
  });

  return {
    scrollY,
    headerHeight,
    greetingOpacity,
    greetingTranslateY,
    onScroll,
  };
};
