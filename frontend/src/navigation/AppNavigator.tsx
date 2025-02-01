// frontend/src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PatientDashboard from '../screens/PatientDashboard';
import FamilyDashboard from '../screens/FamilyDashboard';
import DoctorDashboard from '../screens/DoctorDashboard';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  PatientDashboard: undefined;
  FamilyDashboard: undefined;
  DoctorDashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
        <Stack.Screen name="FamilyDashboard" component={FamilyDashboard} />
        <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
