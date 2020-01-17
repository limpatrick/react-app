import React from 'react';
import { Col, Row, Statistic } from 'antd';
import LinkButton from '~/components/link-button';
import useStyles from './styles';

const PageNotFound = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Row>
				<Col>
					<Statistic title="Page not found" value={404} />
				</Col>
			</Row>
			<Row>
				<Col>
					<LinkButton to="/" type="primary">
						Go back
					</LinkButton>
				</Col>
			</Row>
		</div>
	);
};

export default PageNotFound;
