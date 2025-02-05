// src/screens/DoctorDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'DoctorDashboard'>;

const DoctorDashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Doctor Dashboard</Text>
        <Text style={styles.text}>
          Welcome, Doctor! Here you can review patient health data, leave recommendations, and manage patient records.
        </Text>
        <Button title="Review Patient Data" onPress={() => { /* Placeholder action */ }} />
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

export default DoctorDashboard;
