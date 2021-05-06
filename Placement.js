import React from 'react';
import { StyleSheet,  View, Button} from 'react-native';


class Placement extends React.Component {
  render() {
    return (
      <View style={styles.container}>
     
         <Button  color ='#4B0082'
          title="Загрузить курсы"
         />
      <Button color= '#4B0082'
          title="Сохранить"
        />
        <Button color= '#4B0082'
          title="Продолжить"
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
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 2,
  },
});

export default Placement;