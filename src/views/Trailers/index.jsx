import React from 'react';
import { ScrollView, Text, Flatlist } from 'react-native';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/upcomingAction';
import UpcomingMovieList from '../../components/UpcomingMovieList'
import styles from './style';

class Trailers extends React.Component {
  // async componentDidMount() {
  //   await this.props.getUpcomingMovies();
  // }

  render() {
    return (
      <ScrollView>
        <Text style={{ color: 'white' }}>inside trailers!!</Text>
      </ScrollView>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     upcomingMovies: state.upcomingMovies
//   };
// };
//
// export default connect(mapStateToProps, { getUpcomingMovies })(Trailers);
