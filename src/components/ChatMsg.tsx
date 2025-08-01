import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from './Avatar';

interface ChatMessageProps {
  userAvatar: string;
  message: string;
  isHighlighted?: boolean;
  timestamp?: string;
}

export default function ChatMsg({ 
  userAvatar, 
  message, 
  isHighlighted = false,
  timestamp 
}: ChatMessageProps) {
  return (
    <View style={styles.container}>
      {timestamp && (
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
      )}
      <View style={styles.messageRow}>
        <Avatar imageUrl={userAvatar} size={32} />
        <View style={[
          styles.messageContainer,
          isHighlighted && styles.highlightedMessage
        ]}>
          <Text style={[
            styles.messageText,
            isHighlighted && styles.highlightedText
          ]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  timestampContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  messageContainer: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 16,
    borderTopLeftRadius: 4,
  },
  highlightedMessage: {
    backgroundColor: '#4285F4',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  highlightedText: {
    color: '#fff',
  },
});