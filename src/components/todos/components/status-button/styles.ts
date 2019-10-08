import theme from '~/utils/theme';

export default {
	root: {
		'&:not(:hover)': {
			'&:focus': { color: theme['@primary-color'] }
		}
	}
};
