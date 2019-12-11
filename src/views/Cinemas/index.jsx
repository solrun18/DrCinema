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
    const allCinemas = await this.props.getCinemas();
    this.setState({
      cinemas: allCinemas
    });
  }
  render() {
    const { cinemas } = this.state;
      const { navigation: { navigate } } = this.props;
      return (
          <View style={ styles.container }>
            <Text style={styles.text}>fuk</Text>
            <CinemaList
              onPress={(id, name, website) =>
                navigate('CinemaDetail', { id, name, website })
              }
              cinemas={cinemas}
            />
          </View>
      )
  }
}
// export default connect(null, { getCinemas })(Cinemas);
const mapStateToProps = (state) => {
  return { cinemas: state };
};

export default connect(mapStateToProps, {getCinemas})(Cinemas);
