# Steps

Steps is a fitness mobile application that tracks your step counts. Stay updated with your recent records and beat your highest steps count!

## Installation

```
git clone https://github.com/suhailpahmin/steps.git
npm install (Note: Update react-native-health folder to avoid applicatiom from crashing)
cd ios
pod install
cd ..
npx react-native run-ios
```

## Major Libraries

- React Redux & @ReduxJs/Toolkit (State Management)
- Redux Persist (App works offline)
- React Native Svg (To display Tab Navigation icons)
- React Native Vector Image (To display Tab Navigation icons)
- React Native Health (To track user's fitness activities)
- React Native Geolocation Service (To get location for weather API)
- Axios (To call OpenWeather API)
- React Navigation (To navigate around the app)

## Tasks

- [x] Integrate with Apple Health Kit
- [x] See the weather of my current location
- [x] Give consent to access to Apple Health
- [ ] Able to view my past 7 days steps, distance, and hit daily goals
- [ ] View my steps stats for today
- [x] Set walking goals

## Sitemap

- [x] Onboarding Screen
- [x] Main Screen
- [ ] Step History Screen
- [ ] Weather

## Tech Requirement

- [x] Application built in React Native & iOS
- [x] Typescript
- [x] Redux
- [x] Call Weather API via Redux
- [ ] Snapshot Testing
- [x] App works offline
