import React from 'react';
import { StyleSheet,  View, Button} from 'react-native';


class Choice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
     
         <Button  color ='#4B0082'
          title="Работадатель"
          onPress={() =>
            this.props.navigation.navigate('Меню работодателя')
          }
         />
      
        <Button color= '#4B0082'
          title="Работник"
          onPress={() =>
            this.props.navigation.navigate('Меню работника')
          }
        /> 
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

export default Choice;