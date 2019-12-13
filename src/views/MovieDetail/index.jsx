import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux'
import styles from './style';
import MovieDetailInfo from '../../components/MovieDetailInfo';

class MovieDetail extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <MovieDetailInfo
          cinemaMovie={this.props.movieDetails[0]}
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
