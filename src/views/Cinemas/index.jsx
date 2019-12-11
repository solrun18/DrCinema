import React from 'react';
import { View, Text, Flatlist } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { CinemaDetail } from '../CinemaDetail';
import styles from './style';
import { getCinemas } from '../../actions/cinemaAction';

class Cinemas extends React.Component {
    state = {
        cinemaList: []
    }
    onGetCinemas() {
        const { cinemaList } = this.state;
        this.setState({ cinemas: cinemaList });
        const { getCinemas } = this.props;
    }
    render() {
        const { cinemaList } = this.state;
        return (
            <View style={ styles.container }>
              <Text>fuk</Text>
              {/*<Flatlist
                data{cinemaList}
                extraData={cinemaList}
                renderItem={({ item: })}
                >
                </Flatlist>*/}
                {/* Her þurfum við navigation i CinemaDetail held ég*/}
            </View>
        )
    }
}

const mapStateToProps = ({
   name,
   website }) => ({
   cinemas: name,
   cinemas: website,
 });
export default connect(mapStateToProps)(Cinemas);
