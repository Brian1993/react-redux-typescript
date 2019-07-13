import axios from 'axios'
import { Dispatch } from 'redux'
import { ACTION_TYPES } from './actionTypes'
import { Todo } from '../interface'
import { SetTodosAction } from './index'

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)

    dispatch<SetTodosAction>({
      type: ACTION_TYPES.SET_TODOS,
      payload: response.data
    })
  }
}