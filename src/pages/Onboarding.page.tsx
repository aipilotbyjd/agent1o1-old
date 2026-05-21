import { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Search,
	Check,
	Plus,
	Loader2,
	UploadCloud,
	X,
	ArrowLeft,
	Sparkles,
	Globe,
	Code,
	Cpu,
	Image as ImageIcon,
	Wrench,
	Presentation,
	Clock,
	ArrowRight,
	Bot,
} from 'lucide-react';

// Brand icon component reusing premium SVGs
const BrandLogo = ({ name, className = 'w-6 h-6' }: { name: string; className?: string }) => {
	const getIcon = () => {
		switch (name.toLowerCase()) {
			case 'slack':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#36C5F0" d="M5 10.5c0-1.4 1.1-2.5 2.5-2.5h2.5v2.5c0 1.4-1.1 2.5-2.5 2.5H5v-2.5zm0 2.5h5v5c0 1.4-1.1 2.5-2.5 2.5S5 19.4 5 18v-5z" />
						<path fill="#2EB67D" d="M10.5 5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v2.5h-2.5c-1.4 0-2.5-1.1-2.5-2.5zm2.5 5h5v2.5c0 1.4-1.1 2.5-2.5 2.5H13v-5z" />
						<path fill="#ECB22E" d="M19 13.5c0 1.4-1.1 2.5-2.5 2.5H14v-2.5c0-1.4 1.1-2.5 2.5-2.5H19v2.5zm0-2.5h-5V6c0-1.4 1.1-2.5 2.5-2.5S19 4.6 19 6v5z" />
						<path fill="#E01E5A" d="M13.5 19c0 1.4-1.1 2.5-2.5 2.5S8.5 20.4 8.5 19v-2.5H11c1.4 0 2.5 1.1 2.5 2.5zm-2.5-5H6v-2.5c0-1.4 1.1-2.5 2.5-2.5H11v5z" />
					</svg>
				);
			case 'github':
				return (
					<svg viewBox="0 0 24 24" className={`${className} fill-current text-slate-900 dark:text-white`}>
						<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
					</svg>
				);
			case 'gmail':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#EA4335" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
						<path fill="#FBBC05" d="M22 6v12c0 1.1-.9 2-2 2h-2V8l-6 4-6-4v12H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2.9-.1 2 2z" />
						<path fill="#34A853" d="M2 6v1.5l10 6.5 10-6.5V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z" />
						<path fill="#4285F4" d="M22 6v1.5l-10 6.5L2 7.5V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2z" />
					</svg>
				);
			case 'google sheets':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#0F9D58" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
						<rect fill="#0F9D58" x="8" y="11" width="8" height="2" rx="0.5" />
						<rect fill="#0F9D58" x="8" y="14" width="8" height="2" rx="0.5" />
					</svg>
				);
			case 'google drive':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#0066da" d="M12.87 2.45L4.56 16.7h14.88L12.87 2.45z" />
						<path fill="#00a85d" d="M4.56 16.7L1.25 22.45h14.88L12.87 16.7H4.56z" />
						<path fill="#ffbc00" d="M12.87 16.7L9.56 22.45h13.19L19.44 16.7H12.87z" />
					</svg>
				);
			case 'notion':
				return (
					<div className={`flex items-center justify-center rounded-lg bg-zinc-50 border border-zinc-150 dark:bg-zinc-900/60 dark:border-white/10 ${className}`}>
						<span className="font-extrabold text-sm text-zinc-900 dark:text-white">N</span>
					</div>
				);
			case 'airtable':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#18bfff" d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 15.5l-6-3V10l6 3v4.5zm8-1l-6 3V12l6-3v5.5z" />
					</svg>
				);
			case 'salesforce':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#00A1E0" d="M18.5 10.5C18.2 8 16 6 13.5 6c-1.5 0-3 .8-3.8 2C9 7.4 7.8 7 6.5 7 4 7 2 9 2 11.5c0 .3 0 .6.1.9C1 13 0 14.4 0 16c0 2.5 2 4.5 4.5 4.5h14c3 0 5.5-2.5 5.5-5.5 0-2.3-1.4-4.2-3.5-4.5z" />
					</svg>
				);
			case 'hubspot':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#FF7A59" d="M21.5 11h-3.8c-.5-1.5-1.9-2.5-3.5-2.5-1.3 0-2.4.6-3.1 1.6L5.5 7.2C5.8 6.5 6 5.8 6 5c0-2.8-2.2-5-5-5S-4 2.2-4 5s2.2 5 5 5c.8 0 1.5-.2 2.2-.5l5.6 3.9c-1 1-1.6 2.3-1.6 3.7 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1-.3-2-.9-2.7l3.9-5.6c.5.3 1.2.5 1.9.5 1.7 0 3-1.3 3-3s-1.3-3-3-3z" />
					</svg>
				);
			case 'apollo':
				return (
					<div className={`flex items-center justify-center rounded-lg bg-orange-500 text-white ${className}`}>
						<span className="font-black text-xs tracking-tighter">🚀</span>
					</div>
				);
			case 'tiktok':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#000" d="M12.5 2v13c0 2.5-2 4.5-4.5 4.5S3.5 17.5 3.5 15s2-4.5 4.5-4.5c.3 0 .6 0 .9.1V6.2C7 6 5.5 6.5 4.3 7.5S2 11 2 13.5s2.2 6.5 6.5 6.5S15 17.8 15 13.5V6.5c1.5 1.5 3.5 2 5.5 2v-4c-2 0-4-1.5-5-3h-3z" />
					</svg>
				);
			case 'youtube':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#FF0000" d="M23.5 6.5C23.2 4.2 21.3 2.5 19 2.2c-3.3-.4-6.7-.4-10 0C6.7 2.5 4.8 4.2 4.5 6.5c-.5 3.3-.5 6.7 0 10 .3 2.3 2.2 4 4.5 4.3 3.3.4 6.7.4 10 0 2.3-.3 4.2-2 4.5-4.3.5-3.3.5-6.7 0-10zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
					</svg>
				);
			case 'instagram':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#E1306C" strokeWidth="2.5" />
						<circle cx="12" cy="12" r="5" fill="none" stroke="#E1306C" strokeWidth="2.5" />
						<circle cx="18" cy="6" r="1.5" fill="#E1306C" />
					</svg>
				);
			case 'x (twitter)':
				return (
					<svg viewBox="0 0 24 24" className={`${className} fill-current text-slate-900 dark:text-white`}>
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
					</svg>
				);
			case 'google analytics':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#F4B400" d="M12 2v20M6 10v12M18 14v8" stroke="#F4B400" strokeWidth="3.5" strokeLinecap="round" />
					</svg>
				);
			case 'vercel':
				return (
					<svg viewBox="0 0 24 24" className={`${className} fill-current text-slate-900 dark:text-white`}>
						<path d="M24 22.525H0L12 1.475l12 21.05z" />
					</svg>
				);
			case 'jira':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#0052CC" d="M11.5 2L2 11.5v5.5l9.5-9.5H17V2h-5.5zM22 12v5.5l-9.5 9.5H7V22l9.5-9.5H22z" />
					</svg>
				);
			case 'figma':
				return (
					<svg viewBox="0 0 24 24" className={className}>
						<path fill="#F24E1E" d="M12 2a3.5 3.5 0 00-3.5 3.5c0 .9.3 1.7.9 2.3L12 10.5V2z" />
						<path fill="#A259FF" d="M8.5 7.5a3.5 3.5 0 00-3.5 3.5c0 .9.3 1.7.9 2.3L8.5 16V7.5z" />
						<path fill="#1ABCFE" d="M12 10.5H8.5c-.9 0-1.7.3-2.3.9L12 13.5v-3z" />
						<path fill="#0ACF83" d="M8.5 16H12v3.5a3.5 3.5 0 01-3.5-3.5z" />
						<path fill="#FF7262" d="M15.5 7.5a3.5 3.5 0 00-3.5-3.5V11h3.5a3.5 3.5 0 000-3.5z" />
					</svg>
				);
			case 'zendesk':
				return (
					<div className={`flex items-center justify-center rounded-lg bg-[#03363d] text-white ${className}`}>
						<span className="font-black text-xs">Z</span>
					</div>
				);
			case 'stripe':
				return (
					<div className={`flex items-center justify-center rounded-lg bg-[#635bff] text-white ${className}`}>
						<span className="font-black text-[10px] tracking-tight">S</span>
					</div>
				);
			default:
				return <Globe className={`${className} text-zinc-400`} />;
		}
	};

	return getIcon();
};

