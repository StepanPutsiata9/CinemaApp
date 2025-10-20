import { memo } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../types';

interface IMainMovie {
  movie: Movie;
}

export const MainMovie = memo(function MainMovie({ movie }: IMainMovie) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image source={{ uri: movie?.url }} style={styles.image} resizeMode="cover" />
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
