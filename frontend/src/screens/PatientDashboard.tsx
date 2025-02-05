// src/screens/PatientDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'PatientDashboard'>;

const PatientDashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Patient Dashboard</Text>
        <Text style={styles.text}>Welcome, Patient! Here you can track your daily health metrics, log data, and manage medication reminders.</Text>
        <Button title="Log Health Data" onPress={() => { /* Placeholder action */ }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flexGrow: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '600', marginBottom: 20, color: '#333' },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 20, color: '#555' },
});

export default PatientDashboard;
