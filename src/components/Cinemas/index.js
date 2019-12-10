import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getCinemas } from '../../actions/cinemaAction';
import styles from './style';

class Cinemas extends React.Component {
    state = {
        cinemaList: []
    }
    onGetCinemas() {
        const { cinemaList } = this.state;
        this.setState({ cinemaList: cinemaList + 1 });
        const { getCinemas } = this.props;
        // incrementCounter(1);
    }
    render() {
        const { cinemaList } = this.state;
        return (
            <View style={ styles.container }>
                <Text>{ cinemaList }</Text>
                {/* Her þurfum við navigation i CinemaDetail held ég*/}
            </View>
        )
    }
}

// Returns a connected component
export default connect(null, { getCinemas })(cinemaList);