// Roles, Superpowers, and Connected Apps mapping data
interface IRoleData {
	name: string;
	description: string;
	apps: string[];
}

const ROLES: IRoleData[] = [
	{ name: 'Sales', description: 'Personalize agents with CRM and messaging platforms.', apps: ['salesforce', 'slack', 'gmail', 'hubspot', 'apollo'] },
	{ name: 'Marketing', description: 'Automate content workflows and marketing metrics.', apps: ['tiktok', 'youtube', 'instagram', 'x (twitter)', 'google analytics'] },
	{ name: 'Operations', description: 'Connect search and spreadsheets for productivity.', apps: ['airtable', 'google sheets', 'slack', 'google drive', 'notion'] },
	{ name: 'Support', description: 'Integrate tools for fast tickets response.', apps: ['zendesk', 'gmail', 'slack', 'notion', 'stripe'] },
	{ name: 'Engineering', description: 'Power up dev workflows, code runner and git systems.', apps: ['github', 'slack', 'vercel', 'jira', 'google drive'] },
	{ name: 'Product', description: 'Manage task-boards and documents smoothly.', apps: ['notion', 'figma', 'slack', 'jira', 'google sheets'] },
	{ name: 'Security', description: 'Handle logins, logs and notifications.', apps: ['github', 'slack', 'google drive', 'notion', 'airtable'] },
	{ name: 'HR', description: 'Onboard team members and schedule calendars.', apps: ['notion', 'slack', 'gmail', 'google sheets', 'google drive'] },
	{ name: 'Legal', description: 'Streamline contracts and files databases.', apps: ['google drive', 'notion', 'gmail', 'slack', 'github'] },
	{ name: 'Finance', description: 'Sync invoice systems with data sheets.', apps: ['stripe', 'google sheets', 'slack', 'gmail', 'airtable'] },
];

