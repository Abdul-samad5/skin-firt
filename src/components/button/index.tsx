import React, { ReactElement } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface AppButtonTypes {
  title: string;
  span?: string;
  spanColor?: string;
  action?: () => void;
  backgroundColor: string;
  borderWidth?: number;
  color?: string;
  borderColor?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  width?: number | string;
  fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

  [key: string]: any;
}

const AppButton = ({
  title,
  action,
  backgroundColor,
  borderWidth,
  borderColor,
  leftIcon,
  span,
  spanColor,
  color,
  width,
  rightIcon,
  fontWeight,
  ...otherProps
}: AppButtonTypes) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[
        {
          height: 50,
          borderRadius: 50,
          width: width || "40%",
          backgroundColor: backgroundColor || "#00E5AE",
          borderWidth: borderWidth || 0,
          borderColor: borderColor,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        otherProps.style, // Merging any additional styles passed as props
      ]}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}
      <Text
        style={{
          color: color || "#fff",
          fontSize: 16,
          fontWeight: fontWeight || "400", // Use fontWeight prop here
          lineHeight: 15,
          marginTop: 2,
        }}
      >
        {title}
        <Text
          style={{
            color: spanColor || "#fff",
            fontSize: 16,
            fontWeight: fontWeight || "600", // Use the same fontWeight prop for span text
            lineHeight: 15,
            marginTop: 2,
          }}
        >
          {span}
        </Text>
      </Text>
      {rightIcon && <View className="ml-2">{rightIcon}</View>}
    </TouchableOpacity>
  );
};

export default AppButton;
