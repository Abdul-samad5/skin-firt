import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import { ChatContext } from "../context/ChatContext";
import { useFetchRecipientUser } from "../utils/useFetchRecipient";
import { unreadNotificationsFunc } from "../utils/unreadNotifications";
import { useFetchLatestMessage } from "../utils/useFetchLatestMessage";


const UserChat = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);
    const { onlineUsers, markThisUserNotificationsAsRead } =
        useContext(ChatContext);
    const { latestMessage } = useFetchLatestMessage(chat);
    const navigation = useNavigation();

    //   const unreadNotifications = unreadNotificationsFunc(notifications);
    //   const thisUserNotifications = unreadNotifications?.filter(
    //     (n) => n.senderId === recipientUser?._id
    //   );
    const isOnline = onlineUsers?.some((u) => u?.userId === recipientUser?._id);

    const truncateText = (text) => {
        return text.length > 20 ? text.substring(0, 20) + "..." : text;
    };

    return (
        <TouchableOpacity
            style={styles.container}
        // onPress={() => {
        //     if (thisUserNotifications?.length !== 0) {
        //       markThisUserNotificationsAsRead(thisUserNotifications, notifications);
        //     }
        //   }}
        >
            <View style={styles.row}>
                {/* User Avatar */}
                <Image source={{ uri: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.avatar} />

                {/* User Info */}
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{recipientUser?.name}</Text>
                    {latestMessage?.text && (
                        <Text style={styles.message}>{truncateText(latestMessage?.text)}</Text>
                    )}
                </View>
            </View>

            <View style={styles.rightSection}>
                {/* Message Time */}
                <Text style={styles.timestamp}>
                    {moment(latestMessage?.createdAt).calendar()}
                </Text>

                {/* View Profile Button */}
                {/* <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("SeeProfile", { userId: recipientUser?._id })}
        >
          <Text style={styles.profileButtonText}>See Profile</Text>
        </TouchableOpacity> */}

                {/* Unread Notifications */}
                {/* {thisUserNotifications?.length > 0 && (
                    <View style={styles.notificationBadge}>
                        <Text style={styles.notificationText}>{thisUserNotifications.length}</Text>
                    </View>
                )} */}
                {isOnline && <View style={styles.onlineIndicator} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#2D2D2D",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
    },
    message: {
        fontSize: 14,
        color: "#DDD",
    },
    rightSection: {
        alignItems: "flex-end",
    },
    timestamp: {
        fontSize: 12,
        color: "#BBB",
    },
    profileButton: {
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    profileButtonText: {
        color: "white",
        fontSize: 12,
    },
    notificationBadge: {
        backgroundColor: "#14B8A6",
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    notificationText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    onlineIndicator: {
        width: 12,
        height: 12,
        backgroundColor: "#34D399",
        borderRadius: 6,
        position: "absolute",
        right: 10,
        top: 10,
    },
});

export default UserChat;
