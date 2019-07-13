import { Todo } from '../interface'
import {  } from '../actions'
import { ACTION_TYPES, ACTION } from '../actions/actionTypes'

const initialState: Todo[] = []

export const todosReducer = (
  state: Todo[] = initialState,
  action: ACTION
) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TODOS:
      return action.payload
    case ACTION_TYPES.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state
  }
}
