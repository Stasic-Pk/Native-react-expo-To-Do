import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalStateType } from './src/types';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator()

export default function App() {

  //states
  const [toDoList, setToDoList] = useState([])
  const [form, setForm] = useState({toDo:""})
  const GlobalState: GlobalStateType = { toDoList, setToDoList, form, setForm }

  //nav

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
