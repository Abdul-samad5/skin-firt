import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, RefreshControl, StyleSheet, Pressable } from 'react-native';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StackNavigationProps } from '@/src/shared';
import { SCREENS } from '@/src/screens/constant';
import profile from "../../../../../assets/images/Mask group.png"
import profile1 from "../../../../../assets/images/Mask group (1).png"
import profile2 from "../../../../../assets/images/Mask group (3).png"
import { Icon } from "react-native-paper";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import { useAuthFacade } from '@/src/store/auth/useAuthFacade';

dayjs.extend(relativeTime);
import { StatusBar } from 'react-native';
import Assets from '@/assets/svg/Assets';
import DateBox from '@/src/components/home/DateBox';
import DoctorCard from '@/src/components/home/DoctorCard';

const HomeScreen = ({ navigation }: StackNavigationProps) => {


    return (
        <ScrollView className='flex-1 w-full h-full bg-white'>
            <StatusBar backgroundColor="#E2EAFFA8" barStyle="dark-content"></StatusBar>
            <View className='p-5 px-7'>
                <View className="w-full flex flex-row justify-between">
                    <View className='w-1/2 flex flex-row gap-3 items-center'>
                        <View>
                            <Image source={profile} className='w-12 h-12 rounded-full' />
                        </View>
                        <View>
                            <Text className='text-[#2260FF] text-xs font-light' style={{ fontFamily: 'LeagueSpartan-Bold' }}>Hi, WelcomeBack</Text>
                            <Text className='text-black text-sm font-normal'>John Doe</Text>
                        </View>
                    </View>
                    <View className='flex flex-row gap-3'>
                        <View className='bg-[#CAD6FF] rounded-full w-10 h-10 flex items-center justify-center'>
                            <Feather name="bell" size={22} color="black" />
                        </View>
                        <View className='bg-[#CAD6FF] rounded-full w-10 h-10 flex items-center justify-center'>
                            <EvilIcons name="gear" size={22} color="black" />
                        </View>
                    </View>
                </View>
                <View className='mt-5'>
                    <View className='flex flex-row gap-5'>
                        <TouchableOpacity onPress={()=> navigation.navigate("OtherMenuNavigator", { screen: "Doctors" })}>
                            <FontAwesome5 name="stethoscope" size={24} color="#2260FF" />
                            <Text className='text-[#2260FF] text-xs font-light pt-1' style={{ fontFamily: 'LeagueSpartan-Bold' }}>Doctors</Text>
                        </TouchableOpacity>
                        <View>
                            <AntDesign name="hearto" size={24} color="#2260FF" />
                            <Text className='text-[#2260FF] text-xs font-light pt-1' style={{ fontFamily: 'LeagueSpartan-Bold' }}>Favorite</Text>
                        </View>
                        <View className='bg-[#CAD6FF] rounded-3xl flex flex-row justify-between items-center px-2 w-48'>
                            <View className='bg-white rounded-full p-1'>
                                <Icon source={Assets.sort} size={24} />
                            </View>
                            <Icon source={Assets.search} size={24} />
                        </View>
                    </View>
                </View>
            </View>
            <View className='mt-2 bg-[#CAD6FF] w-full p-5'>
                <View className='w-full flex flex-row gap-3'>
                    <View>
                        <DateBox day={9} dayName="MON" />
                    </View>
                    <View>
                        <DateBox day={10} dayName="TUE" />
                    </View>
                    <View>
                        <DateBox day={11} dayName="WED" backgroundColor='bg-[#2260FF]' textColor='text-white' />
                    </View>
                    <View>
                        <DateBox day={12} dayName="THU" />
                    </View>
                    <View>
                        <DateBox day={13} dayName="FRI" backgroundColor='bg-[#2260FF]' textColor='text-white' />
                    </View>
                    <View>
                        <DateBox day={14} dayName="SAT" backgroundColor='bg-[#2260FF]' textColor='text-white' />
                    </View>
                </View>
                <View className='mt-2 bg-white rounded-[20px] py-3 pr-9 pl-4'>
                    <Text className='text-right text-[#2260FF] text-xs font-normal' style={{ fontFamily: 'LeagueSpartan-Bold' }}>11 Wednesday - Today</Text>
                    <View className='w-full flex flex-row'>
                        <View className='w-10 flex flex-col'>
                            <Text>9 am</Text>
                            <Text className='mt-3 text-[#2260FF] text-xs font-light uppercase' style={{ fontFamily: 'LeagueSpartan-Bold' }}>10 am</Text>
                            <Text className='mt-3 text-[#2260FF] text-xs font-light uppercase' style={{ fontFamily: 'LeagueSpartan-Bold' }}>11 am</Text>
                            <Text className='mt-3 text-[#2260FF] text-xs font-light uppercase' style={{ fontFamily: 'LeagueSpartan-Bold' }}>12 am</Text>
                        </View>
                        <View className='mt-2'>
                            <View className='border-t border-[#2260FF] border-dashed h-1 w-56' />
                            <View className='bg-[#CAD6FF] rounded-xl p-1 pl-3.5 flex flex-row mt-2.5 mb-4'>
                                <View>
                                    <Text className='text-[#2260FF] text-sm font-medium'>Dr. Olivia Turner, M.D.</Text>
                                    <Text>{"Treatment and prevention of\n skin and photodermatitis."}</Text>
                                </View>
                                <View className='flex flex-row gap-1'>
                                    <View className='bg-white rounded-full h-3 w-3 p-[1px]'>
                                        <MaterialCommunityIcons name="check-bold" size={10} color="#2260FF" />
                                    </View>
                                    <View className='bg-white rounded-full h-3 w-3 p-[1.9px]'>
                                        <FontAwesome name="close" size={9} color="#2260FF" />
                                    </View>
                                </View>
                            </View>
                            <View className='border-t border-[#2260FF] border-dashed h-1 w-56' />
                        </View>
                    </View>
                </View>
            </View>
            <View className='mt-2 px-5 mb-24'>
                <DoctorCard
                    image={profile2}
                    name="Dr. Olivia Turner, M.D."
                    specialization="Dermato-Endocrinology"
                    rating="5"
                    comments="60"
                />
                <DoctorCard
                    image={profile1}
                    name="Dr. Sophia Martinez, Ph.D."
                    specialization="Cosmetic Bioengineering"
                    rating="5"
                    comments="150"
                />
                <DoctorCard
                    image={profile1}
                    name="Dr. Sophia Martinez, Ph.D."
                    specialization="Cosmetic Bioengineering"
                    rating="5"
                    comments="150"
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginBottom: 10,
    },
});

export default HomeScreen;

