import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const CinemaDetailInfo = ({ cinemaDetails, cinemaMovies }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={cinemaDetails}
        extraData={cinemaDetails}
        style={styles.container}
        renderItem={({ item: { name, description, address, phone, website } }) => {
          return (
            <View style={styles.itemText}>
              <Text>{name}</Text>
              <Text>{description}</Text>
              <Text>{address}</Text>
              <Text>{phone}</Text>
              <Text>{website}</Text>
            </View>
          );
        }}
        keyExtractor={(cinemaDetail) => cinemaDetail.id}
      />
      <FlatList
        data={cinemaMovies}
        extraData={cinemaMovies}
        style={styles.container}
        renderItem={({ item: { name, image, releaseYear } }) => {
          return (
            <View style={styles.itemText}>
              <Text>{name}</Text>
              <Text>{image}</Text>
              <Text>{releaseYear}</Text>
            </View>
          );
        }}
        keyExtractor={(cinemaMovie) => cinemaMovie.id}
      />
    </SafeAreaView>
  );
};

CinemaDetailInfo.propTypes = {
  cinemaDetails: PropTypes.func.isRequired,
  cinemaMovies: PropTypes.func.isRequired,
};

export default CinemaDetailInfo;
