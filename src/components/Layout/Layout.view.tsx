import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Button from '@components/Button';
import {LayoutProps} from './Layout.type';


const _Layout: React.FC<LayoutProps> = ({buttonType, data, renderEmpty, renderItem}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data} 
        keyExtractor={(_, index) => index.toString()}
        renderItem={!!renderItem && renderItem}
      />

      <Button type={buttonType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingTop: 15,
    flex: 1,
  },
});

const Layout = React.memo(_Layout);

export default Layout;
