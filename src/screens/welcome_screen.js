import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);
  const navigation = useNavigation();
  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    setTimeout(() => {
      ring1Padding.value = withSpring(ring1Padding.value + hp(5));
    }, 100);

    setTimeout(() => {
      ring2Padding.value = withSpring(ring2Padding.value + hp(5.5));
    }, 300);

    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <View className="flex-1 bg-amber-500 justify-center items-center space-y-10">
      <StatusBar style="auto" />

      {/* {Logo Image with Rings} */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2Padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1Padding }}
        >
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{
              width: hp(20),
              height: hp(20),
            }}
          />
        </Animated.View>
      </Animated.View>

      {/* {AppName with PuchLine} */}
      <View className="flex items-center space-y-2">
        <Text
          className="font-bold text-white tracking-widest"
          style={{ fontSize: hp(7) }}
        >
          Foody
        </Text>
        <Text
          className="font-medium text-white tracking-widest"
          style={{ fontSize: hp(2) }}
        >
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
