import { create } from 'zustand';

type TWorkflowShellState = {
	sidebarCollapsed: boolean;
	mobileSidebarOpen: boolean;
	activeWorkspaceView:
		| 'dashboard'
		| 'agents'
		| 'skills'
		| 'files'
		| 'apps'
		| 'history'
		| 'workflows'
		| 'automations'
		| 'integrations'
		| 'analytics'
		| 'team'
		| 'settings'
		| 'editor';
	isCreateFlowModalOpen: boolean;
	setActiveWorkspaceView: (view: TWorkflowShellState['activeWorkspaceView']) => void;
	setCreateFlowModalOpen: (open: boolean) => void;
	closeMobileSidebar: () => void;
	toggleMobileSidebar: () => void;
	toggleSidebar: () => void;
};

export const useWorkflowShellStore = create<TWorkflowShellState>((set) => ({
	sidebarCollapsed: false,
	mobileSidebarOpen: false,
	activeWorkspaceView: 'workflows',
	isCreateFlowModalOpen: false,
	setActiveWorkspaceView: (view) => set({ activeWorkspaceView: view }),
	setCreateFlowModalOpen: (open) => set({ isCreateFlowModalOpen: open }),
	closeMobileSidebar: () => set({ mobileSidebarOpen: false }),
	toggleMobileSidebar: () => set((state) => ({ mobileSidebarOpen: !state.mobileSidebarOpen })),
	toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}));
