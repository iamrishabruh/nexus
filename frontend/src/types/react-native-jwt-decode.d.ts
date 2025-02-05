// src/types/react-native-jwt-decode.d.ts
declare module 'react-native-jwt-decode' {
    export function decode<T = Record<string, unknown>>(token: string): T;
  }
  