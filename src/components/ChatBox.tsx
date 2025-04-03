import { useContext, useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { ToastAndroid } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useFetchRecipientUser } from "../utils/useFetchRecipient";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const {
    currentChat,
    updateCurrentChat,
    messages,
    isMessagesLoading,
    sendTextMessage,
  } = useContext(ChatContext);

  const { recipientUser, error: recipientUserFetchError } =
    useFetchRecipientUser(currentChat, user);

  const [textMessage, setTextMessage] = useState("");
  const scrollViewRef = useRef();

  useEffect(() => {
    if (!recipientUser && recipientUserFetchError?.error) {
      ToastAndroid.show(recipientUserFetchError.message, ToastAndroid.SHORT);
    }
  }, [recipientUser, recipientUserFetchError]);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  if (!recipientUser || !currentChat)
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ color: "white", backgroundColor: "black", padding: 10, borderRadius: 10 }}>
          {/* Select a chat or start a new  */}
        </Text>
      </View>
    );

  if (isMessagesLoading)
    return <Text style={{ textAlign: "center", color: "white" }}>Loading Chat...</Text>;

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#333", padding: 10 }}>
        <TouchableOpacity onPress={() => updateCurrentChat(null)}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: "center", color: "white", fontSize: 18 }}>
          {recipientUser?.name}
        </Text>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1, paddingHorizontal: 10 }}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={{
              alignSelf: message?.senderId === user?._id ? "flex-end" : "flex-start",
              backgroundColor: message?.senderId === user?._id ? "#444" : "#555",
              padding: 10,
              borderRadius: 10,
              marginBottom: 5,
              maxWidth: "80%",
            }}
          >
            <Text style={{ color: "white" }}>{message.text}</Text>
            <Text style={{ color: "#bbb", fontSize: 10, marginTop: 5 }}>
              {moment(message.createdAt).calendar()}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Message Input */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "#333" }}>
        <TextInput
          value={textMessage}
          onChangeText={setTextMessage}
          placeholder="Type a message..."
          placeholderTextColor="#bbb"
          style={{
            flex: 1,
            backgroundColor: "#444",
            padding: 10,
            borderRadius: 20,
            color: "white",
          }}
        />
        <TouchableOpacity
          onPress={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}
          style={{
            marginLeft: 10,
            backgroundColor: "teal",
            padding: 10,
            borderRadius: 20,
          }}
        >
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBox;
