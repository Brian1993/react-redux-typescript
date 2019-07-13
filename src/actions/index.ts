import { ACTION_TYPES } from './actionTypes'
import { Todo } from '../interface'

export interface SetTodosAction {
  type: ACTION_TYPES.SET_TODOS
  payload: Todo[]
}

export interface DeleteTodAction {
  type: ACTION_TYPES.DELETE_TODO,
  payload: number
}

export function setTodos (data: Todo[]): SetTodosAction {
  return {
    type: ACTION_TYPES.SET_TODOS,
    payload: data
  }
}

export function deleteTodo (id: number): DeleteTodAction {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    payload: id
  }
}
