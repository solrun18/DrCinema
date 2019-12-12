import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import styles from './style';
import { getCinemaDetails } from '../../actions/cinemaAction'

class CinemaDetailInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Cinema Detailss INNFFOO</Text>
      </View>
    )
  }
}

export default connect(null, { getCinemaDetails })(CinemaDetailInfo);
