import { FlatList, StyleSheet, Text, View } from 'react-native';

export const PopularMoviesList = ({ items = [] }: { items: any[] }) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View style={styles.item}>
            <Text style={styles.itemText}>Товар {item.number}</Text>
            <Text style={styles.itemDescription}>Описание товара {item.number}</Text>
          </View>
        );
      }}
      contentContainerStyle={styles.content}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 20,
  },
  item: {
    backgroundColor: '#fafafa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: 150,
    height: 200,
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
