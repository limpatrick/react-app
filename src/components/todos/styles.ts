import { createUseStyles } from 'react-jss';
import { Todo } from '~/store/features/todos/models';

type StyleProps = { readonly allTodosIds: string[]; readonly todos: Todo[] };

export default createUseStyles({
	root: {
		boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
		background: '#fff',
		'& .ant-table-title': { borderBottom: '2px solid #e6e6e6' },
		'& .ant-pagination': {
			marginRight: 16
		},
		'& .ant-table-content': {
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
			'& > .ant-table-placeholder': {
				display: ({ todos }: StyleProps) => (todos.length > 0 ? 'block' : 'none')
			},
			'& > .ant-table-footer': {
				backgroundColor: '#fff',
				display: ({ allTodosIds }: StyleProps) => (allTodosIds.length > 0 ? 'block' : 'none'),
				paddingTop: 8,
				paddingBottom: 8
			}
		}
	},
	deleteBtn: {
		display: 'none'
	}
});
