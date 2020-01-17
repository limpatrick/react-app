import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { RootState } from '~/store/root-reducer';
import rootSelectors from '~/store/root-selectors';
import Header from './components/header';
import Footer from './components/footer';
import StatusButton from './components/status-button';
import Text from './components/text';
import DeleteButton from './components/delete-button';
import useStyles from './styles';

const mapStateToProps = (state: RootState) => ({
	allTodosIds: rootSelectors.todos.getAllTodosIds(state),
	todos: rootSelectors.todos.getCurrentTodos(state)
});

type Props = ReturnType<typeof mapStateToProps>;

const Todos = ({ allTodosIds, todos }: Props) => {
	const classes = useStyles({ allTodosIds, todos });

	return (
		<Table
			className={classes.root}
			dataSource={todos}
			rowKey="id"
			title={() => <Header />}
			showHeader={false}
			pagination={false}
			locale={{ emptyText: 'No todos' }}
			footer={() => <Footer />}
		>
			<Table.Column key="status" render={todo => <StatusButton todo={todo} />} width={64} />
			<Table.Column key="text" render={todo => <Text todo={todo} />} />
			<Table.Column
				key="delete"
				render={todo => <DeleteButton className={classes.deleteBtn} todo={todo} />}
				width={64}
			/>
		</Table>
	);
};

export default connect(mapStateToProps)(Todos);
