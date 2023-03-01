import React, {useMemo, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import appConfig from '@app/config';

import {SceneRendererProps, NavigationState} from 'react-native-tab-view';
import {IRouteTab} from '@model/RouteTab';

import {FOLDER_LIST_TAB, NOTE_LIST_TAB, ROUTES_TAB} from '@constants/routeTab';

import useHomeHook from './Home.hook';

import Header from '@components/Header';
import NoteList from '@components/NoteList';
import FolderList from '@components/FolderList';

const INDICATOR_WIDTH = (appConfig.device.width / 2) / 4;

const Home: React.FC = () => {
  const {index, setIndex} = useHomeHook();

  const renderTabBar: (
    props: SceneRendererProps & {
      navigationState: NavigationState<IRouteTab>;
    },
  ) => React.ReactNode = useCallback(
    props => {
      return (
        <TabBar
          {...props}
          style={styles.tabBar}
          labelStyle={styles.labelTabBar}
          activeColor={appConfig.color.primaryColor}
          inactiveColor={appConfig.color.inactive}
          indicatorStyle={styles.indicator}
          pressColor={'transparent'}
        />
      );
    },
    [styles],
  );

  const renderScene = useMemo(
    () =>
      SceneMap({
        [NOTE_LIST_TAB]: NoteList,
        [FOLDER_LIST_TAB]: FolderList,
      }),
    [SceneMap],
  );

  return (
    <View style={styles.container}>
      <Header />

      <TabView
        navigationState={{index, routes: ROUTES_TAB}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: appConfig.device.width}}
        lazy
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: undefined,
    shadowColor: undefined,
  },
  labelTabBar: {
    color: appConfig.color.black,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  indicator: {
    backgroundColor: appConfig.color.primaryColor,
    width: INDICATOR_WIDTH,
    height: 3,
    borderRadius: 15,
    left: ((appConfig.device.width / 2) / 2) - (INDICATOR_WIDTH / 2),
  },
});

export default Home;
