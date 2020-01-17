import { createUseStyles } from 'react-jss';
import theme from '~/utils/theme';

export default createUseStyles({
	root: {
		'&:not(:hover)': {
			'&:focus': { color: theme['@primary-color'] }
		}
	}
});
