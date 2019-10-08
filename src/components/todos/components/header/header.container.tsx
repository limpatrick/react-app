import { map, prop, trim } from 'ramda';
import React, { ComponentProps, PureComponent } from 'react';
import { withTodosConsumer, WithTodosConsumer } from '~/hoc/with-consumer';
import Header from './header';

type Props = WithTodosConsumer;
type State = { text: string };

class HeaderContainer extends PureComponent<Props, State> {
	state: State = { text: '' };

	handleClickAll = () => {
		const {
			context: {
				todos: { todos, toggleTodosStatus }
			}
		} = this.props;

		toggleTodosStatus(map(prop('id'), todos));
	};

	handleChange: ComponentProps<typeof Header>['onChange'] = ({ target: { value } }) => {
		this.setState({ text: value });
	};

	handlePressEnter: ComponentProps<typeof Header>['onPressEnter'] = () => {
		const { text } = this.state;
		const value = trim(text);

		if (value) {
			this.setState({ text: '' }, () => {
				const {
					context: {
						todos: { addTodo }
					}
				} = this.props;

				addTodo(value);
			});
		}
	};

	render() {
		const { text } = this.state;

		return (
			<Header
				value={text}
				onClickAll={this.handleClickAll}
				onChange={this.handleChange}
				onPressEnter={this.handlePressEnter}
			/>
		);
	}
}

export default withTodosConsumer(HeaderContainer);
