import { ComponentProps } from 'react';
import { Route as RouteComponent } from 'react-router-dom';
import { Omit } from 'utility-types';

export type Route = {
	key: string;
	footer?: boolean;
	fullHeight?: boolean;
} & Omit<
	ComponentProps<typeof RouteComponent>,
	'render' // fullHeight parameter
>;
