
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import HomeScreen from "@/src/screens/features/main-interface/Home";
import { Platform, Text, View } from "react-native";
import WalletScreeen from "@/src/screens/features/main-interface/wallet";
import MoreScreen from "@/src/screens/features/main-interface/more";
import SendScreen from "@/src/screens/features/main-interface/send";
import { Icon } from "react-native-paper";
import Assets from "@/assets/svg/Assets";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#2260FF",
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          position: "absolute",
          shadowOpacity: 0.1,
          bottom: 10,
          left: 20,
          right: 20,
          paddingHorizontal: 20,
          paddingTop: Platform.OS === "android" ? 0 : 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="home" size={24} color={focused ? "#00278C" : "#FFFFFF"} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={SendScreen}
        options={{
          title: "Send Money",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Icon source={Assets.comment} size={24} color={focused ? "#00278C" : "#FFFFFF"} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreeen}
        options={{
          title: "Apply for a Loan",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="user" size={24} color={focused ? "#00278C" : "#FFFFFF"} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MoreScreen}
        options={{
          title: 'More',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#00E5AE1A' },
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            
            <AntDesign name="calendar" size={24} color={focused ? "#00278C" : "#FFFFFF"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