interface ISuperpower {
	id: string;
	name: string;
	description: string;
	credits: number;
	icon: any;
}

const SUPERPOWERS: ISuperpower[] = [
	{ id: 'search', name: 'Web Search', description: 'Real-time query access built-in.', credits: 100, icon: Globe },
	{ id: 'code', name: 'Code Execution', description: 'Safely execute arbitrary sandbox scripts.', credits: 150, icon: Code },
	{ id: 'mcp', name: 'MCP Apps', description: 'Secure Model Context Protocol connector.', credits: 100, icon: Cpu },
	{ id: 'image', name: 'Image Generation', description: 'Bespoke image editing & generation.', credits: 200, icon: ImageIcon },
	{ id: 'skills', name: 'Custom Skills', description: 'Define custom micro-agent actions.', credits: 150, icon: Wrench },
	{ id: 'slide', name: 'Slide Generation', description: 'Generate executive summary decks.', credits: 100, icon: Presentation },
	{ id: 'tasks', name: 'Recurring Tasks', description: 'Automatic cron intervals executor.', credits: 100, icon: Clock },
];

interface IApp {
	name: string;
	description: string;
	category: string;
	suffix?: string;
}

const CONNECTOR_APPS: IApp[] = [
	{ name: 'Slack', description: 'Post updates, alerts and connect team channels.', category: 'Communication', suffix: '.slack.com' },
	{ name: 'Airtable', description: 'Sync workspaces databases and tracking list.', category: 'Productivity', suffix: '.airtable.com' },
	{ name: 'Gmail', description: 'Read/write automated messages and threads.', category: 'Productivity', suffix: '.gmail.com' },
	{ name: 'Google Sheets', description: 'Streamline custom spreadsheet operations.', category: 'Productivity' },
	{ name: 'Google Drive', description: 'Manage files, assets directories and stores.', category: 'Storage' },
	{ name: 'Notion', description: 'Sync page databases, contents and tables.', category: 'Documentation', suffix: '.notion.so' },
	{ name: 'GitHub', description: 'Automate code pulls, issues and repo logs.', category: 'Developer', suffix: '.github.com' },
	{ name: 'Salesforce', description: 'Manage sales deals pipeline automatically.', category: 'Business' },
];

const SURVEY_OPTIONS = [
	'Google search',
	'ChatGPT / Claude / Perplexity',
	'YouTube',
	'X / Twitter',
	'LinkedIn',
	'TikTok / Instagram',
	'Reddit / Hacker News / Slack community',
	'Friend or colleague',
	'Newsletter or blog post',
	'Podcast',
	'Other',
];

