import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { GlobalProps } from '../types';
import Form from "../components/form";
import ToDoList from "../components/toDoList";

const Home: React.FC<GlobalProps> = ({ GlobalState }) => {
  return (
    <ScrollView style={styles.screen}>
      <Form GlobalState={GlobalState} />
      
      <ToDoList GlobalState={GlobalState} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    padding: 30
  }
})

export default Home