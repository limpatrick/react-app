import { Button, Input } from 'antd';
import React, { ComponentProps } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import styles from './styles';

type Props = {
	value: string;
	onClickAll: () => void;
	onChange: ComponentProps<typeof Input>['onChange'];
	onPressEnter: ComponentProps<typeof Input>['onPressEnter'];
} & WithSheet<typeof styles, {}>;

const Header = React.memo<Props>(({ classes, onClickAll, onChange, onPressEnter, value }) => (
	<div className={classes.root}>
		<div className={classes.buttonWrapper}>
			<Button type="link" shape="circle" icon="down" onClick={onClickAll} />
		</div>
		<div className={classes.inputWrapper}>
			<Input
				placeholder="Add a todo"
				onChange={onChange}
				onPressEnter={onPressEnter}
				value={value}
			/>
		</div>
	</div>
));

export default injectSheet(styles)(Header);