const OnboardingPage = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(0);

	// Form values
	const [firstName, setFirstName] = useState('Aman');
	const [lastName, setLastName] = useState('Kumar');
	
	// Profile picture file states
	const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
	const [uploadProgress, setUploadProgress] = useState<number | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	// Step 2 Survey Selection
	const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);

	// Step 3 Role Selection
	const [selectedRoleIndex, setSelectedRoleIndex] = useState(4); // Default to Engineering

	// Step 4 Superpowers
	const [activeSuperpowers, setActiveSuperpowers] = useState<string[]>(['search', 'code']);
	
	// Step 5 Connect Apps
	const [appSearch, setAppSearch] = useState('');
	const [connectedApps, setConnectedApps] = useState<string[]>(['GitHub']);
	const [selectedAppForAuth, setSelectedAppForAuth] = useState<IApp | null>(null);
	const [workspaceInput, setWorkspaceInput] = useState('');
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const [authSuccess, setAuthSuccess] = useState(false);

	// Dynamic layout calculation
	const isDualColumn = step >= 2;

	// Calculate live orbits
	const currentOrbitIcons = useMemo(() => {
		if (step === 2) {
			// Based on selected role
			return ROLES[selectedRoleIndex].apps;
		}
		if (step === 3) {
			// Based on activated superpowers + core defaults
			const list: string[] = [];
			if (activeSuperpowers.includes('search')) list.push('google sheets');
			if (activeSuperpowers.includes('code')) list.push('github');
			if (activeSuperpowers.includes('mcp')) list.push('slack');
			if (activeSuperpowers.includes('image')) list.push('figma');
			if (activeSuperpowers.includes('skills')) list.push('notion');
			if (activeSuperpowers.includes('slide')) list.push('salesforce');
			if (activeSuperpowers.includes('tasks')) list.push('stripe');
			// Keep it full of dynamic icons
			if (list.length < 3) list.push('slack', 'github', 'gmail');
			return list;
		}
		if (step === 4) {
			// Based on connected apps
			return connectedApps.map(a => a.toLowerCase());
		}
		return ['slack', 'github', 'gmail'];
	}, [step, selectedRoleIndex, activeSuperpowers, connectedApps]);

	// Calculate credit levels
	const superpowerCredits = useMemo(() => {
		let score = 0;
		activeSuperpowers.forEach(id => {
			const skill = SUPERPOWERS.find(s => s.id === id);
			if (skill) score += skill.credits;
		});
		return score;
	}, [activeSuperpowers]);

	const connectedAppCredits = useMemo(() => {
		return connectedApps.length * 250;
	}, [connectedApps]);

	// Simulate profile picture upload progress
	const handleFileSelect = (file: File) => {
		if (!file) return;
		// Show preview image
		const reader = new FileReader();
		reader.onload = (e) => {
			if (e.target?.result) {
				setUploadProgress(0);
				// Simulate smooth uploading animation
				let progress = 0;
				const timer = setInterval(() => {
					progress += 10;
					setUploadProgress(progress);
					if (progress >= 100) {
						clearInterval(timer);
						setUploadProgress(null);
						setAvatarUrl(e.target!.result as string);
					}
				}, 150);
			}
		};
		reader.readAsDataURL(file);
	};

	const onDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const onDragLeave = () => {
		setIsDragging(false);
	};

	const onDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			handleFileSelect(e.dataTransfer.files[0]);
		}
	};

	const toggleSuperpower = (id: string) => {
		if (activeSuperpowers.includes(id)) {
			// Keep at least 1 superpower
			if (activeSuperpowers.length > 1) {
				setActiveSuperpowers(activeSuperpowers.filter(s => s !== id));
			}
		} else {
			setActiveSuperpowers([...activeSuperpowers, id]);
		}
	};

	const startAppAuth = (app: IApp) => {
		if (connectedApps.includes(app.name)) return;
		setSelectedAppForAuth(app);
		setWorkspaceInput('');
		setIsAuthenticating(false);
		setAuthSuccess(false);
	};

	const executeMockAuth = () => {
		setIsAuthenticating(true);
		setTimeout(() => {
			setIsAuthenticating(false);
			setAuthSuccess(true);
			setTimeout(() => {
				setConnectedApps([...connectedApps, selectedAppForAuth!.name]);
				setSelectedAppForAuth(null);
			}, 800);
		}, 2000);
	};

	const handleNextStep = () => {
		if (step < 4) {
			setStep(step + 1);
		} else {
			// Complete onboarding! Navigate back to editor dashboard
			navigate('/');
		}
	};

	const handlePrevStep = () => {
		if (step > 0) {
			setStep(step - 1);
		}
	};

	const filteredApps = CONNECTOR_APPS.filter(app =>
		app.name.toLowerCase().includes(appSearch.toLowerCase()) ||
		app.category.toLowerCase().includes(appSearch.toLowerCase())
	);

	return (
		<main className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-gradient-to-br from-indigo-50/80 via-slate-50/90 to-rose-50/80 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-slate-950 dark:text-zinc-50 transition-colors duration-300">
			{/* Stunning animated SVG mesh gradient backgrounds */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
				<div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_45%),radial-gradient(circle_at_top_right,rgba(244,63,94,0.15),transparent_45%)]" />
				<div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-400/30 dark:bg-violet-900/15 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
				<div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-400/30 dark:bg-amber-900/15 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
				<div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-rose-400/20 dark:bg-pink-950/10 blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
			</div>

			{/* Navigation Header */}
			<header className="relative z-10 w-full px-6 py-5">
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25">
							<span className="font-extrabold text-base tracking-tighter">A1</span>
						</div>
						<span className="text-xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 dark:from-white dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-transparent">
							Agent1o1
						</span>
					</div>
				</div>
			</header>

			{/* Onboarding Main Content Card Area */}
			<section className="relative z-10 flex-1 flex items-center justify-center px-4 py-8 md:py-16">
				<motion.div
					layout
					transition={{ type: 'spring', stiffness: 220, damping: 26 }}
					style={{ maxWidth: isDualColumn ? '1024px' : '480px' }}
					className="w-full rounded-[2rem] border border-slate-200/80 bg-white/95 dark:border-zinc-800/80 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-xl overflow-hidden"
				>
					<div className={`grid ${isDualColumn ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
						
						{/* Left Component (Controls/Inputs Form) */}
						<div className="p-6 md:p-10 flex flex-col justify-between min-h-[520px]">
							<div>
								{/* Step indicator */}
								<div className="flex items-center gap-2 mb-6 text-[10px] font-black tracking-widest text-violet-600 dark:text-violet-400 uppercase">
									<span>Step {step + 1} of 5</span>
									<span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-zinc-700" />
									<span>
										{step === 0 && 'Profile setup'}
										{step === 1 && 'Discovery survey'}
										{step === 2 && 'Role Selection'}
										{step === 3 && 'Superpowers'}
										{step === 4 && 'Apps Integration'}
									</span>
								</div>

								{/* Dynamic Content Switching */}
								<AnimatePresence mode="wait">
									<motion.div
										key={step}
										initial={{ opacity: 0, x: -15 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 15 }}
										transition={{ duration: 0.25 }}
										className="space-y-6"
									>
										{/* STEP 1: PROFILE SETUP */}
										{step === 0 && (
											<>
												<div>
													<h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-zinc-50 leading-tight">
														Welcome! Let's set up your profile
													</h1>
													<p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-medium">
														Tell us a bit about yourself to get started.
													</p>
												</div>

												<div className="space-y-4 pt-2">
													<div className="grid grid-cols-2 gap-4">
														<div className="space-y-2">
															<label htmlFor="firstName" className="block text-xs font-bold text-slate-600 dark:text-zinc-400">
																First Name
															</label>
															<input
																type="text"
																id="firstName"
																placeholder="Aman"
																value={firstName}
																onChange={(e) => setFirstName(e.target.value)}
																className="w-full h-11 px-4 rounded-xl border border-slate-200/90 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/40 text-sm font-semibold outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
															/>
														</div>
														<div className="space-y-2">
															<label htmlFor="lastName" className="block text-xs font-bold text-slate-600 dark:text-zinc-400">
																Last Name
															</label>
															<input
																type="text"
																id="lastName"
																placeholder="Kumar"
																value={lastName}
																onChange={(e) => setLastName(e.target.value)}
																className="w-full h-11 px-4 rounded-xl border border-slate-200/90 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/40 text-sm font-semibold outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
															/>
														</div>
													</div>

													{/* Profile image upload zone */}
													<div className="space-y-2">
														<label className="block text-xs font-bold text-slate-600 dark:text-zinc-400">
															Profile Picture
														</label>

														<div
															onDragOver={onDragOver}
															onDragLeave={onDragLeave}
															onDrop={onDrop}
															onClick={() => fileInputRef.current?.click()}
															className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-6 cursor-pointer transition-all ${
																isDragging
																	? 'border-violet-500 bg-violet-500/5'
																	: 'border-slate-200 dark:border-zinc-800 bg-white/30 dark:bg-zinc-900/20 hover:border-slate-300 dark:hover:border-zinc-700'
															}`}
														>
															<input
																type="file"
																ref={fileInputRef}
																className="hidden"
																accept="image/*"
																onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
															/>

															{uploadProgress !== null ? (
																<div className="flex flex-col items-center space-y-3 py-2 w-full max-w-[200px]">
																	<Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
																	<div className="w-full bg-slate-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
																		<div className="h-full bg-violet-600" style={{ width: `${uploadProgress}%` }} />
																	</div>
																	<span className="text-xs font-bold text-slate-500">{uploadProgress}% uploaded</span>
																</div>
															) : avatarUrl ? (
																<div className="flex items-center gap-4 w-full">
																	<div className="relative">
																		<img
																			src={avatarUrl}
																			alt="Profile avatar"
																			className="w-16 h-16 rounded-full object-cover border border-violet-500/30"
																		/>
																		<div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 border-2 border-white dark:border-zinc-900">
																			<Check className="w-3 h-3 stroke-[3]" />
																		</div>
																	</div>
																	<div className="flex-1 text-left">
																		<p className="text-sm font-bold text-slate-900 dark:text-zinc-50">Upload complete</p>
																		<p className="text-xs text-slate-400">Ready to proceed</p>
																	</div>
																	<button
																		onClick={(e) => {
																			e.stopPropagation();
																			setAvatarUrl(null);
																		}}
																		className="p-2 text-slate-400 hover:text-rose-500 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800"
																	>
																		<X className="w-4 h-4" />
																	</button>
																</div>
															) : (
																<>
																	<div className="h-10 w-10 flex items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950/20 text-violet-600 dark:text-violet-400 mb-3">
																		<UploadCloud className="w-5 h-5" />
																	</div>
																	<p className="text-xs font-bold text-slate-800 dark:text-zinc-200">
																		Drop images here, or <span className="text-violet-600 dark:text-violet-400 underline">browse</span>
																	</p>
																	<p className="text-[10px] text-slate-400 mt-1">PNGs, JPEGs under 10MB</p>
																</>
															)}
														</div>
													</div>
												</div>
											</>
										)}

										{/* STEP 2: DISCOVERY SURVEY */}
										{step === 1 && (
											<>
												<div>
													<h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-zinc-50 leading-tight">
														How did you hear about Agent1o1?
													</h1>
													<p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-medium">
														We'd love to know what brought you here.
													</p>
												</div>

												{/* Scrollable multi-choice listing */}
												<div className="max-h-[300px] overflow-y-auto pr-1 no-scrollbar space-y-2">
													{SURVEY_OPTIONS.map((option) => {
														const isSelected = selectedSurvey === option;
														return (
															<motion.button
																whileTap={{ scale: 0.98 }}
																key={option}
																onClick={() => setSelectedSurvey(option)}
																className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left font-semibold transition-all ${
																	isSelected
																		? 'border-violet-500 bg-violet-500/5 text-violet-600 dark:text-violet-400 ring-1 ring-violet-500/20'
																		: 'border-slate-100 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/20 hover:bg-slate-50 dark:hover:bg-zinc-800/30'
																}`}
															>
																<span className="text-xs text-slate-700 dark:text-zinc-200">{option}</span>
																<div
																	className={`h-4 w-4 rounded-full border flex items-center justify-center transition-colors ${
																		isSelected ? 'border-violet-500 bg-violet-500' : 'border-slate-300 dark:border-zinc-700'
																	}`}
																>
																	{isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
																</div>
															</motion.button>
														);
													})}
												</div>
											</>
										)}

										{/* STEP 3: ROLE SELECTION */}
										{step === 2 && (
											<>
												<div>
													<h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-zinc-50 leading-tight">
														What best describes your role?
													</h1>
													<p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-medium font-sans">
														We'll personalize your workspace with standard connectors tailored to your workflow.
													</p>
												</div>

												{/* Selection cards list */}
												<div className="max-h-[300px] overflow-y-auto pr-1 no-scrollbar space-y-2">
													{ROLES.map((role, idx) => {
														const isSelected = selectedRoleIndex === idx;
														return (
															<motion.button
																whileTap={{ scale: 0.98 }}
																key={role.name}
																onClick={() => setSelectedRoleIndex(idx)}
																className={`w-full flex flex-col p-3 px-4 rounded-xl border text-left transition-all ${
																	isSelected
																		? 'border-violet-500 bg-violet-500/5 ring-1 ring-violet-500/20'
																		: 'border-slate-150 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/20 hover:bg-slate-50 dark:hover:bg-zinc-800/30'
																}`}
															>
																<div className="flex items-center justify-between">
																	<span className={`text-sm font-bold ${isSelected ? 'text-violet-600 dark:text-violet-400' : 'text-slate-900 dark:text-zinc-100'}`}>
																		{role.name}
																	</span>
																	{isSelected && (
																		<span className="h-5 w-5 flex items-center justify-center bg-violet-500 text-white rounded-full text-[10px]">
																			<Check className="w-3 h-3 stroke-[3]" />
																		</span>
																	)}
																</div>
																<p className="text-xs text-slate-400 mt-0.5">{role.description}</p>
															</motion.button>
														);
													})}
												</div>
											</>
										)}

										{/* STEP 4: SUPERPOWERS ACTIVATION */}
										{step === 3 && (
											<>
												<div>
													<h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-zinc-50 leading-tight">
														Enable your agent's superpowers
													</h1>
													<p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-medium">
														Equip your workflows with pre-built custom capabilities.
													</p>
												</div>

												{/* Live Credit Meter */}
												<div className="p-3.5 bg-slate-100/50 dark:bg-zinc-955/40 border border-slate-200/50 dark:border-zinc-800/60 rounded-2xl">
													<div className="flex justify-between items-center mb-2">
														<span className="text-xs font-bold text-slate-500 dark:text-zinc-400">Monthly Usage Allocated</span>
														<span className="text-xs font-extrabold text-violet-600 dark:text-violet-400">{superpowerCredits}/1000 credits</span>
													</div>
													<div className="w-full bg-slate-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
														<motion.div
															initial={{ width: 0 }}
															animate={{ width: `${(superpowerCredits / 1000) * 100}%` }}
															className="h-full bg-gradient-to-r from-violet-500 to-indigo-600"
														/>
													</div>
												</div>

												{/* Superpowers toggles */}
												<div className="max-h-[220px] overflow-y-auto pr-1 no-scrollbar space-y-2">
													{SUPERPOWERS.map((power) => {
														const isEnabled = activeSuperpowers.includes(power.id);
														const IconComp = power.icon;
														return (
															<div
																key={power.id}
																className={`flex items-center justify-between p-3 px-4 rounded-xl border transition-all ${
																	isEnabled
																		? 'border-violet-500/70 bg-violet-500/5'
																		: 'border-slate-150 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-950/20'
																}`}
															>
																<div className="flex items-center gap-3">
																	<div className={`h-8 w-8 flex items-center justify-center rounded-lg border ${
																		isEnabled ? 'border-violet-300 dark:border-violet-900 bg-violet-500/10 text-violet-600 dark:text-violet-400' : 'border-slate-200 dark:border-zinc-800 text-slate-400'
																	}`}>
																		<IconComp className="w-4 h-4" />
																	</div>
																	<div>
																		<p className="text-xs font-bold text-slate-900 dark:text-zinc-50">{power.name}</p>
																		<p className="text-[10px] text-slate-400 mt-0.5">{power.description}</p>
																	</div>
																</div>
																<button
																	onClick={() => toggleSuperpower(power.id)}
																	className={`h-7 w-7 flex items-center justify-center rounded-lg transition-colors ${
																		isEnabled
																			? 'bg-violet-500 text-white hover:bg-violet-600'
																			: 'border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-500'
																	}`}
																>
																	{isEnabled ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
																</button>
															</div>
														);
													})}
												</div>
											</>
										)}

										{/* STEP 5: CONNECT APPS */}
										{step === 4 && (
											<>
												<div>
													<h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-zinc-50 leading-tight">
														Connect apps to supercharge agent
													</h1>
													<p className="mt-2 text-sm text-slate-500 dark:text-zinc-400 font-medium">
														Connect your services so that your agent can trigger direct integrations.
													</p>
												</div>

												{/* App search catalog */}
												<div className="flex gap-2">
													<div className="relative flex-1">
														<Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
														<input
															type="text"
															placeholder="Search from workspace connector apps..."
															value={appSearch}
															onChange={(e) => setAppSearch(e.target.value)}
															className="w-full h-10 pl-9 pr-4 rounded-xl border border-slate-200/90 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-xs font-semibold outline-none focus:border-violet-500 transition-all"
														/>
													</div>
													<div className="flex items-center px-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/50 text-xs font-bold text-slate-500">
														{connectedAppCredits}/2000 creds
													</div>
												</div>

												{/* Connect list */}
												<div className="max-h-[220px] overflow-y-auto pr-1 no-scrollbar space-y-2">
													{filteredApps.map((app) => {
														const isConnected = connectedApps.includes(app.name);
														return (
															<div
																key={app.name}
																className={`flex items-center justify-between p-3 rounded-xl border ${
																	isConnected ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-100 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/20'
																}`}
															>
																<div className="flex items-center gap-3">
																	<BrandLogo name={app.name} className="w-8 h-8" />
																	<div>
																		<p className="text-xs font-bold text-slate-900 dark:text-zinc-50">{app.name}</p>
																		<p className="text-[10px] text-slate-400">{app.description}</p>
																	</div>
																</div>
																<button
																	disabled={isConnected}
																	onClick={() => startAppAuth(app)}
																	className={`h-7 px-3 flex items-center justify-center rounded-lg text-xs font-black transition-all ${
																		isConnected
																			? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20'
																			: 'bg-slate-900 dark:bg-zinc-100 text-white dark:text-slate-950 hover:opacity-90 active:scale-95'
																	}`}
																>
																	{isConnected ? 'Connected' : 'Connect'}
																</button>
															</div>
														);
													})}
												</div>
											</>
										)}
									</motion.div>
								</AnimatePresence>
							</div>

							{/* Actions navigation footer */}
							<div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/80">
								{step > 0 ? (
									<button
										onClick={handlePrevStep}
										className="flex items-center gap-2 px-4 h-11 text-xs font-black rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
									>
										<ArrowLeft className="w-4 h-4" />
										Back
									</button>
								) : (
									<div />
								)}

								{/* Step paging dot indicators */}
								<div className="flex items-center gap-1.5">
									{[0, 1, 2, 3, 4].map((i) => (
										<div
											key={i}
											className={`h-1.5 rounded-full transition-all duration-300 ${
												step === i ? 'w-4 bg-violet-600 dark:bg-violet-500' : 'w-1.5 bg-slate-200 dark:bg-zinc-800'
											}`}
										/>
									))}
								</div>

								{/* Skip/Continue Actions */}
								<div className="flex items-center gap-3">
									{(step === 1 || step === 3 || step === 4) && (
										<button
											onClick={handleNextStep}
											className="px-4 h-11 text-xs font-black rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300"
										>
											Skip
										</button>
									)}

									<button
										onClick={handleNextStep}
										className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-slate-950 text-white dark:bg-zinc-50 dark:text-slate-950 font-black text-xs hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
									>
										{step === 4 ? 'Finish Setup' : 'Continue'}
										<ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
									</button>
								</div>
							</div>
						</div>

						{/* Right Component (Animated Interactive Agent Core Playground) */}
						{isDualColumn && (
							<div className="border-l border-slate-100 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/20 min-h-[520px] flex flex-col items-center justify-center relative p-8">
								
								{/* Decorative Background Grid */}
								<div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />

								{/* Floating Visual Label */}
								<div className="absolute top-6 right-6 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-violet-500/10 text-[10px] font-black text-violet-600 dark:text-violet-400 uppercase tracking-wider">
									<Sparkles className="w-3 h-3" />
									Active Core Playground
								</div>

								{/* Interactive Orb Orbit Scene */}
								<div className="relative w-72 h-72 flex items-center justify-center">
									
									{/* Central Orb Glow background */}
									<div className="absolute w-40 h-40 rounded-full bg-violet-500/10 dark:bg-violet-600/5 blur-2xl animate-pulse" />

									{/* Outer Ring boundary */}
									<div className="absolute w-52 h-52 border border-slate-200/60 dark:border-zinc-800/40 rounded-full border-dashed animate-[spin_50s_linear_infinite]" />
									<div className="absolute w-[130px] h-[130px] border border-slate-200/30 dark:border-zinc-800/20 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]" />

									{/* CENTRAL CORE: AGENT FACE */}
									<motion.div
										animate={{
											scale: [1, 1.05, 1],
											boxShadow: [
												'0 0 20px rgba(124, 58, 237, 0.2)',
												'0 0 35px rgba(124, 58, 237, 0.4)',
												'0 0 20px rgba(124, 58, 237, 0.2)',
											],
										}}
										transition={{ repeat: Infinity, duration: 4 }}
										className="z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-indigo-600 text-white flex flex-col items-center justify-center p-2 relative"
									>
										{/* Inner content */}
										<Bot className="w-9 h-9" />
										<span className="text-[10px] font-black tracking-widest uppercase mt-1">CORE</span>
										
										{/* Little side widgets */}
										<div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border border-white flex items-center justify-center text-[8px] text-white font-bold shadow-md">
											✓
										</div>
									</motion.div>

									{/* ORBITING SYSTEM BRANDS */}
									<AnimatePresence>
										{currentOrbitIcons.map((brandName, idx) => {
											// Calculate orbit position coords
											const count = currentOrbitIcons.length;
											const angle = (idx / count) * 2 * Math.PI;
											const radius = 104; // radius in pixels
											const x = Math.cos(angle) * radius;
											const y = Math.sin(angle) * radius;

											return (
												<motion.div
													key={brandName + '-' + idx}
													initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
													animate={{
														opacity: 1,
														scale: 1,
														x,
														y,
													}}
													exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
													transition={{
														type: 'spring',
														stiffness: 140,
														damping: 15,
														delay: idx * 0.05,
													}}
													className="absolute z-20"
												>
													{/* Floating container */}
													<motion.div
														animate={{
															y: [0, -5, 0],
														}}
														transition={{
															repeat: Infinity,
															duration: 3 + idx * 0.5,
															ease: 'easeInOut',
														}}
														className="h-11 w-11 flex items-center justify-center bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-2xl shadow-lg shadow-slate-100 dark:shadow-none p-1"
													>
														<BrandLogo name={brandName} className="w-6 h-6" />
													</motion.div>
												</motion.div>
											);
										})}
									</AnimatePresence>
								</div>

								{/* Dynamic playground metadata */}
								<div className="text-center mt-6 z-10">
									<h3 className="text-xs font-black text-slate-800 dark:text-zinc-200 uppercase tracking-widest">
										{step === 2 && `${ROLES[selectedRoleIndex].name} Workspace`}
										{step === 3 && `${activeSuperpowers.length} Active Skills`}
										{step === 4 && `${connectedApps.length} Integrations Connected`}
									</h3>
									<p className="text-[10px] text-slate-400 mt-1 max-w-[200px] mx-auto">
										{step === 2 && 'Orbiting tools are dynamically tailored based on your selected workspace role.'}
										{step === 3 && 'Flying superpowers smoothly register to expand your core agent skills.'}
										{step === 4 && 'Your secure connections are live-linked directly with the cloud nodes.'}
									</p>
								</div>
							</div>
						)}
					</div>
				</motion.div>
			</section>

			{/* Connected App Authorization Modal Backdrop */}
			<AnimatePresence>
				{selectedAppForAuth && (
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/60 backdrop-blur-sm">
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 15 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 15 }}
							className="relative w-full max-w-sm rounded-3xl border border-slate-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 p-6 shadow-2xl overflow-hidden text-center"
						>
							<button
								onClick={() => setSelectedAppForAuth(null)}
								className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800"
							>
								<X className="w-4 h-4" />
							</button>

							<div className="flex flex-col items-center mt-4">
								<div className="h-16 w-16 flex items-center justify-center bg-slate-50 dark:bg-zinc-950 rounded-2xl shadow-inner border border-slate-100 dark:border-zinc-800 mb-4 p-2">
									<BrandLogo name={selectedAppForAuth.name} className="w-10 h-10" />
								</div>
								<h2 className="text-xl font-extrabold text-slate-950 dark:text-zinc-50">
									Connect {selectedAppForAuth.name}
								</h2>
								<p className="text-xs text-slate-400 mt-1.5 max-w-[260px]">
									Authenticate your credentials to link your cloud instance.
								</p>
							</div>

							<div className="mt-6 space-y-4">
								{selectedAppForAuth.suffix ? (
									<div className="space-y-2 text-left">
										<label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
											Account Domain
										</label>
										<div className="flex h-11 items-center border border-slate-200/90 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 rounded-xl overflow-hidden pr-3">
											<input
												type="text"
												placeholder="my-workspace"
												value={workspaceInput}
												onChange={(e) => setWorkspaceInput(e.target.value)}
												className="min-w-0 flex-1 px-3.5 h-full bg-transparent text-sm font-semibold outline-none"
											/>
											<span className="text-xs font-bold text-slate-400">
												{selectedAppForAuth.suffix}
											</span>
										</div>
									</div>
								) : (
									<div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950/30 text-left border border-slate-150 dark:border-zinc-800/40">
										<p className="text-xs font-bold text-slate-600 dark:text-zinc-400">Grant permissions</p>
										<p className="text-[10px] text-slate-400 mt-1">This gives Agent1o1 permission to sync alerts, lists, and directories dynamically.</p>
									</div>
								)}

								{authSuccess ? (
									<div className="flex flex-col items-center justify-center py-4 text-emerald-500 space-y-2">
										<div className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500/10">
											<Check className="w-5 h-5 stroke-[3]" />
										</div>
										<span className="text-xs font-black">Link Connected Successfully!</span>
									</div>
								) : (
									<button
										disabled={isAuthenticating || !!(selectedAppForAuth?.suffix && !workspaceInput.trim())}
										onClick={executeMockAuth}
										className="w-full h-11 rounded-xl bg-slate-950 text-white dark:bg-zinc-50 dark:text-slate-950 text-xs font-black tracking-wide flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all"
									>
										{isAuthenticating ? (
											<>
												<Loader2 className="w-4 h-4 animate-spin" />
												Connecting...
											</>
										) : (
											'Authorize Connection'
										)}
									</button>
								)}
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			{/* Footer Copyright */}
			<footer className="relative z-10 w-full text-center py-6 text-[10px] font-bold text-slate-400 dark:text-zinc-500">
				© {new Date().getFullYear()} Agent1o1. Built with premium micro-interactions.
			</footer>
		</main>
	);
};

export default OnboardingPage;
