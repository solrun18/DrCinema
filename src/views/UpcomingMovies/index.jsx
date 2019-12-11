import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import getUpcomingMovies from '../../actions/upcomingAction';
import styles from './style';

class UpcomingMovies extends React.Component {
  // componentDidMount() {
  //   this.props.getUpcomingMovies();
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Halluuuuuuuuuuuuuuuuuuuu</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { upcomingMovies } = state
  return { upcomingMovies }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addFriend,
  }, dispatch)
);
export default connect(null, { getUpcomingMovies })(UpcomingMovies);
