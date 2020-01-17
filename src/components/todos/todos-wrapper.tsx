import React from 'react';
import { Row, Col } from 'antd';
import Todos from './todos';

const TodosWrapper = () => (
	<Row type="flex" justify="space-around" align="middle">
		<Col xs={24} sm={20} md={16} lg={12} xl={8}>
			<Todos />
		</Col>
	</Row>
);

export default TodosWrapper;
