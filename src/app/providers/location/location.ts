import {AppName} from './../../../components/configs/index';
import {Alert, Linking} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const _hasPermission = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };

  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow "${AppName}" to determine your location.`,
      '',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }

  return false;
};

export const getLocation = async (
  callback: (location?: Geolocation.GeoPosition | null) => void,
) => {
  const hasPermission = await _hasPermission();

  if (!hasPermission) {
    return;
  }

  Geolocation.getCurrentPosition(
    position => {
      callback(position);
    },
    error => {
      Alert.alert('[ERROR] Retrieving Location', error.message);
      callback(null);
    },
    {
      accuracy: {
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      distanceFilter: 0,
    },
  );
};
