import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeParamListProps = {
  AppIntro: undefined;
  Home: undefined;
};

export type AppIntroNavigatorProps = NativeStackScreenProps<HomeParamListProps, 'AppIntro'>
