import React, { useReducer, useEffect, ComponentProps } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import classNames from 'classnames';
import { trim } from 'ramda';
import rootActions from '~/store/root-actions';
import { Todo, TodoStatus } from '~/store/features/todos/models';
import * as actions from './actions';
import reducer, { initialState } from './reducer';
import useStyles from './styles';

const dispatchProps = { edit: rootActions.todos.edit };

type Props = typeof dispatchProps & { todo: Todo };

const Text = ({ todo, edit }: Props) => {
	const [{ editing, value }, dispatch] = useReducer(reducer, initialState);
	const classes = useStyles();

	useEffect(() => {
		dispatch(actions.setEditingOff(todo.text));
	}, [todo.text]);

	const save = () => {
		const newValue = trim(value);

		if (todo.text !== newValue) edit(todo.id, newValue);
		else dispatch(actions.setEditingOff(todo.text));
	};
	const handleChange: ComponentProps<typeof Input>['onChange'] = ({ target: { value } }) => {
		dispatch(actions.setValue(value));
	};
	const handleKeyDown: ComponentProps<typeof Input>['onKeyDown'] = ({ keyCode }) => {
		// escape
		if (keyCode === 27) dispatch(actions.setEditingOff(todo.text));
	};
	const handleDoubleClick = () => {
		dispatch(actions.setEditingOn());
	};

	return editing ? (
		<Input
			autoFocus
			onBlur={save}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			onPressEnter={save}
			value={value}
		/>
	) : (
		<div
			onDoubleClick={handleDoubleClick}
			className={classNames(classes.root, {
				[classes.completed]: todo.status === TodoStatus.Completed
			})}
		>
			{value}
		</div>
	);
};

export default connect(null, dispatchProps)(Text);
