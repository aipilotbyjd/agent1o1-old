import {
	ArrowLeft,
	BarChart3,
	Blocks,
	BriefcaseBusiness,
	ChevronDown,
	CreditCard,
	KeyRound,
	LockKeyhole,
	MoreVertical,
	PanelLeft,
	ShieldCheck,
	Sparkles,
	Trash2,
	Upload,
	UserRound,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import avatar from '@/assets/avatar/avatar1.png';
import { useWorkflowShellStore } from '@/store/workflowShell.store';

const profileNav = [
	{ label: 'General', icon: UserRound, active: true, locked: false },
	{ label: 'Subscription', icon: CreditCard, locked: false },
	{ label: 'Usage & Limits', icon: BarChart3, locked: false },
	{ label: 'Apps', icon: Blocks, locked: false },
	{ label: 'Secrets', icon: KeyRound, locked: false },
];

const organizationNav = [
	'General',
	'Analytics Agent',
	'Subscription',
	'Usage & Limits',
	'Members',
	'Teams',
	'Custom Roles',
	'SAML & SCIM',
];

const aiProviderNav = ['Model Restrictions', 'API Keys & Proxies'];

const SettingsLink = ({
	label,
	icon: Icon,
	active = false,
	locked = false,
}: {
	label: string;
	icon?: typeof UserRound;
	active?: boolean;
	locked?: boolean;
}) => (
	<button
		type='button'
		className={[
			'flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold transition',
			active
				? 'bg-zinc-100 text-zinc-950'
				: 'text-zinc-500 hover:bg-zinc-100/70 hover:text-zinc-900',
		].join(' ')}>
		{locked ? (
			<LockKeyhole size={18} className='shrink-0 text-zinc-400' />
		) : Icon ? (
			<Icon size={18} className='shrink-0' />
		) : null}
		<span className='min-w-0 truncate'>{label}</span>
	</button>
);

const SettingsRow = ({
	title,
	description,
	children,
}: {
	title: string;
	description?: string;
	children: ReactNode;
}) => (
	<div className='grid gap-4 border-b border-zinc-200 py-6 lg:grid-cols-[minmax(240px,1fr)_minmax(420px,1.05fr)] lg:items-center'>
		<div>
			<div className='text-base font-bold tracking-tight text-zinc-950'>{title}</div>
			{description && (
				<div className='mt-1 text-sm font-medium text-zinc-500'>{description}</div>
			)}
		</div>
		<div className='flex min-w-0 items-center justify-end gap-3'>{children}</div>
	</div>
);

const inputClass =
	'h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-base font-medium text-zinc-900 shadow-xs outline-none placeholder:text-zinc-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100';

const SettingsSurface = () => {
	const navigate = useNavigate();
	const setActiveWorkspaceView = useWorkflowShellStore((store) => store.setActiveWorkspaceView);
	const goBack = () => {
		setActiveWorkspaceView('workflows');
		navigate('/app/editor/new');
	};

	return (
		<div className='flex min-w-0 flex-1 overflow-hidden bg-[#fbfbfc] text-zinc-950'>
			<aside className='hidden w-[286px] shrink-0 flex-col border-r border-zinc-200 bg-white md:flex'>
				<div className='flex h-20 items-center justify-between px-5'>
					<div className='text-3xl font-black tracking-[-0.04em] text-zinc-950'>
						Agent1o1
					</div>
					<button
						type='button'
						aria-label='Collapse settings navigation'
						className='flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950'>
						<PanelLeft size={18} />
					</button>
				</div>

				<div className='min-h-0 flex-1 overflow-y-auto px-3 pb-4'>
					<button
						type='button'
						onClick={goBack}
						className='mb-5 flex h-10 items-center gap-3 rounded-lg px-2 text-sm font-bold text-zinc-900 transition hover:bg-zinc-100'>
						<ArrowLeft size={18} />
						Go back
					</button>

					<div className='space-y-7'>
						<section>
							<div className='mb-2 px-2 text-xs font-bold text-zinc-500'>Profile</div>
							<div className='space-y-1'>
								{profileNav.map((item) => (
									<SettingsLink key={item.label} {...item} />
								))}
							</div>
						</section>

						<section>
							<div className='mb-2 px-2 text-xs font-bold text-zinc-500'>
								Organization
							</div>
							<div className='space-y-1'>
								{organizationNav.map((label) => (
									<SettingsLink key={label} label={label} locked />
								))}
							</div>
						</section>

						<section>
							<div className='mb-2 px-2 text-xs font-bold text-zinc-500'>
								AI Providers
							</div>
							<div className='space-y-1'>
								{aiProviderNav.map((label) => (
									<SettingsLink key={label} label={label} locked />
								))}
							</div>
						</section>
					</div>
				</div>

				<div className='flex h-17 items-center justify-between border-t border-zinc-200 px-4'>
					<div className='flex min-w-0 items-center gap-3'>
						<img src={avatar} alt='Amaan' className='h-7 w-7 rounded-lg object-cover' />
						<div className='truncate text-sm font-bold text-zinc-950'>Amaan</div>
					</div>
					<button
						type='button'
						aria-label='Account menu'
						className='flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100'>
						<MoreVertical size={17} />
					</button>
				</div>
			</aside>

			<main className='min-w-0 flex-1 overflow-y-auto'>
				<div className='mx-auto w-full max-w-[1180px] px-6 py-10 sm:px-10 lg:px-14 lg:py-16'>
					<div className='mb-10 flex items-start justify-between gap-5'>
						<div>
							<h1 className='text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl'>
								Profile
							</h1>
							<p className='mt-2 text-base font-medium text-zinc-500'>
								Manage your account settings
							</p>
						</div>
						<button
							type='button'
							onClick={goBack}
							className='flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 text-sm font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 md:hidden'>
							<ArrowLeft size={17} />
							Back
						</button>
					</div>

					<section>
						<div className='border-b border-zinc-200 pb-5 text-base font-bold text-zinc-500'>
							Personal Details
						</div>

						<div className='grid gap-4 border-b border-zinc-200 py-6 lg:grid-cols-[minmax(240px,1fr)_minmax(420px,1.05fr)] lg:items-center'>
							<div className='flex min-w-0 items-center gap-5'>
								<img
									src={avatar}
									alt='Profile'
									className='h-21 w-21 rounded-xl object-cover'
								/>
								<div>
									<div className='text-lg font-bold tracking-tight text-zinc-950'>
										Profile Picture
									</div>
									<div className='mt-1 text-base font-medium text-zinc-500'>
										PNGs, JPEGs under 10MB
									</div>
								</div>
							</div>
							<div className='flex flex-wrap justify-start gap-3 lg:justify-end'>
								<button
									type='button'
									className='flex h-12 items-center gap-2 rounded-xl bg-pink-500 px-5 text-base font-bold text-white shadow-lg shadow-pink-500/20 transition hover:bg-pink-600'>
									<Upload size={19} />
									Upload Photo
								</button>
								<button
									type='button'
									className='h-12 rounded-xl border border-zinc-200 bg-white px-5 text-base font-bold text-zinc-500 shadow-xs transition hover:bg-zinc-50 hover:text-zinc-800'>
									Remove
								</button>
							</div>
						</div>

						<SettingsRow
							title='Full Name'
							description='Your first and last name, as visible to others.'>
							<div className='grid w-full gap-3 sm:grid-cols-2'>
								<input
									className={inputClass}
									defaultValue='Amaan'
									aria-label='First name'
								/>
								<input
									className={inputClass}
									placeholder='Last name'
									aria-label='Last name'
								/>
							</div>
						</SettingsRow>

						<SettingsRow title='Email' description='beingamaan21@gmail.com'>
							<button
								type='button'
								className='h-12 rounded-xl border border-zinc-200 bg-white px-6 text-base font-bold text-zinc-500 shadow-xs transition hover:bg-zinc-50 hover:text-zinc-800'>
								Change
							</button>
						</SettingsRow>

						<SettingsRow
							title='Timezone'
							description='Your local timezone for time-based features'>
							<div className='relative w-full max-w-[520px]'>
								<select
									aria-label='Timezone'
									defaultValue='Asia/Kolkata'
									className={`${inputClass} appearance-none pr-11`}>
									<option value='Asia/Kolkata'>Asia/Kolkata</option>
									<option value='America/New_York'>America/New_York</option>
									<option value='Europe/London'>Europe/London</option>
									<option value='UTC'>UTC</option>
								</select>
								<ChevronDown
									size={18}
									className='pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400'
								/>
							</div>
						</SettingsRow>
					</section>

					<section className='mt-9 border-t border-zinc-100 pt-9'>
						<h2 className='text-xl font-bold tracking-tight text-zinc-950'>
							Danger zone
						</h2>
						<div className='mt-7 flex flex-col gap-5 border-t border-zinc-100 pt-7 lg:flex-row lg:items-center lg:justify-between'>
							<div>
								<div className='flex items-center gap-2 text-lg font-bold text-red-500'>
									<Trash2 size={19} />
									Delete account
								</div>
								<p className='mt-1 max-w-2xl text-base font-medium text-zinc-500'>
									This action cannot be undone. This will permanently delete your
									account and all your data.
								</p>
							</div>
							<button
								type='button'
								className='h-12 rounded-xl border border-red-700 bg-red-500 px-6 text-base font-bold text-white shadow-sm shadow-red-500/20 transition hover:bg-red-600 lg:min-w-40'>
								Delete account
							</button>
						</div>
					</section>

					<div className='mt-12 grid gap-3 border-t border-zinc-100 pt-6 text-sm text-zinc-400 sm:grid-cols-3'>
						<div className='flex items-center gap-2'>
							<Sparkles size={15} />
							Profile ready
						</div>
						<div className='flex items-center gap-2'>
							<ShieldCheck size={15} />
							Security reviewed
						</div>
						<div className='flex items-center gap-2'>
							<BriefcaseBusiness size={15} />
							Workspace owner
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default SettingsSurface;
