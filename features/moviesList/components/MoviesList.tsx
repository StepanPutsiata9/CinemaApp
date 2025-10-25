import { useSelectedMovie } from '@/features/selectedMovie';
import { useRouter } from 'expo-router';
import { memo, useCallback } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../types';

interface IMoviesList {
  movies: Movie[];
}

const NUM_COLUMNS = 3;

export const MoviesList = memo(function MoviesList({ movies }: IMoviesList) {
  const router = useRouter();
  const { selectMovie } = useSelectedMovie();

  const handleMovie = useCallback(
    (id: number) => {
      router.push('/(root)/(movieInfo)/movieInfo');
      selectMovie(id);
    },
    [router, selectMovie]
  );

  const renderItem = useCallback(
    ({ item, index }: { item: Movie; index: number }) => {
      const isLastInRow = (index + 1) % NUM_COLUMNS === 0;

      return (
        <TouchableOpacity
          style={[styles.card, isLastInRow && styles.lastInRow]}
          onPress={() => handleMovie(item.id)}
        >
          <Image
            source={item.url ? { uri: item.url } : require('@/assets/images/icon.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
      );
    },
    [handleMovie]
  );

  const keyExtractor = useCallback((item: Movie) => item.id.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={NUM_COLUMNS}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true} // Важно для производительности
        maxToRenderPerBatch={10} // Ограничиваем количество рендерящихся элементов
        windowSize={5} // Уменьшаем область рендеринга
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  card: {
    width: '31%',
    aspectRatio: 2 / 3,
    marginRight: '3.5%',
    marginBottom: 12,
  },
  lastInRow: {
    marginRight: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
