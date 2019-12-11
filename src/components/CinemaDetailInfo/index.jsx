
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import styles from './style';
import { getCinemaDetails } from '../../actions/cinemaAction'

class CinemaDetailInfo extends React.Component {
  state= {
    cinemaDetails: [],
  }

  async componentDidMount() {
    const { getCinemaDetails } = this.props;
    console.log(this.props);
    const newCinemaDetails = await getCinemaDetails(1);
    console.log('GET CINEMAS DETAILS HERE!!!!', newCinemaDetails);
    this.setState({
      cinemaDetails: newCinemaDetails
    })

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
