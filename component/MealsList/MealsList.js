import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';


function MealsList({items}) {
    function renderMealItem(itemData) {
        const item = itemData.item;
    
        const mealItemProps = {
          id: item.id,
          title: item.title,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
          imageUrl: item.imageUrl,
        };
        return <MealItem {...mealItemProps} />;
      }
    
      return (
        <View style={styles.constainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealsList;

const styles = StyleSheet.create({
    constainer: {
      flex: 1,
      padding: 16,
    },
  });