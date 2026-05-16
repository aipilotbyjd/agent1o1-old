import {
	Activity,
	BarChart3,
	Bot,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	CreditCard,
	Home,
	PlugZap,
	Search,
	Settings,
	Sparkles,
	Users,
	Workflow,
	Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import avatar from '@/assets/avatar/avatar1.png';
import { useWorkflowShellStore } from '@/store/workflowShell.store';

type TSidebarView =
	| 'dashboard'
	| 'agents'
	| 'workflows'
	| 'automations'
	| 'integrations'
	| 'analytics'
	| 'team'
	| 'settings';

const navigationGroups: {
	label: string;
	items: { id: TSidebarView; label: string; icon: typeof Home; badge?: string }[];
}[] = [
	{
		label: 'Workspace',
		items: [
			{ id: 'dashboard', label: 'Dashboard', icon: Home },
			{ id: 'agents', label: 'Agents', icon: Bot, badge: 'AI' },
			{ id: 'workflows', label: 'Workflows', icon: Workflow },
			{ id: 'automations', label: 'Automations', icon: Zap },
		],
	},
	{
		label: 'Operations',
		items: [
			{ id: 'integrations', label: 'Integrations', icon: PlugZap },
			{ id: 'analytics', label: 'Analytics', icon: BarChart3 },
			{ id: 'team', label: 'Team', icon: Users },
			{ id: 'settings', label: 'Settings', icon: Settings },
		],
	},
];

const SidebarTooltip = ({ label }: { label: string }) => (
	<span className='pointer-events-none absolute left-[calc(100%+12px)] top-1/2 z-50 hidden -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-zinc-950/95 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition group-hover:block group-hover:opacity-100'>
		{label}
	</span>
);

const UsageCard = ({ collapsed }: { collapsed: boolean }) => {
	if (collapsed) {
		return (
			<div className='mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-emerald-300'>
				<CreditCard size={18} />
			</div>
		);
	}

	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/15'>
			<div className='mb-2 flex items-center justify-between text-xs font-semibold text-zinc-300'>
				<span>Credits usage</span>
				<span className='text-white'>4.8k / 5k</span>
			</div>
			<div className='h-1.5 overflow-hidden rounded-full bg-white/10'>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: '96%' }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='h-full rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300'
				/>
			</div>
			<button
				type='button'
				className='mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-300/10 text-xs font-bold text-emerald-100 shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-300/15'>
				<Sparkles size={15} />
				Upgrade plan
			</button>
		</div>
	);
};

