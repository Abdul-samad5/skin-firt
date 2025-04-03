import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

interface DoctorCardProps {
    image: ImageSourcePropType;
    name: string;
    specialization: string;
    rating: string;
    comments: string;
}

const DoctorCard = ({ image, name, specialization, rating, comments }: DoctorCardProps) => {
    return (
        <View className='bg-[#CAD6FF] rounded-2xl pl-3 pr-2 py-2 mt-2'>
            <View className='flex flex-row items-center gap-2'>
                <View className='w-14 h-14 rounded-full' >
                    <Image source={image} className='h-full w-full object-contain' />
                </View>
                <View>
                    <View className='w-56 bg-white rounded-xl px-4 py-2'>
                        <Text className='text-[#2260FF] font-medium text-sm'>
                            {name}
                        </Text>
                        <Text className='text-black font-light text-xs' style={{ fontFamily: 'LeagueSpartan-Bold' }}>
                            {specialization}
                        </Text>
                    </View>
                    <View className='mt-3'>
                        <View className='flex flex-row justify-between items-center'>
                            <View className='flex flex-row gap-1'>
                                <View className='bg-white rounded-xl flex flex-row w-11 items-center justify-center p-1'>
                                    <MaterialIcons name="star" size={16} color="#2260FF" />
                                    <Text className='text-[#2260FF] pl-1 text-xs font-light' style={{ fontFamily: 'LeagueSpartan-Bold' }}>{rating}</Text>
                                </View>
                                <View className='bg-white rounded-xl flex flex-row w-11 items-center justify-center p-1 pl-2'>
                                    <FontAwesome name="commenting-o" size={14} color="#2260FF" />
                                    <Text className='text-[#2260FF] pl-1 text-xs font-light' style={{ fontFamily: 'LeagueSpartan-Bold' }}>{comments}</Text>
                                </View>
                            </View>
                            <View className='flex flex-row gap-1'>
                                <View className='bg-white rounded-xl w-5 h-5 flex items-center justify-center p-1'>
                                    <AntDesign name="question" size={12} color="#2260FF" />
                                </View>
                                <View className='bg-white rounded-xl w-5 h-5 flex items-center justify-center'>
                                    <Entypo name="heart" size={10} color="#2260FF" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default DoctorCard;