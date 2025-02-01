// frontend/src/screens/DoctorDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'DoctorDashboard'>;

const DoctorDashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Dashboard</Text>
      <Text>Welcome, Doctor! Here you can review patient health data and leave recommendations or notes.</Text>
      <Button title="Review Patient Data" onPress={() => { /* Navigate to a detailed patient review screen */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default DoctorDashboard;
