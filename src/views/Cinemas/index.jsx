import React from 'react';
import { View, Text, Flatlist } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import CinemaDetail from '../CinemaDetail';
import CinemaList from '../../components/CinemaList';
import styles from './style';
import { getCinemas } from '../../actions/cinemaAction';

class Cinemas extends React.Component {
  async componentDidMount() {
    await this.props.getCinemas();
  }

  render() {
    const { navigation: {navigate} } = this.props
    return (
      <View style={styles.container}>
        <CinemaList
          onPress={(id, name, website) =>
            navigate('CinemaDetail', { id, name, website })
          }
          cinemas={this.props.cinemas}
        />
      </View>
    )
  }
}
// export default connect(null, { getCinemas })(Cinemas);
const mapStateToProps = (state) => {
  console.log("state in mapStateToProps", state)
  return {
    cinemas: state.cinemas
  }
};

export default connect(mapStateToProps, { getCinemas })(Cinemas);
