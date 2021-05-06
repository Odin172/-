import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './src/Registration';
import Authorization from './src/Authorization';
import Choice from './src/Choise';
import MenuEmployer from './src/MenuEmployer'
import MenuWorker from './src/MenuWorker'
import Placement from './src/Placement'
import Applications from './src/Applications'
import ApplicationsWorker from './src/ApplicationsWorker'
import HistoryCourses from './src/HistoryCourses'
import Search from './src/Search'
const Stack = createStackNavigator();

class App extends React.Component { //Объявление класса
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="Авторизация"
            component={Authorization}
          />
          <Stack.Screen
            name="Регистрация"
            component={Registration}
          />
          <Stack.Screen
            name="Выбор"
            component={Choice}
          />
          <Stack.Screen
            name="Меню работодателя"
            component={MenuEmployer}
          />
          <Stack.Screen
            name="Меню работника"
            component={MenuWorker}
          />
           <Stack.Screen
            name="Размещение"
            component={Placement}
          />
           <Stack.Screen
            name="Заявки"
            component={Applications}
          />
          <Stack.Screen
            name="Ваши заявки"
            component={ApplicationsWorker}
          />
          <Stack.Screen
            name="История пройденных курсов"
            component={HistoryCourses}
          />
          <Stack.Screen
            name="Поиск курсов"
            component={Search}
          />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;