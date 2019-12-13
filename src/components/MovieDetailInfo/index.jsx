import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
import styles from './style';
import { getMovieDetailsById } from '../../actions/movieAction';
import Genres from '../Genres';
import MovieShowtimes from '../MovieShowtimes';

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
            <Genres
              genres={cinemaMovie.genres}
            />
            <Text style={styles.movieDuration}>{cinemaMovie.duration}</Text>
          <Text style={styles.moviePlot}>{cinemaMovie.plot}</Text>
        <MovieShowtimes
          showtimes={cinemaMovie.showtimes}
        />
      </View>
  )
}
export default MovieDetailInfo;
