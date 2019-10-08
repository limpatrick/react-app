import { Col, Row, Statistic } from 'antd';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import LinkButton from '~/components/link-button';
import styles from './styles';

type Props = WithSheet<typeof styles, {}>;

const PageNotFound = React.memo<Props>(({ classes }) => (
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
));

export default injectSheet(styles)(PageNotFound);
