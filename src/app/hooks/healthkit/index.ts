import AppleHealthKit, {
  HealthValue,
  HealthInputOptions,
} from 'react-native-health';

import {appleHealthKitOptions} from '../../../components/configs/permissions';

export const useHKStepCount = () => {
  AppleHealthKit.initHealthKit(appleHealthKitOptions, (error: string) => {
    if (error) {
      console.log('[ERROR] Cannot grant permission');
    }

    // HealthKit Initialized. Can now read and write
    const options: HealthInputOptions = {
      date: new Date().toISOString(),
      includeManuallyAdded: false,
    };

    AppleHealthKit.getStepCount(
      options,
      (err: Object, results: HealthValue) => {
        if (err) {
          return;
        }
        console.log('Step Count Results', results);
        return results;
      },
    );
  });
};

export const useHKTotalSteps = () => {
  AppleHealthKit.initHealthKit(appleHealthKitOptions, (error: string) => {
    if (error) {
      console.log('[ERROR] Cannot grant permission');
    }

    const todayDate = new Date();
    const first = todayDate.getDate() - todayDate.getDay();
    const last = first + 6;

    const firstDate = new Date(todayDate.setDate(first)).toISOString();
    const lastDate = new Date(todayDate.setDate(last)).toISOString();

    // HealthKit Initialized. Can now read and write
    const options: HealthInputOptions = {
      startDate: firstDate, // required
      endDate: lastDate, // optional; default now
    };

    AppleHealthKit.getDailyStepCountSamples(
      options,
      (err: Object, results: Array<Object>) => {
        if (err) {
          return;
        }
        console.log('Daily Step Count Results', results);
        return results;
      },
    );
  });
};
