// frontend/src/screens/FamilyDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'FamilyDashboard'>;

const FamilyDashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Family Dashboard</Text>
      <Text>Welcome, Family Member! You can view and update your loved one's health data and medication reminders.</Text>
      <Button title="View Patient Data" onPress={() => { /* Navigate to view/update patient details */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default FamilyDashboard;
