import theme from '~/utils/theme';

export default {
	root: { transition: 'color 0.4s', wordBreak: 'break-word' },
	completed: { color: theme['@border-color-base'], textDecoration: 'line-through' }
};
