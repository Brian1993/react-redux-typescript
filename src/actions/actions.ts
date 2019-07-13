import { ACTION_TYPES } from './actionTypes'
import { Todo } from '../interface'

export function setTodos (data: Todo[]) {
  return {
    type: ACTION_TYPES.SET_TODOS,
    payload: data
  }
}