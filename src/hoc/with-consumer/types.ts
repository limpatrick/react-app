export interface WithConsumerInjectedProps<Name extends string, T = {}> {
	context: Record<Name, T>;
}

export interface WithConsumerOptions<T = {}> {
	consumer: React.Consumer<T>;
	name: string;
}
