import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { withTodosConsumer, WithTodosConsumer } from '~/hoc/with-consumer';
import { Todo } from '~/types/todo';
import styles from './styles';

type Props = { todo: Todo } & WithTodosConsumer & WithSheet<typeof styles, {}>;

const StatusButton = React.memo<Props>(
	({
		todo: { id, status },
		context: {
			todos: { toggleTodosStatus }
		},
		classes
	}) => (
		<Button
			className={classes.root}
			type="link"
			shape="circle"
			onClick={() => toggleTodosStatus([id])}
		>
			{status === 'completed' ? (
				<FontAwesomeIcon icon={faCheckCircle} />
			) : (
				<FontAwesomeIcon icon={faCircle} />
			)}
		</Button>
	)
);

export default withTodosConsumer(injectSheet(styles)(StatusButton));
