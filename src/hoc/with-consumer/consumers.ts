import { TodosContext, TodosContextProps } from '~/components/todos/context';
import { WithConsumerInjectedProps } from './types';
import { withConsumer } from './with-consumer';

export type WithTodosConsumer = WithConsumerInjectedProps<'todos', TodosContextProps>;
export const withTodosConsumer = withConsumer({
	consumer: TodosContext.Consumer,
	name: 'todos'
});
