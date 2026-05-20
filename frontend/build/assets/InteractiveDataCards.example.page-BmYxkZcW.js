import{j as a}from"./vendor-D_nTE7E-.js";import{H as i,r as s,z as o,p as n,s as d,x as l,y as c,E as e,C as m,aX as p,aY as t,aC as r}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const v=`// @start-snippet:: interactiveDataCardTrafficExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Progress, { ProgressBar } from '@/components/ui/Progress';
import Avatar from '@/components/ui/Avatar';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5 } from '@/assets/images';
import AvatarGroup from '@/components/ui/AvatarGroup';
import Button from '@/components/ui/Button';
import EX_Dropdown from '@/examples/ui/dropdown/_index';

const InteractiveDataCardTrafficExample = () => {
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'TrafficLight',
							color: 'amber',
							size: 'text-3xl',
						}}>
						Referral Traffic
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<EX_Dropdown.Download />
					<EX_Dropdown.Others />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<Progress className='gap-1'>
							<ProgressBar value={32} />
							<ProgressBar value={24} color='emerald' />
							<ProgressBar value={15} color='amber' />
						</Progress>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-blue-500'></div>
							<div className=''>google.com</div>
						</div>
						<div className='font-mono text-zinc-500'>96k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-emerald-500'></div>
							<div className=''>instagram.com</div>
						</div>
						<div className='font-mono text-zinc-500'>72k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-amber-500'></div>
							<div className=''>youtube.com</div>
						</div>
						<div className='font-mono text-zinc-500'>45k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-zinc-500'></div>
							<div className=''>Others</div>
						</div>
						<div className='font-mono text-zinc-500'>29k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<AvatarGroup size='w-10'>
							<Avatar src={Avatar1} name='John Doe' color='emerald' />
							<Avatar src={Avatar2} name='John Doe' color='amber' />
							<Avatar src={Avatar3} name='John Doe' color='violet' />
							<Avatar src={Avatar4} name='John Doe' color='zinc' />
							<Avatar src={Avatar5} name='John Doe' color='secondary' />
						</AvatarGroup>
						<div className='text-zinc-500'>184K more</div>
					</div>
				</div>
			</CardBody>
			<CardFooter className='border-t border-zinc-500/25 !py-2'>
				<Button className='w-full' aria-label='View full reports'>
					View full reports
				</Button>
			</CardFooter>
		</Card>
	);
};

export default InteractiveDataCardTrafficExample;
// @end-snippet:: interactiveDataCardTrafficExampleSource
`,C=`// @start-snippet:: interactiveDataCardLineChartWithDatepickerExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import Badge from '@/components/ui/Badge';
import priceFormat from '@/utils/priceFormat.util';
import { useState } from 'react';
import { IChartOptions } from '@/interface/chart.interface';
import Chart from '@/components/utils/Chart';
import EX_Dropdown from '@/examples/ui/dropdown/_index';

const InteractiveDataCardLineChartWithDatepickerExample = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'Store Sales',
				data: [31, 40, 28, 51, 42, 109, 100],
			},
			{
				name: 'Online Sales',
				data: [11, 32, 45, 32, 34, 52, 41],
			},
			{
				name: 'Other Sales',
				data: [3, 4, 1, 2, 23, 6, 7],
			},
		],
		options: {
			chart: { height: 250, type: 'line' },
			legend: {
				show: false,
			},
			dataLabels: { enabled: false },
			stroke: {},
			xaxis: {
				labels: { show: false },
				axisBorder: { show: false },
			},
			yaxis: {
				labels: { show: false },
			},
			tooltip: { x: { format: 'dd MMM yyyy HH:mm' } },
			grid: { yaxis: { lines: { show: false } } },
			fill: {
				type: 'gradient',
				gradient: {
					type: 'horizontal',
					opacityFrom: 0,
					opacityTo: 1,
					stops: [0, 50, 100],
					colorStops: [],
				},
			},
		},
	});
	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'SaleTag02',
							color: 'blue',
							size: 'text-3xl',
						}}>
						Total Sales
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<EX_Dropdown.Datepicker />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='flex flex-col gap-4'>
					<div className='mb-4 flex gap-2'>
						<div className='text-2xl text-zinc-500'>$</div>
						<div className='text-6xl font-semibold'>49.500</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-blue-500'></div>
							<div className=''>Store Sales</div>
						</div>
						<div className=''>{priceFormat(23264)}</div>
						<Badge variant='soft' color='emerald' rounded='rounded-lg'>
							<Icon icon='TradeUp' /> 7.6
						</Badge>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-emerald-500'></div>
							<div className=''>Online Sales</div>
						</div>
						<div className=''>{priceFormat(23264)}</div>
						<Badge variant='soft' color='emerald' rounded='rounded-lg'>
							<Icon icon='TradeUp' /> 7.6
						</Badge>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-amber-500'></div>
							<div className=''>Other Sales</div>
						</div>
						<div className=''>{priceFormat(23264)}</div>
						<Badge variant='soft' color='emerald' rounded='rounded-lg'>
							<Icon icon='TradeUp' /> 7.6
						</Badge>
					</div>
					<Chart
						options={state.options}
						series={state.series}
						type={state.options.chart?.type}
						height={state.options.chart?.height}
					/>
				</div>
			</CardBody>
		</Card>
	);
};

export default InteractiveDataCardLineChartWithDatepickerExample;
// @end-snippet:: interactiveDataCardLineChartWithDatepickerExampleSource
`,h=`// @start-snippet:: interactiveDataCardStatsWithLineChartExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import { useState } from 'react';
import Chart from '@/components/utils/Chart';
import { IChartOptions } from '@/interface/chart.interface';
import EX_Stat from '@/examples/dataVisualization/stats/_index';

const InteractiveDataCardStatsWithLineChartExample = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'Support request',
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: 'Resolved request',
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
			{
				name: 'Ticket resolved by AI',
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '50%',
					borderRadius: 7,
					borderRadiusApplication: 'around',
					borderRadiusWhenStacked: 'last',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			},
			yaxis: {
				title: {
					text: 'Ticket',
				},
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter(val) {
						return \`$ \${val} thousands\`;
					},
				},
			},
		},
	});
	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'AutoConversations',
							color: 'amber',
							size: 'text-3xl',
						}}>
						Total conversations
					</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<EX_Stat.TradeBadge />
				<Chart
					options={state.options}
					series={state.series}
					type={state.options.chart?.type}
					height={state.options.chart?.height}
				/>
			</CardBody>
		</Card>
	);
};

export default InteractiveDataCardStatsWithLineChartExample;
// @end-snippet:: interactiveDataCardStatsWithLineChartExampleSource
`,D=()=>a.jsxs(a.Fragment,{children:[a.jsxs(i,{children:[a.jsx(s,{children:a.jsx(o,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.dataVisualization},{...n.examples.exampleMain.subPages.dataVisualization.subPages.interactiveDataCards}]})}),a.jsxs(d,{children:[a.jsx(l,{}),a.jsx(c,{}),a.jsx(e.Ui.Dropdown.Notifications,{})]})]}),a.jsx(m,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(p,{title:"Interactive Data Cards",description:"A collection of different chart types (bar charts, pie charts, area charts, etc.) arranged a dashboard with interactive dropdowns and date pickers."}),a.jsx(t,{title:"Traffic",iFrameProps:{initialWidth:400},code:r(v,"interactiveDataCardTrafficExampleSource"),children:a.jsx(e.DataVisualization.InteractiveDataCards.Traffic,{})}),a.jsx(t,{title:"Line Chart with Datepicker",iFrameProps:{initialWidth:600},code:r(C,"interactiveDataCardLineChartWithDatepickerExampleSource"),children:a.jsx(e.DataVisualization.InteractiveDataCards.LineChartWithDatepicker,{})}),a.jsx(t,{title:"Stats with Line Chart",iFrameProps:{initialWidth:960},code:r(h,"interactiveDataCardStatsWithLineChartExampleSource"),children:a.jsx(e.DataVisualization.InteractiveDataCards.StatsWithLineChart,{})})]})})]});export{D as default};
