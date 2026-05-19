import type { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import pages from '@/Routes/pages';
import { ApiError } from '@/api/core';
import { useCreateWorkspace } from '@/api/modules/workspaces';
import Icon from '@/components/icon/Icon';
import * as Yup from 'yup';

interface ICreateWorkspaceFormValues {
	name: string;
	slug: string;
}

const slugify = (value: string) =>
	value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Workspace name is required')
		.min(2, 'Workspace name must be at least 2 characters'),
	slug: Yup.string()
		.required('Workspace URL is required')
		.matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers, and hyphens'),
});

const CreateWorkspacePage = () => {
	const navigate = useNavigate();
	const createWorkspace = useCreateWorkspace();

	const formik = useFormik<ICreateWorkspaceFormValues>({
		initialValues: {
			name: '',
			slug: '',
		},
		validationSchema,
		validateOnMount: true,
		onSubmit: async (values, actions) => {
			try {
				const workspace = await createWorkspace.mutateAsync({
					name: values.name,
					slug: values.slug,
				});
				navigate(`${pages.pagesExamples.inviteTeam.to}?workspaceId=${workspace.id}`);
			} catch (error) {
				if (ApiError.is(error)) {
					const fieldErrors = error.fieldErrors();
					actions.setErrors({
						name: fieldErrors.name,
						slug: fieldErrors.slug,
					});
				}
			}
		},
	});

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const nextName = event.target.value;
		formik.setFieldValue('name', nextName);
		if (!formik.touched.slug) {
			formik.setFieldValue('slug', slugify(nextName));
		}
	};

	const firstError =
		(formik.touched.name && formik.errors.name) ||
		(formik.touched.slug && formik.errors.slug) ||
		'';

	return (
		<main className='min-h-screen overflow-hidden bg-[#fbfbfd] text-slate-950'>
			<div className='absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_20%_15%,rgba(76,111,255,0.16),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(239,92,166,0.18),transparent_30%),linear-gradient(180deg,#fff,rgba(255,255,255,0))]' />
			<OnboardingNav />

			<section className='relative mx-auto grid min-h-[calc(100vh-104px)] max-w-[1220px] items-center gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20'>
				<div>
					<div className='mb-8 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-black text-slate-500 shadow-lg shadow-slate-200/70'>
						<span className='h-2 w-2 rounded-full bg-primary-500' />
						Workspace setup
					</div>
					<h1 className='max-w-3xl text-6xl leading-[0.92] font-semibold tracking-normal text-slate-950 md:text-7xl xl:text-8xl'>
						Give your agents a command center.
					</h1>
					<p className='mt-7 max-w-2xl text-lg leading-8 font-medium text-slate-600 md:text-xl'>
						Name the place where your workflows, prompts, credentials, and team decisions
						will live together.
					</p>

					<div className='mt-10 grid max-w-xl grid-cols-3 gap-3'>
						{workspaceStats.map((stat) => (
							<div
								key={stat.label}
								className='rounded-3xl border border-white bg-white/80 p-4 shadow-lg shadow-slate-200/60'>
								<p className='text-2xl font-black text-slate-950'>{stat.value}</p>
								<p className='mt-1 text-xs font-bold text-slate-500'>{stat.label}</p>
							</div>
						))}
					</div>
				</div>

				<div className='relative'>
					<div className='absolute -top-12 -right-10 hidden h-28 w-28 rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-400/40 rotate-6 lg:block' />
					<div className='absolute -bottom-10 -left-8 hidden h-24 w-24 rounded-full bg-primary-300 shadow-2xl shadow-primary-200 lg:block' />
					<div className='relative rounded-[2rem] border border-white bg-white/90 p-4 shadow-2xl shadow-slate-300/60 backdrop-blur'>
						<div className='rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5'>
							<div className='mb-6 flex items-center justify-between'>
								<div>
									<p className='text-xs font-black tracking-[0.2em] text-slate-400 uppercase'>
										Step 1 of 2
									</p>
									<h2 className='mt-2 text-2xl font-black text-slate-950'>
										Create workspace
									</h2>
								</div>
								<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white'>
									<Icon icon='DashboardSquare03' className='h-6 w-6' />
								</div>
							</div>

							<form className='space-y-4' onSubmit={formik.handleSubmit}>
								<div>
									<label
										className='mb-2 block text-xs font-black text-slate-600'
										htmlFor='name'>
										Workspace name
									</label>
									<input
										id='name'
										name='name'
										aria-label='Workspace name'
										autoComplete='organization'
										placeholder='Acme Automation'
										value={formik.values.name}
										onChange={handleNameChange}
										onBlur={formik.handleBlur}
										className='block min-h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-950 outline-none placeholder:text-slate-400 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-200'
									/>
								</div>

								<div>
									<label
										className='mb-2 block text-xs font-black text-slate-600'
										htmlFor='slug'>
										Workspace URL
									</label>
									<div className='flex min-h-14 items-center overflow-hidden rounded-2xl border border-slate-200 bg-white focus-within:border-slate-300 focus-within:shadow-lg focus-within:shadow-slate-200'>
										<span className='border-r border-slate-100 px-4 text-sm font-bold text-slate-400'>
											agent1o1.app/
										</span>
										<input
											id='slug'
											name='slug'
											aria-label='Workspace URL'
											placeholder='acme'
											value={formik.values.slug}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className='min-w-0 flex-1 bg-transparent px-4 text-base font-semibold text-slate-950 outline-none placeholder:text-slate-400'
										/>
									</div>
								</div>

								<div className='min-h-5 text-xs font-bold text-rose-500'>{firstError}</div>

								<button
									type='submit'
									disabled={!formik.isValid || createWorkspace.isPending}
									className='flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-300 disabled:pointer-events-none disabled:opacity-50'>
									{createWorkspace.isPending ? 'Creating...' : 'Continue'}
									<Icon icon='ArrowRight01' className='h-5 w-5' />
								</button>
							</form>
						</div>

						<div className='mt-4 grid grid-cols-3 gap-3'>
							{workflowCards.map((card) => (
								<div
									key={card.label}
									className='rounded-2xl border border-slate-100 bg-white p-4 shadow-sm'>
									<div
										className='mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white'
										style={{ backgroundColor: card.color }}>
										<Icon icon={card.icon} className='h-5 w-5' />
									</div>
									<p className='text-xs font-black text-slate-950'>{card.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

const OnboardingNav = () => (
	<header className='relative z-20 px-5 pt-6'>
		<nav className='mx-auto flex max-w-[1220px] items-center justify-between rounded-[28px] border border-white bg-white/85 px-4 py-3 shadow-xl shadow-slate-200/70 backdrop-blur'>
			<Link to='/' className='flex items-center gap-3'>
				<span className='flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white'>
					A1
				</span>
				<span className='text-xl font-black text-slate-950'>Agent1o1</span>
			</Link>
			<div className='hidden items-center gap-7 text-sm font-bold text-slate-500 md:flex'>
				<span>Agents</span>
				<span>Workflows</span>
				<span>Teams</span>
			</div>
			<Link
				to={pages.pagesExamples.inviteTeam.to}
				className='rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800'>
				Invite team
			</Link>
		</nav>
	</header>
);

const workspaceStats = [
	{ value: '01', label: 'Shared hub' },
	{ value: '∞', label: 'Workflows' },
	{ value: '2m', label: 'Setup' },
];

const workflowCards = [
	{ label: 'Support', icon: 'BubbleChat', color: '#4f46e5' },
	{ label: 'Ops', icon: 'WorkflowCircle03', color: '#111827' },
	{ label: 'Sales', icon: 'ChartUp', color: '#e85d9e' },
];

export default CreateWorkspacePage;
