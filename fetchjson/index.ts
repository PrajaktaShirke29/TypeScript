import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Used to define the structure of json object present in the above url
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((res) => {
    const todo = res.data as Todo;

    const Id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(Id, title, completed);
});

// pass datatype in argument to avoid the error in passing data
const logTodo = (id: number, title: string, completed: boolean) =>{
    console.log(`
        ID : ${id},
        Title : ${title},
        Compleled: ${completed}
    `)
}
