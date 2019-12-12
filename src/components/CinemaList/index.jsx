import React from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
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

CinemaList.propTypes = {
  cinemas: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CinemaList;
