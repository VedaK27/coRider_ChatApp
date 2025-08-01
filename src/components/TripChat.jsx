import React from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import TripHeader from './TripHeader';
import TripInformation from './TripInformation';
import MenuOp from './MenuOp';
import ChatMsgs from './ChatMsgs';
import MsgIp from './MsgIp';

export default function TripChat() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // adjust if needed
      >
        <TripHeader />
        <View style={styles.content}>
          <TripInformation />
          <MenuOp />
          <ChatMsgs />
        </View>
        <MsgIp />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
