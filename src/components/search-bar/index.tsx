import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface SearchBarProps {
    placeholder?: string;
    onChangeText?: (text: string) => void;
    onSubmit?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChangeText, onSubmit }) => {
    return (
        <View className='bg-[#FAF8F8] rounded-[40px] p-3 flex flex-row items-center'>
            <EvilIcons name="search" size={24} color="#AAA8A8" />
            <TextInput
                keyboardType='default'
                placeholder={placeholder}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
                className='w-full bg-[#FAF8F8]'
            />
        </View>
    );
};


export default SearchBar;