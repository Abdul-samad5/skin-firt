import React from 'react';
import { View, Text } from 'react-native';

interface DateBoxProps {
    day: string | number;
    dayName: string;
    backgroundColor?: string;
    textColor?: string;
}

const DateBox = ({ day, dayName, backgroundColor = 'bg-white', textColor = 'text-black' }: DateBoxProps) => {
    return (
        <View className={`${backgroundColor} rounded-[18px] h-16 w-11 flex items-center justify-center`}>
            <View>
                <Text className={`text-center ${textColor} text-2xl font-medium`} style={{ fontFamily: 'LeagueSpartan-Bold' }}>{day}</Text>
                <Text className={`text-center ${textColor} text-xs font-light`} style={{ fontFamily: 'LeagueSpartan-Bold' }}>{dayName}</Text>
            </View>
        </View>
    );
};

export default DateBox;