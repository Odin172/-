import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class MenuWorker extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Оставленные заявки"
         color='#4B0082'
        onPress={()=> this.props.navigation.navigate('Ваши заявки')}/>
         <Button title="История курсов и тестов"
          color='#4B0082'
        onPress={()=> this.props.navigation.navigate('История пройденных курсов')}/>
        <Button title="Пройти курсы и тесты"
         color='#4B0082'
        onPress={()=> this.props.navigation.navigate('Поиск курсов')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default MenuWorker;