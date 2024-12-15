import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native'; // Pastikan Image diimpor
import { Button } from 'react-native-elements';

const DetailsScreen = () => {
  // State untuk mengontrol apakah modal terbuka atau tidak
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    console.log("Modal akan ditampilkan");
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    console.log("Modal akan ditutup");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Penjelasan di layar utama */}
      <Text style={styles.header}>
        Dasar Pemrograman Mobile
      </Text>
      <Text style={styles.description}>
        Merujuk pada konsep-konsep dasar yang diperlukan untuk mengembangkan aplikasi untuk perangkat mobile, seperti smartphone dan tablet, baik itu untuk platform Android atau iOS. Pemrograman mobile melibatkan penggunaan bahasa pemrograman, alat pengembangan perangkat lunak (SDK), dan framework yang memungkinkan pengembang membuat aplikasi yang dapat berjalan di perangkat mobile.
      </Text>

      {/* Tombol untuk menampilkan modal */}
      <Button 
        title="React Native"
        onPress={handleShowModal}
        buttonStyle={styles.button}
        titleStyle={{ color: '#fff' }} // Ubah teks tombol ke warna putih
      />

      {/* Modal Pop-up */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}  // Handle close button on Android
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Gambar dari URL */}
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=000000', // URL gambar
              }}
              style={styles.modalImage} // Tambahkan gaya untuk gambar
            />

            {/* Teks dalam Modal */}
            <Text style={styles.modalText}>Logo React Native</Text>

            {/* Tombol untuk menutup modal */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfa9e0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#b200ff', 
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff', 
  },
  button: {
    backgroundColor: '#b200ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 100, // Lebar gambar
    height: 100, // Tinggi gambar
    marginBottom: 20, // Jarak bawah gambar
  },
  modalText: {
    fontSize: 18,
    color: '#b200ff', 
    marginBottom: 20,
    padding: 5,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: '#b200ff', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailsScreen;
