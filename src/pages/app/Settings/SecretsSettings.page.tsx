import {
	ArrowLeft,
	CheckCircle2,
	Copy,
	KeyRound,
	LockKeyhole,
	MoreVertical,
	PanelLeft,
	PencilLine,
	Plus,
	Search,
	ShieldCheck,
	Sparkles,
	Trash2,
	X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import avatar from '@/assets/avatar/avatar1.png';
import { useWorkflowShellStore } from '@/store/workflowShell.store';

type Secret = {
	id: string;
	name: string;
	value: string;
	lastUpdated: string;
};

type ToastTone = 'success' | 'error';

type ToastItem = {
	id: string;
	message: string;
	tone: ToastTone;
};

type ModalMode = 'create' | 'edit';

const STORAGE_KEY = 'agent1o1-secrets-v1';

const formatLastUpdated = (value: string) => {
	const date = new Date(value);
	const now = Date.now();
	const diff = now - date.getTime();

	if (Number.isNaN(date.getTime())) {
		return 'Unknown';
	}

	if (diff < 60_000) {
		return 'just now';
	}

	if (diff < 3_600_000) {
		const mins = Math.max(1, Math.round(diff / 60_000));
		return `${mins} min ago`;
	}

	return new Intl.DateTimeFormat('en', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
	}).format(date);
};

const getMaskedValue = () => '••••••••••••••';

const settingsGroups = [
	['Workspace', ['API keys', 'Webhook secrets', 'Environment variables']],
	['Security', ['Access logs', 'Rotate credentials', 'Audit trail']],
] as const;

