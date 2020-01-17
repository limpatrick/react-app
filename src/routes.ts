import PageNotFound from '~/components/page-not-found';
import Todos from '~/components/todos';
import { Route } from './models/route';

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

export const links = [
	{ pathname: '/', status: '', name: 'All' },
	{ pathname: '/active', status: 'active', name: 'Active' },
	{ pathname: '/completed', status: 'completed', name: 'Completed' }
];

export default routes;
