import React, {useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Layout from '@components/Layout';
import {BUTTON_TYPE_ADD_NOTE} from '@src/constants';
import {useAppSelector} from '@app/hooks';
import {INote} from '@model/notes';

const NoteList = () => {
  const notes = useAppSelector(state => state.notes);

  const renderItem = useCallback(({item}: {item: INote}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }, []);

  return (
    <Layout
      buttonType={BUTTON_TYPE_ADD_NOTE}
      data={notes}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({});

export default NoteList;
