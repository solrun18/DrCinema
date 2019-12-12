import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux'
import styles from './style';
import { getMovieDetailsById } from '../../actions/movieAction';
import MovieDetailInfo from '../../components/MovieDetailInfo';

class MovieDetail extends React.Component {
  render() {
    return(
      <ScrollView>
        <MovieDetailInfo
          cinemaMovie={this.props.movieDetails}
        />
      </ScrollView>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    movieDetails: state.cinemaMovies.filter((movie) => movie.id === ownProps.navigation.state.params.id)
  };
};

export default connect(mapStateToProps)(MovieDetail);
