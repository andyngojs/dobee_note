import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// 3-party libs
import {SafeAreaView} from 'react-native-safe-area-context';
// config
import appConfig from '@app/config';
// types
import {AppIntroProps} from '.';
// hooks
import useAppIntroHook from './AppIntro.hook';
// images
import SVGBannerIntro from '@assets/images/banner_intro.svg';

const BANNER_IMAGE_WIDTH = appConfig.device.width * 0.8;
const BANNER_IMAGE_HEIGHT = appConfig.device.height * 0.5;

const AppIntro: React.FC<AppIntroProps> = ({navigation}) => {
  const {handlePressGetStarted} = useAppIntroHook({navigation});

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View style={styles.imageContainer}>
        <SVGBannerIntro
          width={'100%'}
          height={'100%'}
          fill={appConfig.color.primaryColor}
        /> 
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Daily Notes</Text>
        <Text style={styles.description}>
          Take notes, reminders, set targets, collect resources and secure
          privacy.
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.btnContainer}
        onPress={handlePressGetStarted}>
        <Text style={styles.buttonLabel}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  imageContainer: {
    width: BANNER_IMAGE_WIDTH,
    height: BANNER_IMAGE_HEIGHT,
  },
  title: {
    fontSize: 28,
    color: appConfig.color.black,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  description: {
    color: appConfig.color.black,
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  btnContainer: {
    backgroundColor: appConfig.color.primaryColor,
    padding: 18,
    borderRadius: 28,
    marginTop: 15,
  },
  buttonLabel: {
    fontSize: 18,
    color: appConfig.color.white,
    paddingHorizontal: 15,
  },
});

export default AppIntro;
