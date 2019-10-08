import { Layout } from 'antd';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { Link } from 'react-router-dom';
import styles from './styles';

type Props = WithSheet<typeof styles, {}>;

const Header = React.memo<Props>(({ classes }) => (
	<Layout.Header className={classes.root}>
		<Link to="/">
			<h1>todos</h1>
		</Link>
	</Layout.Header>
));

export default injectSheet(styles)(Header);
