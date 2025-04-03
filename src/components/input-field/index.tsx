import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface InputFieldTypes {
  label?: string;
  placeholder?: string;
  InputType: "default" | "email-address" | "phone-pad" | "list";
  isRequired: boolean;
  marginTop?: number | string;
  marginBottom?: number | string;
  width?: number | string;
  height?: number | string;
  secureTextEntry?: boolean;
  value?: string
  onChangeText?: (text: string) => void
  multiline?: boolean; // New prop to control textarea behavior
  numberOfLines?: number; // New prop for line count
}

const InputField = ({
  label,
  placeholder,
  InputType,
  isRequired,
  marginTop = 0,
  onChangeText,
  value,
  marginBottom = 0,
  width = "100%",
  height = 46,
  secureTextEntry = false,
  multiline = false, // Default to false (single-line input)
  numberOfLines = 1,
}: InputFieldTypes) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className={`mt-${marginTop} mb-${marginBottom} w-${width}`}>
      {label && (
        <Text className="text-base font-light mb-2 text-[#000]">
          {label} {isRequired}
        </Text>
      )}
      <View className="relative">
        <TextInput
          placeholder={placeholder || ""}
          keyboardType={
            InputType === "email-address"
              ? "email-address"
              : InputType === "phone-pad"
                ? "numeric"
                : "default"
          }
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPasswordVisible}
          multiline={multiline} // Controls multiline behavior
          numberOfLines={multiline ? numberOfLines : 1}
          className={`mt-${height} border border-[#FAF8F8] rounded-[50px] p-3 pr-10 text-sm bg-[#FAF8F8] ${multiline ? "h-32 rounded-xl" : ""
            }`}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            className="absolute right-4 top-3"
          >
            <AntDesign
              name={isPasswordVisible ? "eye" : "eyeo"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};



export default InputField;
