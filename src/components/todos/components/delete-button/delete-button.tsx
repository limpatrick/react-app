import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { withTodosConsumer, WithTodosConsumer } from '~/hoc/with-consumer';
import { Todo } from '~/types/todo';

type Props = { className?: string; todo: Todo } & WithTodosConsumer;

const DeleteButton = React.memo<Props>(
	({
		className = '',
		context: {
			todos: { deleteTodos }
		},
		todo: { id }
	}) => (
		<Button
			className={classNames({ [className]: !!className })}
			type="link"
			shape="circle"
			onClick={() => deleteTodos([id])}
		>
			<FontAwesomeIcon icon={faTimesCircle} />
		</Button>
	)
);

export default withTodosConsumer(DeleteButton);
