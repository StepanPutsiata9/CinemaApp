import { useSelectedMovie } from '@/features/selectedMovie';
import { useRouter } from 'expo-router';
import { memo } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
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

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleMovie(item.id)}>
      <Image
        source={item.url ? { uri: item?.url } : require('@/assets/images/icon.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
  card: {
    width: '31%',
    marginBottom: 12,
    aspectRatio: 2 / 3,
    marginRight: '3.5%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
