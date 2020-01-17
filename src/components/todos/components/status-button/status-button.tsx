import React from 'react';
import { connect } from 'react-redux';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import rootActions from '~/store/root-actions';
import { Todo, TodoStatus } from '~/store/features/todos/models';
import useStyles from './styles';

const dispatchProps = { toggle: rootActions.todos.toggle };

type Props = typeof dispatchProps & { todo: Todo };

const StatusButton = ({ todo: { id, status }, toggle }: Props) => {
	const classes = useStyles();
	const handleClick = () => {
		toggle([id]);
	};

	return (
		<Button className={classes.root} type="link" shape="circle" onClick={handleClick}>
			{status === TodoStatus.Completed ? (
				<FontAwesomeIcon icon={faCheckCircle} />
			) : (
				<FontAwesomeIcon icon={faCircle} />
			)}
		</Button>
	);
};

export default connect(null, dispatchProps)(StatusButton);
