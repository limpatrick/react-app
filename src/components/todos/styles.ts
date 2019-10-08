export default {
	root: {
		boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
		background: '#fff',
		'& .ant-table-title': { borderBottom: '2px solid #e6e6e6' },
		'& .ant-pagination': {
			marginRight: 16
		},
		'& .ant-table-tbody': {
			'& > .ant-table-row': {
				'&:hover': {
					'& $deleteBtn': {
						display: 'inline-block'
					}
				},
				'& > td': {
					fontSize: '1.2rem',
					fontWeight: 300,
					lineHeight: '1.2rem'
				}
			}
		},
		'& .ant-table-footer': {
			backgroundColor: '#fff'
		}
	},
	deleteBtn: {
		display: 'none'
	}
};
