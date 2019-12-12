import React from 'react';
import NativeModal from 'react-native-modal';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './style';

const Modal = ({
  isOpen, closeModal, title, children,
}) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop="true"
    animationType="slide"
    onRequestClose={closeModal}
    onBackButtonPress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['up', 'down', 'left', 'right']}
    style={styles.modal}
  >
    <View styles={styles.body}>
      <Text>{ title }</Text>
      {children}
    </View>
  </NativeModal>
);

Modal.defaultProps = {
  title: '',
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};


export default Modal;
