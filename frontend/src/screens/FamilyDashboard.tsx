// src/screens/FamilyDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'FamilyDashboard'>;

const FamilyDashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Family Dashboard</Text>
        <Text style={styles.text}>
          Welcome, Family Member! Here you can view and update your loved one’s health data and manage reminders.
        </Text>
        <Button title="View Patient Data" onPress={() => { /* Placeholder action */ }} />
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

export default FamilyDashboard;
