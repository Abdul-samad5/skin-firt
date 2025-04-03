import React, { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Toast from 'react-native-toast-message'
import { useAuthFacade } from "./src/store/auth/useAuthFacade";
import RootNavigation from "./src/navigations/AuthNavigator";
import BottomTabNavigator from "./src/navigations/BottomTabNavigator";

import OtherMenuNavigator from "./src/navigations/OtherMenuNavigator";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const Stack = createStackNavigator();
  const { accessToken } = useAuthFacade();
  console.log(accessToken)
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomTabNavigator'
          screenOptions={{
            headerShown: false
          }}>
          {
            accessToken !== null
              ? (
                <>
                  <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
                  <Stack.Screen name="OtherMenuNavigator" component={OtherMenuNavigator} />
                </>
              )
              : (
                <>

                  <Stack.Screen name="RootNavigation" component={RootNavigation} />
                  <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
                  <Stack.Screen name="OtherMenuNavigator" component={OtherMenuNavigator} />
                </>
              )
          }
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </PaperProvider>
  );
}