const WorkspaceSidebar = () => {
	const {
		activeWorkspaceView,
		closeMobileSidebar,
		setActiveWorkspaceView,
		sidebarCollapsed,
		toggleSidebar,
	} = useWorkflowShellStore();

	const handleNavigation = (id: TSidebarView) => {
		setActiveWorkspaceView(id);
		closeMobileSidebar();
	};

	return (
		<motion.aside
			initial={false}
			animate={{ width: sidebarCollapsed ? 84 : 304 }}
			transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
			className='relative flex h-screen shrink-0 flex-col overflow-hidden border-r border-white/10 bg-[#07080b] text-zinc-100 shadow-2xl shadow-black/35'>
			<div className='pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(34,211,238,0.12),transparent_32%)]' />
			<div className='relative flex h-20 items-center justify-between px-4'>
				<div className='flex min-w-0 items-center gap-3'>
					<div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-xl shadow-black/25'>
						<div className='h-5 w-5 rounded-lg bg-gradient-to-br from-emerald-300 via-cyan-300 to-white' />
					</div>
					{!sidebarCollapsed && (
						<div className='min-w-0'>
							<div className='truncate text-lg font-black tracking-tight text-white'>
								agent101
							</div>
							<div className='truncate text-xs font-semibold text-zinc-500'>
								AI workflow OS
							</div>
						</div>
					)}
				</div>
				<button
					type='button'
					onClick={toggleSidebar}
					aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
					className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-zinc-400 transition hover:border-white/15 hover:bg-white/[0.07] hover:text-white'>
					{sidebarCollapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
				</button>
			</div>

			<div className='relative px-3'>
				<button
					type='button'
					title='Search workspace'
					className={[
						'group relative flex h-12 w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] text-sm font-semibold text-zinc-300 shadow-xl shadow-black/10 transition hover:border-emerald-300/25 hover:bg-white/[0.07] hover:text-white',
						sidebarCollapsed ? 'justify-center px-0' : 'px-4',
					].join(' ')}>
					<Search size={18} />
					{!sidebarCollapsed && (
						<>
							<span className='min-w-0 flex-1 text-left'>Search workspace</span>
							<span className='rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-bold text-zinc-500'>
								⌘K
							</span>
						</>
					)}
					{sidebarCollapsed && <SidebarTooltip label='Search workspace' />}
				</button>
			</div>

			<div className='relative min-h-0 flex-1 overflow-y-auto px-3 py-5'>
				<nav className='space-y-6'>
					{navigationGroups.map((group) => (
						<div key={group.label}>
							{!sidebarCollapsed && (
								<div className='mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600'>
									{group.label}
								</div>
							)}
							<div className='space-y-1.5'>
								{group.items.map((item) => {
									const Icon = item.icon;
									const isActive = activeWorkspaceView === item.id;

									return (
										<button
											key={item.id}
											type='button'
											title={item.label}
											onClick={() => handleNavigation(item.id)}
											className={[
												'group relative flex h-11 w-full items-center gap-3 rounded-2xl px-3 text-sm font-bold transition',
												isActive
													? 'border border-white/10 bg-white/[0.08] text-white shadow-lg shadow-black/20'
													: 'text-zinc-400 hover:bg-white/[0.055] hover:text-zinc-100',
												sidebarCollapsed ? 'justify-center px-0' : '',
											].join(' ')}>
											{isActive && (
												<motion.span
													layoutId='sidebar-active-pill'
													className='absolute inset-y-1 left-1 w-1 rounded-full bg-gradient-to-b from-emerald-300 to-cyan-300'
												/>
											)}
											<motion.span
												whileHover={{ scale: 1.08, rotate: isActive ? 0 : -3 }}
												className={[
													'flex h-8 w-8 items-center justify-center rounded-xl transition',
													isActive ? 'bg-emerald-300/10 text-emerald-200' : '',
												].join(' ')}>
												<Icon size={18} />
											</motion.span>
											{!sidebarCollapsed && (
												<>
													<span className='min-w-0 flex-1 text-left'>{item.label}</span>
													{item.badge && (
														<span className='rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-2 py-0.5 text-[10px] text-emerald-200'>
															{item.badge}
														</span>
													)}
												</>
											)}
											{sidebarCollapsed && <SidebarTooltip label={item.label} />}
										</button>
									);
								})}
							</div>
						</div>
					))}
				</nav>
			</div>

			<div className='relative space-y-3 px-3 pb-4'>
				<button
					type='button'
					title='Switch workspace'
					className={[
						'group relative flex h-12 w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-3 text-left transition hover:border-white/15 hover:bg-white/[0.07]',
						sidebarCollapsed ? 'justify-center px-0' : '',
					].join(' ')}>
					<div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xs font-black text-zinc-950'>
						A1
					</div>
					{!sidebarCollapsed && (
						<>
							<div className='min-w-0 flex-1'>
								<div className='truncate text-sm font-bold text-white'>Amaan Studio</div>
								<div className='truncate text-xs font-semibold text-zinc-500'>
									Production workspace
								</div>
							</div>
							<ChevronDown size={16} className='text-zinc-500' />
						</>
					)}
					{sidebarCollapsed && <SidebarTooltip label='Switch workspace' />}
				</button>

				<UsageCard collapsed={sidebarCollapsed} />

				<div
					className={[
						'flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-2',
						sidebarCollapsed ? 'justify-center' : '',
					].join(' ')}>
					<img src={avatar} alt='Amaan' className='h-9 w-9 rounded-xl object-cover' />
					{!sidebarCollapsed && (
						<div className='min-w-0 flex-1'>
							<div className='truncate text-sm font-bold text-white'>Amaan</div>
							<div className='flex items-center gap-1.5 text-xs font-semibold text-zinc-500'>
								<Activity size={12} className='text-emerald-300' />
								Online
							</div>
						</div>
					)}
				</div>
			</div>
		</motion.aside>
	);
};

export default WorkspaceSidebar;
