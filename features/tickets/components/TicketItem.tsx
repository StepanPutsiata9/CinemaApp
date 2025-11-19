import { IColorsTheme } from '@/features/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ITicket } from '../types';

interface ITicketItemProps {
  ticket: ITicket;
  colors: IColorsTheme;
}
export const TicketItem = ({ ticket, colors }: ITicketItemProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.card}>
      <View style={styles.mainPart}>
        <Text style={styles.movie}>
          {ticket.name.length > 20 ? ticket.name.slice(0, 20) + '...' : ticket.name}
        </Text>
        <View style={styles.details}>
          <Detail label="Дата" value={ticket.date} colors={colors} />
          <Detail label="Время" value={ticket.time} colors={colors} />
          <Detail label="Зал" value={ticket.hall.toString()} colors={colors} />
        </View>
      </View>
      <View style={styles.perforation}>
        {[...Array(16)].map((_, i) => (
          <View key={i} style={styles.tooth} />
        ))}
      </View>
      <LinearGradient
        colors={[colors.primary.finish, colors.primary.start]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.stub}
      >
        <Text style={styles.stubLabel}>Ваше место</Text>
        <Text style={styles.stubSeat}>{ticket.place}</Text>
        <Text style={styles.stubRow}>ряд {ticket.row + 1}</Text>
      </LinearGradient>
    </View>
  );
};

interface IDetailProps {
  label: string;
  value: string;
  colors: IColorsTheme;
}
const Detail = ({ label, value, colors }: IDetailProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
};

function useStyles(colors: IColorsTheme) {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: colors.secondaryBackground,
      borderRadius: 16,
      overflow: 'hidden',
      marginHorizontal: 16,
      marginBottom: 16,
      height: 115,
    },
    mainPart: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
    },
    movie: {
      color: colors.text.title,
      fontSize: 18,
      fontFamily: 'MontserratBold',
      marginBottom: 10,
    },
    details: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    detailItem: {
      marginRight: 16,
      marginBottom: 4,
    },
    detailLabel: {
      color: colors.text.title,
      fontSize: 12,
      opacity: 0.6,
      fontFamily: 'Montserrat',
    },
    detailValue: {
      color: colors.text.title,
      fontSize: 12,
      fontWeight: '600',
      fontFamily: 'Montserrat',
    },
    perforation: {
      width: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.secondaryBackground,
    },
    tooth: {
      width: 8,
      height: 8,
      backgroundColor: colors.background,
      borderRadius: 4,
      marginVertical: 2,
    },
    stub: {
      width: 100,
      backgroundColor: colors.primary.start,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
    },
    stubLabel: {
      color: colors.secondaryBackground,
      fontSize: 12,
      textTransform: 'uppercase',
      marginBottom: 2,
      fontFamily: 'Montserrat',
    },
    stubSeat: {
      color: colors.background,
      fontSize: 26,
      fontFamily: 'MontserratBold',
    },
    stubRow: {
      color: colors.background,
      fontSize: 14,
      fontFamily: 'Montserrat',
    },
  });
}
