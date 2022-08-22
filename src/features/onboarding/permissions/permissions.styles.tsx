import {StyleSheet} from 'react-native';
import {colors} from '../../../components/configs';

const styles = (vh?: number) =>
  StyleSheet.create({
    container: {
      padding: 16,
      height: vh ? vh * 85 : 50,

      justifyContent: 'space-between',
    },
    subtitle: {
      fontSize: 14,
      marginTop: 8,
      lineHeight: 20,
    },

    // HK Info
    hkImage: {
      marginEnd: 16,
      width: 32,
      height: 32,
    },
    hkWrapper: {
      marginTop: 24,
      padding: 16,

      borderRadius: 36,
      borderColor: colors.primary,
      borderWidth: 2,

      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    locationImage: {
      marginEnd: 16,
      resizeMode: 'contain',
      width: 28,
      height: 28,
    },
    logoWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    permissionWrapper: {
      width: 150,
    },
  });

export default styles;
