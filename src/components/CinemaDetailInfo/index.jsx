
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import styles from './style';
import { getCinemaDetails } from '../../actions/cinemaAction'

class CinemaDetailInfo extends React.Component {
  componentDidMount() {
    // onPress={boardId => navigate('Board', { boardId })} in Cinemas
    // const { navigation } = this.props;
    // const cinemaId = navigation.getParam('cinemaId', 0);
    // console.log(this.cinemaId);
    // const cinemaDetails = getCinemaDetails(cinemaId);
    // console.log('GET CINEMAS DETAILS HERE!!!!', cinemaDetails);

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Cinema Detailss INNFFOO</Text>
      </View>
    )
  }
}

export default connect(null, { getCinemaDetails })(CinemaDetailInfo);
