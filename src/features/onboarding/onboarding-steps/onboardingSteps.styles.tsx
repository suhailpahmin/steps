import {StyleSheet} from 'react-native';
import {colors} from '../../../components/configs/colors';

const styles = (vh: number) =>
  StyleSheet.create({
    image: {
      width: vh * 50,
      height: vh * 40,
      resizeMode: 'cover',
    },
    overlay: {
      width: vh * 50,
      height: vh * 40,

      backgroundColor: colors.accent,
      opacity: 0.25,
    },
    subHeadline: {
      width: vh * 35,
      marginTop: 14,

      fontSize: 12,
      fontWeight: '600',
      lineHeight: 16,
    },
    wrapper: {
      flex: 1,
      padding: 8,
      justifyContent: 'space-around',
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      width: vh * 20,
    },
  });

export default styles;
