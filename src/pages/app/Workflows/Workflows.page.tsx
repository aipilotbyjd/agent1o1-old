import {
	BookOpen,
	Bot,
	CheckCircle2,
	Clock3,
	Code2,
	Database,
	GitBranch,
	Send,
	Sparkles,
	Workflow,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWorkflowShellStore } from '@/store/workflowShell.store';
import MainAppBar, { MainAppBarPillButton } from '@/pages/app/_partial/MainAppBar.partial';
import WorkspaceSidebar from '@/templates/asides/AgentAside.template';

const workflowNodes = [
	{
		title: 'Webhook trigger',
		description: 'New request received',
		icon: GitBranch,
		accent: 'bg-cyan-400',
		position: 'left-[5%] top-[20%]',
	},
	{
		title: 'Enrich lead',
		description: 'Pull profile and company data',
		icon: Database,
		accent: 'bg-emerald-400',
		position: 'left-[34%] top-[12%]',
	},
	{
		title: 'AI router',
		description: 'Classify intent and priority',
		icon: Bot,
		accent: 'bg-fuchsia-400',
		position: 'left-[35%] top-[56%]',
	},
	{
		title: 'Send action',
		description: 'Notify team with next steps',
		icon: Send,
		accent: 'bg-amber-300',
		position: 'right-[5%] top-[34%]',
	},
];

const features = [
	{
		title: 'Multi-agent',
		description: 'Orchestrate multiple agents together',
	},
	{
		title: '100+ integrations',
		description: 'Connect to any API or service',
	},
	{
		title: 'Remote triggers',
		description: 'Run via webhooks or external events',
	},
];

