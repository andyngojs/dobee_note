import React from 'react';
import {View, Text} from 'react-native';

import Layout from '@components/Layout'
import { BUTTON_TYPE_ADD_FOLDER } from '@src/constants';

const FolderList = () => {
  return (
    <Layout buttonType={BUTTON_TYPE_ADD_FOLDER} />
  );
};

export default FolderList;
