import { ErrorContainer, LoadingContainer, MovieScreen, PrimaryButton } from '@/features/shared';
import { IColorsTheme, useTheme } from '@/features/theme';
import { HallInfo, HallPlaces, OrderHeader, useHall } from '@/features/ticketOrder';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect } from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HallScreen = () => {
  const { colors } = useTheme();
  const { bookingPlaces } = useHall();
  const styles = useStyles(colors);
  const { id, time, bookedPlaces } = useLocalSearchParams();
  const bookedPlacesNumber = Number(bookedPlaces);
  const showsId = id.toString();
  const showsTime = time.toString();
  const {
    hallError,
    hallLoading,
    reservedPlaceCount,
    reservedPlaceCost,
    handleBack,
    handleBookingPress,
    handleEmptyBookingPress,
    loadHall,
  } = useHall();
  useEffect(() => {
    loadHall(showsId, showsTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFocusEffect(
    useCallback(() => {
      return () => {
        handleBack();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );
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
              <Text style={styles.palceCountText}>{25 - bookedPlacesNumber}</Text>
            </View>

            <View style={styles.movieScreen}>
              <MovieScreen />
            </View>
            <HallPlaces colors={colors} />
            <HallInfo
              colors={colors}
              reservedPlaceCount={reservedPlaceCount}
              reservedPlaceCost={reservedPlaceCost}
              time={showsTime}
            />
            <View style={styles.buttonContainer}>
              <PrimaryButton
                title="Забронировать"
                colors={colors}
                onPress={
                  reservedPlaceCount !== 0
                    ? () =>
                        handleBookingPress({
                          id: showsId,
                          places: { tickets: bookingPlaces || [], time: showsTime },
                        })
                    : handleEmptyBookingPress
                }
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
