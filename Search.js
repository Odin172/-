import React, { Component } from "react";
import {Text,View,SafeAreaView,StyleSheet,StatusBar,VirtualizedList} from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Курсы ${index+1}`
});

const getItemCount = (data) => 50;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
class Search extends React.Component {
  render() {
    return(
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title,<Rating showRating ="{1}" startingValue="{0}"
        onFinishRating={this.ratingCompleted}
        /> } />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#4B0082',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 9,
  },
});

export default Search;





