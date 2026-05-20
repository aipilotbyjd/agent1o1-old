import{j as e}from"./vendor-D_nTE7E-.js";import{H as i,r as s,z as t,p as a,s as o,x as l,y as c,E as n,C as m,aX as x,aY as r,aC as d}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const p=`// @start-snippet:: dataCardBrowserExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/icon/Icon';
import ProgressCircular from '@/components/ui/ProgressCircular';
import Checkbox from '@/components/form/Checkbox';
import { useState } from 'react';

const DataCardBrowserExample = () => {
	const [checked, setChecked] = useState<boolean>(true);
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'DashboardBrowsing',
							color: 'emerald',
							size: 'text-3xl',
						}}>
						Browsers
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Badge variant='outline' color='emerald' rounded='rounded-full'>
						<Icon icon='Tick02' /> Good
					</Badge>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<ProgressCircular
							type='quarter'
							color='emerald'
							value={85}
							bgStrokeWidth={4}
							circleStrokeWidth={2}
							className='!size-48'>
							<div>
								<div>85%</div>
								<div className='text-xs'>Progress</div>
							</div>
						</ProgressCircular>
						<div className='text-zinc-500'>
							Visitors are viewing website from the desktop device. 57% of all users
							are using MacOS
						</div>
					</div>
					<div className='col-span-4 flex flex-col gap-2 rounded-lg bg-zinc-500/10 p-4'>
						<Icon icon='Chrome' size='text-4xl' color='zinc' />
						<div className='text-zinc-500'>Chrome</div>
						<div className='text-2xl font-extrabold'>48%</div>
					</div>
					<div className='col-span-4 flex flex-col gap-2 rounded-lg bg-zinc-500/10 p-4'>
						<Icon icon='Safari' size='text-4xl' color='zinc' />
						<div className='text-zinc-500'>Safari</div>
						<div className='text-2xl font-extrabold'>36%</div>
					</div>
					<div className='col-span-4 flex flex-col gap-2 rounded-lg bg-zinc-500/10 p-4'>
						<Icon icon='Browser' size='text-4xl' color='zinc' />
						<div className='text-zinc-500'>Other</div>
						<div className='text-2xl font-extrabold'>16%</div>
					</div>
				</div>
			</CardBody>
			<CardFooter>
				<div className='flex w-full gap-4 rounded-lg border border-zinc-500/25 p-4'>
					<div className='flex grow items-center gap-2'>
						<Icon icon='Notification01' size='text-2xl' />
						<div>
							<div>Push Notification</div>
							<div className='text-sm text-zinc-500'>
								Automatically send me notifications
							</div>
						</div>
					</div>
					<div>
						<Checkbox
							variant='switch'
							checked={checked}
							onChange={(event) => {
								setChecked(event.target.checked);
							}}
						/>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default DataCardBrowserExample;
// @end-snippet:: dataCardBrowserExampleSource
`,v=`// @start-snippet:: dataCardStatCardsWithProgressExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/icon/Icon';
import priceFormat from '@/utils/priceFormat.util';
import Progress, { ProgressBar } from '@/components/ui/Progress';

const DataCardStatCardsWithProgressExample = () => {
	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{ icon: 'SaleTag01', color: 'emerald', size: 'text-3xl' }}>
						Sales
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<EXAMPLE.Ui.Dropdown.Range />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
					<Card>
						<CardBody>
							<div className='flex flex-col gap-2'>
								<div className='text-zinc-500'>In-store sales</div>
								<div className='flex items-center gap-2'>
									<span className='text-2xl font-bold'>
										{priceFormat(24581.58)}
									</span>
									<Badge variant='default' color='emerald' rounded='rounded-lg'>
										<Icon icon='TradeUp' /> 3.46
									</Badge>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardBody>
							<div className='flex flex-col gap-2'>
								<div className='text-zinc-500'>Website sales</div>
								<div className='flex items-center gap-2'>
									<span className='text-2xl font-bold'>
										{priceFormat(64835.56)}
									</span>
									<Badge variant='default' color='red' rounded='rounded-lg'>
										<Icon icon='TradeDown' /> 4.41
									</Badge>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardBody>
							<div className='flex flex-col gap-2'>
								<div className='text-zinc-500'>Discount</div>
								<div className='flex items-center gap-2'>
									<span className='text-2xl font-bold'>
										{priceFormat(1341.58)}
									</span>
									<Badge variant='default' color='emerald' rounded='rounded-lg'>
										<Icon icon='TradeUp' /> 24
									</Badge>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>

				<div className='mt-8 flex flex-col gap-2'>
					<div className='text-zinc-500'>Monthly closed sales</div>
					<div className='flex items-center gap-2'>
						<span className='text-2xl font-bold'>{priceFormat(54283.28)}</span>
					</div>
					<div>
						<div className='mb-2 flex justify-center divide-x divide-zinc-500/25'>
							<div className='flex flex-1 items-center justify-center gap-2'>
								<div className='size-2 rounded-full bg-red-500'></div>
								<div>Bad</div>
							</div>
							<div className='flex flex-1 items-center justify-center gap-2'>
								<div className='size-2 rounded-full bg-amber-500'></div>
								<div>Average</div>
							</div>
							<div className='flex flex-1 items-center justify-center gap-2'>
								<div className='size-4 rounded-full bg-blue-500'></div>
								<div className='font-bold'>Good</div>
							</div>
							<div className='flex flex-1 items-center justify-center gap-2'>
								<div className='size-2 rounded-full bg-emerald-500'></div>
								<div>Excellent</div>
							</div>
						</div>
						<Progress>
							<ProgressBar value={68} color='blue' />
						</Progress>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default DataCardStatCardsWithProgressExample;
// @end-snippet:: dataCardStatCardsWithProgressExampleSource
`,h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(t,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.dataVisualization},{...a.examples.exampleMain.subPages.dataVisualization.subPages.dataCards}]})}),e.jsxs(o,{children:[e.jsx(l,{}),e.jsx(c,{}),e.jsx(n.Ui.Dropdown.Notifications,{})]})]}),e.jsx(m,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(x,{title:"Data Cards",description:"A sleek dashboard with various data cards featuring progress bars, charts, and timesheet summaries."}),e.jsx(r,{title:"Browser",iFrameProps:{initialWidth:480},code:d(p,"dataCardBrowserExampleSource"),children:e.jsx(n.DataVisualization.DataCard.Browser,{})}),e.jsx(r,{title:"Stat Cards with Progress",iFrameProps:{initialWidth:768},code:d(v,"dataCardStatCardsWithProgressExampleSource"),children:e.jsx(n.DataVisualization.DataCard.StatCardsWithProgress,{})})]})})]});export{h as default};
