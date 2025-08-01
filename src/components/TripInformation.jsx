import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MoveHorizontal as MoreHorizontal } from 'lucide-react-native';
import Avatar from './Avatar';

export default function TripInformation() {
  return (
    <View style={styles.container}>
      <View style={styles.locationInfo}>
        <View style={styles.locationRow}>
          <Avatar 
            imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
            size={40}
          />
          <View style={styles.locationText}>
            <Text style={styles.fromLabel}>From</Text>
            <Text style={styles.locationName}>IGI Airport, T3</Text>
          </View>
        </View>
        <View style={styles.locationRow}>
          <Avatar 
            imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
            size={40}
          />
          <View style={styles.locationText}>
            <Text style={styles.toLabel}>To</Text>
            <Text style={styles.locationName}>Sector 28</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <MoreHorizontal size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  locationInfo: {
    flex: 1,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    marginLeft: 12,
    flex: 1,
  },
  fromLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  toLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  moreButton: {
    padding: 8,
  },
});