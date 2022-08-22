import {StyleSheet} from 'react-native';

const styles = (vh?: number) =>
  StyleSheet.create({
    container: {
      height: vh ? vh * 75 : 0,
    },
    steps: {
      fontSize: 48,
      letterSpacing: 8,
      marginTop: 36,
      marginBottom: 24,
    },
    distance: {
      fontSize: 14,
      marginBottom: 16,
    },
    weatherWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      justifyContent: 'center',
      alignItems: 'center',
      height: vh ? vh * 25 : 0,
    },
    weatherImage: {
      width: vh ? vh * 6 : 0,
      height: vh ? vh * 6 : 0,
    },
    weatherText: {
      marginVertical: 16,
    },
    temperature: {
      letterSpacing: 5,
    },
    ringWrapper: {
      height: vh ? vh * 90 : 0,
    },
    innerRingContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    progress: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

export default styles;
