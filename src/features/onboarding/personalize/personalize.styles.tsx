import {StyleSheet} from 'react-native';

const styles = (vh?: number) =>
  StyleSheet.create({
    container: {
      padding: 16,
    },
    wrapper: {
      marginTop: 24,
    },
    title: {
      marginBottom: 16,
    },
    yearButton: {
      width: vh ? vh * 30 : 160,
      marginTop: 16,
    },
    dateContainer: {
      position: 'absolute',
      top: vh ? vh * 20 : 0,
      left: 16,
      right: 0,
      bottom: 0,

      width: vh ? vh * 40 : 0,
      height: vh ? vh * 45 : 0,

      backgroundColor: '#FFFFFF',
    },
    input: {
      width: vh ? vh * 30 : 0,
      marginTop: 16,
    },
    button: {
      marginTop: vh ? vh * 6 : 0,
    },
  });

export default styles;
