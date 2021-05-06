import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class MenuEmployer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
        title="Разместись курсы и тесты"
        color='#4B0082'
        onPress={()=> this.props.navigation.navigate('Размещение')}/>
         <Button 
          title="Входящие заявки"
          color='#4B0082'
        onPress={()=> this.props.navigation.navigate('Заявки')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',  
  },
});


export default MenuEmployer;