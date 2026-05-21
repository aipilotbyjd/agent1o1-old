import {
	BookOpen,
	ChevronDown,
	ChevronRight,
	History,
	Home,
	Info,
	KeyRound,
	MessagesSquare,
	PanelLeftClose,
	PanelLeft,
	Settings,
	Sparkles,
	Tag,
} from 'lucide-react';
import { motion } from 'framer-motion';
import avatar from '@/assets/avatar/avatar1.png';
import { useWorkflowShellStore } from '@/store/workflowShell.store';

type TSidebarView =
	| 'dashboard'
	| 'agents'
	| 'skills'
	| 'files'
	| 'apps'
	| 'history'
	| 'workflows'
	| 'automations'
	| 'integrations'
	| 'analytics'
	| 'team'
	| 'settings';

const SidebarTooltip = ({ label }: { label: string }) => (
	<span className='pointer-events-none absolute top-1/2 left-[calc(100%+12px)] z-50 hidden -translate-y-1/2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold whitespace-nowrap text-zinc-900 opacity-0 shadow-2xl shadow-zinc-300/40 backdrop-blur-xl transition group-hover:block group-hover:opacity-100 dark:border-white/10 dark:bg-zinc-950/95 dark:text-white dark:shadow-black/40'>
		{label}
	</span>
);

const GumloopCreditsCard = ({ collapsed }: { collapsed: boolean }) => {
	if (collapsed) {
		return (
			<div className='mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-550 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400'>
				<Info size={16} />
			</div>
		);
	}

	return (
		<div className='rounded-xl border border-zinc-200/80 bg-white p-3.5 shadow-sm dark:border-white/10 dark:bg-white/[0.035] dark:shadow-2xl'>
			<div className='mb-1.5 flex items-center justify-between text-xs font-bold text-zinc-400 dark:text-zinc-400'>
				<span className='flex items-center gap-1 text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider'>
					Credits
					<Info size={11} className='cursor-pointer text-zinc-400 hover:text-zinc-600 dark:text-zinc-550' />
				</span>
			</div>
			
			<div className='flex items-baseline justify-between mb-2'>
				<span className='text-[11px] font-semibold text-zinc-500 dark:text-zinc-400'>Remaining</span>
				<span className='text-sm font-black text-zinc-900 dark:text-white'>2.0k</span>
			</div>

			<div className='h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-white/10'>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: '40%' }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='h-full rounded-full bg-[#0091FF]'
				/>
			</div>
			
			<button
				type='button'
				className='mt-3 flex.5 flex h-9.5 w-full items-center justify-center gap-1.5 rounded-lg bg-[#0091FF] text-xs font-black text-white shadow-sm transition hover:bg-[#0081E6] hover:shadow active:scale-98 dark:bg-[#0091FF] dark:text-white dark:hover:bg-[#0081E6]'>
				<Sparkles size={13} className='fill-white/20' />
				Upgrade Plan
			</button>
		</div>
	);
};

