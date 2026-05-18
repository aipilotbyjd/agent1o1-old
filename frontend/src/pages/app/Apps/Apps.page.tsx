import {
	BarChart3,
	CalendarDays,
	CheckCircle2,
	FileSpreadsheet,
	GitPullRequest,
	Globe2,
	Mail,
	MessageCircle,
	PlugZap,
	Search,
	Shield,
	SlidersHorizontal,
} from 'lucide-react';
import { motion } from 'framer-motion';
import WorkspacePageFrame from '@/pages/app/_partial/WorkspacePageFrame.partial';

const categories = ['All', 'Connected', 'Productivity', 'Developer', 'Marketing'];

const appItems = [
	{
		name: 'GitHub',
		description: 'Issues, pull requests, commits, and release workflow triggers.',
		status: 'Connected',
		icon: GitPullRequest,
		tone: 'bg-zinc-950 text-white',
	},
	{
		name: 'Gmail',
		description: 'Inbox readers, reply drafts, and email follow-up automation.',
		status: 'Connect',
		icon: Mail,
		tone: 'bg-red-50 text-red-600',
	},
	{
		name: 'Google Sheets',
		description: 'Row sync, dataset cleanup, reporting, and enrichment jobs.',
		status: 'Connect',
		icon: FileSpreadsheet,
		tone: 'bg-emerald-50 text-emerald-600',
	},
	{
		name: 'Calendar',
		description: 'Availability checks, meeting prep, and event-based runs.',
		status: 'Connect',
		icon: CalendarDays,
		tone: 'bg-sky-50 text-sky-600',
	},
	{
		name: 'Analytics',
		description: 'Website events, weekly summaries, and anomaly alerts.',
		status: 'Connect',
		icon: BarChart3,
		tone: 'bg-amber-50 text-amber-600',
	},
	{
		name: 'X',
		description: 'Post monitoring, draft responses, and social routing.',
		status: 'Connect',
		icon: MessageCircle,
		tone: 'bg-zinc-100 text-zinc-900',
	},
];

const healthItems = [
	{ label: 'Connected', value: '1', icon: CheckCircle2 },
	{ label: 'Available apps', value: '42', icon: Globe2 },
	{ label: 'Scoped secrets', value: '2', icon: Shield },
];

const AppsPage = () => {
	return (
		<WorkspacePageFrame
			activeView='apps'
			title='Apps'
			status='Connector health normal'
			meta='1 connected'
			primaryActionLabel='Connect app'
			primaryActionIcon={PlugZap}>
			<motion.main
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.24 }}
				className='mx-auto w-full max-w-[1180px] px-5 py-5 sm:px-8 lg:px-10'>
				<section className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
					<div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
						<div className='min-w-0'>
							<div className='mb-3 inline-flex h-8 items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 text-xs font-black text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100'>
								<PlugZap size={14} />
								App catalog
							</div>
							<h1 className='text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl dark:text-white'>
								Connect apps to agents and workflows
							</h1>
							<p className='mt-2 max-w-2xl text-sm font-medium leading-6 text-zinc-500'>
								Pick an integration, review permissions, then reuse it across workflow
								steps without repeating setup.
							</p>
						</div>

						<div className='grid gap-3 sm:grid-cols-3 lg:w-[430px]'>
							{healthItems.map((item) => {
								const Icon = item.icon;

								return (
									<div
										key={item.label}
										className='rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-zinc-950/50'>
										<div className='flex items-center gap-2 text-xs font-bold text-zinc-500'>
											<Icon size={15} className='text-emerald-500' />
											{item.label}
										</div>
										<div className='mt-2 text-xl font-black text-zinc-950 dark:text-white'>
											{item.value}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className='mt-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
					<div className='flex flex-col gap-3 xl:flex-row xl:items-center'>
						<label className='flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 transition focus-within:border-emerald-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-100 dark:border-white/10 dark:bg-zinc-950/50 dark:focus-within:ring-emerald-300/10'>
							<Search size={18} className='shrink-0 text-zinc-400' />
							<input
								type='search'
								placeholder='Search apps, providers, or capabilities'
								className='min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm font-semibold text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-0 focus:outline-none focus:ring-0 dark:text-white'
							/>
						</label>
						<div className='flex gap-2 overflow-x-auto pb-1 xl:pb-0'>
							{categories.map((category, index) => (
								<button
									key={category}
									type='button'
									className={[
										'h-11 shrink-0 rounded-xl px-4 text-sm font-black transition',
										index === 0
											? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
											: 'border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:bg-white/[0.06]',
									].join(' ')}>
									{category}
								</button>
							))}
							<button
								type='button'
								className='flex h-11 shrink-0 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-black text-zinc-700 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:bg-white/[0.06]'>
								<SlidersHorizontal size={16} />
								Filters
							</button>
						</div>
					</div>

					<div className='mt-4 grid gap-3 lg:grid-cols-2'>
						{appItems.map((app) => {
							const Icon = app.icon;
							const isConnected = app.status === 'Connected';

							return (
								<article
									key={app.name}
									className='group flex min-w-0 items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-emerald-200 hover:shadow-lg hover:shadow-zinc-200/60 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-emerald-300/20 dark:hover:shadow-black/20'>
									<div
										className={[
											'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
											app.tone,
										].join(' ')}>
										<Icon size={22} />
									</div>
									<div className='min-w-0 flex-1'>
										<div className='flex items-center gap-2'>
											<h2 className='truncate text-base font-black text-zinc-950 dark:text-white'>
												{app.name}
											</h2>
											{isConnected && (
												<span className='rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-black text-emerald-700 dark:bg-emerald-300/10 dark:text-emerald-100'>
													Live
												</span>
											)}
										</div>
										<p className='mt-1 line-clamp-1 text-sm font-medium text-zinc-500'>
											{app.description}
										</p>
									</div>
									<button
										type='button'
										className={[
											'flex h-10 shrink-0 items-center rounded-xl px-4 text-sm font-black transition',
											isConnected
												? 'border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100'
												: 'border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-950 hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-950',
										].join(' ')}>
										{app.status}
									</button>
								</article>
							);
						})}
					</div>
				</section>
			</motion.main>
		</WorkspacePageFrame>
	);
};

export default AppsPage;
