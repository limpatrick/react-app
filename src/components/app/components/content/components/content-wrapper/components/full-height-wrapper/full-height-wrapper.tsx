import React, { ReactNode } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import styles from './styles';

type Props = { children: ReactNode } & WithSheet<typeof styles, {}>;

const FullHeightWrapper = React.memo<Props>(({ classes, children }) => (
	<div className={classes.root}>
		<div className={classes.wrapper}>{children}</div>
	</div>
));

export default injectSheet(styles)(FullHeightWrapper);
