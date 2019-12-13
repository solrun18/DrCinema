import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './style';

const Genres = ({ genres }) =>{
  return (
    <View>
      <FlatList
        columns={3}
        data={genres}
        renderItem={({ item: { Name } }) => {
          return (
              <Text style={styles.text}>{Name}</Text>
          )
        }}
      />
    </View>
  )
};

export default Genres;
