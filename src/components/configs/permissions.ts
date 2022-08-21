import AppleHealthKit, {HealthKitPermissions} from 'react-native-health';

export const appleHealthKitOptions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.StepCount],
    write: [AppleHealthKit.Constants.Permissions.StepCount],
  },
} as HealthKitPermissions;
