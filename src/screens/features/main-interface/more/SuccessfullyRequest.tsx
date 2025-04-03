import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, StatusBar } from "react-native";
import AppButton from "@/src/components/button";
import { StackNavigationProps } from "@/src/shared";
import material from "@/assets/images/fluent.png";

const SuccessfullyRequest = ({ navigation }: StackNavigationProps) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
                <View className="mt-28 items-center justify-center">
                    <Image source={material} className="w-32 h-32 mb-6" resizeMode="contain" />
                    <Text className="text-2xl font-bold text-black">
                        Successfully
                        Requested
                    </Text>
                    <Text className="text-[#424242] text-center mt-3 font-medium text-base">Your request for statement of account has been successfully requested, and it will be sent to your email address linked to your Paivia account  </Text>
                </View>
            </ScrollView>
            <View className="absolute bottom-5 left-5 right-5">
                <AppButton
                    title="Go back"
                    backgroundColor="#00E5AE"
                    action={() => navigation.navigate("StatementAccount")}
                    width="100%"
                />
            </View>
        </SafeAreaView>
    )
}

export default SuccessfullyRequest