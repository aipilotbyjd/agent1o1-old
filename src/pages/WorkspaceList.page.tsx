import { useState, useMemo, useEffect, useRef } from 'react';
import {
	Search,
	Filter,
	Plus,
	Folder,
	ChevronDown,
	ChevronRight,
	Play,
	Edit3,
	Copy,
	Trash2,
	FolderPlus,
	Cloud,
	Sliders,
	Moon,
	Sun,
	Check,
	LayoutGrid,
	List,
	Workflow,
	X,
	Activity,
	HeartPulse,
	ShieldCheck,
	Link2,
	MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WorkspaceSidebar from '@/templates/asides/AgentAside.template';
import useDarkMode from '@/hooks/useDarkMode';
import DARK_MODE from '@/constants/darkMode.constant';


// Interface declarations
interface IWorkflow {
	id: string;
	title: string;
	description: string;
	status: 'active' | 'inactive';
	lastRun: string;
	successRate: number;
	author: string;
	folderId: string | null;
	apps: string[];
	starred?: boolean;
	shared?: boolean;
	lastEdited: string;
}

interface IFolder {
	id: string;
	name: string;
	color: string;
}

// Custom SVGs for high fidelity app icons matching the design
const AppBrandIcon = ({ name, className = 'w-4 h-4' }: { name: string; className?: string }) => {
	switch (name.toLowerCase()) {
		case 'loop':
			return (
				<div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-150">
					<svg className={className} viewBox="0 0 24 24" fill="none">
						<path
							d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2V7h2v6.5z"
							fill="#2563EB"
						/>
					</svg>
				</div>
			);
		case 'runner':
			return (
				<div className="h-6 w-6 rounded-full bg-orange-50 flex items-center justify-center border border-orange-150">
					<svg className={className} viewBox="0 0 24 24" fill="none">
						<path
							d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 21.5h2.1l1.8-8.2 2.1 2v7.7h2v-9.6l-2.1-2 1-4.8c1.5 1.8 3.7 2.9 6.2 2.9v-2c-2 0-3.8-1-4.9-2.5l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.6.1-.9.2L5 5.1v6.4h2V7.8l2.8 1.1z"
							fill="#EA580C"
						/>
					</svg>
				</div>
			);
		case 'slack':
			return (
				<div className="h-6 w-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-150">
					<svg className={className} viewBox="0 0 24 24" fill="none">
						<path
							d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zM6.302 15.165a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H8.822a2.528 2.528 0 0 1-2.52-2.52v-5.043z"
							fill="#E01E5A"
						/>
						<path
							d="M8.822 5.043a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.822 0a2.528 2.528 0 0 1 2.52 2.522v2.52h-2.52z"
							fill="#36C5F0"
						/>
						<path
							d="M8.822 6.302a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.8a2.528 2.528 0 0 1-2.522-2.522V8.822a2.528 2.528 0 0 1 2.522-2.52h5.043z"
							fill="#36C5F0"
						/>
						<path
							d="M18.958 8.822a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52z"
							fill="#2EB67D"
						/>
						<path
							d="M17.698 8.822a2.528 2.528 0 0 1-2.52 2.52H10.13a2.528 2.528 0 0 1-2.521-2.52V3.8a2.528 2.528 0 0 1 2.521-2.522h5.044a2.528 2.528 0 0 1 2.52 2.522v5.043z"
							fill="#2EB67D"
						/>
						<path
							d="M15.178 18.958a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.52z"
							fill="#ECB22E"
						/>
						<path
							d="M15.178 17.698a2.528 2.528 0 0 1-2.52-2.52V10.13a2.528 2.528 0 0 1 2.52-2.521h5.043a2.528 2.528 0 0 1 2.522 2.52v5.044a2.528 2.528 0 0 1-2.522 2.52h-5.043z"
							fill="#ECB22E"
						/>
					</svg>
				</div>
			);
		case 'link':
			return (
				<div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-150">
					<svg className={className} viewBox="0 0 24 24" fill="none">
						<path
							d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
							fill="#10B981"
						/>
					</svg>
				</div>
			);
		default:
			return (
				<div className="h-6 w-6 rounded-full bg-violet-50 flex items-center justify-center border border-violet-150">
					<Workflow className={`${className} text-violet-600`} />
				</div>
			);
	}
};

// Custom sparkline chart
const Sparkline = () => (
	<svg className="w-16 h-8 text-emerald-500" viewBox="0 0 80 30" fill="none">
		<path
			d="M5 25 C 20 25, 25 15, 40 18 C 55 20, 60 5, 75 8"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const initialFolders: IFolder[] = [
	{ id: 'sales', name: 'Sales Operations', color: 'bg-indigo-600' },
	{ id: 'marketing', name: 'Marketing Automations', color: 'bg-rose-500' },
	{ id: 'ai', name: 'AI Core Agents', color: 'bg-violet-600' },
];

const initialWorkflows: IWorkflow[] = [
	{
		id: 'wf-1',
		title: 'sasa',
		description: 'sasa',
		status: 'inactive',
		lastRun: 'Never',
		successRate: 100.0,
		author: 'Amaan',
		folderId: 'sales',
		apps: ['loop'],
		starred: false,
		shared: false,
		lastEdited: 'Never',
	},
	{
		id: 'wf-2',
		title: 'sahil',
		description: 'Triggers on signup webhook, enriches company profiles, and logs priority alerts to Slack.',
		status: 'inactive',
		lastRun: '12 mins ago',
		successRate: 98.4,
		author: 'Amaan',
		folderId: 'sales',
		apps: ['loop', 'runner', 'slack', 'link'],
		starred: true,
		shared: true,
		lastEdited: '12 mins ago',
	},
	{
		id: 'wf-3',
		title: 'sahil (Copy)',
		description: 'Triggers on signup webhook, enriches company profiles, and logs priority alerts to Slack.',
		status: 'inactive',
		lastRun: 'Never',
		successRate: 98.4,
		author: 'Amaan',
		folderId: 'sales',
		apps: ['loop', 'runner', 'slack', 'link'],
		starred: true,
		shared: true,
		lastEdited: 'Never',
	},
	{
		id: 'wf-4',
		title: 'Email campaign automation',
		description: 'Syncs customer signup events to HubSpot and trigger warm email campaigns.',
		status: 'active',
		lastRun: '2 hours ago',
		successRate: 99.1,
		author: 'Amaan',
		folderId: 'marketing',
		apps: ['loop', 'slack'],
		starred: false,
		shared: false,
		lastEdited: '2 hours ago',
	},
	{
		id: 'wf-5',
		title: 'Jira issue classifier',
		description: 'LLM classification of customer bugs with Slack notifications.',
		status: 'active',
		lastRun: '1 hour ago',
		successRate: 97.5,
		author: 'Amaan',
		folderId: 'ai',
		apps: ['loop', 'slack', 'runner'],
		starred: false,
		shared: true,
		lastEdited: '1 hour ago',
	},
	{
		id: 'wf-6',
		title: 'Slack sync manager',
		description: 'Weekly team performance summary and analytics dashboard builder.',
		status: 'inactive',
		lastRun: 'Never',
		successRate: 100.0,
		author: 'Amaan',
		folderId: 'ai',
		apps: ['loop', 'link'],
		starred: false,
		shared: false,
		lastEdited: 'Yesterday',
	}
];

export default function WorkspaceListPage() {
	const [workflows, setWorkflows] = useState<IWorkflow[]>(initialWorkflows);
	const [folders] = useState<IFolder[]>(initialFolders);
	const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
		sales: true,
		marketing: false,
		ai: false,
	});

	// Inline renaming state
	const [renamingId, setRenamingId] = useState<string | null>(null);
	const [renameValue, setRenameValue] = useState('');
	const renameInputRef = useRef<HTMLInputElement>(null);

	// Context menu active card
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

	// Filter and Search states
	const [activeTab, setActiveTab] = useState<'mine' | 'shared' | 'starred'>('mine');
	const [searchQuery, setSearchQuery] = useState('');
	const [showFilterDropdown, setShowFilterDropdown] = useState(false);
	const [isGridView, setIsGridView] = useState(true);

	const { isDarkTheme, setDarkModeStatus } = useDarkMode();

	// Default to light theme when this page mounts
	useEffect(() => {
		setDarkModeStatus(DARK_MODE.LIGHT);
	}, [setDarkModeStatus]);

	// Toast Success notification
	const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

	const triggerToast = (message: string, type: 'success' | 'info' = 'success') => {
		setToast({ message, type });
		setTimeout(() => setToast(null), 3000);
	};

	// Focus rename input on toggle
	useEffect(() => {
		if (renamingId && renameInputRef.current) {
			renameInputRef.current.focus();
			renameInputRef.current.select();
		}
	}, [renamingId]);

	// Close context menu on click outside
	useEffect(() => {
		const handleGlobalClick = () => {
			setActiveMenuId(null);
			setShowFilterDropdown(false);
		};
		window.addEventListener('click', handleGlobalClick);
		return () => window.removeEventListener('click', handleGlobalClick);
	}, []);

	// Default open menu state for "sasa" card as requested in the screenshot
	useEffect(() => {
		// Set active menu for 'wf-1' (sasa) on mount to match screenshot exactly
		setActiveMenuId('wf-1');
	}, []);

	// Filter logic
	const filteredWorkflows = useMemo(() => {
		return workflows.filter((w) => {
			// Tab filtering
			if (activeTab === 'starred' && !w.starred) return false;
			if (activeTab === 'shared' && !w.shared) return false;

			// Search query filtering
			if (searchQuery) {
				const query = searchQuery.toLowerCase();
				const matchTitle = w.title.toLowerCase().includes(query);
				const matchDesc = w.description.toLowerCase().includes(query);
				if (!matchTitle && !matchDesc) return false;
			}
			return true;
		});
	}, [workflows, activeTab, searchQuery]);

	// Group workflows by folder
	const folderGrouped = useMemo(() => {
		const grouped: Record<string, IWorkflow[]> = {};
		folders.forEach((f) => {
			grouped[f.id] = [];
		});
		filteredWorkflows.forEach((w) => {
			if (w.folderId && grouped[w.folderId]) {
				grouped[w.folderId].push(w);
			}
		});
		return grouped;
	}, [filteredWorkflows, folders]);

	// Actions
	const handleToggleStatus = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		setWorkflows((prev) =>
			prev.map((w) => (w.id === id ? { ...w, status: w.status === 'active' ? 'inactive' : 'active' } : w))
		);
		const wf = workflows.find((w) => w.id === id);
		if (wf) {
			triggerToast(`Workflow status updated!`, 'success');
		}
	};

	const handleToggleStar = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		setWorkflows((prev) =>
			prev.map((w) => (w.id === id ? { ...w, starred: !w.starred } : w))
		);
	};

	const handleRunNow = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		const wf = workflows.find((w) => w.id === id);
		triggerToast(`Running "${wf?.title || 'workflow'}"...`, 'info');
		setTimeout(() => {
			triggerToast(`Workflow "${wf?.title || 'workflow'}" run successful!`, 'success');
		}, 1500);
	};

	const handleDuplicate = (workflow: IWorkflow, e: React.MouseEvent) => {
		e.stopPropagation();
		const copy: IWorkflow = {
			...workflow,
			id: `wf-${Date.now()}`,
			title: `${workflow.title} (Copy)`,
			lastRun: 'Never',
			lastEdited: 'Never',
			status: 'inactive',
		};
		setWorkflows((prev) => [...prev, copy]);
		triggerToast(`Duplicated "${workflow.title}"`);
	};

	const handleDelete = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		const wf = workflows.find((w) => w.id === id);
		setWorkflows((prev) => prev.filter((w) => w.id !== id));
		if (wf) {
			triggerToast(`Deleted workflow "${wf.title}"`, 'info');
		}
	};

	const handleRenameSubmit = (id: string) => {
		if (renameValue.trim()) {
			setWorkflows((prev) =>
				prev.map((w) => (w.id === id ? { ...w, title: renameValue.trim() } : w))
			);
			triggerToast('Workflow renamed successfully!');
		}
		setRenamingId(null);
	};

	return (
		<div className={`flex h-screen w-screen overflow-hidden ${isDarkTheme ? 'dark bg-[#0a0b10] text-zinc-150' : 'bg-[#f8f9fc] text-slate-800'}`}>
			{/* Left Workspace Sidebar */}
			<WorkspaceSidebar />

			{/* Main Workspace Dashboard Content Panel */}
			<div className="flex-1 flex flex-col min-w-0 overflow-y-auto font-sans relative">
				
				{/* Top ambient color glows */}
				<div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-500/5 to-blue-500/5 blur-[120px] pointer-events-none -z-10" />
				<div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-pink-500/5 to-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

				{/* Toast Notifications */}
				<AnimatePresence>
					{toast && (
						<motion.div
							initial={{ opacity: 0, y: -20, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -20, scale: 0.95 }}
							className="fixed top-6 right-6 z-[100] px-4 py-3 rounded-2xl border border-violet-500/20 bg-white/90 dark:bg-zinc-900/90 shadow-2xl backdrop-blur-md flex items-center gap-3"
						>
							{toast.type === 'success' ? (
								<div className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
									<Check size={14} className="stroke-[3]" />
								</div>
							) : (
								<div className="h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
									<Activity size={14} className="stroke-[3]" />
								</div>
							)}
							<span className="text-xs font-black text-slate-850 dark:text-zinc-200">{toast.message}</span>
						</motion.div>
					)}
				</AnimatePresence>

				{/* MAIN PADDED CONTAINER */}
				<div className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">
					
					{/* TOP HEADER SECTION */}
					<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						
						{/* Title block */}
						<div className="flex items-center gap-3">
							<h1 className="text-[26px] font-black tracking-tight text-slate-900 dark:text-white">
								Workflows
							</h1>
							<div className="flex items-center gap-2 text-xs text-slate-400 dark:text-zinc-500 font-bold mt-1">
								<Cloud size={14} className="text-slate-400 dark:text-zinc-500" />
								<span>Workspace auto-saved</span>
								<span>&bull;</span>
								<span>8 total nodes</span>
							</div>
							<span className="ml-2 px-2.5 py-0.5 rounded-full border border-amber-250 bg-amber-50 text-[10px] font-black text-amber-700 uppercase tracking-wider dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-400">
								Draft
							</span>
						</div>

						{/* Action Controls */}
						<div className="flex items-center gap-2">
							{/* Library View Pill */}
							<button className="h-9 px-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:border-zinc-800 dark:bg-[#11131c] dark:text-zinc-200 dark:hover:bg-zinc-800/60 flex items-center gap-2 text-xs font-black transition active:scale-95 shadow-sm">
								<svg className="w-3.5 h-3.5 text-violet-600" viewBox="0 0 24 24" fill="none">
									<path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26l1.48-1.48c-.46-.83-.72-1.78-.72-2.78 0-3.31 2.69-6 6-6zm6.76 1.74l-1.48 1.48c.46.83.72 1.78.72 2.78 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" fill="currentColor" />
								</svg>
								Library View
							</button>

							{/* Settings Sliders Icon */}
							<button className="h-9 w-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-[#11131c] text-slate-500 hover:text-slate-750 dark:text-zinc-400 dark:hover:bg-zinc-800/60 flex items-center justify-center transition shadow-sm">
								<Sliders size={15} />
							</button>

							{/* Theme Toggle Button */}
							<button 
								onClick={() => setDarkModeStatus(isDarkTheme ? DARK_MODE.LIGHT : DARK_MODE.DARK)}
								className="h-9 w-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-[#11131c] text-slate-500 hover:text-slate-750 dark:text-zinc-400 dark:hover:bg-zinc-800/60 flex items-center justify-center transition shadow-sm"
							>
								{isDarkTheme ? <Sun size={15} /> : <Moon size={15} />}
							</button>

							{/* Save Button */}
							<button className="h-9 px-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:border-zinc-800 dark:bg-[#11131c] dark:text-zinc-200 dark:hover:bg-zinc-800/60 flex items-center gap-1.5 text-xs font-black transition shadow-sm">
								<Check size={14} className="text-emerald-500 stroke-[3]" />
								Save
							</button>

							{/* Publish Button */}
							<button className="h-9 px-4 rounded-full border border-emerald-250 bg-emerald-50 hover:bg-emerald-100/60 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 flex items-center gap-1.5 text-xs font-black transition shadow-sm">
								<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
									<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
								</svg>
								Publish
							</button>

							{/* Create Workflow Button */}
							<button className="h-9 px-4 rounded-full bg-teal-600 hover:bg-teal-500 text-white flex items-center gap-1.5 text-xs font-black transition active:scale-95 shadow-md shadow-teal-500/10">
								<Plus size={14} strokeWidth={3} />
								Create Workflow
							</button>
						</div>
					</header>

					{/* 4 STATS CARDS SECTION */}
					<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						
						{/* Card 1: Active Workflows */}
						<div className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-zinc-850 dark:bg-[#11131c] shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[110px]">
							<div>
								<span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
									Active Workflows
								</span>
								<span className="text-2xl font-black text-slate-900 dark:text-white mt-2 block">
									4 / 8
								</span>
							</div>
							<span className="text-xs text-slate-500 dark:text-zinc-400 font-semibold block mt-1">
								Running auto triggers
							</span>
							<div className="absolute top-5 right-5 h-8 w-8 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center border border-violet-100 dark:border-violet-500/25">
								<Workflow size={14} />
							</div>
						</div>

						{/* Card 2: Runs */}
						<div className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-zinc-850 dark:bg-[#11131c] shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[110px]">
							<div>
								<span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
									Runs (Last 24h)
								</span>
								<span className="text-2xl font-black text-slate-900 dark:text-white mt-2 block">
									1,280
								</span>
							</div>
							<span className="text-xs text-teal-600 dark:text-emerald-450 font-bold block mt-1 flex items-center gap-1">
								+14% spike today
							</span>
							<div className="absolute top-5 right-5 h-8 w-8 rounded-xl bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-100 dark:border-teal-500/25">
								<HeartPulse size={14} />
							</div>
						</div>

						{/* Card 3: Avg Success Rate */}
						<div className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-zinc-850 dark:bg-[#11131c] shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[110px]">
							<div>
								<span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
									Avg Success Rate
								</span>
								<span className="text-2xl font-black text-slate-900 dark:text-white mt-2 block">
									98.7%
								</span>
							</div>
							<span className="text-xs text-slate-500 dark:text-zinc-400 font-semibold block mt-1">
								Operational safety
							</span>
							<div className="absolute top-5 right-5 h-8 w-8 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-500/25">
								<ShieldCheck size={14} />
							</div>
						</div>

						{/* Card 4: Active Connections */}
						<div className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-zinc-850 dark:bg-[#11131c] shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[110px]">
							<div>
								<span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
									Active Connections
								</span>
								<span className="text-2xl font-black text-slate-900 dark:text-white mt-2 block">
									8 Linked Apps
								</span>
							</div>
							<span className="text-xs text-slate-500 dark:text-zinc-400 font-semibold block mt-1">
								Oauth credentials active
							</span>
							<div className="absolute top-5 right-5 h-8 w-8 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-100 dark:border-amber-500/25">
								<Link2 size={14} />
							</div>
						</div>

					</section>

					{/* FILTERS & SEARCH ROW */}
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-t border-slate-200/60 pt-5 dark:border-zinc-800">
						
						{/* Tab Switches (Mine, Shared, Starred) */}
						<div className="flex items-center gap-1 p-1 rounded-full border border-slate-200/75 bg-slate-100/60 dark:border-zinc-800 dark:bg-zinc-900/60 backdrop-blur-md self-start">
							{[
								{ id: 'mine', label: 'Mine' },
								{ id: 'shared', label: 'Shared with me' },
								{ id: 'starred', label: 'Starred' },
							].map((tab) => (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id as any)}
									className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${
										activeTab === tab.id
											? 'bg-white text-slate-900 shadow-sm dark:bg-[#11131c] dark:text-white'
											: 'text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200'
									}`}
								>
									{tab.label}
								</button>
							))}
						</div>

						{/* Search input and Action buttons */}
						<div className="flex flex-wrap items-center gap-2">
							{/* Search input */}
							<div className="relative min-w-[240px]">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
								<input
									type="text"
									placeholder="Search workflows..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full md:w-60 h-9 pl-9 pr-8 rounded-full border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-[#11131c] text-xs font-semibold outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/25 transition placeholder-slate-400 dark:placeholder-zinc-500 text-slate-900 dark:text-white"
								/>
								{searchQuery ? (
									<button
										onClick={() => setSearchQuery('')}
										className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-350"
									>
										<X size={12} />
									</button>
								) : (
									<span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-350 dark:text-zinc-650 border border-slate-150 dark:border-zinc-850 px-1 py-0.5 rounded">
										⌘K
									</span>
								)}
							</div>

							{/* Filter Dropdown Toggle */}
							<div className="relative">
								<button
									onClick={(e) => {
										e.stopPropagation();
										setShowFilterDropdown(!showFilterDropdown);
									}}
									className="h-9 px-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-[#11131c] text-slate-700 dark:text-zinc-200 flex items-center gap-1.5 text-xs font-black transition-all shadow-sm"
								>
									<Filter size={12} />
									<span>Filter</span>
									<ChevronDown size={11} className={`transition ${showFilterDropdown ? 'rotate-180' : ''}`} />
								</button>
								
								<AnimatePresence>
									{showFilterDropdown && (
										<motion.div
											initial={{ opacity: 0, y: 8, scale: 0.95 }}
											animate={{ opacity: 1, y: 0, scale: 1 }}
											exit={{ opacity: 0, y: 8, scale: 0.95 }}
											className="absolute right-0 mt-2 w-48 rounded-2xl border border-slate-200 dark:border-zinc-850 bg-white dark:bg-[#11131c] shadow-2xl p-1.5 z-40"
											onClick={(e) => e.stopPropagation()}
										>
											<div className="text-[9px] font-black text-slate-400 dark:text-zinc-500 px-2.5 py-1.5 uppercase tracking-wider border-b border-slate-100 dark:border-zinc-800 mb-1">
												Filter Workflows
											</div>
											<button
												onClick={() => {
													setWorkflows(initialWorkflows);
													setShowFilterDropdown(false);
												}}
												className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-650 dark:text-zinc-350 hover:bg-slate-50 dark:hover:bg-zinc-800/60"
											>
												Reset All Filters
											</button>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* Grid/List views */}
							<div className="flex items-center p-0.5 rounded-full border border-slate-200/80 bg-slate-100/50 dark:border-zinc-800 dark:bg-zinc-900/50">
								<button
									onClick={() => setIsGridView(true)}
									className={`h-7 w-7 rounded-full flex items-center justify-center transition-all ${
										isGridView
											? 'bg-white text-slate-900 shadow-sm dark:bg-[#11131c] dark:text-white'
											: 'text-slate-400 dark:text-zinc-500'
									}`}
								>
									<LayoutGrid size={13} />
								</button>
								<button
									onClick={() => setIsGridView(false)}
									className={`h-7 w-7 rounded-full flex items-center justify-center transition-all ${
										!isGridView
											? 'bg-white text-slate-900 shadow-sm dark:bg-[#11131c] dark:text-white'
											: 'text-slate-400 dark:text-zinc-500'
									}`}
								>
									<List size={13} />
								</button>
							</div>

							{/* + Folder button */}
							<button className="h-9 px-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:border-zinc-800 dark:bg-[#11131c] dark:text-zinc-200 flex items-center gap-1.5 text-xs font-black transition shadow-sm">
								<FolderPlus size={13} className="text-slate-400 dark:text-zinc-500" />
								<span>Folder</span>
							</button>

							{/* + Create Workflow button (violet) */}
							<button className="h-9 px-4 rounded-full bg-violet-650 hover:bg-violet-600 text-white flex items-center gap-1.5 text-xs font-black transition active:scale-95 shadow-md shadow-violet-500/10">
								<Plus size={14} strokeWidth={3} />
								Create Workflow
							</button>
						</div>
					</div>

					{/* ACCORDION FOLDERS & GRID SECTION */}
					<div className="space-y-4">
						{folders.map((folder) => {
							const groupedItems = folderGrouped[folder.id] || [];
							const isExpanded = !!expandedFolders[folder.id];

							return (
								<div key={folder.id} className="space-y-3">
									
									{/* Folder Header Row */}
									<button
										onClick={() =>
											setExpandedFolders((prev) => ({ ...prev, [folder.id]: !isExpanded }))
										}
										className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#11131c] border border-slate-200/60 dark:border-zinc-850 hover:bg-slate-50/50 dark:hover:bg-zinc-800/20 text-left transition select-none shadow-sm group"
									>
										<div className="flex items-center gap-3">
											<span className="text-slate-400 dark:text-zinc-500 group-hover:scale-105 transition">
												{isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
											</span>
											<div className={`h-7 w-7 rounded-lg ${folder.color} flex items-center justify-center text-white shrink-0 shadow-sm`}>
												<Folder size={14} className="fill-white/10" />
											</div>
											<span className="text-xs font-black text-slate-805 dark:text-zinc-250">
												{folder.name}
											</span>
											<span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-900 px-2 py-0.5 rounded-full">
												{groupedItems.length} {groupedItems.length === 1 ? 'workflow' : 'workflows'}
											</span>
										</div>
									</button>

									{/* Folder cards grid (or list if toggled) */}
									<AnimatePresence initial={false}>
										{isExpanded && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: 'auto', opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.22 }}
												className="overflow-hidden"
											>
												{groupedItems.length === 0 ? (
													<div className="p-8 text-center text-slate-400 dark:text-zinc-550 border border-dashed border-slate-200 dark:border-zinc-850 rounded-2xl">
														No workflows in this folder matching your current filters.
													</div>
												) : isGridView ? (
													<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1 pb-4">
														{groupedItems.map((wf) => {
															return (
																<div
																	key={wf.id}
																	className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-zinc-850 dark:bg-[#11131c] shadow-sm hover:shadow-md hover:border-slate-350 dark:hover:border-zinc-700 transition duration-200 relative group/card flex flex-col justify-between min-h-[220px]"
																>
																	{/* Card Top Row: Apps Stack + Star & Menu */}
																	<div className="flex items-center justify-between">
																		{/* App Icons overlapping stack */}
																		<div className="flex items-center -space-x-1.5">
																			{wf.apps.map((app) => (
																				<AppBrandIcon key={app} name={app} />
																			))}
																		</div>
																		
																		{/* Card actions */}
																		<div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
																			<button
																				onClick={(e) => handleToggleStar(wf.id, e)}
																				className={`h-7 w-7 rounded-full flex items-center justify-center transition ${
																					wf.starred
																						? 'text-amber-500'
																						: 'text-slate-350 hover:text-slate-500 dark:text-zinc-650 dark:hover:text-zinc-450'
																				}`}
																			>
																				{wf.starred ? (
																					<span className="text-base select-none">★</span>
																				) : (
																					<span className="text-lg select-none">☆</span>
																				)}
																			</button>

																			{/* 3-dots Menu Button */}
																			<div className="relative">
																				<button
																					onClick={(e) => {
																						e.stopPropagation();
																						setActiveMenuId(activeMenuId === wf.id ? null : wf.id);
																					}}
																					className={`h-7 w-7 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-400 hover:text-slate-650 transition ${
																						activeMenuId === wf.id ? 'bg-slate-100 dark:bg-zinc-800' : ''
																					}`}
																				>
																					<MoreVertical size={14} />
																				</button>

																				{/* Context Menu Dropdown */}
																				<AnimatePresence>
																					{activeMenuId === wf.id && (
																						<motion.div
																							initial={{ opacity: 0, scale: 0.95, y: 5 }}
																							animate={{ opacity: 1, scale: 1, y: 0 }}
																							exit={{ opacity: 0, scale: 0.95, y: 5 }}
																							className="absolute right-0 mt-1.5 w-40 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-md p-1 z-50 text-left font-sans"
																						>
																							<button
																								onClick={(e) => {
																									setActiveMenuId(null);
																									handleRunNow(wf.id, e);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Play size={11} className="text-emerald-500 fill-emerald-500/20" />
																								Run Now
																							</button>
																							<button
																								onClick={() => {
																									setActiveMenuId(null);
																									triggerToast('Opening visual canvas editor...', 'info');
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Edit3 size={11} className="text-violet-550" />
																								Open Editor
																							</button>
																							<button
																								onClick={() => {
																									setRenameValue(wf.title);
																									setRenamingId(wf.id);
																									setActiveMenuId(null);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Folder className="text-slate-400 w-3 h-3" />
																								Rename
																							</button>
																							<button
																								onClick={(e) => {
																									setActiveMenuId(null);
																									handleDuplicate(wf, e);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Copy size={11} className="text-slate-400" />
																								Duplicate
																							</button>
																							<button
																								onClick={(e) => {
																									setActiveMenuId(null);
																									handleDelete(wf.id, e);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20"
																							>
																								<Trash2 size={11} className="text-rose-500" />
																								Delete
																							</button>
																						</motion.div>
																					)}
																				</AnimatePresence>
																			</div>
																		</div>
																	</div>

																	{/* Card Title & Desc */}
																	<div className="mt-4 flex-1">
																		{renamingId === wf.id ? (
																			<div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
																				<input
																					ref={renameInputRef}
																					value={renameValue}
																					onChange={(e) => setRenameValue(e.target.value)}
																					onKeyDown={(e) => e.key === 'Enter' && handleRenameSubmit(wf.id)}
																					onBlur={() => handleRenameSubmit(wf.id)}
																					className="h-8 px-2 w-full rounded-lg border border-violet-500 bg-white text-xs font-semibold outline-none transition text-slate-900 dark:bg-zinc-950 dark:text-white"
																				/>
																				<button
																					onClick={() => handleRenameSubmit(wf.id)}
																					className="h-8 px-3 rounded-lg bg-slate-900 text-white dark:bg-zinc-150 dark:text-slate-950 text-[10px] font-black shrink-0"
																				>
																					Save
																				</button>
																			</div>
																		) : (
																			<h3 className="text-sm font-black text-slate-850 dark:text-white hover:text-violet-650 dark:hover:text-violet-400 transition cursor-pointer select-none">
																				{wf.title}
																			</h3>
																		)}
																		<p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold line-clamp-3 mt-1.5 select-none leading-relaxed">
																			{wf.description}
																		</p>
																	</div>

																	{/* Card Success metrics & Sparkline graph */}
																	<div className="mt-4 flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-3">
																		<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-100 dark:border-emerald-500/25">
																			<Check size={11} className="stroke-[3]" />
																			<span>{wf.successRate}% success</span>
																		</div>
																		
																		{/* Wavy line sparkline */}
																		<Sparkline />
																	</div>

																	{/* Card Bottom row: Author details & shared state & switch */}
																	<div className="mt-3 flex items-center justify-between">
																		<div className="flex items-center gap-2">
																			<div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-350 text-[9px] font-black flex items-center justify-center border border-slate-300/35 uppercase select-none">
																				{wf.author.slice(0, 1)}
																			</div>
																			<span className="text-[10px] text-slate-450 dark:text-zinc-500 font-bold">
																				{wf.author} &bull; {wf.lastRun}
																			</span>
																		</div>

																		<div className="flex items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
																			{wf.shared && (
																				<span className="px-2 py-0.5 rounded-md border border-slate-200 bg-slate-50 text-[9px] font-black text-slate-450 uppercase tracking-wider dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-500 flex items-center gap-1">
																					<svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
																						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
																					</svg>
																					Shared
																				</span>
																			)}

																			{/* iOS Style Switch Status Toggle */}
																			<button
																				onClick={(e) => handleToggleStatus(wf.id, e)}
																				className={`h-5 w-9 rounded-full p-0.5 transition duration-200 ${
																					wf.status === 'active'
																						? 'bg-blue-600 dark:bg-blue-500'
																						: 'bg-slate-250 dark:bg-zinc-800'
																				}`}
																			>
																				<div
																					className={`h-4 w-4 rounded-full bg-white shadow-sm transition duration-200 ${
																						wf.status === 'active' ? 'translate-x-4' : 'translate-x-0'
																					}`}
																				/>
																			</button>
																		</div>
																	</div>
																</div>
															);
														})}
													</div>
												) : (
													/* List View Table Layout inside Folder */
													<div className="border border-slate-200/60 dark:border-zinc-850 rounded-2xl bg-white dark:bg-[#11131c] overflow-hidden shadow-sm pt-1">
														<table className="w-full text-left text-xs border-collapse">
															<thead>
																<tr className="border-b border-slate-100 dark:border-zinc-850 text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest bg-slate-50/50 dark:bg-zinc-900/30">
																	<th className="px-5 py-3">Workflow Name</th>
																	<th className="px-5 py-3">Integrations</th>
																	<th className="px-5 py-3">Last Run</th>
																	<th className="px-5 py-3">Success Rate</th>
																	<th className="px-5 py-3 text-right">Actions</th>
																</tr>
															</thead>
															<tbody className="divide-y divide-slate-100 dark:divide-zinc-850">
																{groupedItems.map((wf) => (
																	<tr key={wf.id} className="hover:bg-slate-50/55 dark:hover:bg-zinc-800/10">
																		<td className="px-5 py-3 font-extrabold text-slate-805 dark:text-zinc-250">
																			{wf.title}
																		</td>
																		<td className="px-5 py-3">
																			<div className="flex items-center gap-1">
																				{wf.apps.map((app) => (
																					<span key={app} className="text-[10px] bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded capitalize">
																						{app}
																					</span>
																				))}
																			</div>
																		</td>
																		<td className="px-5 py-3 text-slate-450 dark:text-zinc-500">{wf.lastRun}</td>
																		<td className="px-5 py-3 text-emerald-600 font-bold">{wf.successRate}%</td>
																		<td className="px-5 py-3 text-right">
																			<button
																				onClick={(e) => handleRunNow(wf.id, e)}
																				className="text-xs font-black text-blue-600 hover:text-blue-500 dark:text-blue-400 mr-3"
																			>
																				Run
																			</button>
																			<button
																				onClick={(e) => handleDelete(wf.id, e)}
																				className="text-xs font-black text-rose-600 hover:text-rose-500"
																			>
																				Delete
																			</button>
																		</td>
																	</tr>
																))}
															</tbody>
														</table>
													</div>
												)}
											</motion.div>
										)}
									</AnimatePresence>

								</div>
							);
						})}
					</div>

				</div>
			</div>
		</div>
	);
}
