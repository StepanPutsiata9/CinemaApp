import { useRouter } from 'expo-router';
import { memo } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../types';

interface IPopularMoviesListProps {
  movies: Movie[];
}
export const PopularMoviesList = memo(function PopularMoviesList({
  movies,
}: IPopularMoviesListProps) {
  const router = useRouter();
  const handleMovie = (id: number) => {
    router.push({
      pathname: '/(root)/(movieInfo)/movieInfo',
      params: { id },
    });
  };
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={movies}
      keyExtractor={movie => movie.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => handleMovie(item.id)}>
            <Image
              source={item.url ? { uri: item?.url } : require('@/assets/images/icon.png')}
              style={styles.image}
              resizeMode="cover"
            />
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
