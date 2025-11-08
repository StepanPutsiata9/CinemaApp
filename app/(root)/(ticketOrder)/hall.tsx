import { ErrorContainer, LoadingContainer, MovieScreen, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { HallInfo, HallPlaces, OrderHeader, useHall } from '@/features/ticketOrder';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HallScreen = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const {
    hallError,
    hallLoading,
    reservedPlaceCount,
    reservedPlaceCost,
    handleBack,
    handleBookingPress,
    handleEmptyBookingPress,
  } = useHall();
  return (
    <SafeAreaView style={styles.container}>
      {hallLoading && <LoadingContainer colors={colors} />}
      {hallError && <ErrorContainer error={hallError} colors={colors} />}
      {!hallLoading && !hallError && (
        <>
          <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <OrderHeader colors={colors} title="Зал 1" onPress={handleBack} />

            <View style={styles.placeCount}>
              <Text style={styles.freeCountText}>Всего свободных мест: </Text>
              <Text style={styles.palceCountText}>25</Text>
            </View>

            <View style={styles.movieScreen}>
              <MovieScreen />
            </View>
            <HallPlaces colors={colors} />
            <HallInfo
              colors={colors}
              reservedPlaceCount={reservedPlaceCount}
              reservedPlaceCost={reservedPlaceCost}
              time="22:00"
            />
            <View style={styles.buttonContainer}>
              <PrimaryButton
                title="Забронировать"
                colors={colors}
                onPress={reservedPlaceCount !== 0 ? handleBookingPress : handleEmptyBookingPress}
              />
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
    },
    placeCount: {
      paddingHorizontal: 16,
      flexDirection: 'row',
      marginBottom: 50,
    },
    freeCountText: {
      color: colors.text.title,
      fontSize: 20,
      fontFamily: 'Montserrat',
    },
    palceCountText: {
      color: colors.primary.start,
      fontSize: 20,
      fontFamily: 'Montserrat',
    },
    movieScreen: {
      marginHorizontal: 'auto',
      marginBottom: 50,
    },
    buttonContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 30,
    },
  });
}

export default HallScreen;
