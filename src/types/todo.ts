export interface Todo {
	id: string;
	text: string;
	status: 'active' | 'completed';
	visible?: boolean;
}
