import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const CallUs = () => {
    return (
        <View className='flex-1 w-full h-full p-5 bg-white'>
            <View className='flex justify-center items-center mx-auto'>
                <View className='h-60 w-60 '>
                    <Image source={require('@/assets/images/customer.png')} className='w-full h-full' />
                </View>

                <Text className='text-[#001D56] font-bold text-base'>Hi, let’s help you today</Text>
                <Text className='font-medium text-sm text-black mt-2 text-center'>We are always <Text className='font-bold'>available 24/7</Text> to attend to your <Text className='font-bold'>Emails</Text> as soon as possible.</Text>
                <Text className='text-black font-normal text-sm mt-5'>Tap the Email to Message us</Text>
                <View className='flex flex-row items-center gap-2 mt-5'>
                    <Text className='text-[#00E5AE] font-black text-base'>+448999CALLPAIVIA</Text>
                    <AntDesign name="copy1" size={24} color="#00E5AE" />
                </View>
            </View>
        </View>
    )
}

export default CallUs