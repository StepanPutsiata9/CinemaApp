import { useSelectedMovie } from '@/features/selectedMovie';
import { useRouter } from 'expo-router';
import { memo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../types';

interface IMoviesList {
  movies: Movie[];
}

export const MoviesList = memo(function MoviesList({ movies }: IMoviesList) {
  const router = useRouter();
  const { selectMovie } = useSelectedMovie();

  const handleMovie = (id: number) => {
    router.push('/(root)/(movieInfo)/movieInfo');
    selectMovie(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {movies.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, index % 3 === 2 && styles.lastInRow]}
            onPress={() => handleMovie(item.id)}
          >
            <Image
              source={item.url ? { uri: item.url } : require('@/assets/images/icon.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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
