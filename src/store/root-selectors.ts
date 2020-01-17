import { routerSelectors } from './features/router';
import { todosSelectors } from './features/todos';

const rootSelectors = { router: routerSelectors, todos: todosSelectors };

export default rootSelectors;
