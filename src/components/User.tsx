// import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useState, useContext } from "react";
// import { AuthContext } from '../context/AuthContext';
// import { ChatContext } from '../context/ChatContext';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import PotentialChats from './PotentialChats';
// import UserChat from './UserChat';
// const FriendsRoute = () => {
//     const { user } = useContext(AuthContext);
//     const { currentChat, userChats, isUserChatsLoading, updateCurrentChat } =
//         useContext(ChatContext);

//     return (
//         <ScrollView style={{ backgroundColor: "#1E1E1E", flex: 1, padding: 10 }}>
//             {isUserChatsLoading && <Text style={{ color: "white" }}>Loading chats...</Text>}
//             {userChats?.length > 0 ? (
//                 userChats.map((chat, index) => (
//                     <TouchableOpacity
//                         key={index}
//                         onPress={() => updateCurrentChat(chat)}
//                         style={{
//                             padding: 10,
//                             backgroundColor: currentChat?._id === chat._id ? "#F0475C" : "transparent",
//                             borderBottomColor: "#555",
//                             borderBottomWidth: 1,
//                         }}
//                     >
//                         {/* <UserChat chat={chat} user={user} /> */}
//                         <Text>Hello</Text>
//                     </TouchableOpacity>
//                 ))
//             ) : (
//                 <Text style={{ color: "gray", textAlign: "center" }}>No friends yet.</Text>
//             )}
//         </ScrollView>
//     );
// };

// const PotentialChatsRoute = ({ setSelectedTabIndex }: any) => {
//     return (
//         <View style={{ backgroundColor: "#1E1E1E", flex: 1, padding: 10 }}>
//             <PotentialChats updateSelectedTabIndex={setSelectedTabIndex} />
//         </View>
//     );
// };

// const User = () => {
//     const { potentialChats } = useContext(ChatContext);
//     const [index, setIndex] = useState(0);
//     const [routes] = useState([
//         { key: "friends", title: "Friends" },
//         { key: "potentialChats", title: `Potential Chats (${potentialChats?.length || 0})` },
//     ]);

//     const renderScene = ({ route }: any) => {
//         switch (route.key) {
//             case "friends":
//                 return <FriendsRoute />;
//             case "potentialChats":
//                 return <PotentialChatsRoute setSelectedTabIndex={setIndex} />;
//             //   return <PotentialChatsRoute setSelectedTabIndex={setIndex} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <TabView
//             navigationState={{ index, routes }}
//             className='mt-20'
//             renderScene={renderScene}
//             onIndexChange={setIndex}
//             initialLayout={{ width: Dimensions.get("window").width }}
//             renderTabBar={(props) => (
//                 <TabBar
//                     {...props}
//                     style={{ backgroundColor: "#222" }}
//                     indicatorStyle={{ backgroundColor: "#F0475C" }}
//                     activeColor="white"
//                     inactiveColor="gray"
//                 />
//             )}
//         />
//     );
// };


// export default User


import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import PotentialChats from "./PotentialChats";  // Import your PotentialChats component
import UserChat from "./UserChat";

const User = () => {
    const { potentialChats , userChats,} = useContext(ChatContext); // Get potential chats from context
    const { user } = useContext(AuthContext); // Get user from context
    const [selectedTab, setSelectedTab] = useState(0); // State to manage the selected tab

    // Function to handle tab change
    const handleTabChange = (index) => {
        setSelectedTab(index);
    };

    return (
        <View className="w-full h-full bg-white p-10 flex-1">
            {/* Tab Navigation Bar */}
            <View style={styles.tabBar}>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 0 && styles.activeTab]}
                    onPress={() => handleTabChange(0)}
                >
                    <Text style={selectedTab === 0 ? styles.activeTabText : styles.inactiveTabText}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 1 && styles.activeTab]}
                    onPress={() => handleTabChange(1)}
                >
                    <Text style={selectedTab === 1 ? styles.activeTabText : styles.inactiveTabText}>
                        Potential Chats ({potentialChats?.length || 0})
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Tab Content */}
            <ScrollView style={{ backgroundColor: "#1E1E1E", flex: 1, padding: 10 }}>
                {selectedTab === 0 ? (
                    <View>
                          {userChats?.map((chat, index) => (
                              <UserChat key={index} chat={chat} user={user} />
                          ))}
                    </View>
                ) : selectedTab === 1 ? (
                    <View>
                        {/* Display Potential Chats content */}
                        <PotentialChats updateSelectedTabIndex={setSelectedTab} />
                    </View>
                ) : null}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        backgroundColor: "#222",
        padding: 10,
    },
    tab: {
        // flex: 1,
        padding: 10,
        alignItems: "center",
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: "#F0475C",
    },
    activeTabText: {
        color: "white",
        fontWeight: "bold",
    },
    inactiveTabText: {
        color: "gray",
    },
});

export default User;
