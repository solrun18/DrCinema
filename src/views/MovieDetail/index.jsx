import React from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
import styles from './style';
import { getMovieDetailsById } from '../../actions/movieAction';
import MovieDetailInfo from '../../components/MovieDetailInfo';

class MovieDetail extends React.Component {
  render() {
    return(
      <View>
        <Text>LOLLLLOLOLOLO</Text>
      </View>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    movieDetails: state.cinemaMovies.filter((movie) => movie.id === ownProps.navigation.state.params.id)
  };
};

export default connect(mapStateToProps)(MovieDetail);
