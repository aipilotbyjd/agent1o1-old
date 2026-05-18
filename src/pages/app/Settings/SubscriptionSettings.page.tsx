import {
	ArrowLeft,
	BarChart3,
	Blocks,
	CheckCircle2,
	ChevronRight,
	CreditCard,
	KeyRound,
	LockKeyhole,
	MoreVertical,
	PanelLeft,
	Plus,
	Receipt,
	ShieldCheck,
	Trash2,
	UserRound,
	Zap,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import avatar from '@/assets/avatar/avatar1.png';
import { useWorkflowShellStore } from '@/store/workflowShell.store';

const profileNav = [
	{ label: 'General', icon: UserRound, active: false, locked: false },
	{ label: 'Subscription', icon: CreditCard, active: true, locked: false },
	{ label: 'Usage & Limits', icon: BarChart3, active: false, locked: false },
	{ label: 'Apps', icon: Blocks, active: false, locked: false },
	{ label: 'Secrets', icon: KeyRound, active: false, locked: false },
];

const settingsGroups = [
	['Organization', ['General', 'Analytics Agent', 'Subscription', 'Usage & Limits']],
	['People & Access', ['Members', 'Teams', 'Custom Roles', 'SAML & SCIM']],
	['AI Providers', ['Model Restrictions', 'API Keys & Proxies']],
] as const;

const SettingsLink = ({
	label,
	icon: Icon,
	active,
	locked,
}: {
	label: string;
	icon?: typeof UserRound;
	active?: boolean;
	locked?: boolean;
}) => (
	<button
		type='button'
		className={[
			'flex h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-bold transition',
			active ? 'bg-zinc-100 text-zinc-950' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950',
		].join(' ')}>
		{locked ? (
			<LockKeyhole size={17} className='shrink-0 text-zinc-400' />
		) : Icon ? (
			<Icon size={17} className='shrink-0' />
		) : null}
		<span className='truncate'>{label}</span>
	</button>
);

const Toggle = ({ active = false }: { active?: boolean }) => (
	<button
		type='button'
		aria-pressed={active}
		className={[
			'relative h-7 w-12 rounded-full transition',
			active ? 'bg-emerald-500' : 'bg-zinc-200',
		].join(' ')}>
		<span
			className={[
				'absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition',
				active ? 'left-6' : 'left-1',
			].join(' ')}
		/>
	</button>
);

const SubscriptionSettingsPage = () => {
	const navigate = useNavigate();
	const setActiveWorkspaceView = useWorkflowShellStore((store) => store.setActiveWorkspaceView);
	const goBack = () => {
		setActiveWorkspaceView('workflows');
		navigate('/app/editor/new');
	};

	return (
		<div className='flex min-w-0 flex-1 overflow-hidden bg-[#f6f7f9] text-zinc-950'>
			<aside className='hidden w-[286px] shrink-0 flex-col border-r border-zinc-200 bg-white md:flex'>
				<div className='flex h-20 items-center justify-between px-5'>
					<div className='text-2xl font-black tracking-tight text-zinc-950'>Agent1o1</div>
					<button
						type='button'
						aria-label='Collapse settings navigation'
						className='flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950'>
						<PanelLeft size={18} />
					</button>
				</div>

				<div className='min-h-0 flex-1 overflow-y-auto px-3 pb-4'>
					<button
						type='button'
						onClick={goBack}
						className='mb-5 flex h-10 items-center gap-3 rounded-xl px-2 text-sm font-black text-zinc-900 transition hover:bg-zinc-100'>
						<ArrowLeft size={18} />
						Go back
					</button>

					<section>
						<div className='mb-2 px-2 text-xs font-black text-zinc-400'>Profile</div>
						<div className='space-y-1'>
							{profileNav.map((item) => (
								<SettingsLink key={item.label} {...item} />
							))}
						</div>
					</section>

					{settingsGroups.map(([group, links]) => (
						<section key={group} className='mt-7'>
							<div className='mb-2 px-2 text-xs font-black text-zinc-400'>{group}</div>
							<div className='space-y-1'>
								{links.map((label) => (
									<SettingsLink key={label} label={label} locked />
								))}
							</div>
						</section>
					))}
				</div>

				<div className='flex h-17 items-center justify-between border-t border-zinc-200 px-4'>
					<div className='flex min-w-0 items-center gap-3'>
						<img src={avatar} alt='Amaan' className='h-8 w-8 rounded-xl object-cover' />
						<div className='truncate text-sm font-black text-zinc-950'>Amaan</div>
					</div>
					<button
						type='button'
						aria-label='Account menu'
						className='flex h-8 w-8 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-zinc-100'>
						<MoreVertical size={17} />
					</button>
				</div>
			</aside>

			<main className='min-w-0 flex-1 overflow-y-auto'>
				<div className='mx-auto w-full max-w-[1180px] px-6 py-8 sm:px-10 lg:px-14 lg:py-12'>
					<div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
						<div>
							<h1 className='text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl'>
								Subscription
							</h1>
							<p className='mt-2 text-base font-medium text-zinc-500'>
								Manage credits, billing preferences, and usage notifications.
							</p>
						</div>
						<button
							type='button'
							className='flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-black text-white shadow-sm transition hover:bg-zinc-800'>
							<Zap size={17} />
							Upgrade plan
						</button>
					</div>

					<section className='mt-8 grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]'>
						<div className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm'>
							<div className='flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>
								<div>
									<div className='inline-flex h-8 items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 text-xs font-black text-emerald-700'>
										<CheckCircle2 size={14} />
										Current plan
									</div>
									<h2 className='mt-4 text-2xl font-black tracking-tight'>Free Plan</h2>
									<p className='mt-2 text-sm font-semibold text-zinc-500'>
										5,000 credits per billing period
									</p>
									<p className='mt-1 text-sm font-semibold text-zinc-500'>
										May 1, 2026 - Jun 1, 2026
									</p>
								</div>
								<div className='w-full max-w-[360px] rounded-2xl border border-zinc-200 bg-zinc-50 p-4'>
									<div className='flex items-center justify-between text-sm font-black'>
										<span>Credits remaining</span>
										<span>4.8k / 5k</span>
									</div>
									<div className='mt-3 h-2 overflow-hidden rounded-full bg-zinc-200'>
										<div className='h-full w-[96%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400' />
									</div>
									<button className='mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white text-sm font-black text-zinc-800'>
										View usage
										<ChevronRight size={16} />
									</button>
								</div>
							</div>
						</div>

						<div className='rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm'>
							<div className='flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600'>
								<Receipt size={22} />
							</div>
							<h2 className='mt-4 text-lg font-black'>Billing summary</h2>
							<p className='mt-2 text-sm font-medium leading-6 text-zinc-500'>
								No paid invoice yet. Upgrade when you need more credits or overage
								protection.
							</p>
						</div>
					</section>

					<section className='mt-6 rounded-2xl border border-zinc-200 bg-white shadow-sm'>
						<div className='border-b border-zinc-200 px-5 py-4 text-sm font-black text-zinc-500'>
							Credit settings
						</div>
						<div className='flex flex-col gap-4 border-b border-zinc-200 px-5 py-5 lg:flex-row lg:items-center lg:justify-between'>
							<div>
								<h3 className='text-base font-black'>Enable credit overage</h3>
								<p className='mt-1 text-sm font-medium text-zinc-500'>
									Pay for extra usage after exceeding plan limits at $0.007 per credit.
								</p>
							</div>
							<div className='flex items-center gap-3'>
								<span className='rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-sky-600'>
									Upgrade to Pro
								</span>
								<Toggle />
							</div>
						</div>
						<div className='px-5 py-5'>
							<div className='mb-4 text-sm font-black text-zinc-500'>
								Credit notification preferences
							</div>
							<div className='space-y-5'>
								<div className='flex items-center justify-between gap-4'>
									<div>
										<h3 className='text-base font-black'>Out of credits notification</h3>
										<p className='mt-1 text-sm font-medium text-zinc-500'>
											Receive an email when your credits reach zero.
										</p>
									</div>
									<Toggle active />
								</div>
								<div>
									<h3 className='text-base font-black'>Credit usage notifications</h3>
									<p className='mt-1 text-sm font-medium text-zinc-500'>
										Receive an email when credit usage crosses a threshold.
									</p>
									<div className='mt-4 grid max-w-[420px] gap-3 sm:grid-cols-2'>
										{['75', '90'].map((value) => (
											<div key={value} className='flex items-center gap-2'>
												<div className='flex h-11 w-28 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-black'>
													{value}
												</div>
												<span className='text-sm font-bold text-zinc-500'>%</span>
												<button
													type='button'
													aria-label={`Remove ${value}% threshold`}
													className='flex h-9 w-9 items-center justify-center rounded-xl text-zinc-400 hover:bg-zinc-100 hover:text-zinc-950'>
													<Trash2 size={16} />
												</button>
											</div>
										))}
									</div>
									<button className='mt-4 flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-black text-zinc-700'>
										<Plus size={16} />
										Add threshold
									</button>
								</div>
							</div>
						</div>
					</section>

					<div className='mt-6 grid gap-3 sm:grid-cols-3'>
						{[
							['Secure billing', ShieldCheck],
							['Card on file', CreditCard],
							['Usage tracked', BarChart3],
						].map(([label, Icon]) => (
							<div
								key={label as string}
								className='flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 text-sm font-black text-zinc-700 shadow-sm'>
								<Icon size={18} className='text-emerald-500' />
								{label as string}
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

export default SubscriptionSettingsPage;
