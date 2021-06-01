import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";

function ResturantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantsInfoCard />
      </View>
    </SafeAreaView>
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

export default ResturantsScreen;
