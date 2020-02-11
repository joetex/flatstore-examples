import flatstore from 'flatstore';

// let FILTER_ALL = 0;
// let FILTER_UNCOMPLETED = 1;
// let FILTER_COMPLETED = 2;

var todoIndex = 0;
// var todoFilterType = FILTER_ALL;

let defaultTodos = {};
flatstore.historical('todos');
flatstore.set("todos", defaultTodos);
flatstore.set("todosSorted", []);
flatstore.set("todosFilter", 0);


export function todoCreate(item) {

    let todos = flatstore.get("todos");

    if (!todos)
        todos = {};

    let todo = {};
    todo.id = ++todoIndex;
    todo.desc = item;
    todo.dateCreated = (new Date()).toLocaleString("en-US");
    todo.completed = false;

    todos[todo.id] = todo;

    flatstore.set("todos-" + todo.id, todo);

    todoSort(todos);
}

export function todoToggleComplete(id) {

    let todos = flatstore.get("todos");

    let todo = todos[id];
    if (!todo)
        return;
    todo.completed = !todo.completed;

    flatstore.set("todos-" + id, todo);
    //flatstore.set("todos", todos);
}

export function todoShowAll() {
    flatstore.set("todosFilter", 0);
}

export function todoShowCompleted() {
    flatstore.set("todosFilter", 1);
}

export function todoShowNotCompleted() {
    flatstore.set("todosFilter", 2);
}

export function todoUndo() {
    flatstore.undo("todos");

    let todos = flatstore.get("todos");
    todoSort(todos);
}

export function todoRedo() {
    flatstore.redo("todos");

    let todos = flatstore.get("todos");
    todoSort(todos);
}

export function todoSort(todos) {
    let sorted = [];
    for (let i in todos) {
        sorted.push(todos[i]);
    }
    sorted = todoSortByDate(sorted);
    flatstore.set("todosSorted", sorted);
}

function todoSortByDate(todos) {
    return todos.sort((a, b) => {
        return (new Date(b.dateCreated)).getTime() - (new Date(a.dateCreated)).getTime();
    })
}


