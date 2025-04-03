import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Assets from "@/assets/svg/Assets";
import { Icon } from "react-native-paper";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { StackNavigationProps } from "@/src/shared";
import Doctors from "@/src/screens/features/main-interface/Home/Doctors";


const OtherMenuNavigator = ({ navigation }: StackNavigationProps) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Doctors" component={Doctors}
                options={{
                    title: 'Doctors',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} className="pl-5">
                            <Entypo name="chevron-left" size={24} color="#2260FF" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View className="flex flex-row gap-2 pr-5">
                            <View className="bg-[#CAD6FF] rounded-full w-10 h-10 flex items-center justify-center">
                                <Icon source={Assets.search} size={20} />
                            </View>
                            <View className="bg-[#CAD6FF] rounded-full w-10 h-10 flex items-center justify-center">
                                <Icon source={Assets.sort} size={20} color="#2260FF" />
                            </View>
                        </View>

                    ),
                    headerTitle: () => (
                        <View className="flex flex-row justify-center items-center gap-2">
                            <Text className="text-[#2260FF] font-semibold text-2xl">
                                Doctors
                            </Text>
                        </View>
                    ),
                    headerTitleAlign: "center",
                }}
            />


        </Stack.Navigator>
    );
};

export default OtherMenuNavigator;
