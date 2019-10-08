const border = { border: 'none !important' };
const boxShadow = { boxShadow: 'none' };
const pseudoClass = { ...border, ...boxShadow };

export default {
	root: { display: 'flex', '& > *': { padding: '0 16px' } },
	buttonWrapper: { width: 64 },
	inputWrapper: {
		width: '100%',
		'& > input': {
			...border,
			fontSize: '1.4rem',
			fontWeight: 300,
			lineHeight: '1.4rem',
			paddingLeft: 0,
			'&:active': pseudoClass,
			'&:focus': pseudoClass,
			'&:hover': pseudoClass,
			'&::placeholder': {
				fontStyle: 'italic',
				fontWeight: 300,
				color: '#e6e6e6',
				padding: {
					left: 2
				}
			}
		}
	}
};