const SettingsLink = ({
	label,
	active = false,
	locked = false,
	icon: Icon,
}: {
	label: string;
	active?: boolean;
	locked?: boolean;
	icon?: typeof KeyRound;
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

const Button = ({
	children,
	variant = 'primary',
	onClick,
	type = 'button',
	disabled = false,
	className = '',
}: {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'ghost';
	onClick?: () => void;
	type?: 'button' | 'submit';
	disabled?: boolean;
	className?: string;
}) => {
	const base = 'inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold transition';
	const variants = {
		primary: 'bg-zinc-950 text-white hover:bg-zinc-800 disabled:bg-zinc-300',
		secondary: 'border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50',
		ghost: 'bg-transparent text-zinc-700 hover:bg-zinc-100',
	};

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${base} ${variants[variant]} ${className}`}>
			{children}
		</button>
	);
};

const ToastContainer = ({
	toasts,
	removeToast,
}: {
	toasts: ToastItem[];
	removeToast: (id: string) => void;
}) => (
	<div className='pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4'>
		<div className='flex w-full max-w-xl flex-col gap-2'>
			{toasts.map((toast) => (
				<div
					key={toast.id}
					className={[
						'pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 shadow-lg backdrop-blur',
						toast.tone === 'success'
							? 'border-emerald-200 bg-emerald-50 text-emerald-900'
							: 'border-rose-200 bg-rose-50 text-rose-900',
					].join(' ')}>
					<div className='flex items-center gap-3'>
						<CheckCircle2 size={18} />
						<span className='text-sm font-semibold'>{toast.message}</span>
					</div>
					<button
						type='button'
						onClick={() => removeToast(toast.id)}
						className='rounded-full p-1 text-current transition hover:bg-black/5'>
						<X size={16} />
					</button>
				</div>
			))}
		</div>
	</div>
);

const EmptyState = ({ onAdd }: { onAdd: () => void }) => (
	<div className='rounded-[28px] border border-zinc-200 bg-white px-6 py-10 text-center shadow-sm sm:px-8'>
		<div className='mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-600'>
			<Plus size={24} />
		</div>
		<h2 className='mt-5 text-2xl font-black tracking-tight text-zinc-950'>No secrets yet</h2>
		<p className='mt-2 text-sm font-medium leading-6 text-zinc-500'>
			Create your first secret to get started.
		</p>
		<Button onClick={onAdd} className='mx-auto mt-6'>
			<Plus size={16} />
			Add Secret
		</Button>
	</div>
);

const SearchBar = ({
	value,
	setValue,
	onAdd,
	searchRef,
}: {
	value: string;
	setValue: (value: string) => void;
	onAdd: () => void;
	searchRef: React.RefObject<HTMLInputElement | null>;
}) => (
	<div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
		<div className='relative flex-1'>
			<Search size={18} className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400' />
			<input
				ref={searchRef}
				value={value}
				onChange={(event) => setValue(event.target.value)}
				placeholder='Search secrets'
				className='h-12 w-full rounded-2xl border border-zinc-200 bg-white pl-11 pr-4 text-sm font-semibold text-zinc-900 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100'
			/>
		</div>
		<Button onClick={onAdd} className='lg:min-w-[165px]'>
			<Plus size={16} />
			Add Secret
		</Button>
	</div>
);

const SecretList = ({
	secrets,
	onEdit,
	onDelete,
	onCopy,
}: {
	secrets: Secret[];
	onEdit: (secret: Secret) => void;
	onDelete: (id: string) => void;
	onCopy: (secret: Secret) => void;
}) => (
	<div className='overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm'>
		<div className='overflow-x-auto'>
			<table className='min-w-full divide-y divide-zinc-200 text-left'>
				<thead className='bg-zinc-50'>
					<tr>
						<th className='px-5 py-4 text-d font-bold uppercase tracking-[0.14em] text-zinc-500'>
							Name
						</th>
						<th className='px-5 py-4 text-md font-bold uppercase tracking-[0.14em] text-zinc-500'>
							Last Updated
						</th>
						<th className='px-5 py-4 text-md font-bold uppercase tracking-[0.14em] text-zinc-500'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody className='divide-y divide-zinc-100'>
					{secrets.map((secret) => (
						<tr key={secret.id} className='transition hover:bg-zinc-50'>
							<td className='px-5 py-4'>
								<div className='flex items-center gap-3'>
									<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600'>
										<KeyRound size={18} />
									</div>
									<div>
										<div className='text-sm font-bold text-zinc-950'>{secret.name}</div>
										<div className='mt-1 text-xs font-semibold text-zinc-500'>{getMaskedValue()}</div>
									</div>
								</div>
							</td>
							<td className='px-5 py-4 text-sm font-semibold text-zinc-500'>
								{formatLastUpdated(secret.lastUpdated)}
							</td>
							<td className='px-5 py-4'>
								<div className='flex items-center gap-2'>
									<button
										type='button'
										onClick={() => onCopy(secret)}
										className='flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950'
										aria-label={`Copy ${secret.name}`}>
										<Copy size={16} />
									</button>
									<button
										type='button'
										onClick={() => onEdit(secret)}
										className='flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950'
										aria-label={`Edit ${secret.name}`}>
										<PencilLine size={16} />
									</button>
									<button
										type='button'
										onClick={() => onDelete(secret.id)}
										className='flex h-9 w-9 items-center justify-center rounded-lg text-rose-500 transition hover:bg-rose-50'
										aria-label={`Delete ${secret.name}`}>
										<Trash2 size={16} />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);

const ModalShell = ({
	open,
	title,
	subtitle,
	onClose,
	children,
}: {
	open: boolean;
	title: string;
	subtitle: string;
	onClose: () => void;
	children: React.ReactNode;
}) => {
	if (!open) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-40 flex items-center justify-center bg-zinc-950/35 px-4 py-6'>
			<div className='w-full max-w-[560px] rounded-[20px] border border-zinc-200 bg-white p-5 shadow-2xl sm:p-6'>
				<div className='flex items-start justify-between gap-4'>
					<div>
						<p className='text-xs font-bold uppercase tracking-[0.2em] text-emerald-500'>Secure entry</p>
						<h2 className='mt-2 text-2xl font-black tracking-tight text-zinc-950'>{title}</h2>
						<p className='mt-2 text-sm font-medium text-zinc-500'>{subtitle}</p>
					</div>
					<button
						type='button'
						onClick={onClose}
						className='flex h-10 w-10 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950'>
						<X size={18} />
					</button>
				</div>
				<div className='mt-5'>{children}</div>
			</div>
		</div>
	);
};

const SecretFormModal = ({
	open,
	mode,
	secret,
	onClose,
	onSave,
}: {
	open: boolean;
	mode: ModalMode;
	secret: Secret | null;
	onClose: () => void;
	onSave: (name: string, value: string) => void;
}) => {
	const [name, setName] = useState(secret?.name ?? '');
	const [value, setValue] = useState(secret?.value ?? '');
	const [errors, setErrors] = useState({ name: '', value: '' });

	useEffect(() => {
		setName(secret?.name ?? '');
		setValue(secret?.value ?? '');
		setErrors({ name: '', value: '' });
	}, [secret, open]);

	const validate = () => {
		const nextErrors = { name: '', value: '' };
		if (!name.trim()) {
			nextErrors.name = 'Please enter a secret name.';
		}
		if (!value.trim()) {
			nextErrors.value = 'Please enter a secret value.';
		}
		setErrors(nextErrors);
		return !nextErrors.name && !nextErrors.value;
	};

	const handleSubmit = () => {
		if (!validate()) return;
		onSave(name.trim(), value.trim());
	};

	const title = mode === 'create' ? 'Add Secret' : 'Edit Secret';
	const subtitle =
		mode === 'create'
			? 'The value will be encrypted and stored securely.'
			: 'Update the secret name or value and save your changes.';

	return (
		<ModalShell open={open} title={title} subtitle={subtitle} onClose={onClose}>
			<div className='space-y-4'>
				<div>
					<label className='text-sm font-bold text-zinc-950'>Name</label>
					<input
						value={name}
						onChange={(event) => setName(event.target.value)}
						placeholder='Secret name'
						className='mt-2 h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm font-semibold text-zinc-900 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100'
					/>
					{errors.name && <p className='mt-2 text-sm font-semibold text-rose-600'>{errors.name}</p>}
				</div>
				<div>
					<label className='text-sm font-bold text-zinc-950'>Value</label>
					<textarea
						value={value}
						onChange={(event) => setValue(event.target.value)}
						placeholder='Secret value'
						rows={5}
						className='mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-900 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100'
					/>
					{errors.value && <p className='mt-2 text-sm font-semibold text-rose-600'>{errors.value}</p>}
				</div>
				<div className='flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end'>
					<Button variant='secondary' onClick={onClose} className='sm:min-w-[120px]'>
						Cancel
					</Button>
					<Button onClick={handleSubmit} disabled={!name.trim() || !value.trim()} className='sm:min-w-[140px]'>
						{mode === 'create' ? 'Create' : 'Save Changes'}
					</Button>
				</div>
			</div>
		</ModalShell>
	);
};

const DeleteConfirmModal = ({
	open,
	onClose,
	onConfirm,
}: {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}) => (
	<ModalShell
		open={open}
		title='Delete Secret'
		subtitle='Are you sure you want to delete this secret?'
		onClose={onClose}>
		<div className='space-y-4'>
			<p className='text-sm font-medium leading-6 text-zinc-500'>
				This action removes the secret immediately and cannot be undone.
			</p>
			<div className='flex flex-col-reverse gap-3 sm:flex-row sm:justify-end'>
				<Button variant='secondary' onClick={onClose} className='sm:min-w-[120px]'>
					Cancel
				</Button>
				<Button onClick={onConfirm} className='bg-rose-600 hover:bg-rose-500 sm:min-w-[140px]'>
					Delete
				</Button>
			</div>
		</div>
	</ModalShell>
);

const SecretsSettingsPage = () => {
	const navigate = useNavigate();
	const setActiveWorkspaceView = useWorkflowShellStore((store) => store.setActiveWorkspaceView);
	const searchRef = useRef<HTMLInputElement | null>(null);

	const [secrets, setSecrets] = useState<Secret[]>([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState(false);
	const [modalMode, setModalMode] = useState<ModalMode>('create');
	const [editingSecret, setEditingSecret] = useState<Secret | null>(null);
	const [deleteId, setDeleteId] = useState<string | null>(null);
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	useEffect(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored) as Secret[];
				setSecrets(Array.isArray(parsed) ? parsed : []);
			}
		} catch {
			setSecrets([]);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(secrets));
		}
	}, [secrets, isLoading]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				searchRef.current?.focus();
			}
			if (event.key === 'Escape') {
				setIsModalOpen(false);
				setIsDeleteOpen(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	const showToast = (message: string, tone: ToastTone = 'success') => {
		const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
		setToasts((current) => [...current, { id, message, tone }]);
		window.setTimeout(() => {
			setToasts((current) => current.filter((toast) => toast.id !== id));
		}, 3200);
	};

	const removeToast = (id: string) => {
		setToasts((current) => current.filter((toast) => toast.id !== id));
	};

	const filteredSecrets = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();
		if (!query) {
			return secrets;
		}
		return secrets.filter((secret) => secret.name.toLowerCase().includes(query));
	}, [searchTerm, secrets]);

	const goBack = () => {
		setActiveWorkspaceView('workflows');
		navigate('/app/editor/new');
	};

	const openCreateModal = () => {
		setModalMode('create');
		setEditingSecret(null);
		setIsModalOpen(true);
	};

	const openEditModal = (secret: Secret) => {
		setModalMode('edit');
		setEditingSecret(secret);
		setIsModalOpen(true);
	};

	const handleSave = (name: string, value: string) => {
		const now = new Date().toISOString();

		if (modalMode === 'create') {
			const createdSecret: Secret = {
				id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
				name,
				value,
				lastUpdated: now,
			};
			setSecrets((current) => [createdSecret, ...current].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated)));
			showToast('Secret created successfully');
		} else if (editingSecret) {
			setSecrets((current) =>
				current
					.map((secret) =>
						secret.id === editingSecret.id
							? { ...secret, name, value, lastUpdated: now }
							: secret,
					)
					.sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated)),
			);
			showToast('Secret updated successfully');
		}

		setIsModalOpen(false);
		setEditingSecret(null);
	};

	const confirmDelete = () => {
		if (!deleteId) {
			return;
		}
		setSecrets((current) => current.filter((secret) => secret.id !== deleteId));
		setDeleteId(null);
		setIsDeleteOpen(false);
		showToast('Secret deleted successfully');
	};

	const handleCopy = async (secret: Secret) => {
		try {
			await navigator.clipboard.writeText(secret.value);
			showToast(`Copied ${secret.name}`);
		} catch {
			showToast('Unable to copy secret value', 'error');
		}
	};

	return (
		<div className='flex min-w-0 flex-1 overflow-hidden bg-[#f6f7f9] text-zinc-950'>
			<ToastContainer toasts={toasts} removeToast={removeToast} />

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
							<SettingsLink label='General' icon={KeyRound} />
							<SettingsLink label='Subscription' icon={ShieldCheck} />
							<SettingsLink label='Secrets' active icon={KeyRound} />
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
					<div className='mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
						<div>
							<div className='inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600'>
								<Sparkles size={14} />
								Encrypted secrets
							</div>
							<h1 className='mt-4 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl'>
								Your Secrets
							</h1>
							<p className='mt-2 max-w-2xl text-sm font-medium leading-6 text-zinc-500 sm:text-base'>
								Configure secrets to use them in custom nodes and MCP nodes. Secrets are encrypted and should be used for sensitive data.
							</p>
						</div>
						<div className='flex items-center gap-3'>
							<Button onClick={openCreateModal} className='min-w-[165px]'>
								<Plus size={16} />
								Add Secret
							</Button>
						</div>
					</div>

					<div className='mt-4 rounded-[20px] border border-zinc-200 bg-white p-4 shadow-sm sm:p-6'>
						<SearchBar value={searchTerm} setValue={setSearchTerm} onAdd={openCreateModal} searchRef={searchRef} />
					</div>

					<div className='mt-6'>
						{isLoading ? (
							<div className='rounded-[28px] border border-dashed border-zinc-200 bg-white px-6 py-10 text-center text-sm font-semibold text-zinc-500'>
								Loading secrets…
							</div>
						) : filteredSecrets.length === 0 && secrets.length === 0 ? (
							<EmptyState onAdd={openCreateModal} />
						) : filteredSecrets.length === 0 ? (
							<div className='rounded-[20px] border border-dashed border-zinc-200 bg-white px-6 py-10 text-center'>
								<h2 className='text-xl font-black text-zinc-950'>No matching secrets</h2>
								<p className='mt-2 text-sm font-medium text-zinc-500'>
									Try another search term or add a new secret.
							</p>
								<Button onClick={openCreateModal} className='mx-auto mt-5'>
									<Plus size={16} />
									Add Secret
								</Button>
							</div>
						) : (
							<SecretList
								secrets={filteredSecrets}
								onEdit={openEditModal}
								onDelete={(id) => {
									setDeleteId(id);
									setIsDeleteOpen(true);
								}}
								onCopy={handleCopy}
							/>
						)}
					</div>
				</div>
			</main>

			<SecretFormModal
				open={isModalOpen}
				mode={modalMode}
				secret={editingSecret}
				onClose={() => {
					setIsModalOpen(false);
					setEditingSecret(null);
				}}
				onSave={handleSave}
			/>

			<DeleteConfirmModal
				open={isDeleteOpen}
				onClose={() => {
					setIsDeleteOpen(false);
					setDeleteId(null);
				}}
				onConfirm={confirmDelete}
			/>
		</div>
	);
};

export default SecretsSettingsPage;
