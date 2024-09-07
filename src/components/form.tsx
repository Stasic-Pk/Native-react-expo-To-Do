import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

import { GlobalProps } from '../types';

const Form: React.FC<GlobalProps> = ({ GlobalState }) => {
  const { toDoList, setToDoList, form, setForm } = GlobalState
  
  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={(toDo) => setForm({ ...form, toDo: toDo })}
          value={form.toDo}
          maxLength={25}
          placeholder="Your To-Do"
        />

        <View style={styles.formButtons}>
          <TouchableOpacity style={styles.delete} onPress={() => {
            setForm({toDo: ""})
          }}>
            <Text>Clear To-Do</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.create} onPress={() => {
            if (form.toDo !== "") {
              setToDoList((toDoList: any = form) => [...toDoList, form])
              // setForm({title: "", text: ""})
            }
          }}>
            <Text>Create</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 3,
    width: 350,
    height: 30,
    padding: 5,
    borderWidth: 2,
    borderRadius: 10
  },
  create: {
    backgroundColor: "#bfffc5",
    margin: 3,
    width: 100,
    height: 35,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  delete: {
    backgroundColor: "#f0806e",
    margin: 3,
    width: 100,
    height: 35,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#e6e6e6"
  },
  formButtons: {
    flexDirection: "row"
  }
})

export default Form