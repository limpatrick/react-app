import { createUseStyles } from 'react-jss';

export default createUseStyles({
	root: {
		background: 'transparent',
		height: 125,
		lineHeight: '125px',
		textAlign: 'center',
		'& > a': {
			display: 'inline-block',
			'& > h1': {
				fontSize: '6rem',
				fontWeight: 100,
				marginBottom: 0
			}
		}
	}
});
