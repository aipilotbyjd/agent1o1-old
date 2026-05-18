const NodeLibrarySearch = ({
	value,
	onChange,
}: {
	value: string;
	onChange: (value: string) => void;
}) => (
	<input
		aria-label='Search nodes'
		value={value}
		onChange={(event) => onChange(event.target.value)}
		placeholder='Search nodes'
		className='min-w-0 flex-1 appearance-none border-0 bg-transparent text-sm text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none dark:text-zinc-100 dark:placeholder:text-zinc-600'
	/>
);

export default NodeLibrarySearch;
