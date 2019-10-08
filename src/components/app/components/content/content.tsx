import { map } from 'ramda';
import React from 'react';
import { Route, Switch } from 'react-router';
import { Route as IRoute } from '~/types/route';
import ContentWrapper from './components/content-wrapper';

type Props = { routes: IRoute[] };

const Content = React.memo<Props>(({ routes }) => (
	<Switch>
		{map(({ footer, fullHeight, component, ...route }) => {
			const Component = component as React.ComponentType;

			return (
				<Route
					{...route}
					render={() => (
						<ContentWrapper footer={footer} fullHeight={fullHeight}>
							<Component />
						</ContentWrapper>
					)}
				/>
			);
		}, routes)}
	</Switch>
));

export default Content;
