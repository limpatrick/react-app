import { createUseStyles } from 'react-jss';

export default createUseStyles({
	root: {
		backgroundColor: 'transparent',
		textAlign: 'center',
		'& > span': {
			color: '#bfbfbf',
			fontSize: '0.8rem',
			fontWeight: 300
		}
	}
});
