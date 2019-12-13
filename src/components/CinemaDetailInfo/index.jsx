import React from 'react';
import { Image, TouchableOpacity ,ScrollView, View, Text, SafeAreaView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import CinemaMovieList from '../CinemaMovieList';
import styles from './style';

const CinemaDetailInfo = ({ cinemaDetails, cinemaMovies, onPress }) => {
  return (
    <ScrollView>
      <FlatList
        data={cinemaDetails}
        extraData={cinemaDetails}
        style={styles.container}
        renderItem={({ item: { name, description, address, phone, website, city } }) => {
          return (
            <View>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.text}>{address}, {city}</Text>
              <Text style={styles.text}>{phone}</Text>
              <Text style={styles.text}>{website}</Text>
            </View>
          );
        }}
        keyExtractor={(cinemaDetail) => cinemaDetail.id}
      />
      <CinemaMovieList
        cinemaMovies={cinemaMovies}
        onPress={(id, name, image, releaseYear, genres )=> onPress(id, name, image, releaseYear, genres)}
      />
    </ScrollView>
  );
};

CinemaDetailInfo.propTypes = {
  cinemaDetails: PropTypes.func.isRequired,
  cinemaMovies: PropTypes.func.isRequired,
};

export default CinemaDetailInfo;
