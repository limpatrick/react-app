import React, { ReactNode } from 'react';
import useStyles from './styles';

type Props = { children: ReactNode };

const FullHeightWrapper = ({ children }: Props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>{children}</div>
		</div>
	);
};

export default FullHeightWrapper;
