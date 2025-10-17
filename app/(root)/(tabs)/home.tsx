import { Header, useCollapsibleHeader } from '@/features/moviesList';
import { IColorsTheme, useTheme } from '@/features/theme';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeTab = () => {
  const { headerHeight, greetingOpacity, greetingTranslateY, onScroll } = useCollapsibleHeader({
    expandedHeight: 120,
    collapsedHeight: 60,
  });
  const { colors } = useTheme();
  const styles = useStyles(colors);

  const verticalItems = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerHeight={headerHeight}
        greetingOpacity={greetingOpacity}
        greetingTranslateY={greetingTranslateY}
      />

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {verticalItems.map(item => (
          <View key={item} style={styles.item}>
            <Text style={styles.itemText}>Товар {item}</Text>
            <Text style={styles.itemDescription}>Описание товара {item}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingVertical: 16,
    },
    item: {
      backgroundColor: '#fafafa',
      padding: 16,
      borderRadius: 8,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    },
    itemText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    itemDescription: {
      fontSize: 14,
      color: '#666',
      marginTop: 4,
    },
  });
}

export default HomeTab;
