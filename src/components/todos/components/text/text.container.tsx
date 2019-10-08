import { equals, isEmpty, trim } from 'ramda';
import React, { ComponentProps, PureComponent } from 'react';
import { withTodosConsumer, WithTodosConsumer } from '~/hoc/with-consumer';
import { Todo } from '~/types/todo';
import Text from './text';

type Props = { todo: Todo } & WithTodosConsumer;
type State = { editing: boolean; text: string };

class TextContainer extends PureComponent<Props, State> {
	state: State = { editing: false, text: '' };

	componentDidMount() {
		const {
			todo: { text }
		} = this.props;

		this.setState({ text });
	}

	componentDidUpdate({ todo: prevTodo }: Props) {
		const { todo } = this.props;

		if (!equals(prevTodo, todo)) {
			const { text } = todo;

			this.setState({ editing: false, text });
		}
	}

	handleChange: ComponentProps<typeof Text>['onChange'] = ({ target: { value } }) => {
		this.setState({ text: value });
	};

	handleKeyDown: ComponentProps<typeof Text>['onKeyDown'] = ({ keyCode }) => {
		if (keyCode === 27) this.toggleEditing();
	};

	handlePressEnter: ComponentProps<typeof Text>['onPressEnter'] = () => {
		const {
			context: {
				todos: { updateTodo }
			},
			todo: { id }
		} = this.props;
		const { text } = this.state;
		const newText = trim(text);

		if (!isEmpty(newText)) updateTodo(id, newText);

		this.toggleEditing();
	};

	toggleEditing = () => {
		this.setState(
			({ editing }) => ({ editing: !editing }),
			() => {
				const {
					todo: { text: currentText }
				} = this.props;
				const { editing, text } = this.state;

				if (!editing && !equals(text, currentText)) this.setState({ text: currentText });
			}
		);
	};

	render() {
		const { todo } = this.props;

		return (
			<Text
				todo={todo}
				onPressEnter={this.handlePressEnter}
				toggleEditing={this.toggleEditing}
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
				{...this.state}
			/>
		);
	}
}

export default withTodosConsumer(TextContainer);
