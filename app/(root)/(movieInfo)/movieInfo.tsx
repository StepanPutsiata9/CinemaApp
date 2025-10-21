import { PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MovieInfoScreen = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors);

  const handleClose = () => {
    // Закрыть экран - вернуться назад
    router.back(); // для Expo Router
    // или navigation.goBack(); для React Navigation
  };

  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.containerImage}>
          <ImageBackground
            source={require('@/assets/images/test.png')}
            style={styles.image}
            resizeMode="stretch"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
            locations={[0.4, 0.7, 0.9]}
            style={styles.gradientOverlay}
          />

          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <View style={styles.closeIcon}>
              <AntDesign name="close" size={24} color={colors.primary.finish} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.statisticsLine}>
            <LinearGradient
              colors={[colors.primary.start, colors.primary.finish]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <View style={styles.ratingView}>
                <Text style={styles.ratingText}>КР 10.0</Text>
              </View>
            </LinearGradient>
            <View>
              <Text style={styles.viewersText}>8.9 млн просмотров</Text>
            </View>
          </View>
          <Text style={styles.title}>Дэдпул</Text>
          <View style={styles.genreLine}>
            <View style={styles.genre}>
              <Text style={styles.genreText}>Боевик</Text>
            </View>
            <View style={styles.genre}>
              <Text style={styles.genreText}>Боевик</Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              Описание кино
              ааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton title="Купить билет" onPress={() => {}} />
        </View>
      </ScrollView>
    </>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: colors.background,
    },
    containerImage: {
      width: '100%',
      aspectRatio: 1 / 1.2,
      overflow: 'hidden',
      marginBottom: 12,
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    gradientOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
    },
    closeButton: {
      position: 'absolute',
      top: 40,
      right: 16,
      zIndex: 10,
    },
    closeIcon: {
      width: 42,
      height: 42,
      borderRadius: 12,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      paddingHorizontal: 16,
    },
    gradient: {
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    statisticsLine: {
      flexDirection: 'row',
      gap: 15,
      alignItems: 'center',
      marginBottom: 10,
    },
    ratingView: {
      paddingHorizontal: 14,
      paddingVertical: 7,
    },
    ratingText: {
      fontFamily: 'Montserrat',
      fontSize: 14,
    },
    viewersText: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: colors.primary.start,
    },
    title: {
      fontSize: 24,
      fontFamily: 'MontserratBold',
      color: colors.text.title,
      marginBottom: 15,
    },
    genreLine: {
      marginBottom: 15,
      flexDirection: 'row',
      gap: 10,
    },
    genre: {
      backgroundColor: colors.inputBackground,
      borderRadius: 15,
      paddingHorizontal: 16,
      paddingVertical: 7,
    },
    genreText: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: colors.text.title,
    },
    description: {
      marginBottom: 20,
    },
    descriptionText: {
      fontFamily: 'Montserrat',
      fontSize: 14,
      color: colors.text.title,
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'center',
    },
  });
}

export default MovieInfoScreen;
