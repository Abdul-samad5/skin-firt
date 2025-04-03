import React, { ReactNode } from 'react';
import { Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';

// Define the props type
interface CustomTabBarButtonProps {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30, // Adjust position above the tab bar
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 35,
          backgroundColor: '#6C63FF',
        }}
         className="pt-1"
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;
