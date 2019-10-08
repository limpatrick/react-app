import { assoc, omit } from 'ramda';
import React, { PureComponent } from 'react';
import { Subtract } from 'utility-types';
import { WithConsumerInjectedProps, WithConsumerOptions } from './types';

export const withConsumer = <Name extends string, T extends {}>({
	consumer: Consumer,
	name
}: WithConsumerOptions<T>) => <BaseProps extends WithConsumerInjectedProps<Name, T>>(
	BaseComponent:
		| React.ComponentType<BaseProps>
		| React.ComponentType<
				Subtract<BaseProps, WithConsumerInjectedProps<Name, T>> &
					Partial<WithConsumerInjectedProps<string>>
		  >
) => {
	type Props = Subtract<BaseProps, WithConsumerInjectedProps<Name, T>> &
		Partial<WithConsumerInjectedProps<string>>;

	return class WithConsumer extends PureComponent<Props> {
		static displayName = `withConsumer(${BaseComponent.displayName || BaseComponent.name})`;
		static readonly WrappedComponent = BaseComponent;

		render() {
			const props = omit(['context'], this.props) as any;
			const prevContext = this.props.context;

			return (
				<Consumer>
					{context => <BaseComponent {...props} context={assoc(name, context, prevContext)} />}
				</Consumer>
			);
		}
	};
};
