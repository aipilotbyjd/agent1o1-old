import{j as a}from"./vendor-D_nTE7E-.js";import{H as s,r as i,z as t,p as n,s as o,x as l,y as c,E as e,C as r,aX as d,aY as p,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u=`// @start-snippet:: quickActionsLargeGroupButtonExampleSource
import { Atlassian, Dropbox, Slack } from '@/assets/images';
import Button from '@/components/ui/Button';

const QuickActionsLargeGroupButtonExample = () => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex cursor-pointer gap-4 rounded-lg bg-zinc-500/10 p-4 transition-all duration-300 ease-in-out hover:bg-zinc-500/5'>
				<div className='shrink'>
					<img src={Dropbox} alt='' className='size-12' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='text-xl font-bold'>Dropbox</div>
					<div className='text-zinc-500'>
						Connect the application to manage shared files
					</div>
					<div className=''>
						<Button aria-label='Connect' className='p-0!'>
							Connect
						</Button>
					</div>
				</div>
			</div>
			<div className='flex cursor-pointer gap-4 rounded-lg bg-zinc-500/10 p-4 transition-all duration-300 ease-in-out hover:bg-zinc-500/5'>
				<div className='shrink'>
					<img src={Slack} alt='' className='size-12' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='text-xl font-bold'>Slack</div>
					<div className='text-zinc-500'>
						Connect the application to manage shared files
					</div>
					<div className=''>
						<Button aria-label='Connect' className='p-0!'>
							Connect
						</Button>
					</div>
				</div>
			</div>
			<div className='flex cursor-pointer gap-4 rounded-lg bg-zinc-500/10 p-4 transition-all duration-300 ease-in-out hover:bg-zinc-500/5'>
				<div className='shrink'>
					<img src={Atlassian} alt='' className='size-12' />
				</div>
				<div className='flex flex-col gap-2'>
					<div className='text-xl font-bold'>Atlassian</div>
					<div className='text-zinc-500'>
						Connect the application to manage shared files
					</div>
					<div className=''>
						<Button aria-label='Connect' className='p-0!'>
							Connect
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickActionsLargeGroupButtonExample;
// @end-snippet:: quickActionsLargeGroupButtonExampleSource
`,N=()=>a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(i,{children:a.jsx(t,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.pageSections},{...n.examples.exampleMain.subPages.pageSections.subPages.quickActions}]})}),a.jsxs(o,{children:[a.jsx(l,{}),a.jsx(c,{}),a.jsx(e.Ui.Dropdown.Notifications,{})]})]}),a.jsx(r,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(d,{title:"Quick Actions",description:"Explore colorful and vibrant quick action card blocks."}),a.jsx(p,{title:"Large Group Button",iFrameProps:{initialWidth:480},code:m(u,"quickActionsLargeGroupButtonExampleSource"),children:a.jsx("div",{className:"flex flex-col gap-4",children:a.jsx(e.PageSections.QuickActions.LargeGroupButton,{})})})]})})]});export{N as default};
