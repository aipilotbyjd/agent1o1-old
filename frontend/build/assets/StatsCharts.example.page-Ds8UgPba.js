import{j as n}from"./vendor-D_nTE7E-.js";import{H as a,r as s,z as i,p as e,s as r,x as o,y as d,E as t,C as l,aX as c,aY as p,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const h=`// @start-snippet:: statChartsWithLineExampleSource
import Card, { CardBody } from '@/components/ui/Card';
import { useState } from 'react';
import Chart from '@/components/utils/Chart';
import { IChartOptions } from '@/interface/chart.interface';
import Icon from '@/components/icon/Icon';
import Badge from '@/components/ui/Badge';

const StatChartsWithLineExample = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'New User',
				data: [10, 41, 35, 64, 31, 62, 41, 91, 125],
			},
		],
		options: {
			chart: {
				height: 60,
				width: '120',
				type: 'line',
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
				axisBorder: {
					show: false,
				},
			},
			grid: {
				show: false,
			},
		},
	});
	const [state2] = useState<IChartOptions>({
		series: [
			{
				name: 'New User',
				data: [23, 27, 22, 16, 31, 62, 41, 36, 32],
			},
		],
		options: {
			chart: {
				height: 60,
				width: '120',
				type: 'line',
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
				axisBorder: {
					show: false,
				},
			},
			grid: {
				show: false,
			},
		},
	});
	const [state3] = useState<IChartOptions>({
		series: [
			{
				name: 'New User',
				data: [10, 12, 17, 13, 18, 12, 21, 11, 12],
			},
		],
		options: {
			chart: {
				height: 60,
				width: '120',
				type: 'line',
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
				axisBorder: {
					show: false,
				},
			},
			grid: {
				show: false,
			},
		},
	});
	const [state4] = useState<IChartOptions>({
		series: [
			{
				name: 'New User',
				data: [10, 41, 35, 64, 31, 62, 41, 25, 25],
			},
		],
		options: {
			chart: {
				height: 60,
				width: '120',
				type: 'line',
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
				axisBorder: {
					show: false,
				},
			},
			grid: {
				show: false,
			},
		},
	});
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<Card>
				<CardBody>
					<div className='flex flex-col'>
						<div className='text-sm font-semibold text-zinc-500 uppercase'>USERS</div>
						<div className='flex items-center justify-between gap-4'>
							<div className='text-4xl font-bold'>1,253</div>
							<div className='w-fit'>
								<Chart
									options={state.options}
									series={state.series}
									type={state.options.chart?.type}
									height={state.options.chart?.height}
									width={state.options.chart?.width}
								/>
							</div>
						</div>
						<div className='flex items-center gap-2 text-xs'>
							<Badge variant='soft' color='emerald' className='p-1'>
								<Icon icon='TradeUp' /> 7.6%
							</Badge>
							<div className='text-zinc-500'>from 1148</div>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<div className='flex flex-col'>
						<div className='text-sm font-semibold text-zinc-500 uppercase'>
							AVG. CLICK RATE
						</div>
						<div className='flex items-center justify-between gap-4'>
							<div className='text-4xl font-bold'>32,859</div>
							<div className='w-fit'>
								<Chart
									options={state2.options}
									series={state2.series}
									type={state2.options.chart?.type}
									height={state2.options.chart?.height}
									width={state2.options.chart?.width}
								/>
							</div>
						</div>
						<div className='flex items-center gap-2 text-xs'>
							<Badge variant='soft' color='red' className='p-1'>
								<Icon icon='TradeDown' /> 8.3%
							</Badge>
							<div className='text-zinc-500'>from 36,224</div>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<div className='flex flex-col'>
						<div className='text-sm font-semibold text-zinc-500 uppercase'>
							SESSIONS
						</div>
						<div className='flex items-center justify-between gap-4'>
							<div className='text-4xl font-bold'>12,447</div>
							<div className='w-fit'>
								<Chart
									options={state3.options}
									series={state3.series}
									type={state3.options.chart?.type}
									height={state3.options.chart?.height}
									width={state3.options.chart?.width}
								/>
							</div>
						</div>
						<div className='flex items-center gap-2 text-xs'>
							<Badge variant='soft' color='emerald' className='p-1'>
								<Icon icon='TradeUp' /> 2.4%
							</Badge>
							<div className='text-zinc-500'>from 11158</div>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<div className='flex flex-col'>
						<div className='text-sm font-semibold text-zinc-500 uppercase'>
							SESSION DURATION
						</div>
						<div className='flex items-center justify-between gap-4'>
							<div className='text-4xl font-bold'>24m 52s</div>
							<div className='w-fit'>
								<Chart
									options={state4.options}
									series={state4.series}
									type={state4.options.chart?.type}
									height={state4.options.chart?.height}
									width={state4.options.chart?.width}
								/>
							</div>
						</div>
						<div className='flex items-center gap-2 text-xs'>
							<Badge variant='soft' color='zinc' className='p-1'>
								<Icon icon='MinusSign' /> 0.0%
							</Badge>
							<div className='text-zinc-500'>from 24m 52s</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default StatChartsWithLineExample;
// @end-snippet:: statChartsWithLineExampleSource
`,u=()=>n.jsxs(n.Fragment,{children:[n.jsxs(a,{children:[n.jsx(s,{children:n.jsx(i,{list:[{...e.examples.exampleMain},{...e.examples.exampleMain.subPages.dataVisualization},{...e.examples.exampleMain.subPages.dataVisualization.subPages.statsCharts}]})}),n.jsxs(r,{children:[n.jsx(o,{}),n.jsx(d,{}),n.jsx(t.Ui.Dropdown.Notifications,{})]})]}),n.jsx(l,{children:n.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[n.jsx(c,{title:"Stats Charts",description:"The Card Stats component leverages interactive charts and dynamic data visualizations to deliver a clear, component-based summary of key metrics in real time."}),n.jsx(p,{title:"With Line",code:m(h,"statChartsWithLineExampleSource"),children:n.jsx(t.DataVisualization.StatCharts.WithLine,{})})]})})]});export{u as default};
