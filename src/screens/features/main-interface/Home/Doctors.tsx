import { View, Text, ScrollView, StatusBar, Image } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, EvilIcons, FontAwesome, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import profile2 from "../../../../../assets/images/Mask group (3).png"
const Doctors = () => {
    return (
        <ScrollView className='flex-1 w-full h-full bg-white p-5'>
            <StatusBar backgroundColor="#E2EAFFA8" barStyle="dark-content"></StatusBar>
            <View className='flex flex-row w-60 gap-2 items-center'>
                <Text className='text-[#070707] text-xs font-light' style={{ fontFamily: 'LeagueSpartan-Bold' }}>Sort By</Text>
                <View className='flex flex-row w-12 items-center bg-[#2260FF] justify-center rounded-xl p-1'>
                    <Text className='text-white font-medium text-xs' style={{ fontFamily: 'LeagueSpartan-Bold' }}>A</Text>
                    <AntDesign name="arrowright" size={16} color="white" />
                    <Text className='text-white font-medium text-xs' style={{ fontFamily: 'LeagueSpartan-Bold' }}>Z</Text>
                </View>
                <View className='bg-[#CAD6FF] rounded-full w-6 h-6 p-1'>
                    <Entypo name="star-outlined" size={16} color="#2260FF" />
                </View>
                <View className='bg-[#CAD6FF] rounded-full w-6 h-6 p-1'>
                    <EvilIcons name="heart" size={17} color="#2260FF" />
                </View>
                <View className='bg-[#CAD6FF] rounded-full w-6 h-6 p-1 flex items-center justify-center'>
                    <Text>
                        <FontAwesome6 name="mars-stroke-up" size={16} color="#2260FF" />
                    </Text>
                </View>
                <View className='bg-[#CAD6FF] rounded-full w-6 h-6 p-1'>
                    <Text>
                        <FontAwesome6 name="mars-stroke" size={16} color="#2260FF" />
                    </Text>
                </View>
            </View>
            <View className='mt-5'>
                <View className='bg-[#CAD6FF] rounded-2xl pl-3 pr-2 py-2 mt-2'>
                    <View className='flex flex-row items-center gap-2'>
                        <View className='w-14 h-14 rounded-full' >
                            <Image source={profile2} className='h-full w-full object-contain' />
                        </View>
                        <View>
                            <View className='w-56  px-4 py-2'>
                                <Text className='text-[#2260FF] font-medium text-sm'>
                                    Dr. Alexander Bennett, Ph.D.
                                </Text>
                                <Text className='text-black font-light text-xs' style={{ fontFamily: 'LeagueSpartan-Bold' }}>
                                    Dermato-Genetics
                                </Text>
                            </View>
                            <View className='mt-3'>
                                <View className='flex flex-row gap-3 items-center'>
                                    <View className='flex flex-row gap-1'>
                                        <View className='bg-[#2260FF] rounded-xl flex flex-row w-11 items-center justify-center p-1'>
                                            <Text className='text-white'>Info</Text>
                                        </View>
                                    </View>
                                    <View className='flex flex-row gap-1'>
                                        <View className='bg-white rounded-full w-6 h-6 flex justify-center items-center'>
                                            <Text className='text-center'>
                                                <AntDesign name="calendar" size={17} color="#2260FF" />
                                            </Text>
                                        </View>
                                        <View className='bg-white rounded-full w-6 h-6 flex justify-center items-center'>
                                            <Text className='text-center'>
                                                <MaterialCommunityIcons name="exclamation" size={17} color="#2260FF" />
                                            </Text>
                                        </View>
                                        <View className='bg-white rounded-full w-6 h-6 flex justify-center items-center'>
                                            <Text className='text-center'>
                                                <AntDesign name="question" size={17} color="#2260FF" />
                                            </Text>
                                        </View>
                                        <View className='bg-white rounded-full w-6 h-6 flex justify-center items-center'>
                                            <Text className='text-center'>
                                                <EvilIcons name="heart" size={17} color="#2260FF" />
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Doctors