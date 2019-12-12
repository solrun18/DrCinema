
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import styles from './style';
import CinemaDetailInfo from '../../components/CinemaDetailInfo';
import { getCinemaMovies } from '../../actions/cinemaAction';

class CinemaDetail extends React.Component {
  async componentDidMount() {
    await this.props.getCinemaMovies();
  }

  render() {
    console.log('inni i render', this.props.cinemaDetails)
    return (
      <View style={styles.container}>
        <CinemaDetailInfo
          cinemaDetails={this.props.cinemaDetails}
          cinemaMovies={this.props.cinemaMovies}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cinemaDetails: state.cinemas.filter((cinema) => cinema.id === ownProps.navigation.state.params.id),
    cinemaMovies: state.cinemaMovies,
  };
};

export default connect(mapStateToProps, { getCinemaMovies })(CinemaDetail);
