import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
let user1={
  email2:'',
  password2:''
}
class Authorization extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput style={styles.input} placeholder ='Email'
      onChangeText={input=>user1.email=input}/>
      <TextInput style={styles.input} placeholder ='Пароль'
      onChangeText={input=>user1.password=input}/>
      <Button style={styles.buttonContainer} color= '#4B0082'
          title="Продолжить"
          onPress={() => {if(check)this.props.navigation.navigate('Выбор') }}/> 
          <Button style={styles.buttonContainer} color= '#4B0082'
          title="Зарегистрироваться"
          onPress={() =>
            this.props.navigation.navigate('Регистрация')
          }
        /> 
      </View>
    );
  }
}

function check() {
  return fetch("http://192.168.0.105:4000/auth", {
    method:"POST",
    headers: { 'Content-Type':'application/json'},
    body: JSON.stringify({
      email: user1.email,
      pass: user1.password
    })
  })
  .then(res=>{
    if(res.status==200)return true
    else return false
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    marginTop: 2,
    backgroundColor: '#4B0082',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000000',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  input:{
    width:'70%',
    borderStyle: 'solid',
    borderBottomWidth:2,
    borderBottomColor: '#4B0082'
  },
});

export default Authorization;