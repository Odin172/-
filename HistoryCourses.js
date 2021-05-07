import React from 'react';
import { StyleSheet,  View,Text,VirtualizedList, SafeAreaView,StatusBar} from 'react-native';
import * as Progress from 'react-native-progress';
const DATA = [];
const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Алроса ${index+1}`
});
const getItemCount = (data) => 50

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
class HistoryCourses extends React.Component {
  render() {
    return (
         <View style={styles.container}>
         <SafeAreaView style={styles.container}>      
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title,
        <Progress.Bar progress={0.7} width={200} />
        }/>}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
        </View>
 
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
  fontSize: 32,
},
});
export default HistoryCourses;