const WorkflowsIntroSurface = () => {
	const setActiveWorkspaceView = useWorkflowShellStore((store) => store.setActiveWorkspaceView);
	const toggleMobileSidebar = useWorkflowShellStore((store) => store.toggleMobileSidebar);
	const mobileSidebarOpen = useWorkflowShellStore((store) => store.mobileSidebarOpen);
	const closeMobileSidebar = useWorkflowShellStore((store) => store.closeMobileSidebar);

	return (
		<div className='flex min-w-0 flex-1 flex-col bg-[#fbfbfc] text-zinc-950 dark:bg-zinc-950'>
			<AnimatePresence>
				{mobileSidebarOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-[80]'>
						<button
							type='button'
							aria-label='Close sidebar'
							onClick={closeMobileSidebar}
							className='absolute inset-0 bg-zinc-950/35 backdrop-blur-sm'
						/>
						<motion.div
							initial={{ x: -300 }}
							animate={{ x: 0 }}
							exit={{ x: -300 }}
							transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
							className='relative h-full w-[286px] max-w-[86vw]'>
							<WorkspaceSidebar />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<MainAppBar
				title='Workflows'
				status='Workspace autosaved'
				meta='4 workflow nodes'
				primaryActionLabel='Create Workflow'
				primaryActionIcon={Workflow}
				onPrimaryAction={() => setActiveWorkspaceView('editor')}>
				<MainAppBarPillButton onClick={toggleMobileSidebar}>
					<Workflow size={15} />
					Library
				</MainAppBarPillButton>
			</MainAppBar>

			<div className='min-h-0 flex-1 overflow-y-auto'>
				<div className='flex min-h-full flex-col'>
					<motion.main
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						className='mx-auto flex w-full max-w-[920px] flex-1 flex-col items-center px-5 py-6 text-center sm:px-8 lg:px-10 lg:py-7'>
						<div className='flex items-center justify-center gap-2.5'>
							<Workflow size={28} strokeWidth={2.3} className='text-zinc-950' />
							<h1 className='text-3xl font-bold tracking-tight text-zinc-950'>
								Workflows
							</h1>
						</div>

						<p className='mt-3 max-w-[620px] text-base leading-6 font-medium text-zinc-500'>
							Build automations from triggers, APIs, and AI agents on a visual canvas.
							Connect the steps, test the run, then publish it when the flow feels
							right.
						</p>

						<div className='mt-6 w-full max-w-[780px] overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-[0_18px_54px_rgba(24,24,27,0.12)]'>
							<div className='flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2.5'>
								<div className='flex items-center gap-2'>
									<span className='h-3 w-3 rounded-full bg-rose-400' />
									<span className='h-3 w-3 rounded-full bg-amber-300' />
									<span className='h-3 w-3 rounded-full bg-emerald-400' />
								</div>
								<div className='rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-bold text-zinc-500'>
									Lead routing workflow
								</div>
							</div>

							<div className='grid min-h-[350px] grid-cols-1 lg:h-[clamp(350px,44vh,410px)] lg:grid-cols-[1fr_230px]'>
								<div className='relative min-h-[350px] overflow-hidden bg-[#f7f8fa] lg:min-h-0'>
									<div
										className='absolute inset-0'
										style={{
											backgroundImage:
												'linear-gradient(rgba(113,113,122,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(113,113,122,0.12) 1px, transparent 1px)',
											backgroundSize: '32px 32px',
										}}
									/>
									<svg
										className='absolute inset-0 h-full w-full text-zinc-300'
										viewBox='0 0 560 430'
										fill='none'
										aria-hidden='true'>
										<path
											d='M125 132 C190 132 200 98 262 98'
											stroke='currentColor'
											strokeWidth='3'
											strokeDasharray='8 8'
										/>
										<path
											d='M335 146 C380 190 390 210 438 210'
											stroke='currentColor'
											strokeWidth='3'
											strokeDasharray='8 8'
										/>
										<path
											d='M125 132 C188 238 226 268 265 304'
											stroke='currentColor'
											strokeWidth='3'
											strokeDasharray='8 8'
										/>
										<path
											d='M339 315 C390 300 403 254 438 234'
											stroke='currentColor'
											strokeWidth='3'
											strokeDasharray='8 8'
										/>
									</svg>

									{workflowNodes.map((node) => {
										const Icon = node.icon;

										return (
											<motion.div
												key={node.title}
												initial={{ opacity: 0, scale: 0.96 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.26 }}
												className={[
													'absolute w-[190px] rounded-xl border border-zinc-200 bg-white p-3 shadow-[0_14px_32px_rgba(24,24,27,0.10)]',
													node.position,
												].join(' ')}>
												<div className='flex items-start gap-3'>
													<div
														className={[
															'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-zinc-950',
															node.accent,
														].join(' ')}>
														<Icon size={19} />
													</div>
													<div className='min-w-0'>
														<div className='truncate text-sm font-black text-zinc-950'>
															{node.title}
														</div>
														<div className='mt-1 text-xs leading-4 font-semibold text-zinc-500'>
															{node.description}
														</div>
													</div>
												</div>
											</motion.div>
										);
									})}

									<div className='absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-2 text-sm font-bold text-emerald-700 shadow-sm'>
										<CheckCircle2 size={17} />
										Ready to publish
									</div>
								</div>

								<div className='border-t border-zinc-200 bg-white p-4 lg:border-t-0 lg:border-l'>
									<div className='flex items-center gap-2 text-sm font-black text-zinc-950'>
										<Sparkles size={17} className='text-emerald-500' />
										Run preview
									</div>

									<div className='mt-4 space-y-3'>
										{[
											['Trigger received', '18ms'],
											['Profile enriched', '240ms'],
											['AI decision made', '1.2s'],
										].map(([label, time]) => (
											<div
												key={label}
												className='flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2'>
												<div className='flex items-center gap-2 text-xs font-bold text-zinc-700'>
													<CheckCircle2
														size={14}
														className='text-emerald-500'
													/>
													{label}
												</div>
												<span className='text-xs font-bold text-zinc-400'>
													{time}
												</span>
											</div>
										))}
									</div>

									<div className='mt-5 rounded-xl bg-zinc-950 p-4 text-white'>
										<div className='flex items-center gap-2 text-xs font-bold text-zinc-400'>
											<Code2 size={15} />
											Output
										</div>
										<div className='mt-3 text-sm leading-6 font-bold'>
											Assign to sales, send Slack summary, and create
											follow-up task.
										</div>
									</div>

									<div className='mt-5 flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-bold text-zinc-500'>
										<Clock3 size={15} />
										Last test completed just now
									</div>
								</div>
							</div>
						</div>

						<div className='mt-6 grid w-full max-w-[650px] grid-cols-1 gap-5 sm:grid-cols-3'>
							{features.map((feature) => (
								<div key={feature.title} className='text-center'>
									<div className='text-base font-bold text-zinc-950'>
										{feature.title}
									</div>
									<div className='mt-1 text-sm leading-5 font-medium text-zinc-500'>
										{feature.description}
									</div>
								</div>
							))}
						</div>

						<div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
							<button
								type='button'
								className='flex h-12 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-7 text-base font-bold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md'>
								<BookOpen size={18} />
								Read more
							</button>
							<button
								type='button'
								onClick={() => setActiveWorkspaceView('editor')}
								className='flex h-12 items-center gap-2 rounded-lg bg-zinc-950 px-8 text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md'>
								<Workflow size={18} />
								Create Workflow
							</button>
						</div>
					</motion.main>
				</div>
			</div>
		</div>
	);
};

export default WorkflowsIntroSurface;
