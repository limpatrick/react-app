import { Input } from 'antd';
import classNames from 'classnames';
import React, { ComponentProps } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { Todo } from '~/types/todo';
import styles from './styles';

type Props = {
	editing: boolean;
	text: string;
	todo: Todo;
	onChange: ComponentProps<typeof Input>['onChange'];
	onKeyDown: ComponentProps<typeof Input>['onKeyDown'];
	onPressEnter: ComponentProps<typeof Input>['onPressEnter'];
	toggleEditing: () => void;
} & WithSheet<typeof styles, {}>;

const Text = React.memo<Props>(
	({
		classes,
		editing,
		text,
		todo: { status },
		onChange,
		onKeyDown,
		onPressEnter,
		toggleEditing
	}) =>
		editing ? (
			<Input
				autoFocus
				onBlur={toggleEditing}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onPressEnter={onPressEnter}
				value={text}
			/>
		) : (
			<div
				onDoubleClick={toggleEditing}
				className={classNames(classes.root, { [classes.completed]: status === 'completed' })}
			>
				{text}
			</div>
		)
);

export default injectSheet(styles)(Text);
