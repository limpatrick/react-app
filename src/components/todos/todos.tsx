import { Table } from 'antd';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { Todo } from '~/types/todo';
import DeleteButton from './components/delete-button';
import Footer from './components/footer';
import Header from './components/header';
import StatusButton from './components/status-button';
import Text from './components/text';
import styles from './styles';

type Props = { todos: Todo[] } & WithSheet<typeof styles, {}>;

const Todos = React.memo<Props>(({ classes, todos }) => (
	<Table
		className={classes.root}
		dataSource={todos}
		rowKey="id"
		title={() => <Header />}
		showHeader={false}
		pagination={false}
		locale={{ emptyText: 'No todo' }}
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
));

export default injectSheet(styles)(Todos);
