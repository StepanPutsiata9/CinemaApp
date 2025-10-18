// import { FlatList, StyleSheet, Text, View } from 'react-native';

// export const MoviesList = ({ items = [] }: { items: any[] }) => {
//   return (
//     <FlatList
//       showsVerticalScrollIndicator={false}
//       numColumns={3}
//       data={items}
//       scrollEnabled={false}
//       keyExtractor={item => item.id.toString()}
//       renderItem={({ item }) => {
//         return (
//           <View style={styles.item}>
//             <Text style={styles.itemText}>Товар {item.number}</Text>
//             <Text style={styles.itemDescription}>Описание товара {item.number}</Text>
//           </View>
//         );
//       }}
//       contentContainerStyle={styles.content}
//       columnWrapperStyle={styles.wrapper}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   content: {
//     paddingVertical: 16,
//     gap: 20,
//   },
//   wrapper: {
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   item: {
//     backgroundColor: '#fafafa',
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 8,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     width: '30%',
//     height: 125,
//   },
//   itemText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   itemDescription: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
// });

import { StyleSheet, Text, View } from 'react-native';

export const MoviesList = ({ items = [] }: { items: any[] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemText}>Товар {item.number}</Text>
            <Text style={styles.itemDescription}>Описание товара {item.number}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: -6, // Компенсируем margins
  },
  item: {
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: '30%', // 3 в строке
    height: 125,
    marginHorizontal: 6,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
