import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { ImageBackground } from "react-native";

const AppSplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const animatedValue = useRef(new Animated.Value(0.5)).current;

  const height = Dimensions.get("window").height - 193;

  useEffect(() => {
    const AnimateText = Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    });
    const fadeInAnimation = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    });
    Animated.sequence([AnimateText, fadeInAnimation]).start();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground
        source={require("../../../../assets/images/images/splash.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Animated.Text style={[styles.text, { transform: [{ translateY }] }]}>
          GlamPro
        </Animated.Text>
        <View className="flex-1 justify-end">
          <View className="mb-0">
            <Text className="text-center text-white">All rights reserved</Text>
            <Text className="text-center text-white">Ⓒ 2023</Text>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e74864",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 70,
    color: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 35,
  },
});

export default AppSplashScreen;
