import React from 'react';
import { Layout } from 'antd';
import Header from './components/header';
import Content from './components/content';
import routes from '~/routes';
import useStyles from './styles';

const App = () => {
	const classes = useStyles();

	return (
		<Layout className={classes.root}>
			<Header />
			<Content routes={routes} />
		</Layout>
	);
};

export default App;
