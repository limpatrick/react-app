import React from 'react';
import { Layout } from 'antd';
import useStyles from './styles';

const Footer = () => {
	const classes = useStyles();

	return (
		<Layout.Footer className={classes.root}>
			<span>Double-click to edit a todo</span>
		</Layout.Footer>
	);
};

export default Footer;
