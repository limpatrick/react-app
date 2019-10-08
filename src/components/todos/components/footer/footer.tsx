import { Button, Col, Row } from 'antd';
import classNames from 'classnames';
import { filter, length, map, prop, propEq } from 'ramda';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import LinkButton from '~/components/link-button';
import { withTodosConsumer, WithTodosConsumer } from '~/hoc/with-consumer';
import { Todo } from '~/types/todo';
import styles from './styles';

type Props = WithTodosConsumer & WithSheet<typeof styles, {}>;

const mapToText = (todos: Todo[]) => {
	const todosLength = length(todos);

	return `${todosLength} item${todosLength > 1 ? 's' : ''} left`;
};

const links = [
	{ pathname: '/', status: 'all', name: 'All' },
	{ pathname: '/active', status: 'active', name: 'Active' },
	{ pathname: '/completed', status: 'completed', name: 'Completed' }
];

const Footer = React.memo<Props>(
	({
		classes,
		context: {
			todos: { todos, status: currentStatus, deleteTodos }
		}
	}) => {
		const activeTodos = filter(propEq('status', 'active'), todos);
		const completedTodos = filter(propEq('status', 'completed'), todos);
		const completedTodosLength = length(completedTodos);

		return (
			<Row className={classes.root}>
				<Col xs={24} sm={5}>
					{mapToText(activeTodos)}
				</Col>
				<Col xs={24} sm={14}>
					{map(
						({ pathname, status, name }) => (
							<LinkButton
								to={pathname}
								key={pathname}
								className={classNames({ [classes.activeLink]: currentStatus === status })}
								type="primary"
								ghost
							>
								{name}
							</LinkButton>
						),
						links
					)}
				</Col>
				<Col xs={24} sm={5}>
					{completedTodosLength > 0 && (
						<Button type="link" onClick={() => deleteTodos(map(prop('id'), completedTodos))}>
							Clear completed
						</Button>
					)}
				</Col>
			</Row>
		);
	}
);

export default withTodosConsumer(injectSheet(styles)(Footer));
