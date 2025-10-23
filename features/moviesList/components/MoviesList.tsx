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
      <View style={styles.itemsContainer}>
        {movies.map(movie => (
          <TouchableOpacity
            style={styles.card}
            key={movie.id.toString()}
            onPress={() => handleMovie(movie.id)}
          >
            <Image
              source={movie.url ? { uri: movie?.url } : require('@/assets/images/icon.png')}
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
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '31%',
    marginBottom: 12,
    aspectRatio: 2 / 3,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
