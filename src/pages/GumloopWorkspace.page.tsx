import { useState, useMemo, useRef, useEffect } from 'react';
import {
	Sparkles,
	Workflow,
	Search,
	Filter,
	FolderPlus,
	Plus,
	MoreVertical,
	Play,
	Edit3,
	Trash2,
	Copy,
	FolderInput,
	Folder,
	ChevronDown,
	ChevronRight,
	X,
	Activity,
	Check,
	AlertCircle,
	ArrowRight,
	Bookmark,
	Webhook,
	Calendar,
	Database,
	Home,
	Terminal,
	Code2,
	Maximize2,
	Minimize2,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWorkflowShellStore } from '@/store/workflowShell.store';
import WorkspaceSidebar from '@/templates/asides/GumloopAside.template';

// Custom high-fidelity brand SVG components
const BrandIcon = ({ name, className = 'w-4 h-4' }: { name: string; className?: string }) => {
	switch (name.toLowerCase()) {
		case 'slack':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none">
					<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zM6.302 15.165a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H8.822a2.528 2.528 0 0 1-2.52-2.52v-5.043z" fill="#E01E5A"/>
					<path d="M8.822 5.043a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.822 0a2.528 2.528 0 0 1 2.52 2.522v2.52h-2.52z" fill="#36C5F0"/>
					<path d="M8.822 6.302a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.8a2.528 2.528 0 0 1-2.522-2.522V8.822a2.528 2.528 0 0 1 2.522-2.52h5.043z" fill="#36C5F0"/>
					<path d="M18.958 8.822a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52z" fill="#2EB67D"/>
					<path d="M17.698 8.822a2.528 2.528 0 0 1-2.52 2.52H10.13a2.528 2.528 0 0 1-2.521-2.52V3.8a2.528 2.528 0 0 1 2.521-2.522h5.044a2.528 2.528 0 0 1 2.52 2.522v5.043z" fill="#2EB67D"/>
					<path d="M15.178 18.958a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.52z" fill="#ECB22E"/>
					<path d="M15.178 17.698a2.528 2.528 0 0 1-2.52-2.52V10.13a2.528 2.528 0 0 1 2.52-2.521h5.043a2.528 2.528 0 0 1 2.522 2.52v5.044a2.528 2.528 0 0 1-2.522 2.52h-5.043z" fill="#ECB22E"/>
				</svg>
			);
		case 'gmail':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="#EA4335">
					<path d="M24 5.457v13.086c0 1.385-1.115 2.507-2.49 2.507H19.5V8.138l-7.5 5-7.5-5v12.912H2.49C1.115 21.05 0 19.928 0 18.543V5.457c0-.987.804-1.785 1.79-1.785H4.2l7.8 5.2 7.8-5.2h2.41c.986 0 1.79.798 1.79 1.785z" />
				</svg>
			);
		case 'gcal':
			return <Calendar className={`${className} text-blue-600 dark:text-blue-400`} />;
		case 'openai':
			return (
				<svg className={`${className} text-emerald-600 dark:text-emerald-400`} viewBox="0 0 24 24" fill="currentColor">
					<path d="M21.3 10.6a5.7 5.7 0 0 0-2.3-4.5 5.6 5.6 0 0 0-5-1.1 5.7 5.7 0 0 0-7.3 3.8 5.8 5.8 0 0 0 .6 5.1 5.7 5.7 0 0 0 2.3 4.5 5.8 5.8 0 0 0 5 1.1 5.7 5.7 0 0 0 7.3-3.8 5.7 5.7 0 0 0 .4-5.1ZM12.7 4.8a4 4 0 0 1 1.9.5L11.5 7.1a1.2 1.2 0 0 0-.6.9V12L8.7 10.7V8.8A4 4 0 0 1 12.7 4.8ZM5.4 8.9a4 4 0 0 1 .8-2L9 8.7a1.2 1.2 0 0 0 0 1.1L6.7 13.7H4.5A4 4 0 0 1 5.4 8.9ZM4.8 15.2a4 4 0 0 1-.5-1.9H6.5a1.2 1.2 0 0 0 1-.5L11 8.9l2.2 1.3V12.8a1.2 1.2 0 0 0 .6 1l-3.8 2.2A4 4 0 0 1 4.8 15.2ZM11.3 19.2a4 4 0 0 1-1.9-.5l3.1-1.8a1.2 1.2 0 0 0 .6-.9V12l2.2 1.3v1.9A4 4 0 0 1 11.3 19.2ZM18.6 15.1a4 4 0 0 1-.8 2L15 15.3a1.2 1.2 0 0 0 0-1.1l2.3-3.9h2.2A4 4 0 0 1 18.6 15.1ZM19.2 8.8a4 4 0 0 1 .5 1.9H17.5a1.2 1.2 0 0 0-1,.5L13 15.1,10.8 13.8V11.2a1.2 1.2 0 0 0-.6-1l3.8-2.2A4 4 0 0 1 19.2 8.8Z" />
				</svg>
			);
		case 'hubspot':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="#FF7A59">
					<path d="M19.006 10.375a3.398 3.398 0 0 0-.776-.093l-3.328-5.32c.328-.517.525-1.127.525-1.789a3.173 3.173 0 1 0-6.19 1.109l-5.352 3.35c-.52-.33-.13-.53-.13-1.802a3.173 3.173 0 1 0-3.308 3.17c.664 0 1.272-.2 1.787-.528l5.318 3.326c-.092.253-.146.525-.146.809a3.172 3.172 0 0 0 1.765 2.839l-3.352 5.35c-.255-.091-.527-.145-.811-.145a3.173 3.173 0 1 0 3.173 3.173c0-.663-.2-1.272-.529-1.787l5.354-3.35c.518.327 1.127.524 1.789.524a3.173 3.173 0 1 0 0-6.346zm-6.22-3.173c0 .664-.2 1.273-.529 1.788L6.903 5.666a3.155 3.155 0 0 0 .146-.8c0-.663-.2-1.273-.529-1.788L11.874 6.4a3.153 3.153 0 0 0 .912.802z" />
				</svg>
			);
		case 'salesforce':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="#00A1E0">
					<path d="M18.5 10.5C18.2 8 16 6 13.5 6c-1.5 0-3 .8-3.8 2C9 7.4 7.8 7 6.5 7 4 7 2 9 2 11.5c0 .3 0 .6.1.9C1 13 0 14.4 0 16c0 2.5 2 4.5 4.5 4.5h14c3 0 5.5-2.5 5.5-5.5 0-2.3-1.4-4.2-3.5-4.5z" />
				</svg>
			);
		case 'airtable':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="none">
					<path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FFC80A" />
					<path d="M2 7.7v8.6l10 5v-8.6l-10-5z" fill="#FF2D55" />
					<path d="M12 12.7v8.6l10-5v-8.6l-10 5z" fill="#00A2FF" />
				</svg>
			);
		case 'jira':
			return (
				<svg className={className} viewBox="0 0 24 24" fill="#0052CC">
					<path d="M11.968 12.008a1.442 1.442 0 0 1-.002-2.039l7.07-7.067a1.44 1.44 0 0 1 2.038.002l2.039 2.038c.563.563.563 1.476 0 2.039l-7.07 7.07a1.442 1.442 0 0 1-2.038-.002L11.97 12.01zm-11.393-.002l7.07-7.07a1.44 1.44 0 0 1 2.038 0l2.039 2.039a1.443 1.443 0 0 1-.002 2.038l-7.07 7.07a1.44 1.44 0 0 1-2.038 0L.575 14.045a1.442 1.442 0 0 1 0-2.039z" />
				</svg>
			);
		case 'github':
			return (
				<svg className={`${className} text-slate-900 dark:text-white`} viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
				</svg>
			);
		case 'postgres':
			return <Database className={`${className} text-sky-600 dark:text-sky-400`} />;
		case 'webhook':
			return <Webhook className={`${className} text-blue-600 dark:text-blue-400`} />;
		default:
			return <Workflow className={className} />;
	}
};

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

interface ICustomNode {
	id: string;
	title: string;
	description: string;
	inputs: string[];
	outputs: string[];
	lastEdited: string;
	author: string;
}

const initialFolders: IFolder[] = [
	{ id: 'sales', name: 'Sales Operations', color: 'bg-indigo-500' },
	{ id: 'marketing', name: 'Marketing Automations', color: 'bg-rose-500' },
	{ id: 'ai', name: 'AI Core Agents', color: 'bg-fuchsia-500' },
];

