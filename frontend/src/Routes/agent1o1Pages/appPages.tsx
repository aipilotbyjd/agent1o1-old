import { lazy } from 'react';

const WorkflowsPage = lazy(() => import('@/pages/app/Workflows/Workflows.page'));
const WorkspaceSettingsPage = lazy(() => import('@/pages/app/Settings/WorkspaceSettings.page'));

const AppPages = [
	{
		path: '/app',
		element: <WorkflowsPage />,
	},
	{
		path: '/app/workflows',
		element: <WorkflowsPage />,
	},
	{
		path: '/app/settings/profile/general',
		element: <WorkspaceSettingsPage />,
	},
];

export default AppPages;
