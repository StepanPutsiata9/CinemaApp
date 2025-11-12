import { useSelectedMovie } from '@/features/selectedMovie';
import { ErrorContainer, LoadingContainer, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MovieInfoScreen = () => {
  const {
    selectedMovie,
    selectedMovieError,
    selectedMovieLoading,
    selectMovie,
    handleClose,
    handleBuyTicket,
  } = useSelectedMovie();
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { id } = useLocalSearchParams();
  const numericMovieId = Number(id);
  useEffect(() => {
    selectMovie(numericMovieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <View style={styles.container}>
      {selectedMovieLoading && <LoadingContainer colors={colors} />}
      {selectedMovieError && <ErrorContainer error={selectedMovieError} colors={colors} />}
      <StatusBar hidden={true} />
      {!selectedMovieLoading && !selectedMovieError && (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.containerImage}>
            {selectedMovie?.poster ? (
              <>
                <Image
                  source={{ uri: selectedMovie.poster }}
                  style={styles.image}
                  resizeMode="cover"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />

                {imageLoading && (
                  <View style={styles.imagePlaceholder}>
                    <ActivityIndicator size="large" color={colors.primary.finish} />
                    <Text style={styles.loadingText}>Загрузка изображения...</Text>
                  </View>
                )}

                {imageError && (
                  <View style={styles.imagePlaceholder}>
                    <AntDesign name="picture" size={50} color={colors.primary.finish} />
                    <Text style={styles.errorText}>Не удалось загрузить изображение</Text>
                  </View>
                )}
              </>
            ) : (
              <View style={styles.imagePlaceholder}>
                <AntDesign name="camera" size={50} color={colors.text.info} />
                <Text style={styles.placeholderText}>Изображение отсутствует</Text>
              </View>
            )}

            <LinearGradient
              colors={['transparent', 'rgba(18,18,18,0.3)', 'rgba(18,18,18,1.0)']}
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
                  <AntDesign name="star" size={18} color="black" />
                  <Text style={styles.ratingText}>
                    {' '}
                    {selectedMovie?.rating?.toString().slice(0, 4)}
                  </Text>
                </View>
              </LinearGradient>
              <View style={styles.infoView}>
                <View style={styles.ageView}>
                  <Text style={styles.ageTextTitle}>Возрастное ограничение: </Text>
                  <Text style={styles.ageText}>{selectedMovie?.ageRating}+</Text>
                </View>
                <View style={styles.movieLengthView}>
                  <Text style={styles.movieLengthTitle}>Длина фильма: </Text>
                  <Text style={styles.movieLengtText}>{selectedMovie?.movieLength} минут</Text>
                </View>
              </View>
            </View>
            <Text style={styles.title}>{selectedMovie?.name}</Text>
            <ScrollView style={styles.genreLine} horizontal showsHorizontalScrollIndicator={false}>
              {selectedMovie?.genres?.map((g, index) => {
                return (
                  <View style={styles.genre} key={index}>
                    <Text style={styles.genreText}>{g}</Text>
                  </View>
                );
              })}
            </ScrollView>
            <View style={styles.description}>
              <Text style={styles.descriptionText}>{selectedMovie?.description}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Заказать билет"
              onPress={() => handleBuyTicket(numericMovieId)}
              colors={colors}
            />
          </View>
        </ScrollView>
      )}
    </View>
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
    imagePlaceholder: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: colors.secondaryBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      marginTop: 10,
      fontFamily: 'Montserrat',
      fontSize: 14,
      color: colors.primary.finish,
    },
    errorText: {
      marginTop: 10,
      fontFamily: 'Montserrat',
      fontSize: 14,
      color: colors.error,
    },
    placeholderText: {
      marginTop: 10,
      fontFamily: 'Montserrat',
      fontSize: 14,
      color: colors.primary.finish,
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
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      paddingHorizontal: 16,
    },
    gradient: {
      borderRadius: 15,
      paddingVertical: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    infoView: {
      flexDirection: 'column',
    },
    statisticsLine: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    statisticsLineContent: {
      alignItems: 'center',
    },
    ratingView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 7,
    },
    ratingText: {
      fontFamily: 'Montserrat',
      fontSize: 16,
    },
    ageView: {
      flexDirection: 'row',
      marginRight: 10,
    },
    movieLengthView: {
      flexDirection: 'row',
    },
    ageText: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: colors.primary.start,
    },
    movieLengtText: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: colors.primary.start,
    },
    ageTextTitle: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: colors.text.title,
    },
    movieLengthTitle: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: colors.text.title,
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
    },
    genre: {
      backgroundColor: colors.secondaryBackground,
      borderRadius: 15,
      paddingHorizontal: 16,
      paddingVertical: 7,
      marginRight: 15,
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
      marginBottom: 30,
    },
  });
}

export default MovieInfoScreen;
