export interface GlobalStateType {
  toDoList: any
  setToDoList: (toDoList: any) => void
  form: {toDo: string}
  setForm: (form: any) => void
}

export interface GlobalProps {
  GlobalState: GlobalStateType
}

