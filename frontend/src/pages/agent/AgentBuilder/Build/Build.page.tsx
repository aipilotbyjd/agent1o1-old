import { motion } from 'framer-motion';
import { ArrowUp, Bot, Paperclip, Share2, Sparkles, SquarePen } from 'lucide-react';
import AgentTemplateCard from '../_partial/AgentTemplateCard.partial';
import { agentTemplateTabs, agentTemplates } from '../_helper/agentBuilder.constants';
import MainAppBar, { MainAppBarPillButton } from '@/pages/app/_partial/MainAppBar.partial';

const BuildPage = () => {
	return (
		<div className='flex min-w-0 flex-1 flex-col bg-white text-zinc-950'>
			<MainAppBar
				title='Agent builder'
				status='Agent draft autosaved'
				meta='3 templates available'
				primaryActionLabel='Create agent'
				primaryActionIcon={Bot}>
				<MainAppBarPillButton>
					<Share2 size={18} />
					Share
				</MainAppBarPillButton>
			</MainAppBar>

			<main className='min-h-0 flex-1 overflow-y-auto'>
				<motion.div
					initial={{ y: 18, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
					className='mx-auto flex min-h-full w-full max-w-[1080px] flex-col px-5 pt-10 pb-5 sm:px-8 sm:pt-12 lg:px-10 lg:pt-14'>
					<section>
						<div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-xl shadow-zinc-200 sm:h-18 sm:w-18 lg:h-20 lg:w-20'>
							<Bot size={38} strokeWidth={2.2} />
						</div>
						<h1 className='text-3xl leading-tight font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-[42px] lg:leading-none'>
							Build your agent
						</h1>
						<p className='mt-3 max-w-2xl text-base leading-6 font-medium text-zinc-500 sm:text-lg lg:text-xl'>
							Choose an agent template or simply describe what you need to get
							started.
						</p>
					</section>

					<section className='mt-12 sm:mt-14 lg:mt-16'>
						<div className='mb-5 flex items-center justify-between gap-4'>
							<h2 className='text-xl font-bold tracking-tight sm:text-2xl'>
								Templates
							</h2>
							<button
								type='button'
								className='shrink-0 text-sm font-bold text-zinc-500 transition hover:text-zinc-950 sm:text-base'>
								Don't show again
							</button>
						</div>

						<div className='flex gap-5 overflow-x-auto border-b border-zinc-200 text-sm font-bold whitespace-nowrap text-zinc-500 sm:gap-6 sm:text-base'>
							{agentTemplateTabs.map((tab, index) => (
								<button
									key={tab}
									type='button'
									className={[
										'pb-4 transition hover:text-zinc-950',
										index === 0
											? 'border-b-2 border-zinc-950 text-zinc-950'
											: '',
									].join(' ')}>
									{tab}
								</button>
							))}
						</div>

						<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
							{agentTemplates.map((template) => (
								<AgentTemplateCard key={template.title} template={template} />
							))}
						</div>
					</section>

					<section className='mt-8 lg:mt-10'>
						<div className='rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/70'>
							<textarea
								placeholder='Send a message to your agent'
								className='h-34 w-full resize-none rounded-t-2xl bg-transparent p-5 text-base leading-7 font-medium outline-none placeholder:text-zinc-400 sm:h-38 sm:text-lg'
							/>
							<div className='flex items-center justify-between px-5 pb-5'>
								<div className='flex items-center gap-3'>
									<button
										type='button'
										aria-label='Attach file'
										className='flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950'>
										<Paperclip size={20} />
									</button>
									<button
										type='button'
										className='flex h-10 items-center gap-2 rounded-xl px-2 text-sm font-bold text-zinc-950 transition hover:bg-zinc-100 sm:text-base'>
										<SquarePen size={19} />
										Skill
									</button>
								</div>
								<button
									type='button'
									aria-label='Send message'
									className='flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#10b981,#38bdf8,#ec4899)] text-white shadow-lg ring-4 shadow-emerald-500/20 ring-white transition hover:-translate-y-0.5'>
									<ArrowUp size={21} />
								</button>
							</div>
						</div>
						<div className='mt-4 text-center text-sm font-medium text-zinc-400 sm:text-base'>
							Having trouble?{' '}
							<button
								type='button'
								className='font-semibold text-zinc-500 underline underline-offset-4 transition hover:text-zinc-950'>
								Report your issue to our team
							</button>
						</div>
					</section>

					<div className='pointer-events-none mt-auto h-6' />
				</motion.div>
			</main>

			<div className='pointer-events-none absolute right-10 bottom-8 hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 xl:flex'>
				<Sparkles size={16} />
				Agent draft ready
			</div>
		</div>
	);
};

export default BuildPage;
