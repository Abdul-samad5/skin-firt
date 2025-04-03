import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
import AppButton from "@/src/components/button";


export default function Welcome() {
    const navigation = useNavigation<any>();

    return (
        <ScrollView className="flex-1 bg-white p-5 h-full w-full">
            <StatusBar backgroundColor="#000" barStyle="light-content" />

            <View className="flex items-center justify-center mt-20">
               
                <Text className="text-xl font-semibold text-black">
                    Profile Created
                </Text>
                <Text className="text-black text-base font-light text-center mt-2">
                    {"You’ve successfully verified \n your Paivia profile"}
                </Text>
            </View>
            <View className="mt-40">
                <AppButton
                    title="Continue"
                    backgroundColor="#00E5AE"
                    action={() => navigation.navigate('Login')}
                    width="100%"
                />
            </View>


        </ScrollView >
    );
}

const styles = StyleSheet.create({
    codeFieldRoot: {
        marginTop: 20,
        width: 260,
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: 4,
    },
    cellRoot: {
        width: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#7B61FF',
        borderColor: '#7B61FF',
        borderWidth: 1
    },
    cellText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    focusCell: {
        paddingBottom: 4,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },
});
