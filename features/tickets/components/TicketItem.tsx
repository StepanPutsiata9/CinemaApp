import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface TicketData {
  movieTitle: string;
  date: string;
  time: string;
  hall: string;
  row: number;
  seat: number;
}
interface ITicketItemProps {
  ticket: TicketData;
}
export const TicketItem = ({ ticket }: ITicketItemProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.mainPart}>
        <Text style={styles.movie}>{ticket.movieTitle}</Text>
        <View style={styles.details}>
          <Detail label="Дата" value={ticket.date} />
          <Detail label="Время" value={ticket.time} />
          <Detail label="Зал" value={ticket.hall} />
        </View>
      </View>
      <View style={styles.perforation}>
        {[...Array(16)].map((_, i) => (
          <View key={i} style={styles.tooth} />
        ))}
      </View>
      <View style={styles.stub}>
        <Text style={styles.stubLabel}>Ваше место</Text>
        <Text style={styles.stubSeat}>{ticket.seat}</Text>
        <Text style={styles.stubRow}>ряд {ticket.row}</Text>
      </View>
    </View>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#242424',
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 8,
    height: 110,
  },
  mainPart: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  movie: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Montserrat',
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
    color: '#FFFFFF',
    fontSize: 11,
    opacity: 0.6,
    fontFamily: 'Montserrat',
  },
  detailValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  perforation: {
    width: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
  },
  tooth: {
    width: 6,
    height: 6,
    backgroundColor: '#141414',
    borderRadius: 3,
    marginVertical: 2,
  },
  stub: {
    width: 100,
    backgroundColor: '#FFA31A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  stubLabel: {
    color: '#141414',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  stubSeat: {
    color: '#141414',
    fontSize: 26,
    fontWeight: '800',
  },
  stubRow: {
    color: '#141414',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
});
