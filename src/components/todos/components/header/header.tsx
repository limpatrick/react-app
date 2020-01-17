import React, { useState, ComponentProps } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { trim } from 'ramda';
import rootActions from '~/store/root-actions';
import { RootState } from '~/store/root-reducer';
import rootSelectors from '~/store/root-selectors';
import useStyles from './styles';

const mapStateToProps = (state: RootState) => ({
	todosIds: rootSelectors.todos.getCurrentTodosIds(state)
});

const dipatchProps = { add: rootActions.todos.add, toggle: rootActions.todos.toggle };

type Props = ReturnType<typeof mapStateToProps> & typeof dipatchProps;

const Header = ({ add, toggle, todosIds }: Props) => {
	const [text, setText] = useState('');
	const classes = useStyles();

	const handleClick = () => {
		toggle(todosIds);
	};
	const handleChange: ComponentProps<typeof Input>['onChange'] = ({ target: { value } }) => {
		setText(value);
	};
	const handlePressEnter = () => {
		const value = trim(text);

		setText('');

		if (value.length) add(value, true);
	};

	return (
		<div className={classes.root}>
			<div className={classes.buttonWrapper}>
				{todosIds.length > 0 && (
					<Button type="link" shape="circle" icon="down" onClick={handleClick} />
				)}
			</div>
			<div className={classes.inputWrapper}>
				<Input
					placeholder="Add a todo"
					onChange={handleChange}
					onPressEnter={handlePressEnter}
					value={text}
				/>
			</div>
		</div>
	);
};

export default connect(mapStateToProps, dipatchProps)(Header);
