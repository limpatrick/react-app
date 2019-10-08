import { Layout } from 'antd';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import styles from './styles';

type Props = WithSheet<typeof styles, {}>;

const Footer = React.memo<Props>(({ classes }) => (
	<Layout.Footer className={classes.root}>
		<span>Double-click to edit a todo</span>
	</Layout.Footer>
));

export default injectSheet(styles)(Footer);
