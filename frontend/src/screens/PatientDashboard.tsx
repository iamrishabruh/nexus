// frontend/src/screens/PatientDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'PatientDashboard'>;

const PatientDashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Dashboard</Text>
      <Text>Welcome, Patient! Here you can track your health data, log daily metrics, and manage medication reminders.</Text>
      <Button title="Log Health Data" onPress={() => { /* Navigate to a Log Health Data screen */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default PatientDashboard;
