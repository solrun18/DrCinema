import React from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import styles from './style';

const CinemaList = ({ cinemas, onPress }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={cinemas}
        extraData={cinemas}
        style={styles.container}
        renderItem={({ item: { id, name, website } }) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => onPress(id, name, website)}
            >
              <View>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{website}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(cinema) => cinema.id}
      />
    </SafeAreaView>
  );
};

export default CinemaList;
