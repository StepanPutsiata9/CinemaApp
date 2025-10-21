import { useRouter } from 'expo-router';
import { memo } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../types';

interface IPopularMoviesList {
  movies: Movie[];
}
export const PopularMoviesList = memo(function PopularMoviesList({ movies }: IPopularMoviesList) {
  const router = useRouter();

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={movies}
      keyExtractor={movie => movie.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => router.push('/(root)/(movieInfo)/movieInfo')}>
            <Image source={{ uri: item?.url }} style={styles.image} resizeMode="cover" />
          </TouchableOpacity>
        );
      }}
      contentContainerStyle={styles.content}
    />
  );
});

const styles = StyleSheet.create({
  content: {
    gap: 15,
    marginBottom: 12,
  },
  image: {
    borderRadius: 20,
    marginBottom: 8,
    width: 150,
    height: 200,
  },
});
