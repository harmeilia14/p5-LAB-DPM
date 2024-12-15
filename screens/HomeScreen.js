import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>DASAR PEMROGRAMAN MOBILE</Text>

      {/* Card Section */}
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Apa itu Dasar Pemrograman mobile?
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Cek disini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfa9e0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#b200ff',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#b200ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#b200ff',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
