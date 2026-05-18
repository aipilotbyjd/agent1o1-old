import { Bot, CalendarDays, FileText, Flame, PanelTop, Users } from 'lucide-react';
import type { TAgentTemplate } from '../_types/agentBuilder.type';

export const agentTemplateTabs = [
	'All',
	'Sales & Outreach',
	'Data & Analytics',
	'Support & Success',
	'Marketing & Content',
	'Productivity & Ops',
	'Research & Intelligence',
];

export const agentTemplates: TAgentTemplate[] = [
	{
		title: 'Recruiting Sourcer',
		copy: 'A recruiting agent. Give it a job description and it finds matching candidates, scores them against the role, and drafts outreach.',
		icons: [Flame, PanelTop],
		count: '+1',
	},
	{
		title: 'Feedback Digest Agent',
		copy: 'A feedback summarizer. It reads through support tickets, groups feedback by theme, and prepares a product-ready brief.',
		icons: [Bot, FileText],
		count: '',
	},
	{
		title: 'Weekly Recap Agent',
		copy: 'A weekly recap agent. Every Friday it reviews tickets, meetings, and accomplishments, then writes a team update.',
		icons: [Users, CalendarDays],
		count: '+2',
	},
];
