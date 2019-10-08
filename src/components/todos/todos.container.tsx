import {
	adjust,
	append,
	assoc,
	equals,
	evolve,
	filter,
	findIndex,
	flip,
	includes,
	length,
	pick,
	pipe,
	prop,
	propEq,
	propOr,
	reduce,
	reject
} from 'ramda';
import React, { PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import { Todo as ITodo } from '~/types/todo';
import { context, TodosContext, TodosContextProps } from './context';
import Todo from './todos';

type Props = RouteComponentProps;
type State = Pick<typeof context, 'todos' | 'status'>;

class TodosContainer extends PureComponent<Props, State> {
	state: State = pick(['todos', 'status'], context);

	componentDidMount() {
		const {
			match: { params }
		} = this.props;
		const status = propOr('all', 'status', params) as TodosContextProps['status'];

		this.filterTodos(status);
	}

	componentDidUpdate({ match: { params: prevParams } }: Props) {
		const {
			match: { params }
		} = this.props;

		if (!equals(prevParams, params)) {
			const status = propOr('all', 'status', params) as TodosContextProps['status'];

			this.filterTodos(status);
		}
	}

	filterTodos = (status: TodosContextProps['status']) => {
		this.setState(({ todos }) => ({
			status,
			todos: reduce(
				(acc, todo) => {
					const newTodo = assoc(
						'visible',
						status === 'all' || propEq('status', status, todo),
						todo
					);

					acc.push(newTodo);

					return acc;
				},
				[] as ITodo[],
				todos
			)
		}));
	};

	addTodo: TodosContextProps['addTodo'] = text => {
		this.setState(({ todos, status }) => ({
			todos: append(
				{
					id: uuidv4(),
					text,
					status: 'active',
					visible: status === 'all' || status === 'active'
				},
				todos
			)
		}));
	};

	toggleTodosStatus: TodosContextProps['toggleTodosStatus'] = ids => {
		this.setState(({ todos, status }) => {
			const completedLength = length(filter(propEq('status', 'completed'), todos));
			const idsLength = length(ids);

			return {
				todos: reduce(
					(acc, id) => {
						const idx = findIndex(propEq('id', id), acc);

						return idx !== -1
							? adjust(
									idx,
									pipe(
										evolve({
											status: (status: ITodo['status']) => {
												if (idsLength > 1)
													return completedLength < idsLength ? 'completed' : 'active';

												return status === 'active' ? 'completed' : 'active';
											}
										}),
										(todo: ITodo) =>
											assoc('visible', status === 'all' || propEq('status', status, todo), todo)
									),
									acc
							  )
							: acc;
					},
					todos,
					ids
				)
			};
		});
	};

	updateTodo: TodosContextProps['updateTodo'] = (id, text) => {
		this.setState(({ todos }) => {
			const idx = findIndex(propEq('id', id), todos);

			return idx !== -1 ? { todos: adjust(idx, assoc('text', text), todos) } : null;
		});
	};

	deleteTodos: TodosContextProps['deleteTodos'] = ids => {
		this.setState(({ todos }) => ({
			todos: reject(
				pipe(
					prop('id'),
					flip(includes)(ids) as any
				),
				todos
			)
		}));
	};

	render() {
		const { todos, status } = this.state;

		return (
			<TodosContext.Provider
				value={{
					todos,
					status,
					addTodo: this.addTodo,
					toggleTodosStatus: this.toggleTodosStatus,
					updateTodo: this.updateTodo,
					deleteTodos: this.deleteTodos
				}}
			>
				<Todo todos={reject(propEq('visible', false), todos)} />
			</TodosContext.Provider>
		);
	}
}

export default withRouter(TodosContainer);
