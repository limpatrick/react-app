import { createContext } from 'react';
import { Todo } from '~/types/todo';
import todos from './data.json';

const defaultFunction = () => {};

export type TodosContextProps = {
	todos: Todo[];
	status: 'all' | Todo['status'];
	addTodo: (text: Todo['text']) => void;
	toggleTodosStatus: (ids: Array<Todo['id']>) => void;
	updateTodo: (id: Todo['id'], text: string) => void;
	deleteTodos: (ids: Array<Todo['id']>) => void;
};

export const context: TodosContextProps = {
	todos: todos as Todo[],
	status: 'all',
	addTodo: defaultFunction,
	toggleTodosStatus: defaultFunction,
	updateTodo: defaultFunction,
	deleteTodos: defaultFunction
};

export const TodosContext = createContext<TodosContextProps>(context);
