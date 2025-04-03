import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputField from "@/src/components/input-field";
import AppButton from "@/src/components/button";
import { SCREENS } from "@/src/screens/constant";
import CheckboxWithLabel from "@/src/components/Checkbox";
import { Pressable } from "react-native";
import { useAuthFacade } from "@/src/store/auth/useAuthFacade";
import Toast from "react-native-toast-message";
import { Icon } from "react-native-paper";


export default function Login() {
  const navigation = useNavigation<any>();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState<string>("");
  const [hidePassword, setHidePassword] = useState(password);
  const { login, error, loading } = useAuthFacade();

  // login({ email, password });

  return (
    <ScrollView className="flex-1 bg-white p-5 h-full w-full">
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View>
        <Text className="text-2xl text-center font-semibold text-black pb-3">Hey, there</Text>

      </View>
      <View className="pt-5">

        <InputField
          value={email}
          onChangeText={setUsername}

          label="Email Address"
          InputType="default"
          placeholder="Enter a your Email Address"
          isRequired
          marginTop={1}
        />
        <View className="pt-5">
          <InputField
            value={password}
            onChangeText={setPassword}

            label="Password"
            InputType="default"
            placeholder="xxxxxxxxxx"
            isRequired
            secureTextEntry
            marginTop={1}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("ForgotPassword")} className="mt-5">
          <Text className="p-0 text-center text-base leading-[16px] text-[#00E5AE] font-semibold flex-shrink pt-5">Change Password? </Text>
        </Pressable>
        <View className="mt-40">
          <View className="flex flex-col gap-5 w-full">
            <AppButton
              title={loading ? "Logging in..." : "Login"}
              backgroundColor="#00E5AE"
              action={() => navigation.navigate("BottomTabNavigator")}
              style={styles.button}
              fontWeight="700"
              width="100%"
            />
            <AppButton
              title={"Face ID"}
              backgroundColor="#ffffff"
              action={() => { navigation.navigate('FaceId') }}
              color='#00E5AE'
              borderColor='#00E5AE'
              borderWidth={1}
              leftIcon={<Icon source="face-recognition" size={20} color="#00E5AE" />}
              fontWeight="700"
              style={styles.button}
              width="100%"
            />

          </View>
          <View className="mt-5">
            <Text className="text-lg font-normal text-black">
              By tapping {" "}
              <Text className="font-medium">“Next” </Text>
              you agree to our {" "}
              <Text className="text-[#00E5AE] font-semibold">terms & condition</Text> {" "}and
              <Text className="text-[#00E5AE] font-semibold">{" "}
                our privacy policy
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
});