const GumloopAsideTemplate = () => {
	const {
		activeWorkspaceView,
		closeMobileSidebar,
		setActiveWorkspaceView,
		sidebarCollapsed,
		toggleSidebar,
		setCreateFlowModalOpen,
	} = useWorkflowShellStore();

	const handleNavigation = (id: TSidebarView) => {
		setActiveWorkspaceView(id);
		closeMobileSidebar();
	};

	const mainNavItems = [
		{ id: 'workflows' as TSidebarView, label: 'Hub', icon: Home },
		{ id: 'history' as TSidebarView, label: 'History', icon: History },
		{ id: 'apps' as TSidebarView, label: 'Credentials', icon: KeyRound },
		{ id: 'workflows' as TSidebarView, label: 'Templates by Gumloop', icon: Sparkles },
	];

	const platformNavItems = [
		{ id: 'settings' as TSidebarView, label: 'Settings', icon: Settings },
		{ id: 'workflows' as TSidebarView, label: 'Resources', icon: BookOpen, hasChevron: true },
		{ id: 'workflows' as TSidebarView, label: 'Forum', icon: MessagesSquare },
		{ id: 'settings' as TSidebarView, label: 'Pricing', icon: Tag },
	];

	return (
		<motion.aside
			initial={false}
			animate={{ width: sidebarCollapsed ? 80 : 260 }}
			transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
			className='relative flex h-screen shrink-0 flex-col overflow-hidden border-r border-zinc-200/80 bg-white text-zinc-950 shadow-sm dark:border-white/10 dark:bg-[#07080b] dark:text-zinc-100 dark:shadow-2xl'>
			{/* Top ambient color glow adapted for Gumloop theme (pinkish tint) */}
			<div className='pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(255,51,102,0.03),transparent)] dark:bg-[radial-gradient(circle_at_20%_0%,rgba(255,51,102,0.06),transparent_34%)]' />
			
			{/* Logo Block */}
			<div className='relative flex h-16 items-center justify-between px-4'>
				<div className='flex min-w-0 items-center gap-2'>
					{!sidebarCollapsed ? (
						<span className='text-[22px] font-black tracking-tight text-slate-900 dark:text-white font-sans flex items-center gap-1.5 select-none'>
							<span className='text-[#FF3366] font-extrabold font-mono'>G</span>umloop
						</span>
					) : (
						<div className='mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF3366] to-[#ff5c8a] text-white text-lg font-black shadow shadow-pink-500/20'>
							G
						</div>
					)}
				</div>
				<button
					type='button'
					onClick={toggleSidebar}
					aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
					className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-500 dark:hover:border-white/15 dark:hover:bg-white/[0.07] dark:hover:text-white'>
					{sidebarCollapsed ? <PanelLeft size={15} /> : <PanelLeftClose size={15} />}
				</button>
			</div>

			{/* Create Flow Button */}
			<div className='px-3 mb-3'>
				<button
					type='button'
					onClick={() => {
						setActiveWorkspaceView('workflows');
						setCreateFlowModalOpen(true);
					}}
					className={[
						'w-full flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[#FF3366] text-xs font-black text-white shadow-sm transition hover:bg-[#E02E5C] hover:shadow-md hover:shadow-pink-500/10 active:scale-98 cursor-pointer',
						sidebarCollapsed ? 'px-0 justify-center' : 'px-4',
					].join(' ')}>
					<span className='text-sm leading-none font-extrabold'>+</span>
					{!sidebarCollapsed && <span>Create Flow</span>}
					{sidebarCollapsed && <SidebarTooltip label='Create Flow' />}
				</button>
			</div>

			{/* Workspace Selector Dropdown */}
			<div className='px-3 mb-4.5'>
				<button
					type='button'
					title='Switch workspace'
					className={[
						'group relative flex h-10 w-full items-center gap-2.5 rounded-lg border border-zinc-200/80 bg-white px-2.5 text-left transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/15 dark:hover:bg-white/[0.06]',
						sidebarCollapsed ? 'justify-center px-0' : '',
					].join(' ')}>
					{!sidebarCollapsed ? (
						<>
							<div className='h-5 w-5 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-600 dark:text-zinc-400'>
								PW
							</div>
							<div className='min-w-0 flex-1'>
								<div className='truncate text-xs font-black text-slate-800 dark:text-zinc-200'>
									Personal Workspace
								</div>
							</div>
							<ChevronDown size={14} className='text-zinc-400' />
						</>
					) : (
						<div className='h-5 w-5 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-600 dark:text-zinc-400'>
							PW
						</div>
					)}
					{sidebarCollapsed && <SidebarTooltip label='Switch workspace' />}
				</button>
			</div>

			{/* Scrollable Navigation */}
			<div className='relative min-h-0 flex-1 overflow-y-auto px-3 pb-4 space-y-5 no-scrollbar'>
				{/* Top Nav Items */}
				<nav className='space-y-1'>
					{mainNavItems.map((item, idx) => {
						const Icon = item.icon;
						const isHub = item.label === 'Hub';
						const isActive =
							(isHub && activeWorkspaceView === 'workflows') ||
							(item.label === 'History' && activeWorkspaceView === 'history') ||
							(item.label === 'Credentials' && activeWorkspaceView === 'apps');

						return (
							<button
								key={idx}
								type='button'
								title={item.label}
								onClick={() => handleNavigation(item.id)}
								className={[
									'group relative flex h-9.5 w-full items-center gap-3 rounded-lg px-2.5 text-xs font-bold transition cursor-pointer',
									isActive
										? 'bg-zinc-100 text-slate-900 font-extrabold dark:bg-white/[0.08] dark:text-white'
										: 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.04] dark:hover:text-zinc-100',
									sidebarCollapsed ? 'justify-center px-0' : '',
								].join(' ')}>
								<span className='flex h-5 w-5 items-center justify-center shrink-0 transition'>
									<Icon size={16} className={isActive ? 'text-[#FF3366] dark:text-pink-400' : ''} />
								</span>
								{!sidebarCollapsed && (
									<span className='min-w-0 flex-1 text-left truncate'>
										{item.label}
									</span>
								)}
								{sidebarCollapsed && <SidebarTooltip label={item.label} />}
							</button>
						);
					})}
				</nav>

				{/* Platform Group */}
				<div className='space-y-1.5'>
					{!sidebarCollapsed && (
						<div className='px-2.5 text-[10px] font-black tracking-wider text-zinc-400 dark:text-zinc-600 uppercase select-none'>
							Platform
						</div>
					)}
					<nav className='space-y-1'>
						{platformNavItems.map((item, idx) => {
							const Icon = item.icon;
							const isActive =
								(item.label === 'Settings' && activeWorkspaceView === 'settings') ||
								(item.label === 'Pricing' && activeWorkspaceView === 'settings');

							return (
								<button
									key={idx}
									type='button'
									title={item.label}
									onClick={() => handleNavigation(item.id)}
									className={[
										'group relative flex h-9.5 w-full items-center gap-3 rounded-lg px-2.5 text-xs font-bold transition cursor-pointer',
										isActive
											? 'bg-zinc-100 text-slate-900 font-extrabold dark:bg-white/[0.08] dark:text-white'
											: 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.04] dark:hover:text-zinc-100',
										sidebarCollapsed ? 'justify-center px-0' : '',
									].join(' ')}>
									<span className='flex h-5 w-5 items-center justify-center shrink-0 transition'>
										<Icon size={16} />
									</span>
									{!sidebarCollapsed && (
										<>
											<span className='min-w-0 flex-1 text-left truncate'>
												{item.label}
											</span>
											{item.hasChevron && (
												<ChevronRight size={12} className='text-zinc-400 transition-transform group-hover:translate-x-0.5' />
											)}
										</>
									)}
									{sidebarCollapsed && <SidebarTooltip label={item.label} />}
								</button>
							);
						})}
					</nav>
				</div>
			</div>

			{/* Bottom Sticky Section */}
			<div className='relative mt-auto space-y-3 px-3 pb-3 border-t border-zinc-100 pt-3 dark:border-white/5'>
				{/* Credits usage card */}
				<GumloopCreditsCard collapsed={sidebarCollapsed} />

				{/* Profile Card */}
				<div
					className={[
						'flex items-center gap-2.5 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-2 dark:border-white/10 dark:bg-white/[0.015]',
						sidebarCollapsed ? 'justify-center' : 'justify-between',
					].join(' ')}>
					<div className='flex items-center gap-2.5 min-w-0'>
						<img src={avatar} alt='Amaan' className='h-8 w-8 rounded-lg object-cover border border-zinc-250 dark:border-white/10 shrink-0' />
						{!sidebarCollapsed && (
							<div className='min-w-0'>
								<div className='truncate text-xs font-black text-slate-800 dark:text-zinc-200'>
									Omid G
								</div>
								<div className='flex items-center gap-1 text-[9px] font-bold text-zinc-400 dark:text-zinc-500'>
									<span className='h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0' />
									Online
								</div>
							</div>
						)}
					</div>
					{!sidebarCollapsed && (
						<div className='flex flex-col text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-350 cursor-pointer'>
							<ChevronDown size={14} />
						</div>
					)}
				</div>
			</div>
		</motion.aside>
	);
};

export default GumloopAsideTemplate;
