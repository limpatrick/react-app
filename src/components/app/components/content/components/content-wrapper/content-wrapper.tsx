import React, { ReactElement, cloneElement, Fragment } from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';
import Footer from './components/footer';
import FullHeightWrapper from './components/full-height-wrapper';
import useStyles from './styles';

type Props = { children: ReactElement; footer?: boolean; fullHeight?: boolean };

const ContentWrapper = ({ children, footer = false, fullHeight = false }: Props) => {
	const classes = useStyles();
	const childrenElement = cloneElement(children);

	return (
		<Fragment>
			<Layout.Content className={classNames(classes.root, { [classes.fullHeight]: fullHeight })}>
				{fullHeight ? <FullHeightWrapper>{childrenElement}</FullHeightWrapper> : childrenElement}
			</Layout.Content>
			{footer && <Footer />}
		</Fragment>
	);
};

export default ContentWrapper;
