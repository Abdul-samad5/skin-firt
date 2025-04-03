import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import logo from '@/assets/images/Asset 4 4.png'
const NotificationCard = ({
    type,
    text
}: { type: string; text: string }) => {
    return (
        <View style={styles.card} >
            <View className="w-full flex flex-row items-center gap-2">
                <View className='h-10 w-10'>
                    <Image source={logo} className='w-full h-full' resizeMode='cover' />
                </View>
                <View className='flex-1'>
                    <Text className='font-semibold text-lg'>{type}</Text>
                    <Text className='text-sm font-normal text-black'>{text}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white', // Background color of the card
        borderRadius: 8, // Rounded corners
        padding: 16, // Inner padding
        // Shadow for iOS
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 4, // Shadow blur radius
        // Shadow for Android
        elevation: 4, // Elevation for Android shadow
    },
});

export default NotificationCard;