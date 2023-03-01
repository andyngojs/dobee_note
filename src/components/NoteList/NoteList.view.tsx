import React, {useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {INote} from '@model/notes';

import useNoteListHook from './NoteList.hook';

import {BUTTON_TYPE_ADD_NOTE} from '@src/constants';

import Layout from '@components/Layout';
import ListEmpty from '@components/ListEmpty';

const NoteList = () => {
  const {notes, } = useNoteListHook();

  const renderItem = useCallback(
    ({item, index}: {item: INote; index: number}) => {
      return (
        <View>
          <Text>{item.title}</Text>
        </View>
      );
    },
    [],
  );

  const renderEmpty = useCallback(() => {
    return <ListEmpty />
  }, [])

  return (
    <Layout
      buttonType={BUTTON_TYPE_ADD_NOTE}
      data={notes}
      renderItem={renderItem}
      renderEmpty={renderEmpty}
    />
  );
};

const styles = StyleSheet.create({});

export default NoteList;