const initialWorkflows: IWorkflow[] = [
	{
		id: 'wf-1',
		title: 'New Workflow',
		description: 'Reads Google Calendar events to streamline scheduling and improve time management...',
		status: 'active',
		lastRun: '1 min ago',
		successRate: 99.1,
		author: 'Omid G',
		folderId: null,
		apps: ['gcal', 'gmail', 'openai'],
		starred: true,
		shared: false,
		lastEdited: 'May 21, 2026',
	},
	{
		id: 'wf-2',
		title: 'HubSpot Lead Enricher & Slack Notifier',
		description: 'Triggers on signup webhook, enriches company profiles, and logs priority alerts to Slack.',
		status: 'active',
		lastRun: '12 mins ago',
		successRate: 98.4,
		author: 'Omid G',
		folderId: 'sales',
		apps: ['webhook', 'hubspot', 'slack', 'openai'],
		starred: true,
		shared: true,
		lastEdited: 'May 21, 2026',
	},
	{
		id: 'wf-3',
		title: 'Postgres to Airtable Sync Engine',
		description: 'Syncs new customer ledger rows into operational Airtable project sheets hourly.',
		status: 'inactive',
		lastRun: '2 hrs ago',
		successRate: 100.0,
		author: 'Sahil',
		folderId: 'marketing',
		apps: ['postgres', 'airtable'],
		starred: false,
		shared: false,
		lastEdited: 'May 20, 2026',
	},
	{
		id: 'wf-4',
		title: 'Jira Ticket Auto-Responder agent',
		description: 'Classifies customer bug urgency from Jira tickets and drafts emergency responses to Slack.',
		status: 'active',
		lastRun: '45 mins ago',
		successRate: 96.8,
		author: 'Omid G',
		folderId: 'ai',
		apps: ['jira', 'slack', 'openai'],
		starred: false,
		shared: true,
		lastEdited: 'May 18, 2026',
	},
	{
		id: 'wf-5',
		title: 'GitHub Release Discord Sync',
		description: 'Listens to new product tags and releases, formatting markdown descriptions and emailing users.',
		status: 'active',
		lastRun: '1 day ago',
		successRate: 100.0,
		author: 'Sahil',
		folderId: null,
		apps: ['github', 'gmail'],
		starred: false,
		shared: false,
		lastEdited: 'May 15, 2026',
	},
	{
		id: 'wf-6',
		title: 'Gmail Support Routing Assistant',
		description: 'Uses LLM context matching to answer support emails or escalate complex tickets to Jira.',
		status: 'active',
		lastRun: '5 mins ago',
		successRate: 97.2,
		author: 'Omid G',
		folderId: 'ai',
		apps: ['gmail', 'openai', 'jira'],
		starred: true,
		shared: false,
		lastEdited: 'May 10, 2026',
	},
];

const initialCustomNodes: ICustomNode[] = [
	{
		id: 'node-1',
		title: 'DeepL Translator',
		description: 'Translates incoming text payloads into target languages using DeepL API credentials.',
		inputs: ['text', 'target_lang'],
		outputs: ['translated_text'],
		lastEdited: 'May 18, 2026',
		author: 'Omid G',
	},
	{
		id: 'node-2',
		title: 'HTML to PDF Converter',
		description: 'Converts raw HTML template strings into high-quality print PDFs saved to workspace storage.',
		inputs: ['html_content', 'filename'],
		outputs: ['pdf_url'],
		lastEdited: 'May 14, 2026',
		author: 'Omid G',
	},
	{
		id: 'node-3',
		title: 'Puppeteer Web Scraper',
		description: 'Launches a headless browser instance, navigates to target URL, and extracts text selector content.',
		inputs: ['url', 'selector'],
		outputs: ['scraped_data', 'screenshot_url'],
		lastEdited: 'May 10, 2026',
		author: 'Omid G',
	},
];

