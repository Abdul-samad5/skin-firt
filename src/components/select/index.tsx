// import React from "react";
// import { useState } from "react";

// import { Picker, PickerIOS } from "@react-native-picker/picker";
// import { Text } from "react-native";
// import { Platform } from "react-native";

// interface SelectItemTypes {
//   title: string;
// }
// export function SelectItem({ title }: SelectItemTypes) {
//   const [val, setVal] = useState("");
//   // PickerIOS;
//   const isAndroid = Platform.OS === "android";
//   const items = [
//     { name: "Stylist" },

//     { name: "Customer" },

//   ];

//   return (
//     <>
//       <Text className="text-[#303030] font-medium text-base">{title}</Text>
//       {isAndroid ? (
//         <Picker
//           style={{
//             // height: 72,

//             flex: 1,
//             justifyContent: "center",
//             flexDirection: "column",
//             borderRadius: 50,
//             height: 48,
//             padding: 20,
//             fontSize: 12,
//             borderWidth: 1,
//             borderColor: "black",
//             backgroundColor:"#FAF8F8"

//           }}
//           selectedValue={val}
//           onValueChange={(itemValue: string, itemIndex) => setVal(itemValue)}
//         >
//           {items.map(({ name }, i) => (
//             <Picker.Item key={i} label={name} value={name} />
//           ))}
//         </Picker>
//       ) : (
//         <PickerIOS

//           style={{
//             height: 72,
//             flex: 1,
//             justifyContent: "center",
//             flexDirection: "column",

//           }}
//           selectedValue={val}
//           //@ts-ignore
//           onValueChange={(itemValue: string) => setVal(itemValue)}
//         >
//           {items.map(({ name }, i) => (
//             <Picker.Item key={i} label={name} value={name} />
//           ))}
//         </PickerIOS>
//       )}
//     </>
//   );
// }
import React, { useState } from "react";
import { View, Text, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface SelectItemProps {
  title: string;
  items: { label: string; value: string }[];
  selectedValue?: string;
  onValueChange?: (value: string) => void;
}

export function SelectItem({ title, items, selectedValue, onValueChange }: SelectItemProps) {
  const [val, setVal] = useState(selectedValue || "");

  const handleValueChange = (itemValue: string) => {
    setVal(itemValue);
    if (onValueChange) {
      onValueChange(itemValue);
    }
  };

  return (
    <View>
      <Text className="text-[#303030] font-medium text-base mb-2">{title}</Text>
      <View
        style={{
          borderRadius: 50,
          borderWidth: 0,
          borderColor: "black",
          backgroundColor: "#FAF8F8",
          height: 48,
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Picker
          selectedValue={val}
          onValueChange={handleValueChange}
          style={{
            fontSize: 12,
          }}
        >
          {items.map(({ label, value }, i) => (
            <Picker.Item key={i} label={label} value={value} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
