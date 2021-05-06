import React from 'react';
import { StyleSheet,  View, Button} from 'react-native';


class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>    
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 2
  },
});

export default Search;