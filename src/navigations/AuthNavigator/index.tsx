import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "@/src/screens/features/authentications/sign-up";
import { SCREENS } from "@/src/screens/constant";
import Login from "@/src/screens/features/authentications/sign-in";
import AppSplashScreen from "@/src/components/splashscreen/components";

import { Image, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons/';
import { StackNavigationProps } from "@/src/shared";
import { AntDesign } from '@expo/vector-icons';

import Welcome from "@/src/screens/features/authentications/welcome";
import Onboard from "@/src/screens/features/onboarding/onboard";


const Stack = createStackNavigator();

function RootNavigation({ navigation }: StackNavigationProps) {
  return (
    <Stack.Navigator
    // initialRouteName={"Login"}
    >



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#ffffff' },
          headerLeft: () => (
            null
          ),
          headerTitleAlign: "center",

        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#ffffff' },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} className="pl-3">
              <Entypo name="chevron-left" size={34} color="black" />
            </TouchableOpacity>
          ),

        }}
      />


      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#ffffff' },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} className="pl-3">
              <Entypo name="chevron-left" size={34} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",

        }}
      />

    </Stack.Navigator>
  );
}

export default RootNavigation;

