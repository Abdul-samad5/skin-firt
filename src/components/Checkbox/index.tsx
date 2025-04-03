import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Assuming you're using AntDesign icons

export default function CheckboxWithLabel(props: {
  size: number;
  marginTop?: number;
  label: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(props.defaultChecked || false);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <View style={[styles.container, { marginTop: props.marginTop || 12 }]}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          {
            width: props.size,
            height: props.size,
            borderColor: checked ? '#000' : '#CCCCCC', // Optional: Change border color when checked
          },
        ]}
        onPress={handlePress}
      >
        {checked && <AntDesign name="check" size={props.size * 0.6} color="#000" />}
      </TouchableOpacity>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  label: {
    color: "#666666",
    fontSize: 16,
  },
});
