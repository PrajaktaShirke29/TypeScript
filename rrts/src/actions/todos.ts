import axios from 'axios'
import { Dispatch } from 'redux';
import { ActionTypes} from './types';

export interface Todo {
    id : number;
    title: string;
    completed : boolean;
}

export interface FetchTodoActions{
    type:ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction{
    type:ActionTypes.deleteTodos;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (disptach : Dispatch) =>{
        const response = await axios.get<Todo[]>(url);
        
        disptach<FetchTodoActions>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};

export const deleteTodos = (id : number): DeleteTodoAction =>{
    return{
        type: ActionTypes.deleteTodos,
        payload: id
    }
}