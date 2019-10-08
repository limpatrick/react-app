import { Layout } from 'antd';
import React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import routes from '~/routes';
import Content from './components/content';
import Header from './components/header';
import styles from './styles';

type Props = WithSheet<typeof styles, {}>;

const App = React.memo<Props>(({ classes }) => (
	<Layout className={classes.root}>
		<Header />
		<Content routes={routes} />
	</Layout>
));

export default injectSheet(styles)(App);
