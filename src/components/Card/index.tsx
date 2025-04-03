import React from "react";
import { View, Text, Image, TouchableOpacity, ImageProps } from "react-native";

const Card = ({
    image,
    header,
    borderColor = "#EAEAEA", // Default border color
    onPress,
}: {
    image: ImageProps;
    header: string;
    borderColor?: string; // Optional prop for border color
    onPress?: () => void;
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                className="border rounded-full items-center p-3"
                style={{ borderColor }} // Apply the borderColor prop
            >
                <Image source={image} style={{ width: 36, height: 36 }} />
            </View>
            <Text className="text-xs font-bold text-black mt-2 text-center uppercase">{header}</Text>
        </TouchableOpacity>
    );
};

export default Card;