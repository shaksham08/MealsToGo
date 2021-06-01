import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import ResturantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ResturantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight, //on ios it will be null so safeAreaView would handle it,
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
