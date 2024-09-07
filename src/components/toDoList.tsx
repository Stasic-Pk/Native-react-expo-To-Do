import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { GlobalProps } from '../types';

const ToDoList: React.FC<GlobalProps> = ({ GlobalState }) => {
  const { toDoList, setToDoList } = GlobalState

  const toDoToDisplay = (items: [{ toDo: string }]) => {
    return (
      <View>
        {items.map((item: {toDo: string}, index: number) => (
          <View style={styles.toDoForm}>
            <Text key={index} style={styles.toDo}> { item.toDo } </Text>
            <TouchableOpacity style={styles.delete} onPress={() => {
              setToDoList(delete toDoList[index])
              setToDoList(toDoList.filter(() => {return toDoList[index] == undefined}))
            }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.toDoList}>
      {toDoToDisplay(toDoList)}
    </View>
  )
}

const styles = StyleSheet.create({
  toDo: {
    flexGrow: 1,
    borderRadius: 8,
    borderWidth: 0.5,
    backgroundColor: "#f4f4f4",
    margin: 5,
    padding: 5,
    flexShrink: 1,
    flexWrap: "wrap",
    lineHeight: 20
  },
  toDoList: {
    marginTop: 10,
    backgroundColor: "#f4f4f4",
  },
  toDoForm: {
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: "#b5b5b5",
  },
  delete: {
    backgroundColor: "#ff926e",
    margin: 3,
    width: 100,
    height: 35,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default ToDoList