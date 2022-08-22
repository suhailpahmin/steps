import {StyleSheet} from 'react-native';
import {colors} from '../../components/configs';

const styles = (vh?: number) =>
  StyleSheet.create({
    container: {
      padding: 16,
    },
    cardWrapper: {
      marginVertical: 36,

      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    card: {
      height: vh ? vh * 16 : 0,
      width: vh ? vh * 16 : 0,
      backgroundColor: colors.accent,

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 16,
    },
    cardValue: {
      textAlign: 'center',
      marginBottom: 8,

      color: colors.secondary,
    },
    cardTitle: {
      color: colors.overlay,

      textAlign: 'center',
    },
  });

export default styles;
