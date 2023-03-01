import React, {useCallback} from 'react';
import {View, Text} from 'react-native';

import {IFolder} from '@model/folders';

import {BUTTON_TYPE_ADD_FOLDER} from '@src/constants';

import useFolderListHook from './FolderList.hook';

import Layout from '@components/Layout';

const FolderList = () => {
  const {folders} = useFolderListHook();

  const renderItem = useCallback(
    ({item, index}: {item: IFolder; index: number}) => {
      return (
        <View>
          <Text>{item.name}</Text>
        </View>
      );
    },
    [],
  );

  return (
    <Layout
      buttonType={BUTTON_TYPE_ADD_FOLDER}
      data={folders}
      renderItem={renderItem}
    />
  );
};

export default FolderList;
