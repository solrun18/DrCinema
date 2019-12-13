import React from 'react';
import PropTypes from 'prop-types';
import { WebView, Text, View, TouchableHighlight } from 'react-native';
import YouTube from 'react-native-youtube';
import Modal from '../Modal';
import { Video } from 'expo';

class TrailerModal extends React.Component {
  render() {
    const {isOpen, closeModal, trailerList} = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text>halloo</Text>
      </Modal>
    )
  }
}
export default TrailerModal;
