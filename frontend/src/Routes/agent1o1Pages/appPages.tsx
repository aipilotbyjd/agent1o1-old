import { lazy } from 'react';
import type { ReactNode } from 'react';
import WorkspaceSidebar from '@/pages/editor/WorkflowEditor/_partial/shell/WorkspaceSidebar.partial';

const WorkflowsPage = lazy(() => import('@/pages/app/Workflows/Workflows.page'));
const WorkspaceSettingsPage = lazy(() => import('@/pages/app/Settings/WorkspaceSettings.page'));
const SubscriptionSettingsPage = lazy(
	() => import('@/pages/app/Settings/SubscriptionSettings.page'),
);
const FilesPage = lazy(() => import('@/pages/app/Files/Files.page'));
const ConnectedAppsPage = lazy(() => import('@/pages/app/Apps/Apps.page'));
const HistoryPage = lazy(() => import('@/pages/app/History/History.page'));

const WorkspaceRouteShell = ({ children }: { children: ReactNode }) => (
	<div className='flex h-full min-h-0 bg-zinc-50 dark:bg-[#07080b]'>
		<div className='hidden shrink-0 lg:block'>
			<WorkspaceSidebar />
		</div>
		{children}
	</div>
);

const AppPages = [
	{
		path: '/app',
		element: (
			<WorkspaceRouteShell>
				<WorkflowsPage />
			</WorkspaceRouteShell>
		),
	},
	{
		path: '/app/workflows',
		element: (
			<WorkspaceRouteShell>
				<WorkflowsPage />
			</WorkspaceRouteShell>
		),
	},
	{
		path: '/app/files',
		element: (
			<WorkspaceRouteShell>
				<FilesPage />
			</WorkspaceRouteShell>
		),
	},
	{
		path: '/app/apps',
		element: (
			<WorkspaceRouteShell>
				<ConnectedAppsPage />
			</WorkspaceRouteShell>
		),
	},
	{
		path: '/app/history',
		element: (
			<WorkspaceRouteShell>
				<HistoryPage />
			</WorkspaceRouteShell>
		),
	},
	{
		path: '/app/settings/profile/general',
		element: <WorkspaceSettingsPage />,
	},
	{
		path: '/app/settings/profile/subscription',
		element: <SubscriptionSettingsPage />,
	},
	{
		path: '/settings/profile/subscription',
		element: <SubscriptionSettingsPage />,
	},
];

export default AppPages;
