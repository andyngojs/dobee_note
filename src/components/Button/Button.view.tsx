import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import appConfig from '@app/config';

import {ButtonProps} from './Button.type';

const _Button: React.FC<ButtonProps> = ({type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      {type === 'add_folder' ? (
        <IconIonicons name="add" style={styles.iconButton} />
      ) : (
        <IconAntDesign name={'addfile'} style={styles.iconButton} />
      )}
    </TouchableOpacity>
  );
};

const Button = React.memo(_Button);

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: appConfig.device.width * 0.18,
    padding: 20,
    borderRadius: 40,
    backgroundColor: appConfig.color.primaryColor,

    position: 'absolute',
    bottom: 20,
    right: 5,
  },
  iconButton: {
    fontSize: 25,
    color: appConfig.color.white,
  },
});
