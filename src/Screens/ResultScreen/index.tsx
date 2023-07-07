import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenName from '../../Routes/ScreenName';

type ResultScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, ScreenName.Result>;
  route: RouteProp<RootStackParamList, 'Result'>;
};

const ResultScreen: React.FC<ResultScreenProps> = ({ navigation, route }) => {
  const { number } = route.params;

  const handleScanAgainPress = useCallback(() => {
    navigation.navigate(ScreenName.Scanner);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>QR Code Result</Text>
        <Text style={styles.resultText}>{number}</Text>
      </View>
      <TouchableOpacity style={styles.scanAgainButton} onPress={handleScanAgainPress}>
        <Text style={styles.scanAgainButtonText}>Scan Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8e8e8',
  },
  resultContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  scanAgainButton: {
    marginTop: 20,
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  scanAgainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
