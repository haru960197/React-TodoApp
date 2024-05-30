import { useState, useEffect } from 'react';
import { ulid } from 'ulid';
import * as todoData from "../apis/todos";

export const useTodo = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        todoData.getAllTodosData().then((todo) => {
            setTodoList([...todo].reverse());
        });
    }, []);

    const toggleTodoListItemStatus = (id, done) => {
        const todoItem = todoList.find(item => item.id === id);
        const newTodoItem = { ...todoItem, done: !done };

        todoData.updateTodoData(id, newTodoItem).then((todo) => {
            const newTodoList = todoList.map((todo) => {
                return todo.id === id ? newTodoItem : todo;
            });
            setTodoList(newTodoList);
        });
    };

    const addTodoListItem = (todoContent) => {
        const newTodoItem = {
            id: ulid(),
            content: todoContent,
            done: false
        };
        return todoData.addTodoData(newTodoItem).then((todo) => {
            setTodoList([todo, ...todoList]);
        });
    };

    const deleteTodoListItem = (id) => {
        todoData.deleteTodoData(id).then((id) => {
            const newTodoList = todoList.filter(todo => todo.id !== id);
            setTodoList(newTodoList);
        });
    };

    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    };
};