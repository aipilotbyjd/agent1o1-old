import pages from '@/Routes/pages';
import { lazy } from 'react';

const AgentBuilderPage = lazy(() => import('@/pages/agent/AgentBuilder/AgentBuilder.page'));

const AgentPages = [
	{
		path: pages.agent.to,
		children: [
			{
				path: pages.agent.subPages.new.to,
				element: <AgentBuilderPage />,
			},
			{
				path: pages.agent.subPages.edit.to,
				element: <AgentBuilderPage />,
			},
		],
	},
];

export default AgentPages;
