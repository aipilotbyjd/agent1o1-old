import {
	Clock3,
	FileImage,
	FileSpreadsheet,
	FileText,
	Filter,
	Folder,
	Grid2X2,
	List,
	MoreHorizontal,
	Search,
	UploadCloud,
} from 'lucide-react';
import { motion } from 'framer-motion';
import WorkspacePageFrame from '@/pages/app/_partial/WorkspacePageFrame.partial';

const stats = [
	['Files', '128', '14 updated this week'],
	['Shared', '36', '8 active collaborators'],
	['Storage', '18.4 GB', '62% of plan'],
];

const files = [
	{
		name: 'Avatar concept render',
		meta: 'JPG · 2.8 MB',
		owner: 'Amaan',
		date: 'May 9',
		icon: FileImage,
		tone: 'bg-orange-50 text-orange-600',
	},
	{
		name: 'Skill creator research brief',
		meta: 'DOC · 824 KB',
		owner: 'Agent Studio',
		date: 'May 13',
		icon: FileText,
		tone: 'bg-sky-50 text-sky-600',
	},
	{
		name: 'Spreadsheet analyst setup',
		meta: 'CSV · 1.2 MB',
		owner: 'Data Agent',
		date: 'May 9',
		icon: FileSpreadsheet,
		tone: 'bg-emerald-50 text-emerald-600',
	},
];

const collections = [
	['Brand assets', '24 files', 'bg-zinc-950 text-white'],
	['Workflow exports', '41 files', 'bg-emerald-500 text-white'],
	['Client uploads', '63 files', 'bg-cyan-500 text-white'],
];

const FilesPage = () => {
	return (
		<WorkspacePageFrame
			activeView='files'
			title='Files'
			status='Library indexed'
			meta='128 files'
			primaryActionLabel='Upload'
			primaryActionIcon={UploadCloud}>
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
										<Folder size={14} />
										Workspace library
									</div>
									<h1 className='text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl dark:text-white'>
										Files ready for workflows
									</h1>
									<p className='mt-2 max-w-2xl text-sm font-medium leading-6 text-zinc-500'>
										Find uploads, generated outputs, and shared assets without digging
										through chat history.
									</p>
								</div>
								<div className='grid gap-2 sm:grid-cols-3 lg:w-[430px]'>
									{stats.map(([label, value, detail]) => (
										<div
											key={label}
											className='rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/10 dark:bg-zinc-950/50'>
											<div className='text-xs font-bold text-zinc-500'>{label}</div>
											<div className='mt-2 text-xl font-black text-zinc-950 dark:text-white'>
												{value}
											</div>
											<div className='mt-1 truncate text-xs font-semibold text-zinc-500'>
												{detail}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className='rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
							<div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
								<label className='flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 transition focus-within:border-emerald-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-100 dark:border-white/10 dark:bg-zinc-950/50 dark:focus-within:ring-emerald-300/10'>
									<Search size={18} className='shrink-0 text-zinc-400' />
									<input
										type='search'
										placeholder='Search files, owners, or formats'
										className='min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm font-semibold text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-0 focus:outline-none focus:ring-0 dark:text-white'
									/>
								</label>
								<div className='flex gap-2'>
									<button
										type='button'
										aria-label='Filter files'
										className='flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300'>
										<Filter size={18} />
									</button>
									<button
										type='button'
										aria-label='Grid view'
										className='flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'>
										<Grid2X2 size={18} />
									</button>
									<button
										type='button'
										aria-label='List view'
										className='flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300'>
										<List size={18} />
									</button>
								</div>
							</div>
						</div>

						<div className='grid gap-3 md:grid-cols-3'>
							{files.map((file) => {
								const Icon = file.icon;

								return (
									<article
										key={file.name}
										className='rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-emerald-200 hover:shadow-lg hover:shadow-zinc-200/60 dark:border-white/10 dark:bg-white/[0.03]'>
										<div className='flex items-start justify-between gap-3'>
											<div
												className={[
													'flex h-12 w-12 items-center justify-center rounded-xl',
													file.tone,
												].join(' ')}>
												<Icon size={23} />
											</div>
											<button
												type='button'
												aria-label={`More options for ${file.name}`}
												className='flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-white/[0.08] dark:hover:text-white'>
												<MoreHorizontal size={18} />
											</button>
										</div>
										<h2 className='mt-4 truncate text-base font-black text-zinc-950 dark:text-white'>
											{file.name}
										</h2>
										<div className='mt-1 text-sm font-semibold text-zinc-500'>{file.meta}</div>
										<div className='mt-5 flex items-center justify-between text-xs font-bold text-zinc-400'>
											<span>{file.owner}</span>
											<span>{file.date}</span>
										</div>
									</article>
								);
							})}
						</div>
					</section>

					<aside className='space-y-4'>
						<div className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]'>
							<div className='flex items-center gap-2 text-sm font-black text-zinc-950 dark:text-white'>
								<Clock3 size={17} className='text-emerald-500' />
								Collections
							</div>
							<div className='mt-4 space-y-3'>
								{collections.map(([name, count, tone]) => (
									<button
										key={name}
										type='button'
										className='flex w-full items-center gap-3 rounded-xl border border-zinc-200 p-3 text-left transition hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-white/[0.06]'>
										<span
											className={[
												'flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black',
												tone,
											].join(' ')}>
											{name.slice(0, 2)}
										</span>
										<span className='min-w-0'>
											<span className='block truncate text-sm font-black text-zinc-950 dark:text-white'>
												{name}
											</span>
											<span className='block text-xs font-semibold text-zinc-500'>{count}</span>
										</span>
									</button>
								))}
							</div>
						</div>
						<div className='rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-300/20 dark:bg-emerald-300/10'>
							<div className='text-sm font-black text-emerald-800 dark:text-emerald-100'>
								Intake queue clear
							</div>
							<p className='mt-2 text-sm font-medium leading-6 text-emerald-700/80 dark:text-emerald-100/70'>
								New files are scanned and versioned before agents can use them.
							</p>
						</div>
					</aside>
				</div>
			</motion.main>
		</WorkspacePageFrame>
	);
};

export default FilesPage;
