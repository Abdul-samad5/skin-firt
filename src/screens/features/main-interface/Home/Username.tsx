import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import AppButton from '@/src/components/button';
import InputField from '@/src/components/input-field';
import { StackNavigationProps } from '@/src/shared';

const Username = ({ navigation }: StackNavigationProps) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="w-full h-full p-5">
                <View>
                    <Text className="text-xl font-semibold text-black pb-3">Change Username</Text>
                    <Text className="text-base font-light text-black pb-3">
                        You can send and receive money within the Paivia community with your unique Paivia username.{" "}
                    </Text>
                </View>
                <View className="pt-5">
                    <InputField
                        label=""
                        // value={username}
                        // onChangeText={setUsername}
                        placeholder="@ change username"
                        InputType="default"
                        isRequired
                        marginTop={1}
                    />
                </View>
            </ScrollView>

            {/* Button at the Bottom */}
            <View className="absolute bottom-0 left-0 right-0 p-5 bg-white">
                <AppButton
                    title="Submit"
                    backgroundColor="#00E5AE"
                    action={() => { }}
                    style={styles.button}
                    width="100%"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 10,
    },
});

export default Username;