import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import useStyles from './styles';

const Header = () => {
	const classes = useStyles();

	return (
		<Layout.Header className={classes.root}>
			<Link to="/">
				<h1>todos</h1>
			</Link>
		</Layout.Header>
	);
};

export default Header;
