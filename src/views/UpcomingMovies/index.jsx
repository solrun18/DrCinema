import React from 'react';
import { ScrollView, Text, Flatlist } from 'react-native';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/upcomingAction';
import UpcomingMovieList from '../../components/UpcomingMovieList'
import styles from './style';
import Trailers from '../Trailers';

class UpcomingMovies extends React.Component {
  async componentDidMount() {
    await this.props.getUpcomingMovies();
  }

  render() {
    const { navigation: {navigate} } = this.props;
    return (
      <ScrollView style={styles.container}>
        <UpcomingMovieList
          upcomingMovies={this.props.upcomingMovies}
          onPress={(trailers) => navigate('Trailers', { trailers })}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upcomingMovies: state.upcomingMovies
  };
};

export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingMovies);
