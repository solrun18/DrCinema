import React from 'react';
import { Image, TouchableOpacity ,ScrollView, View, Text, SafeAreaView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const CinemaDetailInfo = ({ cinemaDetails, cinemaMovies, onPress }) => {
  // const { navigation:{navigate}} = this.props;
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
      <FlatList
        numColumns={2}
        data={cinemaMovies}
        extraData={cinemaMovies}
        renderItem={({ item: { id, name, image, releaseYear, genres } }) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(id, name, image, releaseYear, genres)}
            >
              <View style={styles.movieContainer}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{releaseYear}</Text>
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                  />
                </View>
              </TouchableOpacity>
          );
        }}
        keyExtractor={(cinemaMovie) => cinemaMovie.id}
      />
    </ScrollView>
  );
};

CinemaDetailInfo.propTypes = {
  cinemaDetails: PropTypes.func.isRequired,
  cinemaMovies: PropTypes.func.isRequired,
};

export default CinemaDetailInfo;
