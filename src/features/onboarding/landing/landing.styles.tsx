import {StyleSheet} from 'react-native';

const styles = (vh: number, vw?: number) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: vh * 15,
    },
    appLogo: {
      width: vh * 20,
      height: vh * 20,
    },
    appTitle: {
      letterSpacing: 5.0,
      fontSize: 24,
    },
    headlineContainer: {
      alignItems: 'center',
      marginTop: vh * 20,
    },
    headline: {
      fontSize: 14,
    },
    button: {
      marginTop: vh * 10,
      width: vw ? vw * 60 : 150,
    },
  });

export default styles;
