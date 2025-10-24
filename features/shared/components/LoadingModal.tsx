import LottieView from 'lottie-react-native';
import { Modal, StyleSheet, View } from 'react-native';
export function LoadingModal({ visible }: { visible: boolean }) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade" statusBarTranslucent={true}>
      <View style={styles.modalContainer}>
        <LottieView
          source={require('@/assets/animations/Loading.json')}
          autoPlay
          loop
          style={{ width: 110, height: 110 }}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
