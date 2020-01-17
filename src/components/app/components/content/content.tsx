import React, { ComponentType } from 'react';
import { map } from 'ramda';
import { Route, Switch } from 'react-router';
import { Route as RouteType } from '~/models/route';
import ContentWrapper from './components/content-wrapper';

type Props = { routes: RouteType[] };

const Content = ({ routes }: Props) => (
	<Switch>
		{map(({ footer, fullHeight, component, ...route }) => {
			const Component = component as ComponentType;

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
);

export default Content;
