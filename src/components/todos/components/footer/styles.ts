import { createUseStyles } from 'react-jss';
import theme from '~/utils/theme';

const activeLink = {
	border: `1px solid ${theme['@primary-color']}`
};

export default createUseStyles({
	root: {
		height: 33,
		'& *': {
			lineHeight: '2rem',
			fontSize: '0.9rem',
			fontWeight: 300
		},
		'& .ant-btn': {
			border: 'none',
			boxShadow: 'none',
			'&:hover': {
				extend: activeLink
			},
			'&$activeLink': {
				extend: activeLink
			}
		},
		'& > .ant-col': {
			'&:nth-child(2)': {
				textAlign: 'center',
				'& > .ant-btn': {
					margin: '0 4px'
				}
			},
			'&:last-child': {
				textAlign: 'right'
			},
			'@media (max-width: 575px)': {
				'&:first-child': {
					textAlign: 'center',
					marginBottom: 4
				},
				'&:nth-child(2)': {
					marginBottom: 4
				},
				'&:last-child': {
					textAlign: 'center'
				}
			}
		}
	},
	activeLink: {}
});
