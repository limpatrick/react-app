import { Layout } from 'antd';
import classNames from 'classnames';
import React, { cloneElement, ReactElement } from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import Footer from './components/footer';
import FullHeightWrapper from './components/full-height-wrapper';
import styles from './styles';

type Props = {
	children: ReactElement;
	footer?: boolean;
	fullHeight?: boolean;
} & WithSheet<typeof styles, {}>;

const ContentWrapper = React.memo<Props>(
	({ classes, children, footer = false, fullHeight = false, ...props }) => {
		const childrenElement = cloneElement(children, props);

		return (
			<React.Fragment>
				<Layout.Content className={classNames(classes.root, { [classes.fullHeight]: fullHeight })}>
					{fullHeight ? <FullHeightWrapper>{childrenElement}</FullHeightWrapper> : childrenElement}
				</Layout.Content>
				{footer && <Footer />}
			</React.Fragment>
		);
	}
);

export default injectSheet(styles)(ContentWrapper);
