import React from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import styles from './style';

const CinemaList = ({ cinemas, onPress }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={cinemas.sort((a, b) => a.name.localeCompare(b.name))}
        extraData={cinemas}
        renderItem={({ item: { id, name, website } }) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() => onPress(id, name, website)}
            >
              <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.website}>{website}</Text>
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
