import { useRouter } from 'expo-router';
import { memo } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../types';

interface IMainMovieProps {
  movie: Movie;
}

export const MainMovie = memo(function MainMovie({ movie }: IMainMovieProps) {
  const router = useRouter();
  const handleMovie = (id: number) => {
    router.push(`/(root)/(movieInfo)/movieInfo?=${id}`);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleMovie(movie.id)}>
      <Image
        source={movie.url ? { uri: movie?.url } : require('@/assets/images/icon.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
