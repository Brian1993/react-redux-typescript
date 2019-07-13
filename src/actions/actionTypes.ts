import { SetTodosAction, DeleteTodAction } from './index'

export enum ACTION_TYPES {
  SET_TODOS,
  DELETE_TODO
}

export type ACTION = SetTodosAction | DeleteTodAction