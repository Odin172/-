import React from 'react';
import { StyleSheet, TextInput, View, Button, Alert} from 'react-native';
let user={
  city: '',
name1:'',
name2:'',
email:'',
password:'',
password2:'',
numberphone:''
}
class Registration extends React.Component {  
  render() {
    return (
      <View style={styles.container} >
             <TextInput style={styles.input} placeholder ='Город'
             onChangeText={input=>user.city=input}/>
             <TextInput style={styles.input} placeholder ='Фамилия'
             onChangeText={input=>user.name2=input}/>
             <TextInput style={styles.input} placeholder ='Имя'
             onChangeText={input=>user.name1=input}/>
              <TextInput style={styles.input} placeholder ='email'
             onChangeText={input=>user.email=input}/>
             <TextInput style={styles.input} placeholder ='Пароль'
             onChangeText={input=>user.password=input}/>
             <TextInput style={styles.input} placeholder ='Повторите пароль'
             onChangeText={input=>user.password2=input}/>    
              <TextInput style={styles.input} placeholder ='Номер телефона'
             onChangeText={input=>user.numberphone=input}/>     
            <Button color = '#4B0082'  
            title = "Сохранить"  
            onPress={()=> {if (user.password2 != user.password) {Alert.alert('Пароли не совпадают!')} 
            else {
              sendRequest('POST')
.then(data=> console.log(data))
.catch(err=>console.log(err))
            }}} /> 
        <Button color= '#4B0082'
          title="Продолжить"
          onPress={() =>
            
            this.props.navigation.navigate('Авторизация')
            
             }
        />    
     </View >
    );
  }
}

function sendRequest(method){
  console.log(user.city,user.name1,user.name2,user.email,user.password,user.password2,user.numberphone)
  const headers ={
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
   return fetch('http://192.168.0.105:4000/reg',{
    method: method,
    body:  JSON.stringify({
      user:{
        city: user.city,
        name1:user.name1,
        name2:user.name2,
        email:user.email,
        password:user.password,
        numberphone:user.numberphone,
      }
    }),
    headers:headers
  }).then(response=>{
    return response.json
  })
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  
  input:{
    width:'70%',
    borderStyle: 'solid',
    borderBottomWidth:2,
    borderBottomColor: '#4B0082'
  }
});

export default Registration;