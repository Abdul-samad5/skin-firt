import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import profile from "../../../../../assets/images/Vector.png"
import { StackNavigationProps } from '@/src/shared'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TagComponent from '@/src/components/TagComponent';

const AccountDetails = ({ navigation }: StackNavigationProps) => {
    return (
        <ScrollView className='flex-1 w-full h-full'>
            <View className='bg-[#00E5AE1A] p-5 border-b border-[#00E5AE1A] rounded-bl-3xl rounded-br-3xl h-40'>
                <View className='flex-row justify-center items-center p-4'>
                    <View className='flex-col items-center'>
                        <View>
                            <Image source={profile} style={{ width: 67, height: 67 }} />
                        </View>
                        <Text className='text-base font-bold text-black mt-5'>PAIVIA HOLDER STAFF</Text>
                    </View>

                </View>
            </View>
            <View className='mt-10'>
                <TagComponent tagName='Your Tag Name' tagValue='@paivia_ambassador' tagFontSize={12} tagFontWeight='normal' tagNameColor='#AAA8A8' tagValueColor='#001d56' copyTextColor='#00E5AE' />
                <TagComponent tagName='Your Account Number' tagValue='xxxxxx0456' tagFontWeight='bold' tagNameColor='#AAA8A8' tagValueColor='#001d56' copyTextColor='#00E5AE' />
                <View className="flex justify-between flex-row items-center p-4">
                    {/* Tag Name and Value */}
                    <View className='flex flex-row items-center gap-3'>
                        <View>
                            <Text style={{ color: "#AAA8A8" }} className="text-xs font-normal">
                                Balance Limit
                            </Text>
                            <Text style={{ color: "#001d56" }} className="text-base font-bold">
                                $100,000.00
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: "#AAA8A8" }} className="text-xs font-normal">
                                Balance Limit
                            </Text>
                            <Text style={{ color: "#001d56" }} className="text-base font-bold">
                                $100,000.00
                            </Text>
                        </View>
                    </View>

                    {/* Copy Section */}
                    <TouchableOpacity className="flex bg-[#ffc200] p-2 justify-center items-center rounded">
                        <Text style={{ color: "white" }}>
                            Upgrade
                        </Text>

                    </TouchableOpacity>
                </View>
                <TagComponent tagName='@paivia_ambassador' ChevronOnpress={() => navigation.navigate("Username")} tagFontWeight='bold' tagFontSize={16} tagValue='Username' tagNameColor='#001d56' tagValueColor='#AAA8A8' copyTextColor='#00E5AE' type='chevron' />
                <TagComponent tagName='PAIVIA HOLDER STAFF' tagFontWeight='bold' tagFontSize={16} tagValue='Account Name' tagNameColor='#AAA8A8' tagValueColor='#AAA8A8' copyTextColor='#00E5AE' type='chevron' />

                <TagComponent tagName='Paul Simeon' tagFontWeight='bold' tagFontSize={16} tagValue='Next of Kin' tagNameColor='#001d56' tagValueColor='#AAA8A8' copyTextColor='#00E5AE' type='chevron' />
                <TagComponent tagName='Single' tagFontWeight='bold' tagFontSize={16} tagValue='Marital Status ' tagNameColor='#001d56' tagValueColor='#AAA8A8' copyTextColor='#00E5AE' type='chevron' />
                <TagComponent tagName='Delete Account' tagFontWeight='bold' tagFontSize={16} tagValue='Deactivate Your Paivia Account' tagNameColor='#B90000' tagValueColor='#AAA8A8' copyTextColor='#00E5AE' type='chevron' />
                <TagComponent tagName='Restrict Account' tagFontWeight='bold' tagFontSize={16} tagValue='Stop transac tion in emergency situations' tagNameColor='#B90000' tagValueColor='#AAA8A8' copyTextColor='#00E5AE' type='chevron' />
            </View>
        </ScrollView >
    )
}

export default AccountDetails