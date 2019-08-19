import {FetchTodoActions, DeleteTodoAction} from './todos'
export enum ActionTypes{
    fetchTodos,
    deleteTodos
}
export type Action = FetchTodoActions | DeleteTodoAction