const GumloopWorkspacePage = () => {
	const setActiveWorkspaceView = useWorkflowShellStore((store) => store.setActiveWorkspaceView);
	const toggleMobileSidebar = useWorkflowShellStore((store) => store.toggleMobileSidebar);
	const mobileSidebarOpen = useWorkflowShellStore((store) => store.mobileSidebarOpen);
	const closeMobileSidebar = useWorkflowShellStore((store) => store.closeMobileSidebar);
	const { isCreateFlowModalOpen, setCreateFlowModalOpen } = useWorkflowShellStore();

	// State Management
	const [workflows, setWorkflows] = useState<IWorkflow[]>(initialWorkflows);
	const [folders, setFolders] = useState<IFolder[]>(initialFolders);
	const [customNodes, setCustomNodes] = useState<ICustomNode[]>(initialCustomNodes);
	const [activeTab, setActiveTab] = useState<'flows' | 'nodes'>('flows');
	const [searchQuery, setSearchQuery] = useState('');
	
	// Dropdown Filters
	const [selectedAppFilter, setSelectedAppFilter] = useState<string | null>(null);
	const [selectedTypeFilter, setSelectedTypeFilter] = useState<'all' | 'starred' | 'shared' | 'active' | 'inactive'>('all');
	
	// Drag & Drop States
	const [draggedId, setDraggedId] = useState<string | null>(null);
	const [dragOverFolderId, setDragOverFolderId] = useState<string | null>(null);

	// Collapsed Folders (true means expanded)
	const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
		sales: true,
		marketing: true,
		ai: true,
	});

	// Inline Edit Rename States
	const [renamingId, setRenamingId] = useState<string | null>(null);
	const [renameValue, setRenameValue] = useState('');
	const renameInputRef = useRef<HTMLInputElement>(null);

	// Simulation Engines (individual card runtime simulation)
	const [runningId, setRunningId] = useState<string | null>(null);
	const [runningFlowTitle, setRunningFlowTitle] = useState('');
	const [runLogs, setRunLogs] = useState<string[]>([]);
	const [runProgress, setRunProgress] = useState(0);
	const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

	// Modals Control
	const [showFolderModal, setShowFolderModal] = useState(false);
	const [newFolderName, setNewFolderName] = useState('');
	const [newFolderColor, setNewFolderColor] = useState('violet');

	const [showCreateNodeModal, setShowCreateNodeModal] = useState(false);
	const [newNodeName, setNewNodeName] = useState('');
	const [newNodeDesc, setNewNodeDesc] = useState('');
	const [newNodeInputs, setNewNodeInputs] = useState('');
	const [newNodeOutputs, setNewNodeOutputs] = useState('');

	const [newWorkflowName, setNewWorkflowName] = useState('');
	const [newWorkflowDesc, setNewWorkflowDesc] = useState('');
	const [newWorkflowFolder, setNewWorkflowFolder] = useState<string>('root');

	const [showFilterMenu, setShowFilterMenu] = useState(false);
	const [activeCardMenuId, setActiveCardMenuId] = useState<string | null>(null);

	// Toast Success notification
	const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

	// Trigger custom toast messages
	const triggerToast = (message: string, type: 'success' | 'info' = 'success') => {
		setToast({ message, type });
		setTimeout(() => setToast(null), 3500);
	};

	// Focus rename input on toggle
	useEffect(() => {
		if (renamingId && renameInputRef.current) {
			renameInputRef.current.focus();
			renameInputRef.current.select();
		}
	}, [renamingId]);

	// Close menus on click outside
	useEffect(() => {
		const handleGlobalClick = () => {
			setActiveCardMenuId(null);
			setShowFilterMenu(false);
		};
		window.addEventListener('click', handleGlobalClick);
		return () => window.removeEventListener('click', handleGlobalClick);
	}, []);

	// Run Simulation Logs Generator
	const startSimulation = (id: string, workflowName: string) => {
		if (runningId) return; // Only run one at a time
		setRunningId(id);
		setRunningFlowTitle(workflowName);
		setRunProgress(0);
		setRunLogs([]);
		setIsTerminalMinimized(false);

		const mockLogs: Record<string, string[]> = {
			'wf-1': [
				'⚡ Calendar Webhook event detected (Omid\'s Personal Workspace)',
				'🔎 Querying upcoming Google Calendar schedules...',
				'🤖 Loading OpenAI GPT-4o context model...',
				'✍️ Formatting agenda summary and email template drafting...',
				'✉️ Dispatching daily email digest via Gmail API...',
				'✅ Workspace Run Completed successfully (Time: 3.4s)',
			],
			'wf-2': [
				'⚡ Webhook trigger received for new customer signup',
				'🔍 Querying HubSpot API contact databases...',
				'🤖 Categorizing lead sizing with LLM agent scoring...',
				'💬 Formatting message block layouts...',
				'🔔 Sent webhook payload to Slack channel #sales-alerts',
				'✅ Workspace Run Completed successfully (Time: 2.8s)',
			],
			'wf-3': [
				'⚡ Scheduler trigger: Hour countdown elapsed',
				'📦 Fetching ledger transaction updates from Postgres...',
				'📤 Mapping Airtable target sheets configurations...',
				'✍️ Bulk pushing 15 transaction rows into Airtable...',
				'✅ Workspace Run Completed successfully (Time: 1.9s)',
			],
			'wf-4': [
				'⚡ JIRA webhook: JIRA-482 Critical Bug opened',
				'🤖 Loading support model analysis tools...',
				'💬 Auto-created Slack emergency channel #jira-bug-482...',
				'✉️ Drafted auto-responder explanation inside Jira ticket...',
				'✅ Workspace Run Completed successfully (Time: 4.1s)',
			],
			'wf-5': [
				'⚡ GitHub Webhook: Release tag v2.4.0 verified',
				'📖 Parsed release description commits...',
				'✉️ Generating email templates via Gmail server nodes...',
				'✅ Workspace Run Completed successfully (Time: 2.2s)',
			],
			'wf-6': [
				'⚡ Gmail IMAP listener: New support query received',
				'🤖 Checking query category with classifier agent...',
				'📦 Auto-created urgent escalation Jira issue...',
				'✅ Workspace Run Completed successfully (Time: 3.9s)',
			],
		};

		const steps = mockLogs[id] || [
			'⚡ Workflow initialization node started...',
			'🤖 Resolving integrated service endpoints...',
			'💬 Formatting custom template parameters...',
			'✅ Workspace Run Completed successfully (Time: 1.5s)',
		];

		let currentStepIndex = 0;
		const logInterval = setInterval(() => {
			if (currentStepIndex < steps.length) {
				setRunLogs((prev) => [...prev, steps[currentStepIndex]]);
				setRunProgress((currentStepIndex + 1) * (100 / steps.length));
				currentStepIndex++;
			} else {
				clearInterval(logInterval);
				setTimeout(() => {
					setRunningId(null);
					triggerToast(`Workflow "${workflowName}" run completed successfully!`);
					// Increment last run success metrics
					setWorkflows((prev) =>
						prev.map((w) =>
							w.id === id
								? { ...w, lastRun: 'Just now', successRate: Math.min(w.successRate + 0.1, 100), lastEdited: 'Just now' }
								: w
						)
					);
				}, 600);
			}
		}, 800);
	};

	// Sorting & Filtering Logic for workflows
	const filteredWorkflows = useMemo(() => {
		return workflows.filter((w) => {
			// Tab checks (all flows shown in main flows list view)
			// Selected Type Filter check
			if (selectedTypeFilter === 'starred' && !w.starred) return false;
			if (selectedTypeFilter === 'shared' && !w.shared) return false;
			if (selectedTypeFilter === 'active' && w.status !== 'active') return false;
			if (selectedTypeFilter === 'inactive' && w.status !== 'inactive') return false;
			
			// Search filtering
			if (
				searchQuery &&
				!w.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
				!w.description.toLowerCase().includes(searchQuery.toLowerCase())
			) {
				return false;
			}

			// App integration filtering
			if (selectedAppFilter && !w.apps.includes(selectedAppFilter)) {
				return false;
			}

			return true;
		});
	}, [workflows, selectedTypeFilter, searchQuery, selectedAppFilter]);

	// Filtering for custom nodes
	const filteredCustomNodes = useMemo(() => {
		return customNodes.filter((n) => {
			if (
				searchQuery &&
				!n.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
				!n.description.toLowerCase().includes(searchQuery.toLowerCase())
			) {
				return false;
			}
			return true;
		});
	}, [customNodes, searchQuery]);

	// Extract unique apps in workflows for filters
	const allAppsList = useMemo(() => {
		const set = new Set<string>();
		workflows.forEach((w) => w.apps.forEach((a) => set.add(a)));
		return Array.from(set);
	}, [workflows]);

	// Folders with grouped Workflows
	const folderGroupedWorkflows = useMemo(() => {
		const root: IWorkflow[] = [];
		const groups: Record<string, IWorkflow[]> = {};

		folders.forEach((f) => {
			groups[f.id] = [];
		});

		filteredWorkflows.forEach((w) => {
			if (w.folderId && groups[w.folderId]) {
				groups[w.folderId].push(w);
			} else {
				root.push(w);
			}
		});

		return { root, groups };
	}, [filteredWorkflows, folders]);

	// Drag & Drop Handlers
	const handleDragStart = (e: React.DragEvent, id: string) => {
		setDraggedId(id);
		e.dataTransfer.setData('text/plain', id);
		e.dataTransfer.effectAllowed = 'move';
	};

	const handleDragOver = (e: React.DragEvent, folderId: string | null) => {
		e.preventDefault();
		setDragOverFolderId(folderId);
	};

	const handleDragLeave = () => {
		setDragOverFolderId(null);
	};

	const handleDrop = (e: React.DragEvent, targetFolderId: string | null) => {
		e.preventDefault();
		const wfId = e.dataTransfer.getData('text/plain') || draggedId;
		setDragOverFolderId(null);
		setDraggedId(null);

		if (!wfId) return;

		setWorkflows((prev) =>
			prev.map((w) => (w.id === wfId ? { ...w, folderId: targetFolderId } : w))
		);

		const targetFolderName = targetFolderId
			? folders.find((f) => f.id === targetFolderId)?.name
			: 'Uncategorized';
		triggerToast(`Moved workflow to "${targetFolderName}"`);
	};

	// Actions
	const handleToggleStatus = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		setWorkflows((prev) =>
			prev.map((w) =>
				w.id === id ? { ...w, status: w.status === 'active' ? 'inactive' : 'active' } : w
			)
		);
		const wf = workflows.find((w) => w.id === id);
		if (wf) {
			const nextStatus = wf.status === 'active' ? 'paused' : 'activated';
			triggerToast(`Workflow is now ${nextStatus}`, 'info');
		}
	};

	const handleToggleStarred = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		setWorkflows((prev) =>
			prev.map((w) => (w.id === id ? { ...w, starred: !w.starred } : w))
		);
	};

	const handleDuplicate = (workflow: IWorkflow, e: React.MouseEvent) => {
		e.stopPropagation();
		const newWf: IWorkflow = {
			...workflow,
			id: `wf-${Date.now()}`,
			title: `${workflow.title} (Copy)`,
			lastRun: 'Never',
			status: 'inactive',
			lastEdited: 'Just now',
		};
		setWorkflows((prev) => [...prev, newWf]);
		triggerToast(`Duplicated "${workflow.title}"`);
	};

	const handleDeleteWorkflow = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		const wf = workflows.find((w) => w.id === id);
		setWorkflows((prev) => prev.filter((w) => w.id !== id));
		if (wf) {
			triggerToast(`Deleted workflow "${wf.title}"`, 'info');
		}
	};

	const handleCreateWorkflow = () => {
		if (!newWorkflowName.trim()) return;

		const newWf: IWorkflow = {
			id: `wf-${Date.now()}`,
			title: newWorkflowName,
			description: newWorkflowDesc || 'Custom automation workflow started from scratch.',
			status: 'inactive',
			lastRun: 'Never',
			successRate: 100.0,
			author: 'Omid G',
			folderId: newWorkflowFolder === 'root' ? null : newWorkflowFolder,
			apps: ['webhook'],
			starred: false,
			shared: false,
			lastEdited: 'Just now',
		};

		setWorkflows((prev) => [newWf, ...prev]);
		setCreateFlowModalOpen(false);
		setNewWorkflowName('');
		setNewWorkflowDesc('');
		triggerToast(`Workflow "${newWorkflowName}" created!`);

		// Automatically transition to Visual Editor view
		setTimeout(() => {
			setActiveWorkspaceView('editor');
		}, 800);
	};

	const handleCreateFolder = () => {
		if (!newFolderName.trim()) return;

		const bgColors: Record<string, string> = {
			violet: 'bg-violet-500',
			emerald: 'bg-emerald-500',
			rose: 'bg-rose-500',
			indigo: 'bg-indigo-500',
			amber: 'bg-amber-500',
			sky: 'bg-sky-500',
		};

		const newFolder: IFolder = {
			id: `folder-${Date.now()}`,
			name: newFolderName,
			color: bgColors[newFolderColor] || 'bg-violet-500',
		};

		setFolders((prev) => [...prev, newFolder]);
		setExpandedFolders((prev) => ({ ...prev, [newFolder.id]: true }));
		setShowFolderModal(false);
		setNewFolderName('');
		triggerToast(`Folder "${newFolderName}" created!`);
	};

	const handleCreateCustomNode = () => {
		if (!newNodeName.trim()) return;

		const parseTags = (str: string) => str.split(',').map((t) => t.trim()).filter(Boolean);

		const newNode: ICustomNode = {
			id: `node-${Date.now()}`,
			title: newNodeName,
			description: newNodeDesc || 'Custom scripting node executing serverless functions.',
			inputs: parseTags(newNodeInputs) || ['input'],
			outputs: parseTags(newNodeOutputs) || ['output'],
			lastEdited: 'Just now',
			author: 'Omid G',
		};

		setCustomNodes((prev) => [newNode, ...prev]);
		setShowCreateNodeModal(false);
		setNewNodeName('');
		setNewNodeDesc('');
		setNewNodeInputs('');
		setNewNodeOutputs('');
		triggerToast(`Custom Node "${newNodeName}" created!`);
	};

	const handleDeleteCustomNode = (id: string, e: React.MouseEvent) => {
		e.stopPropagation();
		const node = customNodes.find((n) => n.id === id);
		setCustomNodes((prev) => prev.filter((n) => n.id !== id));
		if (node) {
			triggerToast(`Deleted custom node "${node.title}"`, 'info');
		}
	};

	const handleRenameSubmit = (id: string) => {
		if (renameValue.trim()) {
			setWorkflows((prev) =>
				prev.map((w) => (w.id === id ? { ...w, title: renameValue.trim(), lastEdited: 'Just now' } : w))
			);
			triggerToast('Workflow renamed successfully!');
		}
		setRenamingId(null);
	};

	return (
		<div className='flex min-w-0 flex-1 flex-col bg-[#fafbfc] text-slate-900 dark:bg-[#07080b] dark:text-zinc-50 font-sans transition-colors duration-300'>
			
			{/* Mobile Sidebar Frame Integration */}
			<AnimatePresence>
				{mobileSidebarOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-[80]'>
						<button
							type='button'
							aria-label='Close sidebar'
							onClick={closeMobileSidebar}
							className='absolute inset-0 bg-zinc-950/45 backdrop-blur-sm'
						/>
						<motion.div
							initial={{ x: -300 }}
							animate={{ x: 0 }}
							exit={{ x: -300 }}
							transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
							className='relative h-full w-[286px] max-w-[86vw]'>
							<WorkspaceSidebar />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Toast Notifications */}
			<AnimatePresence>
				{toast && (
					<motion.div
						initial={{ opacity: 0, y: -20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -20, scale: 0.95 }}
						className="fixed top-16 left-1/2 -translate-x-1/2 z-[100] px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-md flex items-center gap-2.5"
					>
						{toast.type === 'success' ? (
							<div className="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
								<Check size={12} className="stroke-[3]" />
							</div>
						) : (
							<div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
								<AlertCircle size={12} className="stroke-[3]" />
							</div>
						)}
						<span className="text-xs font-bold text-slate-800 dark:text-zinc-200">{toast.message}</span>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Main Content Area */}
			<div className='min-h-0 flex-1 overflow-y-auto relative z-10 px-6 py-6 md:px-10 md:py-8'>
				
				{/* Background ambient lighting orbs (Gumloop theme pink/blue gradient mesh) */}
				<div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FF3366]/5 to-[#0091FF]/5 blur-[90px] pointer-events-none -z-10" />
				<div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#0091FF]/5 to-[#FF3366]/5 blur-[110px] pointer-events-none -z-10" />

				<div className='max-w-7xl mx-auto space-y-6'>
					
					{/* Top Header section matching Gumloop */}
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/50 pb-5 dark:border-white/5">
						<div className="flex items-center gap-3">
							<button 
								onClick={toggleMobileSidebar}
								className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.02]"
							>
								<Activity size={16} className="text-[#FF3366]" />
							</button>
							<div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-zinc-200/60 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-zinc-300">
								<Home size={18} />
							</div>
							<div>
								<h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
									Personal Workspace
								</h1>
								<p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">
									Manage flows, integrations, and custom execution nodes
								</p>
							</div>
						</div>

						<div className="flex items-center gap-2.5">
							<button
								onClick={() => setShowFolderModal(true)}
								className="h-10 px-4 rounded-xl border border-zinc-200/80 bg-white hover:bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:bg-white/[0.06] flex items-center gap-2 text-xs font-black shadow-sm transition active:scale-98"
							>
								<FolderPlus size={14} className="text-slate-400 dark:text-zinc-500" />
								Create Folder
							</button>

							{activeTab === 'flows' ? (
								<button
									onClick={() => setCreateFlowModalOpen(true)}
									className="h-10 px-4 rounded-xl bg-[#FF3366] hover:bg-[#E02E5C] text-white flex items-center gap-1.5 text-xs font-black shadow-md shadow-pink-500/10 active:scale-98 transition"
								>
									<Plus size={14} strokeWidth={3} />
									Create Flow
								</button>
							) : (
								<button
									onClick={() => setShowCreateNodeModal(true)}
									className="h-10 px-4 rounded-xl bg-[#FF3366] hover:bg-[#E02E5C] text-white flex items-center gap-1.5 text-xs font-black shadow-md shadow-pink-500/10 active:scale-98 transition"
								>
									<Plus size={14} strokeWidth={3} />
									Create Node
								</button>
							)}
						</div>
					</div>

					{/* Tabbed Sub-Header & search filtering */}
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						
						{/* Flows / Custom Nodes Tab switches */}
						<div className="flex items-center gap-1 p-1.5 rounded-2xl border border-zinc-200/50 bg-white/70 dark:border-white/5 dark:bg-white/[0.02] backdrop-blur-md self-start">
							<button
								onClick={() => {
									setActiveTab('flows');
									setSelectedAppFilter(null);
								}}
								className={`px-4.5 py-2 rounded-xl text-xs font-black transition-all ${
									activeTab === 'flows'
										? 'bg-[#FF3366]/10 text-[#FF3366] dark:bg-[#FF3366]/15 dark:text-pink-400 shadow-sm'
										: 'text-slate-500 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-200'
								}`}
							>
								Flows
							</button>
							<button
								onClick={() => {
									setActiveTab('nodes');
									setSelectedAppFilter(null);
								}}
								className={`px-4.5 py-2 rounded-xl text-xs font-black transition-all ${
									activeTab === 'nodes'
										? 'bg-[#FF3366]/10 text-[#FF3366] dark:bg-[#FF3366]/15 dark:text-pink-400 shadow-sm'
										: 'text-slate-500 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-200'
								}`}
							>
								Custom Nodes
							</button>
						</div>

						{/* Search input and Filters Dropdowns */}
						<div className="flex items-center gap-2.5">
							
							{/* Command K Search bar */}
							<div className="relative min-w-[240px] flex-1 md:flex-initial">
								<Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
								<input
									type="text"
									placeholder={activeTab === 'flows' ? "Search flows and folders..." : "Search custom nodes..."}
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full md:w-64 h-10 pl-9.5 pr-8.5 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-white/[0.02] text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition placeholder-slate-450 dark:placeholder-zinc-500 text-slate-900 dark:text-white"
								/>
								{searchQuery ? (
									<button
										onClick={() => setSearchQuery('')}
										className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 dark:text-zinc-500 dark:hover:text-zinc-350"
									>
										<X size={12} />
									</button>
								) : (
									<span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-350 dark:text-zinc-600 border border-slate-200 dark:border-zinc-800 px-1 py-0.5 rounded">
										⌘K
									</span>
								)}
							</div>

							{/* Filters Dropdown (Only for Flows) */}
							{activeTab === 'flows' && (
								<div className="relative">
									<button
										onClick={(e) => {
											e.stopPropagation();
											setShowFilterMenu(!showFilterMenu);
										}}
										className={`h-10 px-3.5 rounded-xl border flex items-center gap-2 text-xs font-black transition-all ${
											selectedAppFilter || selectedTypeFilter !== 'all'
												? 'border-[#FF3366] bg-[#FF3366]/5 text-[#FF3366] dark:text-pink-400'
												: 'border-zinc-200/80 bg-white dark:border-white/10 dark:bg-white/[0.02] text-slate-650 hover:text-slate-805 dark:text-zinc-400 dark:hover:text-zinc-200'
										}`}
									>
										<Filter size={13} />
										<span>Filters</span>
										<ChevronDown size={12} className={`transition duration-200 ${showFilterMenu ? 'rotate-180' : ''}`} />
									</button>

									<AnimatePresence>
										{showFilterMenu && (
											<motion.div
												initial={{ opacity: 0, y: 10, scale: 0.95 }}
												animate={{ opacity: 1, y: 0, scale: 1 }}
												exit={{ opacity: 0, y: 10, scale: 0.95 }}
												className="absolute right-0 mt-2 w-56 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-md p-1.5 z-40"
												onClick={(e) => e.stopPropagation()}
											>
												{/* Filter section: Type */}
												<div className="text-[9px] font-black text-slate-400 dark:text-zinc-500 px-2.5 py-1.5 uppercase tracking-widest border-b border-zinc-100 dark:border-white/5 mb-1">
													Workflow Type
												</div>
												{[
													{ id: 'all', label: 'All Flows' },
													{ id: 'starred', label: 'Starred' },
													{ id: 'shared', label: 'Shared' },
													{ id: 'active', label: 'Active Only' },
													{ id: 'inactive', label: 'Inactive Only' },
												].map((opt) => (
													<button
														key={opt.id}
														onClick={() => {
															setSelectedTypeFilter(opt.id as any);
															setShowFilterMenu(false);
														}}
														className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/60 text-left"
													>
														{opt.label}
														{selectedTypeFilter === opt.id && <Check size={12} className="text-[#FF3366] dark:text-pink-400" />}
													</button>
												))}

												{/* Filter section: Connections */}
												<div className="text-[9px] font-black text-slate-400 dark:text-zinc-500 px-2.5 py-1.5 uppercase tracking-widest border-y border-zinc-100 dark:border-white/5 my-1.5">
													Connection App
												</div>
												<button
													onClick={() => {
														setSelectedAppFilter(null);
														setShowFilterMenu(false);
													}}
													className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/60 text-left"
												>
													All Connections
													{!selectedAppFilter && <Check size={12} className="text-[#FF3366] dark:text-pink-400" />}
												</button>
												{allAppsList.map((app) => (
													<button
														key={app}
														onClick={() => {
															setSelectedAppFilter(app);
															setShowFilterMenu(false);
														}}
														className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/60 text-left capitalize"
													>
														<span className="flex items-center gap-2">
															<BrandIcon name={app} className="w-3.5 h-3.5" />
															{app}
														</span>
														{selectedAppFilter === app && <Check size={12} className="text-[#FF3366] dark:text-pink-400" />}
													</button>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							)}
						</div>
					</div>

					{/* Main Table Content Panel */}
					<div className="rounded-2xl border border-zinc-200/70 dark:border-white/5 bg-white/70 dark:bg-white/[0.01] backdrop-blur-md overflow-hidden shadow-sm">
						
						{activeTab === 'flows' ? (
							<>
								{/* Flows view count label */}
								<div className="px-5 py-4 border-b border-zinc-200/50 dark:border-white/5 flex items-center justify-between">
									<span className="text-xs font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
										Flows &bull; {filteredWorkflows.length} items
									</span>
									{(selectedAppFilter || selectedTypeFilter !== 'all') && (
										<button
											onClick={() => {
												setSelectedAppFilter(null);
												setSelectedTypeFilter('all');
											}}
											className="text-[10px] font-black text-[#FF3366] hover:text-[#E02E5C] uppercase tracking-wider flex items-center gap-1"
										>
											<X size={10} /> Clear Filters
										</button>
									)}
								</div>

								{/* Unified Flows and Folders Table */}
								<div className="w-full overflow-x-auto">
									<table className="w-full border-collapse text-left text-xs">
										<thead className="bg-slate-50/70 dark:bg-white/[0.015] border-b border-zinc-200/60 dark:border-white/5 text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-wider select-none">
											<tr>
												<th className="px-6 py-4">Flows</th>
												<th className="px-6 py-4">Nodes</th>
												<th className="px-6 py-4">Last Edited</th>
												<th className="px-6 py-4 text-right">Actions</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-zinc-200/50 dark:divide-white/5 font-semibold text-slate-700 dark:text-zinc-300">
											
											{/* Drag and drop instructions if empty */}
											{filteredWorkflows.length === 0 && (
												<tr>
													<td colSpan={4} className="px-6 py-12 text-center text-slate-450 dark:text-zinc-500 font-semibold">
														<Workflow className="w-8 h-8 mx-auto text-slate-350 dark:text-zinc-600 mb-3" />
														<span>No workflows matching the filter parameters.</span>
													</td>
												</tr>
											)}

											{/* Folder loop */}
											{folders.map((folder) => {
												const folderWfs = folderGroupedWorkflows.groups[folder.id] || [];
												const isExpanded = !!expandedFolders[folder.id];
												const isDragOver = dragOverFolderId === folder.id;

												// Render only if has workflows matching filters
												if (folderWfs.length === 0 && (selectedAppFilter || selectedTypeFilter !== 'all')) {
													return null;
												}

												return (
													<tbody key={folder.id} className="border-t border-zinc-250/20 dark:border-white/5">
														
														{/* Folder Row */}
														<tr
															onDragOver={(e) => handleDragOver(e, folder.id)}
															onDragLeave={handleDragLeave}
															onDrop={(e) => handleDrop(e, folder.id)}
															onClick={() =>
																setExpandedFolders((prev) => ({ ...prev, [folder.id]: !isExpanded }))
															}
															className={[
																"group/folder cursor-pointer select-none transition border-l-2 border-transparent hover:bg-slate-50/50 dark:hover:bg-white/[0.015]",
																isDragOver ? "bg-[#FF3366]/5 dark:bg-[#FF3366]/10 border-l-[#FF3366]" : ""
															].join(' ')}
														>
															<td colSpan={3} className="px-6 py-3.5">
																<div className="flex items-center gap-3">
																	<span className="text-slate-450 dark:text-zinc-500">
																		{isExpanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
																	</span>
																	<div className={`h-7 w-7 rounded-lg ${folder.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
																		<Folder size={14} className="fill-white/10" />
																	</div>
																	<div>
																		<span className="text-xs font-black text-slate-805 dark:text-zinc-200">
																			{folder.name}
																		</span>
																		<span className="ml-2 text-[9px] font-bold text-slate-400 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-md">
																			{folderWfs.length} {folderWfs.length === 1 ? 'flow' : 'flows'}
																		</span>
																	</div>
																</div>
															</td>
															<td className="px-6 py-3.5 text-right">
																{isDragOver && (
																	<span className="text-[9px] font-black text-[#FF3366] uppercase tracking-wider animate-pulse">
																		Drop here
																	</span>
																)}
															</td>
														</tr>

														{/* Folder Workflows Nested rows */}
														{isExpanded && folderWfs.map((wf) => {
															const isRunning = runningId === wf.id;
															return (
																<tr
																	key={wf.id}
																	draggable
																	onDragStart={(e) => handleDragStart(e, wf.id)}
																	onClick={() => setActiveWorkspaceView('editor')}
																	className="hover:bg-slate-50/40 dark:hover:bg-white/[0.01] transition-all cursor-pointer group/row border-l-2 border-transparent hover:border-l-[#FF3366]/50"
																>
																	{/* Flows cell */}
																	<td className="px-6 py-3.5 pl-14 max-w-sm">
																		<div className="flex items-center gap-3">
																			<div className="h-8 w-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 shrink-0 border border-zinc-200/50 dark:border-white/5">
																				<Workflow size={14} />
																			</div>
																			<div className="min-w-0">
																				{renamingId === wf.id ? (
																					<div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
																						<input
																							ref={renameInputRef}
																							value={renameValue}
																							onChange={(e) => setRenameValue(e.target.value)}
																							onKeyDown={(e) => e.key === 'Enter' && handleRenameSubmit(wf.id)}
																							onBlur={() => handleRenameSubmit(wf.id)}
																							className="h-7 px-2 w-48 rounded-lg border border-[#FF3366] bg-white text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 transition text-slate-900 dark:bg-zinc-950 dark:text-white"
																						/>
																						<button
																							onClick={() => handleRenameSubmit(wf.id)}
																							className="h-7 px-2.5 rounded-lg bg-slate-950 text-white dark:bg-zinc-50 dark:text-slate-950 text-[10px] font-black"
																						>
																							Save
																						</button>
																					</div>
																				) : (
																					<div className="flex items-center gap-2">
																						{isRunning && (
																							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
																						)}
																						<span className="font-extrabold text-slate-805 dark:text-zinc-200 group-hover/row:text-[#FF3366] dark:group-hover/row:text-pink-400 transition">
																							{wf.title}
																						</span>
																						{wf.starred && <span className="text-amber-500 select-none">★</span>}
																					</div>
																				)}
																				<p className="text-[10px] text-slate-450 dark:text-zinc-500 truncate mt-0.5">
																					{wf.description}
																				</p>
																			</div>
																		</div>
																	</td>

																	{/* Nodes overlapping cell */}
																	<td className="px-6 py-3.5">
																		<div className="flex items-center -space-x-1.5 overflow-hidden">
																			{wf.apps.map((app, index) => (
																				<div
																					key={app}
																					className="h-6 w-6 rounded-lg bg-white dark:bg-zinc-900 border-2 border-white dark:border-[#07080b] flex items-center justify-center shadow-sm select-none"
																					style={{ zIndex: 10 - index }}
																				>
																					<BrandIcon name={app} className="w-3.5 h-3.5" />
																				</div>
																			))}
																		</div>
																	</td>

																	{/* Last edited cell */}
																	<td className="px-6 py-3.5 text-slate-450 dark:text-zinc-500 font-medium">
																		{wf.lastEdited}
																	</td>

																	{/* Actions cell */}
																	<td className="px-6 py-3.5 text-right" onClick={(e) => e.stopPropagation()}>
																		<div className="flex items-center justify-end gap-2">
																			{/* Direct Play Hover Button */}
																			<button
																				onClick={(e) => {
																					e.stopPropagation();
																					startSimulation(wf.id, wf.title);
																				}}
																				title="Run flow now"
																				className="h-7 w-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20 flex items-center justify-center transition opacity-0 group-hover/row:opacity-100 shadow-sm"
																			>
																				<Play size={11} className="fill-current" />
																			</button>

																			{/* More Dropdown */}
																			<div className="relative inline-block text-left">
																				<button
																					onClick={(e) => {
																						e.stopPropagation();
																						setActiveCardMenuId(activeCardMenuId === wf.id ? null : wf.id);
																					}}
																					className="h-7 w-7 rounded-lg text-slate-400 hover:text-slate-650 dark:text-zinc-500 dark:hover:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 flex items-center justify-center transition"
																				>
																					<MoreVertical size={13} />
																				</button>

																				<AnimatePresence>
																					{activeCardMenuId === wf.id && (
																						<motion.div
																							initial={{ opacity: 0, scale: 0.95, y: 5 }}
																							animate={{ opacity: 1, scale: 1, y: 0 }}
																							exit={{ opacity: 0, scale: 0.95, y: 5 }}
																							className="absolute right-0 mt-1.5 w-40 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-md p-1 z-50 text-left font-sans"
																						>
																							<button
																								onClick={(e) => {
																									e.stopPropagation();
																									setActiveCardMenuId(null);
																									startSimulation(wf.id, wf.title);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Play size={12} className="text-emerald-500" />
																								Run Now
																							</button>
																							<button
																								onClick={() => setActiveWorkspaceView('editor')}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Edit3 size={12} className="text-[#FF3366]" />
																								Open Editor
																							</button>
																							<button
																								onClick={() => {
																									setRenameValue(wf.title);
																									setRenamingId(wf.id);
																									setActiveCardMenuId(null);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<FolderInput size={12} />
																								Rename
																							</button>
																							<button
																								onClick={(e) => {
																									handleDuplicate(wf, e);
																									setActiveCardMenuId(null);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Copy size={12} />
																								Duplicate
																							</button>
																							<button
																								onClick={(e) => {
																									handleToggleStarred(wf.id, e);
																									setActiveCardMenuId(null);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<span className="text-amber-500 text-xs">★</span>
																								{wf.starred ? 'Unstar Flow' : 'Star Flow'}
																							</button>
																							<button
																								onClick={(e) => {
																									handleToggleStatus(wf.id, e);
																									setActiveCardMenuId(null);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																							>
																								<Activity size={12} className="text-slate-400" />
																								{wf.status === 'active' ? 'Pause Flow' : 'Activate Flow'}
																							</button>
																							<div className="h-px bg-zinc-100 dark:bg-white/5 my-1" />
																							<button
																								onClick={(e) => {
																									handleDeleteWorkflow(wf.id, e);
																									setActiveCardMenuId(null);
																								}}
																								className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20"
																							>
																								<Trash2 size={12} />
																								Delete
																							</button>
																						</motion.div>
																					)}
																				</AnimatePresence>
																			</div>
																		</div>
																	</td>
																</tr>
															);
														})}
													</tbody>
												);
											})}

											{/* Root Workflows table category header row */}
											<tr
												onDragOver={(e) => handleDragOver(e, null)}
												onDragLeave={handleDragLeave}
												onDrop={(e) => handleDrop(e, null)}
												className={[
													"bg-slate-100/40 dark:bg-white/[0.005] select-none select-none transition border-l-2 border-transparent border-t border-zinc-200/50 dark:border-white/5",
													dragOverFolderId === null ? "bg-[#FF3366]/5 dark:bg-[#FF3366]/10 border-l-[#FF3366]" : ""
												].join(' ')}
											>
												<td colSpan={3} className="px-6 py-3">
													<span className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
														<Bookmark size={11} /> Root Flows &bull; {folderGroupedWorkflows.root.length} items
													</span>
												</td>
												<td className="px-6 py-3 text-right">
													{dragOverFolderId === null && (
														<span className="text-[9px] font-black text-[#FF3366] uppercase tracking-wider animate-pulse">
															Drop to uncatalog
														</span>
													)}
												</td>
											</tr>

											{/* Root/Uncategorized Workflows rows loop */}
											{folderGroupedWorkflows.root.map((wf) => {
												const isRunning = runningId === wf.id;
												return (
													<tr
														key={wf.id}
														draggable
														onDragStart={(e) => handleDragStart(e, wf.id)}
														onClick={() => setActiveWorkspaceView('editor')}
														className="hover:bg-slate-50/40 dark:hover:bg-white/[0.01] transition-all cursor-pointer group/row border-l-2 border-transparent hover:border-l-[#FF3366]/50"
													>
														{/* Flows cell */}
														<td className="px-6 py-3.5 max-w-sm">
															<div className="flex items-center gap-3">
																<div className="h-8 w-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 shrink-0 border border-zinc-200/50 dark:border-white/5">
																	<Workflow size={14} />
																</div>
																<div className="min-w-0">
																	{renamingId === wf.id ? (
																		<div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
																			<input
																				ref={renameInputRef}
																				value={renameValue}
																				onChange={(e) => setRenameValue(e.target.value)}
																				onKeyDown={(e) => e.key === 'Enter' && handleRenameSubmit(wf.id)}
																				onBlur={() => handleRenameSubmit(wf.id)}
																				className="h-7 px-2 w-48 rounded-lg border border-[#FF3366] bg-white text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 transition text-slate-900 dark:bg-zinc-950 dark:text-white"
																			/>
																			<button
																				onClick={() => handleRenameSubmit(wf.id)}
																				className="h-7 px-2.5 rounded-lg bg-slate-950 text-white dark:bg-zinc-50 dark:text-slate-950 text-[10px] font-black"
																			>
																				Save
																			</button>
																		</div>
																	) : (
																		<div className="flex items-center gap-2">
																			{isRunning && (
																				<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
																			)}
																			<span className="font-extrabold text-slate-805 dark:text-zinc-200 group-hover/row:text-[#FF3366] dark:group-hover/row:text-pink-400 transition">
																				{wf.title}
																			</span>
																			{wf.starred && <span className="text-amber-500 select-none">★</span>}
																		</div>
																	)}
																	<p className="text-[10px] text-slate-450 dark:text-zinc-500 truncate mt-0.5">
																		{wf.description}
																	</p>
																</div>
															</div>
														</td>

														{/* Nodes overlapping cell */}
														<td className="px-6 py-3.5">
															<div className="flex items-center -space-x-1.5 overflow-hidden">
																{wf.apps.map((app, index) => (
																	<div
																		key={app}
																		className="h-6 w-6 rounded-lg bg-white dark:bg-zinc-900 border-2 border-white dark:border-[#07080b] flex items-center justify-center shadow-sm select-none"
																		style={{ zIndex: 10 - index }}
																	>
																		<BrandIcon name={app} className="w-3.5 h-3.5" />
																	</div>
																))}
															</div>
														</td>

														{/* Last edited cell */}
														<td className="px-6 py-3.5 text-slate-450 dark:text-zinc-500 font-medium">
															{wf.lastEdited}
														</td>

														{/* Actions cell */}
														<td className="px-6 py-3.5 text-right" onClick={(e) => e.stopPropagation()}>
															<div className="flex items-center justify-end gap-2">
																{/* Direct Play Hover Button */}
																<button
																	onClick={(e) => {
																		e.stopPropagation();
																		startSimulation(wf.id, wf.title);
																	}}
																	title="Run flow now"
																	className="h-7 w-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20 flex items-center justify-center transition opacity-0 group-hover/row:opacity-100 shadow-sm"
																>
																	<Play size={11} className="fill-current" />
																</button>

																{/* More options dropdown */}
																<div className="relative inline-block text-left">
																	<button
																		onClick={(e) => {
																			e.stopPropagation();
																			setActiveCardMenuId(activeCardMenuId === wf.id ? null : wf.id);
																		}}
																		className="h-7 w-7 rounded-lg text-slate-400 hover:text-slate-655 dark:text-zinc-500 dark:hover:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 flex items-center justify-center transition"
																	>
																		<MoreVertical size={13} />
																	</button>

																	<AnimatePresence>
																		{activeCardMenuId === wf.id && (
																			<motion.div
																				initial={{ opacity: 0, scale: 0.95, y: 5 }}
																				animate={{ opacity: 1, scale: 1, y: 0 }}
																				exit={{ opacity: 0, scale: 0.95, y: 5 }}
																				className="absolute right-0 mt-1.5 w-40 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-md p-1 z-50 text-left font-sans"
																			>
																				<button
																					onClick={(e) => {
																						e.stopPropagation();
																						setActiveCardMenuId(null);
																						startSimulation(wf.id, wf.title);
																					}}
																					className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																				>
																					<Play size={12} className="text-emerald-500" />
																					Run Now
																				</button>
																				<button
																					onClick={() => setActiveWorkspaceView('editor')}
																					className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																				>
																					<Edit3 size={12} className="text-[#FF3366]" />
																								Open Editor
																				</button>
																				<button
																					onClick={() => {
																						setRenameValue(wf.title);
																						setRenamingId(wf.id);
																						setActiveCardMenuId(null);
																					}}
																					className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																				>
																					<FolderInput size={12} />
																					Rename
																				</button>
																				<button
																					onClick={(e) => {
																						handleDuplicate(wf, e);
																						setActiveCardMenuId(null);
																					}}
																					className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																				>
																					<Copy size={12} />
																					Duplicate
																				</button>
																				<button
																					onClick={(e) => {
																						handleToggleStarred(wf.id, e);
																						setActiveCardMenuId(null);
																					}}
																					className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																				>
																					<span className="text-amber-500 text-xs">★</span>
																					{wf.starred ? 'Unstar Flow' : 'Star Flow'}
																				</button>
																				<button
																					onClick={(e) => {
																						handleToggleStatus(wf.id, e);
																						setActiveCardMenuId(null);
																					}}
																					className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800"
																				>
																					<Activity size={12} className="text-slate-400" />
																					{wf.status === 'active' ? 'Pause Flow' : 'Activate Flow'}
																				</button>
																				<div className="h-px bg-zinc-100 dark:bg-white/5 my-1" />
																				<button
																					onClick={(e) => {
																						handleDeleteWorkflow(wf.id, e);
																						setActiveCardMenuId(null);
																					}}
																					className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20"
																				>
																					<Trash2 size={12} />
																					Delete
																				</button>
																			</motion.div>
																		)}
																	</AnimatePresence>
																</div>
															</div>
														</td>
													</tr>
												);
											})}

										</tbody>
									</table>
								</div>
							</>
						) : (
							<>
								{/* Custom Nodes view count label */}
								<div className="px-5 py-4 border-b border-zinc-200/50 dark:border-white/5">
									<span className="text-xs font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
										Custom Nodes &bull; {filteredCustomNodes.length} items
									</span>
								</div>

								{/* Custom Nodes list table view */}
								<div className="w-full overflow-x-auto">
									<table className="w-full border-collapse text-left text-xs">
										<thead className="bg-slate-50/70 dark:bg-white/[0.015] border-b border-zinc-200/60 dark:border-white/5 text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-wider select-none">
											<tr>
												<th className="px-6 py-4">Node Name</th>
												<th className="px-6 py-4">Inputs &rarr; Outputs</th>
												<th className="px-6 py-4">Last Edited</th>
												<th className="px-6 py-4 text-right">Actions</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-zinc-200/50 dark:divide-white/5 font-semibold text-slate-700 dark:text-zinc-300">
											
											{filteredCustomNodes.length === 0 && (
												<tr>
													<td colSpan={4} className="px-6 py-12 text-center text-slate-450 dark:text-zinc-500 font-semibold">
														<Code2 className="w-8 h-8 mx-auto text-slate-350 dark:text-zinc-600 mb-3" />
														<span>No custom nodes created yet.</span>
													</td>
												</tr>
											)}

											{filteredCustomNodes.map((node) => (
												<tr
													key={node.id}
													className="hover:bg-slate-50/40 dark:hover:bg-white/[0.01] transition-all group border-l-2 border-transparent hover:border-l-[#FF3366]/50"
												>
													{/* Title and details */}
													<td className="px-6 py-3.5 max-w-sm">
														<div className="flex items-center gap-3">
															<div className="h-8 w-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 shrink-0 border border-zinc-200/50 dark:border-white/5">
																<Terminal size={14} className="text-zinc-400" />
															</div>
															<div className="min-w-0">
																<span className="font-extrabold text-slate-805 dark:text-zinc-200 group-hover:text-[#FF3366] dark:group-hover:text-pink-400 transition">
																	{node.title}
																</span>
																<p className="text-[10px] text-slate-450 dark:text-zinc-500 truncate mt-0.5">
																	{node.description}
																</p>
															</div>
														</div>
													</td>

													{/* Inputs/outputs badges */}
													<td className="px-6 py-3.5">
														<div className="flex flex-wrap items-center gap-1.5">
															{node.inputs.map((inp) => (
																<span key={inp} className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[9px] font-mono text-zinc-600 dark:text-zinc-450 border border-zinc-200/40 dark:border-white/5">
																	{inp}
																</span>
															))}
															<span className="text-slate-400 select-none font-bold">&rarr;</span>
															{node.outputs.map((out) => (
																<span key={out} className="px-1.5 py-0.5 rounded bg-[#FF3366]/5 dark:bg-pink-500/10 text-[9px] font-mono text-[#FF3366] dark:text-pink-400 border border-[#FF3366]/10 dark:border-pink-500/5">
																	{out}
																</span>
															))}
														</div>
													</td>

													{/* Last Edited */}
													<td className="px-6 py-3.5 text-slate-450 dark:text-zinc-500 font-medium">
														{node.lastEdited}
													</td>

													{/* Actions */}
													<td className="px-6 py-3.5 text-right" onClick={(e) => e.stopPropagation()}>
														<div className="relative inline-block text-left">
															<button
																onClick={(e) => {
																	e.stopPropagation();
																	setActiveCardMenuId(activeCardMenuId === node.id ? null : node.id);
																}}
																className="h-7 w-7 rounded-lg text-slate-400 hover:text-slate-655 dark:text-zinc-500 dark:hover:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 flex items-center justify-center transition"
															>
																<MoreVertical size={13} />
															</button>

															<AnimatePresence>
																{activeCardMenuId === node.id && (
																	<motion.div
																		initial={{ opacity: 0, scale: 0.95, y: 5 }}
																		animate={{ opacity: 1, scale: 1, y: 0 }}
																		exit={{ opacity: 0, scale: 0.95, y: 5 }}
																		className="absolute right-0 mt-1.5 w-36 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-md p-1 z-50 text-left font-sans"
																	>
																		<button
																			onClick={(e) => {
																				handleDeleteCustomNode(node.id, e);
																				setActiveCardMenuId(null);
																			}}
																			className="w-full flex items-center gap-2 px-3 py-2 text-[11px] font-black rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20"
																		>
																			<Trash2 size={12} />
																			Delete Node
																		</button>
																	</motion.div>
																)}
															</AnimatePresence>
														</div>
													</td>
												</tr>
											))}

										</tbody>
									</table>
								</div>
							</>
						)}

					</div>

					{/* Template gallery section (only show when on flows list) */}
					{activeTab === 'flows' && (
						<div className="pt-6 border-t border-zinc-200/50 dark:border-white/5 space-y-4">
							<div>
								<h3 className="text-sm font-black text-slate-800 dark:text-zinc-200 flex items-center gap-2">
									<Sparkles size={14} className="text-amber-500 animate-pulse" />
									Recommended Workflow Templates
								</h3>
								<p className="text-[11px] text-slate-400 dark:text-zinc-500 font-semibold mt-0.5">
									Kickstart your automations instantly with pre-built agent configurations
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
								{[
									{
										title: 'AI Lead Classifier & HubSpot Sync',
										desc: 'Listens to new webhook signups, uses LLM classification agent, and logs enriched metadata into HubSpot pipeline CRM.',
										apps: ['webhook', 'hubspot', 'openai'],
										color: 'hover:border-orange-500/30 dark:hover:border-orange-500/20 shadow-orange-500/5',
									},
									{
										title: 'Google Calendar briefing & Slack',
										desc: 'Extracts today\'s events from Google Calendar at 8 AM, drafts an LLM brief, and publishes a structured alert block in Slack.',
										apps: ['gcal', 'openai', 'slack'],
										color: 'hover:border-blue-500/30 dark:hover:border-blue-500/20 shadow-blue-500/5',
									},
									{
										title: 'Auto Customer Support Jira Desk',
										desc: 'Triggers on incoming customer support queries, utilizes LLM semantic routing, and generates urgent response cards to Slack & Jira.',
										apps: ['gmail', 'openai', 'jira'],
										color: 'hover:border-fuchsia-500/30 dark:hover:border-fuchsia-500/20 shadow-fuchsia-500/5',
									},
								].map((tmpl, i) => (
									<div
										key={i}
										onClick={() => {
											setNewWorkflowName(tmpl.title);
											setNewWorkflowDesc(tmpl.desc);
											setCreateFlowModalOpen(true);
										}}
										className={`group flex flex-col justify-between p-5 rounded-2xl border border-zinc-200/80 bg-white/70 dark:border-white/5 dark:bg-white/[0.01] hover:shadow-xl hover:-translate-y-0.5 cursor-pointer transition-all duration-300 ${tmpl.color}`}
									>
										<div>
											{/* Brand logos row */}
											<div className="flex items-center gap-1.5">
												{tmpl.apps.map((app) => (
													<div key={app} className="h-6.5 w-6.5 rounded-lg border border-zinc-200/50 dark:border-white/5 bg-slate-50 dark:bg-zinc-900 flex items-center justify-center shadow-sm">
														<BrandIcon name={app} className="w-3.5 h-3.5" />
													</div>
												))}
											</div>

											<h4 className="text-xs font-black text-slate-805 dark:text-zinc-200 mt-4.5 group-hover:text-[#FF3366] dark:group-hover:text-pink-400 transition-colors">
												{tmpl.title}
											</h4>
											<p className="text-[10px] leading-5 font-semibold text-slate-450 dark:text-zinc-500 mt-1.5">
												{tmpl.desc}
											</p>
										</div>

										<div className="flex items-center gap-1 text-[9px] font-black text-[#FF3366] dark:text-pink-400 group-hover:translate-x-0.5 mt-5 uppercase tracking-widest transition">
											Use template
											<ArrowRight className="w-3 h-3" />
										</div>
									</div>
								))}
							</div>
						</div>
					)}

				</div>
			</div>

			{/* Floating Terminal Logs console simulation */}
			<AnimatePresence>
				{runningId !== null && (
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 30, scale: 0.95 }}
						className="fixed bottom-6 right-6 z-[90] w-96 rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#07080b]/95 dark:shadow-black/70 overflow-hidden font-sans border-t-4 border-t-[#FF3366]"
					>
						{/* Terminal Header */}
						<div className="px-4 py-3 bg-slate-50 dark:bg-white/[0.02] border-b border-zinc-200/80 dark:border-white/5 flex items-center justify-between">
							<div className="flex items-center gap-2 min-w-0">
								<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
								<span className="text-[11px] font-black text-slate-800 dark:text-zinc-200 truncate uppercase tracking-wider">
									Flow Execution: {runningFlowTitle}
								</span>
							</div>

							<div className="flex items-center gap-1.5 shrink-0">
								<button
									onClick={() => setIsTerminalMinimized(!isTerminalMinimized)}
									className="p-1 rounded-md text-slate-450 hover:text-slate-700 dark:text-zinc-500 dark:hover:text-zinc-300"
								>
									{isTerminalMinimized ? <Maximize2 size={11} /> : <Minimize2 size={11} />}
								</button>
								<button
									onClick={() => setRunningId(null)}
									className="p-1 rounded-md text-slate-450 hover:text-rose-500 dark:text-zinc-500 dark:hover:text-rose-450"
								>
									<X size={11} />
								</button>
							</div>
						</div>

						{/* Execution Progress thin bar */}
						<div className="w-full bg-zinc-100 dark:bg-white/5 h-1 overflow-hidden">
							<div className="bg-gradient-to-r from-[#FF3366] to-emerald-400 h-full transition-all duration-300" style={{ width: `${runProgress}%` }} />
						</div>

						{/* Terminal logs list */}
						<AnimatePresence>
							{!isTerminalMinimized && (
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: 'auto' }}
									exit={{ height: 0 }}
									className="overflow-hidden"
								>
									<div className="p-4 bg-zinc-900 dark:bg-black/60 font-mono text-[10px] text-zinc-300 h-48 overflow-y-auto space-y-1.5 custom-scrollbar">
										{runLogs.map((log, index) => (
											<motion.div
												initial={{ opacity: 0, x: -5 }}
												animate={{ opacity: 1, x: 0 }}
												key={index}
												className={[
													"leading-relaxed",
													log.includes('✅') ? 'text-emerald-400 font-bold' : '',
													log.includes('⚡') ? 'text-[#FF3366] dark:text-pink-400' : ''
												].join(' ')}
											>
												{log}
											</motion.div>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Modal Dialog: Create Folder */}
			<AnimatePresence>
				{showFolderModal && (
					<div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setShowFolderModal(false)}
							className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ scale: 0.95, opacity: 0, y: 15 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.95, opacity: 0, y: 15 }}
							transition={{ type: 'spring', duration: 0.4 }}
							className="relative w-full max-w-sm rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-2xl dark:border-white/5 dark:bg-[#07080b] z-10"
						>
							<div className="flex items-center justify-between pb-3.5 border-b border-zinc-200/50 dark:border-white/5">
								<h3 className="text-xs font-black text-slate-800 dark:text-zinc-200 uppercase tracking-widest">Create New Folder</h3>
								<button
									onClick={() => setShowFolderModal(false)}
									className="h-7 w-7 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] flex items-center justify-center text-slate-400 hover:text-slate-650 dark:text-zinc-300 transition"
								>
									<X size={13} />
								</button>
							</div>

							<div className="mt-5 space-y-4 font-sans">
								<div>
									<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Folder Name</label>
									<input
										type="text"
										placeholder="e.g. Sales Pipeline Sync"
										value={newFolderName}
										onChange={(e) => setNewFolderName(e.target.value)}
										className="w-full h-11 px-4 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white"
									/>
								</div>

								<div>
									<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Accent Color</label>
									<div className="flex gap-2">
										{['violet', 'emerald', 'rose', 'indigo', 'amber', 'sky'].map((color) => {
											const bgClasses: Record<string, string> = {
												violet: 'bg-violet-500',
												emerald: 'bg-emerald-500',
												rose: 'bg-rose-500',
												indigo: 'bg-indigo-500',
												amber: 'bg-amber-500',
												sky: 'bg-sky-500',
											};
											return (
												<button
													key={color}
													onClick={() => setNewFolderColor(color)}
													className={`h-7 w-7 rounded-full ${bgClasses[color]} relative transition-transform ${
														newFolderColor === color ? 'scale-110 ring-2 ring-[#FF3366]/30 ring-offset-2 dark:ring-offset-[#07080b]' : 'opacity-80 hover:opacity-100'
													}`}
												>
													{newFolderColor === color && (
														<Check size={11} className="text-white absolute inset-0 m-auto stroke-[3]" />
													)}
												</button>
											);
										})}
									</div>
								</div>

								<button
									onClick={handleCreateFolder}
									disabled={!newFolderName.trim()}
									className="w-full h-11 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 text-xs font-black tracking-wide flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all mt-6"
								>
									Create Folder
								</button>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			{/* Modal Dialog: Create Custom Node */}
			<AnimatePresence>
				{showCreateNodeModal && (
					<div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setShowCreateNodeModal(false)}
							className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ scale: 0.95, opacity: 0, y: 15 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.95, opacity: 0, y: 15 }}
							transition={{ type: 'spring', duration: 0.4 }}
							className="relative w-full max-w-md rounded-[2.2rem] border border-zinc-200 bg-white p-6 shadow-2xl dark:border-white/5 dark:bg-[#07080b] z-10"
						>
							<div className="flex items-center justify-between pb-3.5 border-b border-zinc-200/50 dark:border-white/5">
								<h3 className="text-xs font-black text-slate-800 dark:text-zinc-200 uppercase tracking-widest">Create Custom Node</h3>
								<button
									onClick={() => setShowCreateNodeModal(false)}
									className="h-7 w-7 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] flex items-center justify-center text-slate-400 hover:text-slate-650 dark:text-zinc-300 transition"
								>
									<X size={13} />
								</button>
							</div>

							<div className="mt-5 space-y-4 font-sans text-left">
								<div>
									<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Node Name</label>
									<input
										type="text"
										placeholder="e.g. ElevenLabs Text-to-Speech"
										value={newNodeName}
										onChange={(e) => setNewNodeName(e.target.value)}
										className="w-full h-11 px-4 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white"
									/>
								</div>

								<div>
									<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Description</label>
									<textarea
										placeholder="Explain what operations this python script performs..."
										value={newNodeDesc}
										onChange={(e) => setNewNodeDesc(e.target.value)}
										className="w-full min-h-[60px] p-3 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white"
									/>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Inputs (comma sep)</label>
										<input
											type="text"
											placeholder="text, voice_id"
											value={newNodeInputs}
											onChange={(e) => setNewNodeInputs(e.target.value)}
											className="w-full h-10 px-3.5 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white"
										/>
									</div>
									<div>
										<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Outputs (comma sep)</label>
										<input
											type="text"
											placeholder="audio_url"
											value={newNodeOutputs}
											onChange={(e) => setNewNodeOutputs(e.target.value)}
											className="w-full h-10 px-3.5 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white"
										/>
									</div>
								</div>

								<button
									onClick={handleCreateCustomNode}
									disabled={!newNodeName.trim()}
									className="w-full h-11 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 text-xs font-black tracking-wide flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all mt-6"
								>
									Create Custom Node
								</button>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			{/* Modal Dialog: Create Flow */}
			<AnimatePresence>
				{isCreateFlowModalOpen && (
					<div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setCreateFlowModalOpen(false)}
							className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ scale: 0.95, opacity: 0, y: 15 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.95, opacity: 0, y: 15 }}
							transition={{ type: 'spring', duration: 0.4 }}
							className="relative w-full max-w-md rounded-[2.2rem] border border-zinc-200 bg-white p-6 shadow-2xl dark:border-white/5 dark:bg-[#07080b] z-10"
						>
							<div className="flex items-center justify-between pb-3.5 border-b border-zinc-200/50 dark:border-white/5">
								<h3 className="text-xs font-black text-slate-800 dark:text-zinc-200 uppercase tracking-widest font-sans">Create New Flow</h3>
								<button
									onClick={() => setCreateFlowModalOpen(false)}
									className="h-7 w-7 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] flex items-center justify-center text-slate-400 hover:text-slate-655 dark:text-zinc-300 transition"
								>
									<X size={13} />
								</button>
							</div>

							<div className="mt-5 space-y-4 text-left font-sans">
								<div>
									<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Flow Name</label>
									<input
										type="text"
										placeholder="e.g. Sync Contacts to HubSpot"
										value={newWorkflowName}
										onChange={(e) => setNewWorkflowName(e.target.value)}
										className="w-full h-11 px-4 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white"
									/>
								</div>

								<div>
									<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Description (Optional)</label>
									<textarea
										placeholder="Describe what automation operations this flow handles..."
										value={newWorkflowDesc}
										onChange={(e) => setNewWorkflowDesc(e.target.value)}
										className="w-full min-h-[70px] max-h-[140px] p-3 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white"
									/>
								</div>

								<div>
									<label className="block text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Catalog inside Folder</label>
									<select
										value={newWorkflowFolder}
										onChange={(e) => setNewWorkflowFolder(e.target.value)}
										className="w-full h-11 px-3.5 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-955 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#FF3366]/15 focus:border-[#FF3366] transition text-slate-900 dark:text-white dark:bg-zinc-900"
									>
										<option value="root">Root (Uncataloged)</option>
										{folders.map((f) => (
											<option key={f.id} value={f.id}>{f.name}</option>
										))}
									</select>
								</div>

								<button
									onClick={handleCreateWorkflow}
									disabled={!newWorkflowName.trim()}
									className="w-full h-11 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 text-xs font-black tracking-wide flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all mt-6"
								>
									Create & Open Editor
								</button>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

		</div>
	);
};

export default GumloopWorkspacePage;
