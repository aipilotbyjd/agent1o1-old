import { useMemo, useState } from 'react';
import {
	Bot,
	ChevronRight,
	FileText,
	GitBranch,
	Grid2X2,
	Mail,
	MessageSquare,
	Search,
	Sparkles,
	WandSparkles,
	Workflow,
	Wrench,
	X,
	Zap,
} from 'lucide-react';
import { useNodeCategories } from '@/api/modules/node-types';
import { mapApiCategoriesToGroups } from '../../_helper/apiNodeCatalog.helper';
import { NODE_GROUPS } from '../../_helper/nodeGroups.constants';
import { useWorkflowEditor } from '../../_context/WorkflowEditorProvider.context';
import type { TNodeDefinition } from '../../_types/node.type';
import NodeLibrarySearch from './NodeLibrarySearch.partial';

const quickActions = [
	{ label: 'Classify', key: 'ai.agent' },
	{ label: 'Ask AI', key: 'ai.chat' },
];

const quickCards = [
	{
		label: 'On new email',
		key: 'trigger.webhook',
		icon: Mail,
		tone: 'rose',
	},
	{
		label: 'Post message',
		key: 'int.slack',
		icon: MessageSquare,
		tone: 'fuchsia',
	},
	{
		label: 'Extract',
		key: 'ai.extract',
		icon: FileText,
		tone: 'indigo',
	},
	{
		label: 'Agent',
		key: 'ai.agent',
		icon: Bot,
		tone: 'indigo',
	},
];

const browseCategories = [
	{
		label: 'AI & Automation',
		description: 'Ask, extract, generate',
		icon: Sparkles,
		tone: 'indigo',
		categories: ['ai', 'extract'],
	},
	{
		label: 'Triggers & Events',
		description: 'Start your workflow',
		icon: Zap,
		tone: 'amber',
		categories: ['input'],
	},
	{
		label: 'Flow & Logic',
		description: 'Conditions, loops, wait',
		icon: GitBranch,
		tone: 'cyan',
		categories: ['logic', 'loop', 'utility', 'flow-control'],
		featured: true,
	},
	{
		label: 'Data & Transform',
		description: 'Filter, merge, format',
		icon: Workflow,
		tone: 'emerald',
		categories: ['data', 'storage', 'scrape'],
	},
	{
		label: 'Apps & Integrations',
		description: 'Mailroom, Channels, Sheets...',
		icon: Grid2X2,
		tone: 'indigo',
		categories: ['integration', 'communication', 'http-apis'],
	},
	{
		label: 'Your Custom Nodes',
		description: 'Built by your team',
		icon: Wrench,
		tone: 'orange',
		categories: ['debug', 'note', 'output'],
	},
];

const toneClasses: Record<string, string> = {
	rose: 'bg-rose-50 text-rose-600',
	fuchsia: 'bg-fuchsia-50 text-fuchsia-600',
	indigo: 'bg-indigo-50 text-indigo-600',
	amber: 'bg-amber-50 text-amber-600',
	cyan: 'bg-cyan-50 text-cyan-600',
	emerald: 'bg-emerald-50 text-emerald-600',
	orange: 'bg-orange-50 text-orange-500',
};

const dragNode = (event: React.DragEvent, node: TNodeDefinition) => {
	event.dataTransfer.setData('application/x-node-def', node.key);
	event.dataTransfer.setData('application/x-node-definition', JSON.stringify(node));
	event.dataTransfer.effectAllowed = 'move';
};

