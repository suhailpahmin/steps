import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {
  Button,
  ButtonType,
  Container,
  RadioGroup,
  SafeArea,
  Text,
  TextInput,
  TextSize,
} from '@ui';

import DatePicker from 'react-native-modern-datepicker';

import {useAppDispatch, useViewportUnits} from '@hooks';
import {useNavigation} from '@react-navigation/native';

import styles from './personalize.styles';

import {cwPersonalization} from '../../../components/configs/copywriting';
import {colors} from '../../../components/configs/colors';
import {
  cwButtons,
  Genders,
  MinYear,
  OnboardingRouters,
} from '../../../components/configs';
import {setUser} from '../../../app/redux/slices/user';
import {setGoals} from '../../../app/redux/slices/fitness';

const PersonalizationScreen = () => {
  const {vh} = useViewportUnits();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [gender, setGender] = useState(Genders[0]);

  // Date Picker
  const [yearBorn, setYearBorn] = useState(MinYear);
  const minYear: number = Number(MinYear);
  const [showDatePicker, setToggleDatePicker] = useState(false);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState(0);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const _toggleDatePicker = () => {
    setToggleDatePicker(!showDatePicker);
  };

  const _setSelectedDate = (selectedDate: string) => {
    const year: string = selectedDate.substring(0, 4);
    setYearBorn(year);
  };

  const _setHeight = (value: string) => {
    setHeight(value);
    _validateFields();
  };

  const _setWeight = (value: string) => {
    setWeight(value);
    _validateFields();
  };

  const _setGoal = (value: string) => {
    const newValue = Number(value);
    if (newValue >= 0) {
      setGoal(newValue);
      _validateFields();
    }
  };

  const _validateFields = () => {
    if (height === '' || weight === '' || goal <= 0) {
      setButtonEnabled(false);
      return;
    }

    setButtonEnabled(true);
  };

  const _navigateToSetGoals = () => {
    const userState = {
      firstTime: true,
      gender: gender,
      yearBorn: Number(yearBorn),
      weight: Number(weight),
      height: Number(height),
    };
    dispatch(setUser(userState));
    dispatch(setGoals(goal));
    navigation.navigate(OnboardingRouters.permissions);
  };

  return (
    <SafeArea>
      <ScrollView>
        <Container style={styles().container}>
          <Text style={styles().title} size={TextSize.LG} bold>
            {cwPersonalization.title}
          </Text>
          {/* Gender */}
          <View style={styles().wrapper}>
            <Text size={TextSize.MD} bold>
              {cwPersonalization.gender}
            </Text>
            <RadioGroup
              style={styles().wrapper}
              labels={Genders}
              selectedValue={gender}
              onSelect={setGender}
            />
          </View>
          {/* Year Born */}
          <View style={styles().wrapper}>
            <Text size={TextSize.MD} bold>
              {cwPersonalization.born}
            </Text>
            <Button
              style={styles(vh).yearButton}
              type={ButtonType.TERTIARY}
              label={yearBorn}
              onPress={_toggleDatePicker}
            />
          </View>
          {/* Height */}
          <View style={styles().wrapper}>
            <Text size={TextSize.MD} bold>
              {cwPersonalization.height}
            </Text>
            <TextInput
              style={styles(vh).input}
              placeholder="Enter height in cm"
              keyboardTypes="number-pad"
              onChangeText={_setHeight}
              maxLength={3}
            />
          </View>
          {/* Weight */}
          <View style={styles().wrapper}>
            <Text size={TextSize.MD} bold>
              {cwPersonalization.weight}
            </Text>
            <TextInput
              style={styles(vh).input}
              placeholder="Enter weight in kg"
              keyboardTypes="number-pad"
              onChangeText={_setWeight}
              maxLength={3}
            />
          </View>
          {/* Goal */}
          <View style={styles().wrapper}>
            <Text size={TextSize.MD} bold>
              {cwPersonalization.goal}
            </Text>
            <TextInput
              style={styles(vh).input}
              placeholder="Enter daily steps goal"
              keyboardTypes="number-pad"
              onChangeText={_setGoal}
              maxLength={5}
            />
          </View>
          {showDatePicker ? (
            <View style={styles(vh).dateContainer}>
              <DatePicker
                mode="monthYear"
                selectorStartingYear={minYear}
                options={{
                  mainColor: colors.primary,
                }}
                onMonthYearChange={_setSelectedDate}
                selected={yearBorn}
              />
              <Button
                type={ButtonType.PRIMARY}
                label={'Close'}
                onPress={_toggleDatePicker}
              />
            </View>
          ) : null}
          <Button
            style={styles(vh).button}
            type={ButtonType.PRIMARY}
            label={cwButtons.next}
            onPress={_navigateToSetGoals}
            disabled={!buttonEnabled}
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default PersonalizationScreen;
