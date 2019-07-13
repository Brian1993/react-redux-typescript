import { Todo, setTodosAction } from '../interface'
import { ACTION_TYPES } from '../actions/actionTypes'

const initialState: Todo[] = []

export const todosReducer = (
  state: Todo[] = initialState,
  action: setTodosAction
) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TODOS:
      return action.payload
    default:
      return state
  }
}