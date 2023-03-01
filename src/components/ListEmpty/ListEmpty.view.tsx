import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import appConfig from '@app/config';
import {IMAGES} from '@utils/Images';

const EMPTY_LIST_IMAGE_WIDTH = appConfig.device.width;
const EMPTY_LIST_IMAGE_HEIGHT =
  appConfig.device.height * IMAGES.EMPTY_LIST_IMAGE * 0.6;

const ListEmpty = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require('@assets/images/no_data.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>

      <Text style={{fontSize: 25, color: '#888', textAlign: 'center'}}>
        No notes here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: EMPTY_LIST_IMAGE_WIDTH,
    height: EMPTY_LIST_IMAGE_HEIGHT,
  },
});

export default ListEmpty;
