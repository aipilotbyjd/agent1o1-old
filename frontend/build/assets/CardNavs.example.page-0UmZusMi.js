import{j as a}from"./vendor-D_nTE7E-.js";import{H as t,r,z as o,p as e,s,x as l,y as i,E as n,C as d,aX as c,aY as m,aC as p}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const x=`// @start-snippet:: cardNavSoftColorExampleSource
import { ReactNode, useState } from 'react';
import Card, { CardBody, CardHeader, CardHeaderChild } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Empty from '@/components/ui/Empty';

type Tab = {
	label: string;
	content: ReactNode;
};

const CardNavSoftColorExample = () => {
	const tabs: Tab[] = [
		{
			label: 'All',
			content: (
				<div className='flex flex-col items-center justify-center gap-4'>
					<div className='text-xl font-bold'>No data</div>
					<div className='text-zinc-500'>
						No data here yet. We will notify you when there's an update.
					</div>
					<div className='w-full max-w-lg'>
						<Empty />
					</div>
					<Button aria-label='Learn more' variant='soft' color='zinc' className='mb-8'>
						Learn more
					</Button>
				</div>
			),
		},
		{
			label: 'New',
			content: (
				<div className='flex flex-col items-center justify-center gap-4'>
					<div className='text-xl font-bold'>No New data</div>
					<div className='text-zinc-500'>
						No data here yet. We will notify you when there's an update.
					</div>
					<div className='w-full max-w-lg'>
						<Empty />
					</div>
					<Button aria-label='Learn more' variant='soft' color='zinc' className='mb-8'>
						Learn more
					</Button>
				</div>
			),
		},
		{
			label: 'Archived',
			content: (
				<div className='flex flex-col items-center justify-center gap-4'>
					<div className='text-xl font-bold'>No Archived data</div>
					<div className='text-zinc-500'>
						No data here yet. We will notify you when there's an update.
					</div>
					<div className='w-full max-w-lg'>
						<Empty />
					</div>
					<Button aria-label='Learn more' variant='soft' color='zinc' className='mb-8'>
						Learn more
					</Button>
				</div>
			),
		},
	];

	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					{tabs.map((tab, i) => (
						<Button
							key={tab.label}
							onClick={() => setActiveTab(i)}
							variant={activeTab === i ? 'soft' : 'link'}
							aria-label=''>
							{tab.label}
						</Button>
					))}
				</CardHeaderChild>
			</CardHeader>
			<CardBody>{tabs[activeTab].content}</CardBody>
		</Card>
	);
};

export default CardNavSoftColorExample;
// @end-snippet:: cardNavSoftColorExampleSource
`,b=()=>a.jsxs(a.Fragment,{children:[a.jsxs(t,{children:[a.jsx(r,{children:a.jsx(o,{list:[{...e.examples.exampleMain},{...e.examples.exampleMain.subPages.cards},{...e.examples.exampleMain.subPages.cards.subPages.cardNavs}]})}),a.jsxs(s,{children:[a.jsx(l,{}),a.jsx(i,{}),a.jsx(n.Ui.Dropdown.Notifications,{})]})]}),a.jsx(d,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(c,{title:"Card Navs",description:"From segmented to bordered admin navigation tabs put every action at your fingertips."}),a.jsx(m,{title:"Soft Color",code:p(x,"cardNavSoftColorExampleSource"),children:a.jsx("div",{className:"flex flex-col gap-4",children:a.jsx(n.Card.CardNavs.SoftColor,{})})})]})})]});export{b as default};
