import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatMsg from './ChatMsg';
import axios from 'axios';

interface Chat {
  id: string;
  message: string;
  sender: {
    image: string;
    self: boolean;
  };
  time: string;
}

export default function ChatMsgs() {
  const [messages, setMessages] = useState<Chat[]>([]);

  useEffect(() => {
    axios
      .get('https://qa.corider.in/assignment/chat?page=0')
      .then((res) => {
        setMessages(res.data.chats);
      })
      .catch((err) => {
        console.error('Error fetching chats:', err);
      });
  }, []);

  const renderItem = ({ item }: { item: Chat }) => (
    <ChatMsg
      userAvatar={item.sender.image}
      message={item.message.replace(/<br>/g, '\n')}
      isHighlighted={item.sender.self}
      timestamp={''} // Replace with formatted time if needed
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.messagesContainer}
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      inverted // latest messages at bottom
    />
  );
}

const styles = StyleSheet.create({
  messagesContainer: {
    paddingBottom: 20,
  },
});
