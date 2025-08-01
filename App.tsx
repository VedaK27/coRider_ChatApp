// 

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Avatar from './src/components/Avatar'; // adjust paths if needed
import TripChat from './src/components/TripChat.jsx';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Avatar imageUrl="https://i.pravatar.cc/300" size={60} />
        <TripChat />
      </ScrollView>
    </SafeAreaView>
  );
}
