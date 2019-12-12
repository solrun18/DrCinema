import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import styles from './style';
import { getCinemaDetails } from '../../actions/cinemaAction'

class CinemaDetailInfo extends React.Component {
  state= {
    cinemaDetails: '',
  }

  async componentDidMount() {
    const newCinemaDetails = await getCinemaDetails(1);
    this.setState({
      cinemaDetails: newCinemaDetails
    })

  }
  render() {
    console.log('GET CINEMAS DETAILS HERE!!!!', this.state.cinemaDetails);
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Cinema Detailss INNFFOO</Text>
      </View>
    )
  }
}

export default connect(null, { getCinemaDetails })(CinemaDetailInfo);