const NodeLibrary = () => {
	const { state, dispatch } = useWorkflowEditor();
	const [query, setQuery] = useState('');
	const [activeBrowse, setActiveBrowse] = useState('Flow & Logic');
	const {
		data: apiCategories,
		isLoading: apiIsLoading,
		isError: apiIsError,
	} = useNodeCategories({
		include_nodes: true,
	});

	const apiGroups = useMemo(
		() => (apiCategories?.length ? mapApiCategoriesToGroups(apiCategories) : []),
		[apiCategories],
	);

	const isApiUnavailable = apiIsError || (!apiIsLoading && !apiCategories?.length);

	const groups = isApiUnavailable
		? NODE_GROUPS.map((g) => ({
				id: g.category,
				label: g.meta.label,
				color: g.meta.color,
				order: g.meta.order,
				nodes: g.nodes,
			}))
		: apiGroups;

	const nodes = useMemo(() => groups.flatMap((group) => group.nodes), [groups]);
	const findNode = (key: string) =>
		nodes.find((node) => node.key === key) ??
		nodes.find((node) => {
			const keyParts = key.split('.');
			const fallbackLabel = keyParts[keyParts.length - 1] ?? key;
			return node.label.toLowerCase().includes(fallbackLabel);
		});

	const addNode = (node?: TNodeDefinition) => {
		if (!node) return;
		dispatch({
			type: 'ADD_NODE',
			defKey: node.key,
			definition: node,
			position: { x: 120, y: 120 },
		});
	};

	const searchResults = useMemo(() => {
		const needle = query.trim().toLowerCase();
		if (!needle) return [];

		return nodes
			.filter((node) =>
				[node.label, node.description, node.category, node.key].some((value) =>
					value?.toLowerCase().includes(needle),
				),
			)
			.slice(0, 8);
	}, [nodes, query]);

	if (!state.ui.leftPanelOpen) return null;

	return (
		<aside className='flex h-full w-full shrink-0 flex-col overflow-hidden border-r border-zinc-200 bg-white text-zinc-950 shadow-[8px_0_28px_rgba(24,24,27,0.04)] dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-100'>
			<div className='flex items-center justify-between px-5 pt-5 pb-4'>
				<h2 className='text-base font-black tracking-tight text-zinc-950 dark:text-white'>
					Add a node
				</h2>
				<button
					type='button'
					onClick={() => dispatch({ type: 'TOGGLE_LEFT_PANEL' })}
					aria-label='Close node library'
					className='flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-white/[0.06] dark:hover:text-white'>
					<X size={18} />
				</button>
			</div>

			<div className='px-5'>
				<div className='flex h-10 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-zinc-400 shadow-xs focus-within:border-emerald-200 focus-within:text-zinc-500 focus-within:ring-2 focus-within:ring-emerald-100 dark:border-white/10 dark:bg-white/[0.03] dark:focus-within:border-emerald-300/30 dark:focus-within:ring-emerald-400/10'>
					<Search size={15} />
					<NodeLibrarySearch value={query} onChange={setQuery} />
				</div>
			</div>

			<div className='min-h-0 flex-1 overflow-y-auto px-5 pb-4'>
				<div className='mt-3 grid grid-cols-2 gap-2'>
					{quickActions.map((action) => {
						const node = findNode(action.key);

						return (
							<button
								key={action.label}
								type='button'
								draggable={Boolean(node)}
								onDragStart={(event) => node && dragNode(event, node)}
								onClick={() => addNode(node)}
								className='h-10 rounded-lg border border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-xs transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-100'>
								{action.label}
							</button>
						);
					})}
				</div>

				<div className='mt-2 grid grid-cols-2 gap-2'>
					{quickCards.map((card) => {
						const node = findNode(card.key);
						const Icon = card.icon;

						return (
							<button
								key={card.label}
								type='button'
								draggable={Boolean(node)}
								onDragStart={(event) => node && dragNode(event, node)}
								onClick={() => addNode(node)}
								className='flex h-24 flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white text-center shadow-xs transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]'>
								<span
									className={[
										'flex h-10 w-10 items-center justify-center rounded-lg',
										toneClasses[card.tone],
									].join(' ')}>
									<Icon size={20} />
								</span>
								<span className='mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
									{card.label}
								</span>
							</button>
						);
					})}
				</div>

				<div className='my-4 h-px bg-zinc-100 dark:bg-white/10' />

				{query.trim() ? (
					<div className='space-y-1'>
						<div className='px-1 pb-2 text-[11px] font-semibold tracking-[0.18em] text-zinc-400 uppercase'>
							Results
						</div>
						{searchResults.map((node) => (
							<button
								key={node.key}
								type='button'
								draggable
								onDragStart={(event) => dragNode(event, node)}
								onClick={() => addNode(node)}
								className='flex w-full cursor-grab items-center gap-3 rounded-xl px-2 py-2.5 text-left transition hover:bg-zinc-50 active:cursor-grabbing dark:hover:bg-white/[0.05]'>
								<span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-xs font-black text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300'>
									{node.icon}
								</span>
								<span className='min-w-0 flex-1'>
									<span className='block truncate text-sm font-semibold text-zinc-950 dark:text-zinc-100'>
										{node.label}
									</span>
									<span className='line-clamp-1 text-sm text-zinc-400'>
										{node.description}
									</span>
								</span>
							</button>
						))}
						{!apiIsLoading && searchResults.length === 0 && (
							<div className='px-1 py-6 text-center text-sm font-medium text-zinc-400'>
								No nodes found
							</div>
						)}
					</div>
				) : (
					<div>
						<div className='px-1 pb-3 text-[11px] font-semibold tracking-[0.18em] text-zinc-400 uppercase'>
							Browse
						</div>
						<div className='space-y-1'>
							{browseCategories.map((category) => {
								const Icon = category.icon;
								const isActive = activeBrowse === category.label;

								return (
									<button
										key={category.label}
										type='button'
										onClick={() => setActiveBrowse(category.label)}
										className={[
											'flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition',
											isActive
												? 'bg-zinc-100 dark:bg-white/[0.07]'
												: 'hover:bg-zinc-50 dark:hover:bg-white/[0.05]',
										].join(' ')}>
										<span
											className={[
												'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
												toneClasses[category.tone],
											].join(' ')}>
											<Icon size={19} />
										</span>
										<span className='min-w-0 flex-1'>
											<span className='block truncate text-sm font-semibold text-zinc-950 dark:text-zinc-100'>
												{category.label}
											</span>
											<span className='line-clamp-1 text-sm text-zinc-400'>
												{category.description}
											</span>
										</span>
										<ChevronRight
											size={17}
											className='shrink-0 text-zinc-400'
										/>
									</button>
								);
							})}
						</div>
					</div>
				)}
			</div>

			<div className='px-5 pb-5 pt-2 text-center font-mono text-[12px] leading-5 text-zinc-400'>
				<WandSparkles size={14} className='mr-1 inline-block align-[-2px]' />
				Drag a node onto the canvas - or click to drop it at the cursor.
			</div>
		</aside>
	);
};

export default NodeLibrary;
