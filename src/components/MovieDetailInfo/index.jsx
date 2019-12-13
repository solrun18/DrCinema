import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
import styles from './style';
import { getMovieDetailsById } from '../../actions/movieAction';
import MovieShowtimes from '../MovieShowtimes';
import { Icon } from 'react-native-elements';

const MovieDetailInfo = ({ cinemaMovie }) =>{
  return (
      <View style={styles.detailContainer}>
        <View style={styles.header}>
          <Text style={styles.movieTitle}>{cinemaMovie.name}</Text>
          <Text style={styles.movieYear}>{cinemaMovie.releaseYear}</Text>
        </View>
          <Image
            style={styles.moviePoster}
            source={{uri: cinemaMovie.image}}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.movieGenres}>{cinemaMovie.genres}</Text>
            <View style={styles.durationContainer}>
              <Icon
                name="access-time"
                type="material"
                color="white"
                iconStyle={styles.icon}
                containerStyle={styles.iconContainer}
              />
              <Text style={styles.movieDuration}>{cinemaMovie.duration}</Text>
            </View>
          </View>
          <Text style={styles.plot}>Söguþráður:</Text>
          <Text style={styles.moviePlot}>{cinemaMovie.plot}</Text>
        <MovieShowtimes
          showtimes={cinemaMovie.showtimes}
        />
      </View>
  )
}
export default MovieDetailInfo;
