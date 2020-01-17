export type Todo = {
	id: string;
	text: string;
	status: TodoStatus;
	visible: boolean;
};

export enum TodoStatus {
	Active = 'active',
	Completed = 'completed'
}
