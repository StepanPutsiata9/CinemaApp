import { useSelectedMovie } from '@/features/selectedMovie';
import { ErrorContainer, LoadingContainer, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MovieInfoScreen = () => {
  const { selectedMovie, selectedMovieError, selectedMovieLoading, clearSelectedMovie } =
    useSelectedMovie();
  const { colors } = useTheme();
  const styles = useStyles(colors);

  const handleClose = () => {
    router.back();
    clearSelectedMovie();
  };

  return (
    <View style={styles.container}>
      {selectedMovieLoading && <LoadingContainer colors={colors} />}
      {selectedMovieError && <ErrorContainer error={selectedMovieError} colors={colors} />}
      <StatusBar hidden={true} />
      {!selectedMovieLoading && !selectedMovieError && (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
          <View style={styles.containerImage}>
            {selectedMovie?.poster ? (
              <Image
                source={{ uri: selectedMovie.poster }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={require('@/assets/images/icon.png')}
                style={styles.image}
                resizeMode="cover"
              />
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
            <ScrollView
              horizontal
              style={styles.statisticsLine}
              contentContainerStyle={styles.statisticsLineContent}
              showsHorizontalScrollIndicator={false}
            >
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
                    {selectedMovie?.rating.toString().slice(0, 4)}
                  </Text>
                </View>
              </LinearGradient>
              <View style={styles.ageView}>
                <Text style={styles.ageTextTitle}>Возрастное ограничение: </Text>
                <Text style={styles.ageText}>{selectedMovie?.ageRating}+</Text>
              </View>
              <View style={styles.movieLengthView}>
                <Text style={styles.movieLengthTitle}>Длина фильма: </Text>
                <Text style={styles.movieLengtText}>{selectedMovie?.movieLength} минут</Text>
              </View>
            </ScrollView>
            <Text style={styles.title}>{selectedMovie?.name}</Text>
            <ScrollView style={styles.genreLine} horizontal showsHorizontalScrollIndicator={false}>
              {selectedMovie?.genres.map((g, index) => {
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
            <PrimaryButton title="Купить билет" onPress={() => {}} colors={colors} />
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
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    statisticsLine: {
      flexDirection: 'row',
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
      backgroundColor: colors.inputBackground,
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
