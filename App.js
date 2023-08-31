import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    // <View style={styles.container}>
    <View className="flex-1 justify-center items-center bg-amber-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="inverted" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
