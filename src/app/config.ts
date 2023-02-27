import { Dimensions } from "react-native";

class Config {
  private _primaryColor = '#4F4BBD';

  get device() {
    return {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,

    }
  }

  get color() {
    return {
      primaryColor: this._primaryColor,
      white: '#FFFFFF',
      black: '#000000',
      backgroundScene: '#1f1d2c',
      inactive: '#888'
    };
  }

}

const appConfig = new Config();

export default appConfig;
