import{j as e}from"./vendor-D_nTE7E-.js";import{H as s,r as i,z as t,p as a,s as o,x as r,y as d,E as n,C as l,aX as m,aY as c,aC as x}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const p=`// @start-snippet:: systemLogSessionExampleSource
import Card, { CardBody, CardFooter, CardHeader, CardHeaderChild } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const SystemLogSessionExample = () => {
	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<Icon icon='ComputerPhoneSync' size='text-3xl' />
				</CardHeaderChild>
				<CardHeaderChild>
					<Button aria-label='Sign out' icon='Logout03' variant='outline' color='zinc'>
						Sign out
					</Button>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='flex flex-col gap-2'>
				<div className='flex justify-between'>
					<div className='text-xl font-bold'>macOS</div>
					<div className=''>
						<Badge variant='outline'>Current</Badge>
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='text-zinc-500'>LOCATION:</div>
					<div className=''>United States</div>
				</div>
				<div className='flex justify-between'>
					<div className='text-zinc-500'>DEVICE:</div>
					<div className=''>Safari - macOS</div>
				</div>
				<div className='flex justify-between'>
					<div className='text-zinc-500'>IP ADDRESS:</div>
					<div className=''>123.456.789.012</div>
				</div>
				<div className='flex justify-between'>
					<div className='text-zinc-500'>RECENT ACTIVITY:</div>
					<div className=''>1 hour ago</div>
				</div>
			</CardBody>
			<CardFooter>
				<Button
					aria-label='Don’t recognize something?'
					variant='soft'
					color='zinc'
					icon='InformationSquare'
					className='w-full'
					dimension='lg'>
					Don’t recognize something?
				</Button>
			</CardFooter>
		</Card>
	);
};

export default SystemLogSessionExample;
// @end-snippet:: systemLogSessionExampleSource
`,f=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(t,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.cards},{...a.examples.exampleMain.subPages.cards.subPages.systemLogs}]})}),e.jsxs(o,{children:[e.jsx(r,{}),e.jsx(d,{}),e.jsx(n.Ui.Dropdown.Notifications,{})]})]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(m,{title:"System Logs",description:"Admin system logs with organized card blocks, clear badge alerts, and instant troubleshooting button links."}),e.jsx(c,{title:"Session",code:x(p,"systemLogSessionExampleSource"),iFrameProps:{initialWidth:480},children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n.Card.SystemLogs.Session,{})})})]})})]});export{f as default};
