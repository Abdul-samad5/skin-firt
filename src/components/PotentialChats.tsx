import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const PotentialChats = ({ updateSelectedTabIndex }) => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);

  return (
    <View>
      {potentialChats && potentialChats.length > 0 ? (
        <FlatList
          data={potentialChats}
          keyExtractor={(item) => item._id} // Use item._id as key
          renderItem={({ item }) => {
            console.log(item.name); // Log each name to the console
            return (
              <TouchableOpacity
                style={[
                  styles.chatItem,
                  onlineUsers?.some((u) => u.userId === item._id) && styles.onlineUser, // Check if the user is online
                ]}
                onPress={() => {
                  createChat(user._id, item._id);
                  updateSelectedTabIndex(0);
                }}
              >
                <Text>{item.name}</Text> 
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text style={styles.noConnections}>No new potential connections</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  chatItem: {
    backgroundColor: "#14B8A6", // Teal color
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  chatText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  onlineUser: {
    borderWidth: 2,
    borderColor: "#34D399", // Green border for online users
  },
  noConnections: {
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 10,
  },
});

export default PotentialChats;
