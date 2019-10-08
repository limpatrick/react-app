import PageNotFound from '~/components/page-not-found';
import Todos from '~/components/todos';
import { Route } from './types/route';

const routes: Route[] = [
	{
		key: 'todos',
		exact: true,
		footer: true,
		path: ['/', '/:status(active|completed)'],
		component: Todos
	},
	{ key: '404', fullHeight: true, component: PageNotFound }
];

export default routes;
