import { combineReducers }  from 'redux'
import { todosReducer } from './todo'
import { StoreState } from '../interface';



const reducers = combineReducers<StoreState>({
  todos: todosReducer
})

export default reducers
