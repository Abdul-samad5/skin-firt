import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";

interface DropdownFieldProps {
    label?: string;
    isRequired?: boolean;
    selectedValue: string;
    onValueChange: (value: string) => void;
    options: { label: string; value: string }[];
    marginTop?: number | string;
    marginBottom?: number | string;
    width?: number | string;
    height?: number | string;
}

const DropdownField = ({
    label,
    isRequired,
    selectedValue,
    onValueChange,
    options,
    marginTop = 0,
    marginBottom = 0,
    width = "100%",
    height = 46,
}: DropdownFieldProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <View className={`mt-${marginTop} mb-${marginBottom} w-${width}`}>
            {label && (
                <Text className="text-base font-light mb-2 text-[#000]">
                    {label} {isRequired && "*"}
                </Text>
            )}
            <View className="relative">
                <TouchableOpacity
                    onPress={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`border border-[#FAF8F8] rounded-[50px] p-3 pr-10 text-sm bg-[#FAF8F8] flex-row items-center justify-between`}
                >
                    <Text className="text-sm text-[#000]">
                        {options.find((opt) => opt.value === selectedValue)?.label || "Select an option"}
                    </Text>
                    <AntDesign name={isDropdownOpen ? "up" : "down"} size={16} color="#999" />
                </TouchableOpacity>

                {isDropdownOpen && (
                    <View className="absolute top-full left-0 right-0 bg-[#FAF8F8] border border-[#FAF8F8] rounded-lg shadow-lg z-10">
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => {
                                onValueChange(itemValue);
                                setIsDropdownOpen(false);
                            }}
                            style={{  width: "100%" }}
                        >
                            {options.map((option) => (
                                <Picker.Item key={option.value} label={option.label} value={option.value} />
                            ))}
                        </Picker>
                    </View>
                )}
            </View>
        </View>
    );
};

export default DropdownField;
