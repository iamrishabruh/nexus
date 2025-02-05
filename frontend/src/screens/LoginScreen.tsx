import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import API from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { decode } from 'react-native-jwt-decode';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

interface DecodedToken {
  sub: string;
  role: string;
}

// Set polyfill once at the top level
if (typeof global.atob === 'undefined') {
  global.atob = decode;
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    backgroundColor: '#f9f9f9' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: '600', 
    marginBottom: 20, 
    textAlign: 'center', 
    color: '#333' 
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  error: { 
    color: 'red', 
    textAlign: 'center', 
    marginBottom: 10 
  },
});

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);

      const response = await API.post('/auth/jwt/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const { access_token } = response.data;
      await AsyncStorage.setItem('token', access_token);

      // Proper JWT decoding
      const decoded = decode(access_token) as DecodedToken;
      
      switch(decoded.role) {
        case 'patient':
          navigation.navigate('PatientDashboard');
          break;
        case 'family':
          navigation.navigate('FamilyDashboard');
          break;
        case 'doctor':
          navigation.navigate('DoctorDashboard');
          break;
        default:
          navigation.navigate('PatientDashboard');
      }
    } catch (err: any) {
      console.error('Login error:', err.response?.data);
      setError('Login failed. Please check your credentials.');
      Alert.alert(
        "Login Error", 
        err.response?.data?.detail || 'An unexpected error occurred'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Nexus</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button 
        title="Register" 
        onPress={() => navigation.navigate('Register')} 
      />
    </View>
  );
};

export default LoginScreen;
