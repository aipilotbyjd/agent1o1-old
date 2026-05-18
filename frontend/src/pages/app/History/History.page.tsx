import {
	Bot,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	Clock3,
	Filter,
	MessageSquare,
	PlayCircle,
	Search,
	Sparkles,
	Workflow,
} from 'lucide-react';
import { motion } from 'framer-motion';
import WorkspacePageFrame from '@/pages/app/_partial/WorkspacePageFrame.partial';

const items = [
	['Skill creation', 'Agent chat', 'May 13, 2026 · 9:00 PM', '27', 'Complete', Bot],
	['Skill creator planning', 'Agent chat', 'May 13, 2026 · 11:14 AM', '27', 'Complete', Sparkles],
	['Skill creation', 'Agent chat', 'May 13, 2026 · 10:53 AM', '27', 'Complete', MessageSquare],
	['Spreadsheet analyst setup', 'Workflow run', 'May 9, 2026 · 10:09 PM', '148', 'Reviewed', Workflow],
] as const;

const HistoryPage = () => (
	<WorkspacePageFrame
		activeView='history'
		title='History'
		status='Activity synced'
		meta='4 recent runs'
		primaryActionLabel='Replay run'
		primaryActionIcon={PlayCircle}>
		<motion.main
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.24 }}
			className='mx-auto w-full max-w-[1180px] px-5 py-5 sm:px-8 lg:px-10'>
			<div className='grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]'>
				<section className='min-w-0 space-y-4'>
					<div className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
						<div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
							<div>
								<div className='mb-3 inline-flex h-8 items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 text-xs font-black text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100'>
									<Clock3 size={14} />
									Activity log
								</div>
								<h1 className='text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl dark:text-white'>
									Recent runs and chats
								</h1>
								<p className='mt-2 max-w-2xl text-sm font-medium leading-6 text-zinc-500'>
									Replay useful sessions, inspect workflow runs, and find outputs from
									past agent work.
								</p>
							</div>
							<div className='grid gap-2 sm:grid-cols-3 lg:w-[430px]'>
								{[
									['Steps', '229'],
									['Avg run', '3m 42s'],
									['Success', '98.6%'],
								].map(([label, value]) => (
									<div
										key={label}
										className='rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-zinc-950/50'>
										<div className='text-xs font-bold text-zinc-500'>{label}</div>
										<div className='mt-2 text-xl font-black text-zinc-950 dark:text-white'>
											{value}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className='rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
						<div className='flex gap-3'>
							<label className='flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 transition focus-within:border-emerald-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-100 dark:border-white/10 dark:bg-zinc-950/50 dark:focus-within:ring-emerald-300/10'>
								<Search size={18} className='shrink-0 text-zinc-400' />
								<input
									type='search'
									placeholder='Search by title, run type, or date'
									className='min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm font-semibold text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-0 focus:outline-none focus:ring-0 dark:text-white'
								/>
							</label>
							<button className='flex h-12 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-black text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300'>
								<Filter size={17} />
								Filters
							</button>
						</div>
					</div>

					<div className='overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
						<div className='hidden grid-cols-[1fr_120px_210px_120px] border-b border-zinc-200 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-zinc-400 dark:border-white/10 md:grid'>
							<div>Session</div>
							<div>Steps</div>
							<div>When</div>
							<div>Status</div>
						</div>
						{items.map(([title, type, time, steps, status, Icon]) => (
							<button
								key={`${title}-${time}`}
								type='button'
								className='grid w-full gap-4 border-b border-zinc-200 px-5 py-4 text-left transition last:border-b-0 hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-white/[0.05] md:grid-cols-[1fr_120px_210px_120px] md:items-center'>
								<div className='flex min-w-0 items-center gap-3'>
									<span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white'>
										<Icon size={20} />
									</span>
									<span className='min-w-0'>
										<span className='block truncate text-sm font-black text-zinc-950 dark:text-white'>
											{title}
										</span>
										<span className='mt-1 block text-xs font-semibold text-zinc-500'>
											{type}
										</span>
									</span>
								</div>
								<div className='text-sm font-black text-zinc-600 dark:text-zinc-300'>{steps}</div>
								<div className='text-sm font-bold text-zinc-600 dark:text-zinc-300'>{time}</div>
								<div>
									<span className='inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-300/10 dark:text-emerald-100'>
										<CheckCircle2 size={13} />
										{status}
									</span>
								</div>
							</button>
						))}
						<div className='flex items-center justify-between border-t border-zinc-200 px-5 py-4 dark:border-white/10'>
							<div className='text-sm font-bold text-zinc-500'>Rows per page 10</div>
							<div className='flex items-center gap-2'>
								<span className='text-sm font-black text-zinc-500'>Page 1</span>
								<button className='flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-400 dark:border-white/10'>
									<ChevronLeft size={17} />
								</button>
								<button className='flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-400 dark:border-white/10'>
									<ChevronRight size={17} />
								</button>
							</div>
						</div>
					</div>
				</section>
				<aside className='space-y-4'>
					<div className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
						<div className='flex items-center gap-2 text-sm font-black text-zinc-950 dark:text-white'>
							<PlayCircle size={17} className='text-emerald-500' />
							Replay-ready
						</div>
						<p className='mt-3 text-sm font-medium leading-6 text-zinc-500'>
							Inputs, files, connected tools, and outputs are saved with each run.
						</p>
					</div>
				</aside>
			</div>
		</motion.main>
	</WorkspacePageFrame>
);

export default HistoryPage;
