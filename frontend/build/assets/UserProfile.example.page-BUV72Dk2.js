import{j as e}from"./vendor-D_nTE7E-.js";import{H as t,r,z as i,p as a,s,x as o,y as l,E as n,C as c,aX as d,aY as m,aC as p}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u=`// @start-snippet:: userProfileHeaderWithTabsExampleSource
import { Avatar3, Bg } from '@/assets/images';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';

const UserProfileHeaderWithTabsExample = () => {
	return (
		<>
			<div
				style={{ backgroundImage: \`url(\${Bg}\` }}
				className='mb-12 flex h-48 items-end justify-center rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-cover bg-top p-4'>
				<Avatar
					src={Avatar3}
					name='Catherine Robertson<'
					size='w-36'
					color='zinc'
					className='relative top-1/3 border-4 border-white backdrop-blur-xl dark:border-zinc-900'
					variant='outline'
				/>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<div className='text-2xl font-bold'>Catherine Robertson</div>
				<div className='text-zinc-500'>catherine.robertson</div>
			</div>
			<div className='flex justify-between'>
				<div>
					<Button aria-label='Details' icon='UserSettings02'>
						Details
					</Button>
					<Button aria-label='Team' icon='UserGroup' variant='link'>
						Team
					</Button>
					<Button aria-label='Project' icon='DocumentValidation' variant='link'>
						Project
					</Button>
					<Button aria-label='Connections' icon='Link04' variant='link'>
						Connections
					</Button>
				</div>
				<Button aria-label='Unfollow' variant='outline' color='zinc'>
					Unfollow
				</Button>
			</div>
		</>
	);
};

export default UserProfileHeaderWithTabsExample;
// @end-snippet:: userProfileHeaderWithTabsExampleSource
`,g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(r,{children:e.jsx(i,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.pageSections},{...a.examples.exampleMain.subPages.pageSections.subPages.userProfile}]})}),e.jsxs(s,{children:[e.jsx(o,{}),e.jsx(l,{}),e.jsx(n.Ui.Dropdown.Notifications,{})]})]}),e.jsx(c,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(d,{title:"User Profile",description:"Admin user profile navigation, powered by informative modals, avatars come alive with active status indicators."}),e.jsx(m,{title:"Header With Tabs",code:p(u,"userProfileHeaderWithTabsExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n.PageSections.UserProfile.HeaderWithTabs,{})})})]})})]});export{g as default};
