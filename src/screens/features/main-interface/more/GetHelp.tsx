import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StackNavigationProps } from '@/src/shared'
import { Entypo } from '@expo/vector-icons';

import Assets from '@/assets/svg/Assets';
import { Icon } from 'react-native-paper';

const GetHelp = ({ navigation }: StackNavigationProps) => {
    const mores = [
        {
            id: 1,
            name: "Call Us",
            icon: Assets.receipt,
            description: "Contact call center",
            link: () => navigation.navigate('CallUs'),
        },
        {
            id: 2,
            name: "Chat With Us",
            icon: Assets.help,
            description: "Send an in-app chat",
            link: () => navigation.navigate('ChatUs'),
        },
      
    ]
    return (
        <View className='bg-white flex-1 w-full h-full '>

            <View className=" p-5 ">
                {mores.map((more) => (
                    <TouchableOpacity className="flex flex-row justify-between mb-5" key={more.id}
                        onPress={more.link}
                    >
                        <View className='flex flex-row items-center gap-3'>
                            <View className='bg-[#00E5AE1A] rounded p-2 w-8 h-8'>
                                <Icon source={more.icon} size={16} />
                            </View>
                            <View className='w-52'>
                                <Text className='text-[#001D56] font-bold text-base'>{more.name}</Text>
                                <Text className='text-[#AAA8A8] text-sm font-medium flex-wrap pt-1'>{more.description}</Text>
                            </View>
                        </View>
                        <View className='pr-1'>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default GetHelp