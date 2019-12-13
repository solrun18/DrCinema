import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/upcomingAction';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import styles from './style';

class UpcomingMovies extends React.Component {
  async componentDidMount() {
    await this.props.getUpcomingMovies();
  }

  render() {
    const { navigation: {navigate} } = this.props;
    return (
      <ScrollView style={styles.container}>
        <UpcomingMovieList
          onPress={(trailers) => navigate('Trailers', { trailers })}
          upcomingMovies={this.props.upcomingMovies}
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
