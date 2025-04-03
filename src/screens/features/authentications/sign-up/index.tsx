import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, StatusBar, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import InputField from "@/src/components/input-field";
import { useNavigation } from "@react-navigation/native";
import AppButton from "@/src/components/button";
import { SCREENS } from "@/src/screens/constant";
import CheckboxWithLabel from "@/src/components/Checkbox";
import { SelectItem } from "@/src/components/select";
import { useAuthFacade } from "@/src/store/auth/useAuthFacade";

export default function Register() {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigation = useNavigation<any>();

  const handleAgreeToggle = () => {
    setIsAgreed(!isAgreed);
  };


  const [first_name, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [last_name, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(password);
  const { register, error, loading, success, resetStore } = useAuthFacade();
  const handleRegister = () => {
    if (!first_name || !email || !last_name || !username || !password) {
      alert("Please fill in all fields");
      return;
    }
    console.log({ first_name, email, last_name, username, password });
    register({ last_name, email, first_name, username, password });
  };
  useEffect(() => {
    if (success) {
      Alert.alert("Success", "Registration successful! Please log in.");
      resetStore();  // Clear auth state
      navigation.reset({
        index: 0,
        routes: [{ name: SCREENS.LOGIN }],
      });
    }
  }, [success]);
  return (
    <ScrollView className="flex-1 bg-white p-5 h-full w-full">
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View>
        <Text className="text-xl font-semibold text-black pb-3">Create Profile</Text>
        <Text className="text-base font-light text-black">Create your paivia profile with a few details. Your Password must contain at least 8 characters including letters and numbers.</Text>
      </View>
      <View className="pt-5">
        <InputField
          label="Email Address"
          value={username}
          onChangeText={setUsername}
          InputType="email-address"
          isRequired
          marginTop={1}
        />
      </View>
      <View className="pt-5">
        <InputField
          label="Phone Number"
          InputType="phone-pad"
          value={first_name}
          onChangeText={setFname}
          isRequired
          marginTop={1}
        />
      </View>

      <View className="pt-5">
        <InputField
          value={password}
          onChangeText={setPassword}
          label="Password"
          InputType="default"
          placeholder="........"
          isRequired
          secureTextEntry
          marginTop={1}
        />
      </View>
      <View className="pt-5">
        <InputField
          value={password}
          onChangeText={setPassword}
          label="Confirm Password"
          InputType="default"
          placeholder="........"
          isRequired
          secureTextEntry
          marginTop={1}
        />
      </View>
      <View className="mt-10">
        <AppButton
          title={"Next"}
          backgroundColor="#00E5AE"
          action={() => { navigation.navigate("OtpField") }}
          width="100%"
        />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: "#ffffff"
  },
  inner: {
    marginTop: 70,
    // paddingHorizontal: 30,
    gap: 16,
  },
  shadowContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,

    elevation: 5,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.26,
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,

  },
  all: {
    paddingHorizontal: 20,
  }
});
