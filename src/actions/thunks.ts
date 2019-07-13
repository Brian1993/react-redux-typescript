import axios from 'axios'
import { Dispatch } from 'redux'
import { ACTION_TYPES } from './actionTypes'
import { setTodosAction, Todo } from '../interface'

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)

    dispatch<setTodosAction>({
      type: ACTION_TYPES.SET_TODOS,
      payload: response.data
    })
  }
}