import AppleHealthKit, {
  HealthInputOptions,
  HealthObserver,
  HealthValue,
} from 'react-native-health';
import {NativeAppEventEmitter} from 'react-native';
import {appleHealthKitOptions} from '../../../components/configs/permissions';

export const getWalkingSamples = (firstDate: string, lastDate: string) => {
  const options = {
    startDate: firstDate,
    lastDate: lastDate,
    type: HealthObserver.Walking,
  };

  AppleHealthKit.getSamples(options, (err: Object, results: Array<Object>) => {
    if (err) {
      return;
    }
    console.log('Walking Samples', results);
  });
};

export const initHKListener = (setSteps: () => void) =>
  NativeAppEventEmitter.addListener(
    'healthKit:StepCount:setup:success',
    setSteps,
  );

export const updateHKSteps = (setSteps: () => void) =>
  NativeAppEventEmitter.addListener('healthKit:StepCount:new', setSteps);

// Get today's step
export const getHKStepCount = (
  setSteps: (allowed: boolean, steps: number, error: string) => void,
): {
  allowed: boolean;
  steps: number;
  error: string;
} => {
  var response = {
    allowed: false,
    steps: 0,
    error: '',
  };

  AppleHealthKit.initHealthKit(appleHealthKitOptions, (error: string) => {
    if (error) {
      response.allowed = false;
      setSteps(false, 0, 'HealthKit permission rejected');
      return;
    }

    // HealthKit Initialized. Can now read and write
    response.allowed = true;

    const options: HealthInputOptions = {
      date: new Date().toISOString(),
      includeManuallyAdded: false,
    };

    AppleHealthKit.getStepCount(
      options,
      (err: Object, results: HealthValue) => {
        if (err) {
          //@ts-ignore
          setSteps(response.allowed, 0, err.message);
          return;
        }
        response.steps = results.value;
        setSteps(response.allowed, response.steps, response.error);
      },
    );
  });

  return response;
};

// Get weekly step
export const getHKTotalSteps = () => {
  AppleHealthKit.initHealthKit(appleHealthKitOptions, (error: string) => {
    if (error) {
      console.log('[ERROR] Cannot grant permission');
    }

    const todayDate = new Date();
    const first = todayDate.getDate() - (todayDate.getDay() + 6);
    const last = first + 6;

    const firstDate = new Date(todayDate.setDate(first)).toISOString(); // Monday
    const lastDate = new Date(todayDate.setDate(last)).toISOString(); // Sunday

    // HealthKit Initialized. Can now read and write
    const options: HealthInputOptions = {
      startDate: firstDate,
      endDate: lastDate,
    };

    AppleHealthKit.getDailyStepCountSamples(
      options,
      (err: Object, results: Array<Object>) => {
        if (err) {
          return;
        }
        console.log('Daily Steps Count', results);
        return results;
      },
    );
  });
};

// Get distance
export const getHKDistance = (callback: (result: Object[]) => void) => {
  AppleHealthKit.initHealthKit(appleHealthKitOptions, (error: string) => {
    if (error) {
      console.log('[ERROR] Cannot grant permission');
    }

    // HealthKit Initialized. Can now read and write
    const options: HealthInputOptions = {
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      type: 'Walking' as HealthObserver,
    };

    AppleHealthKit.getSamples(
      options,
      (err: Object, results: Array<Object>) => {
        if (err) {
          return;
        }
        console.log('Current Distance ', results);
        callback(results);
      },
    );
  });
};

// Get calories
export const getHKCaloriesBurned = () => {
  AppleHealthKit.initHealthKit(appleHealthKitOptions, (error: string) => {
    if (error) {
      console.log('[ERROR] Cannot grant permission');
    }

    // HealthKit Initialized. Can now read and write
    const options: HealthInputOptions = {
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };

    AppleHealthKit.getActiveEnergyBurned(
      options,
      (err: Object, results: HealthValue[]) => {
        if (err) {
          return;
        }
        console.log('Calories Burned ', results);
        return results;
      },
    );
  });
};
