import React, { memo } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

import appConfig from '@app/config';

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>Notes</Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.buttonHeader}>
            <Icon
              name="ios-search"
              style={{fontSize: 25, color: appConfig.color.black}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonHeader}>
            <Icon
              name={'ellipsis-horizontal-circle'}
              style={{fontSize: 25, color: appConfig.color.black}}
            />
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  title: {
    fontSize: 27,
    color: appConfig.color.black,
    fontWeight: '600',
  },
  buttonHeader: {
    paddingHorizontal: 10, 
    paddingVertical: 6
  }
});

export default memo(Header)
