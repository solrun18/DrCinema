import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import styles from './style';
import CinemaDetailInfo from '../../components/CinemaDetailInfo';
import { getCinemaMovies } from '../../actions/cinemaAction';

class CinemaDetail extends React.Component {
  async componentDidMount() {
    await this.props.getCinemaMovies(this.props.cinemaDetails[0].id);
  }

  render() {
    const { navigation: {navigate} } = this.props;
    return (
      <View style={styles.container}>
        <CinemaDetailInfo
          cinemaDetails={this.props.cinemaDetails}
          cinemaMovies={this.props.cinemaMovies}
          onPress={(id, name, image, releaseYear, genres) => navigate('MovieDetail', { id, name, image, releaseYear, genres })}
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
