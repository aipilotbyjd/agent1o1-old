import type { TAgentTemplate } from '../_types/agentBuilder.type';

const AgentTemplateCard = ({ template }: { template: TAgentTemplate }) => (
	<button
		type='button'
		className='group min-h-[158px] rounded-2xl border border-zinc-200 bg-white p-4 text-left shadow-sm shadow-zinc-200/60 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/80 sm:min-h-[176px] sm:p-5 lg:min-h-[184px]'>
		<h3 className='text-lg font-bold tracking-tight text-zinc-950 sm:text-xl'>
			{template.title}
		</h3>
		<p className='mt-4 line-clamp-3 text-sm leading-6 font-medium text-zinc-500 sm:text-base'>
			{template.copy}
		</p>
		<div className='mt-5 flex items-center'>
			<div className='flex overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50'>
				{template.icons.map((Icon, iconIndex) => (
					<span
						key={`${template.title}-${iconIndex}`}
						className='flex h-9 w-9 items-center justify-center border-r border-zinc-200 last:border-r-0'>
						<Icon
							size={18}
							className={iconIndex === 0 ? 'text-emerald-500' : 'text-sky-500'}
						/>
					</span>
				))}
				{template.count && (
					<span className='flex h-9 min-w-10 items-center justify-center px-2 text-xs font-bold text-zinc-500'>
						{template.count}
					</span>
				)}
			</div>
		</div>
	</button>
);

export default AgentTemplateCard;
