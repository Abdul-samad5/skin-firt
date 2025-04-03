import { COLORS } from "@/src/theme/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export const CustomVerificationBox = ({
  customClassName,
}: {
  customClassName?: string;
}) => {
  return (
    <View className={`mt-7 w-full ${customClassName}`}>
      <OtpInput
        numberOfDigits={4}
        onTextChange={(text) => console.log(text)}
        theme={{
          containerStyle: {
            marginTop: 10,

          },
          pinCodeContainerStyle: {
            width: "15%",
            marginRight: 20,
            backgroundColor: "#00E5AE",

          },
          focusedPinCodeContainerStyle: {
            borderColor: "#00E5AE",

          },
        }}
      />

      <View className="flex justify-between flex-row w-full py-6">
        <Text className="text-[#303030] font-medium text-sm">09:59 left</Text>
        <Text className="text-[#EC2044] text-sm font-medium underline">Resend code?</Text>
      </View>

    </View>
  );
};
