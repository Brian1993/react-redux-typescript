import { ACTION_TYPES } from './actions/actionTypes' 

export interface StoreState {
  todos: Todo[]
}

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface setTodosAction {
  type: ACTION_TYPES.SET_TODOS
  payload: Todo[]
}

