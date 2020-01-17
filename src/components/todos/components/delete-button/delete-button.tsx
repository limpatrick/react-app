import React from 'react';
import { connect } from 'react-redux';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import classNames from 'classnames';
import { Todo } from '~/store/features/todos/models';
import rootActions from '~/store/root-actions';

const dispatchProps = { deleteByIds: rootActions.todos.deleteByIds };

type Props = typeof dispatchProps & { className?: string; todo: Todo };

const DeleteButton = ({ className = '', deleteByIds, todo: { id } }: Props) => {
	const handleClick = () => {
		deleteByIds([id]);
	};

	return (
		<Button
			className={classNames({ [className]: !!className })}
			type="link"
			shape="circle"
			onClick={handleClick}
		>
			<FontAwesomeIcon icon={faTimesCircle} />
		</Button>
	);
};

export default connect(null, dispatchProps)(DeleteButton);
