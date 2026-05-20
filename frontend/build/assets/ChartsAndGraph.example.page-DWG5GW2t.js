import{j as a}from"./vendor-D_nTE7E-.js";import{H as i,r as d,z as s,p as t,s as o,x as l,y as p,E as n,C as c,aX as m,aY as e,aC as r}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const h=`// @start-snippet:: chartAndGraphLineChartDatepickerExampleSource
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardHeaderSeparator,
	CardTitle,
} from '@/components/ui/Card';
import ChartLinePart from '@/parts/charts/ChartLine.part';
import EX_Dropdown from '@/examples/ui/dropdown/_index';
import EX_Stat from '@/examples/dataVisualization/stats/_index';

const ChartAndGraphLineChartDatepickerExample = () => {
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'Energy',
							color: 'blue',
							size: 'text-3xl',
						}}>
						Sales
					</CardTitle>
					<CardHeaderSeparator />
					<EX_Stat.Price />
				</CardHeaderChild>
				<CardHeaderChild>
					<EX_Dropdown.Datepicker />
					<EX_Dropdown.Download />
					<EX_Dropdown.Others />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<ChartLinePart />
			</CardBody>
		</Card>
	);
};

export default ChartAndGraphLineChartDatepickerExample;
// @end-snippet:: chartAndGraphLineChartDatepickerExampleSource
`,C=`// @start-snippet:: chartAndGraphBasicRangeAreaChartExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import ChartRangeAreaPart from '@/parts/charts/ChartRangeArea.part';
import Button from '@/components/ui/Button';

const ChartAndGraphBasicRangeAreaChartExample = () => {
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'UserGroup',
							color: 'emerald',
							size: 'text-3xl',
						}}>
						Teams
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Button color='emerald' aria-label='Full Reports'>
						Full Reports
					</Button>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<ChartRangeAreaPart />
			</CardBody>
		</Card>
	);
};

export default ChartAndGraphBasicRangeAreaChartExample;
// @end-snippet:: chartAndGraphBasicRangeAreaChartExampleSource
`,v=`// @start-snippet:: chartAndGraphTimelineChartReportExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import ChartTimelinePart from '@/parts/charts/ChartTimeline.part';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Logo } from '@/assets/images';
import dayjs from 'dayjs';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';
import AvatarGroup from '@/components/ui/AvatarGroup';
import Progress from '@/components/ui/Progress';
import Icon from '@/components/icon/Icon';
import Button from '@/components/ui/Button';

const ChartAndGraphTimelineChartReportExample = () => {
	return (
		<Card>
			<CardHeader className='border-b border-inherit'>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'AnalysisTextLink',
							color: 'blue',
							size: 'text-3xl',
						}}>
						Report
					</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='!p-0'>
				<div className='grid grid-cols-12 divide-y divide-zinc-500/25 lg:divide-x lg:divide-y-0'>
					<div className='col-span-12 py-4 lg:col-span-8'>
						<ChartTimelinePart />
					</div>
					<div className='col-span-12 lg:col-span-4'>
						<div className='flex h-full flex-col divide-y divide-zinc-500/25 py-4'>
							<div className='grow'>
								<div className='grid grid-cols-12 divide-y divide-zinc-500/25'>
									<div className='col-span-12 flex p-4'>
										<div className='flex grow gap-4'>
											<div className='shrink-0'>
												<img src={Logo} alt='' className='size-12' />
											</div>
											<div className=''>
												<div>Boltify</div>
												<div className='font-bold'>
													React Tailwind CSS Admin & Starter Template
												</div>
											</div>
										</div>
										<div className=''>
											<Button icon='More' variant='link' aria-label='' />
										</div>
									</div>
									<div className='col-span-12 grid grid-cols-12 gap-4 divide-x divide-zinc-500/50 p-4'>
										<div className='col-span-4'>
											<div>23</div>
											<div className='text-zinc-500'>Tasks</div>
										</div>
										<div className='col-span-4'>
											<div>11</div>
											<div className='text-zinc-500'>In Progress</div>
										</div>
										<div className='col-span-4'>
											<div>12</div>
											<div className='text-zinc-500'>Completed</div>
										</div>
									</div>
									<div className='col-span-12 grid grid-cols-12 gap-4 p-4'>
										<div className='col-span-3 text-zinc-500'>Due Date</div>
										<div className='col-span-9'>
											{dayjs().add(21, 'day').format('DD MMM, YYYY')}
										</div>

										<div className='col-span-3 text-zinc-500'>Category</div>
										<div className='col-span-9'>
											<Badge variant='soft' color='zinc'>
												<div className='h-4 w-1 rounded-2xl bg-blue-500'></div>
												<span>UI/UX</span>
											</Badge>
										</div>

										<div className='col-span-3 text-zinc-500'>Assignee</div>
										<div className='col-span-9 flex items-center gap-2'>
											<Avatar src={Avatar1} size='w-6' />{' '}
											<span>John Doe</span>
										</div>

										<div className='col-span-3 text-zinc-500'>Team</div>
										<div className='col-span-9 flex items-center gap-2'>
											<AvatarGroup color='zinc'>
												<Avatar src={Avatar2} size='w-6' />
												<Avatar src={Avatar3} size='w-6' />
												<Avatar src={Avatar4} size='w-6' />
												<Avatar src={Avatar5} size='w-6' />
											</AvatarGroup>
										</div>
									</div>
								</div>
							</div>
							<div className='flex items-center px-4 pt-4'>
								<div className='flex grow items-center gap-4'>
									<div className='flex items-center gap-2 text-zinc-500'>
										<Icon icon='Message01' /> <span>2</span>
									</div>
									<div className='h-4 border-e border-zinc-500/25'></div>
									<div className='flex items-center gap-2 text-zinc-500'>
										<Icon icon='Attachment' /> <span>5</span>
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<div className='w-32'>
										<Progress value={42} />
									</div>
									<div className='text-zinc-500'>42%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default ChartAndGraphTimelineChartReportExample;
// @end-snippet:: chartAndGraphTimelineChartReportExampleSource
`,x=`// @start-snippet:: chartAndGraphTimelineExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild } from '@/components/ui/Card';
import { useState } from 'react';
import Chart from '@/components/utils/Chart';
import { IChartOptions } from '@/interface/chart.interface';
import dayjs from 'dayjs';
import EXAMPLE from '@/examples/_index';

const ChartAndGraphTimelineExample = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				data: [
					{
						x: 'Analysis',
						y: [dayjs().add(-5, 'day').valueOf(), dayjs().add(-2, 'day').valueOf()],
						fillColor: '#2b7fff',
					},
					{
						x: 'Design',
						y: [dayjs().add(-2, 'day').valueOf(), dayjs().add(0, 'day').valueOf()],
						fillColor: '#00bc7d',
					},
					{
						x: 'Coding',
						y: [dayjs().add(0, 'day').valueOf(), dayjs().add(8, 'day').valueOf()],
						fillColor: '#8e51ff',
					},
					{
						x: 'Testing',
						y: [dayjs().add(6, 'day').valueOf(), dayjs().add(10, 'day').valueOf()],
						fillColor: '#fd9a00',
					},
					{
						x: 'Deployment',
						y: [dayjs().add(9, 'day').valueOf(), dayjs().add(10, 'day').valueOf()],
						fillColor: '#fb2c36',
					},
				],
			},
		],
		options: {
			chart: {
				height: 400,
				type: 'rangeBar',
			},
			plotOptions: {
				bar: {
					horizontal: true,
					distributed: true,
					dataLabels: {
						hideOverflowingLabels: false,
					},
					borderRadius: 8,
				},
			},
			dataLabels: {
				enabled: true,
				formatter(val, opts) {
					const label = opts?.w.globals.labels[opts.dataPointIndex] ?? '';
					// @ts-ignore
					const a = dayjs(val[0]);
					// @ts-ignore
					const b = dayjs(val[1]);
					const diff = b.diff(a, 'days');
					return \`\${label}: \${diff}\${diff > 1 ? ' days' : ' day'}\`;
				},
				style: {
					colors: ['#f3f4f5', '#fff'],
				},
			},
			annotations: {
				xaxis: [
					{
						x: dayjs().valueOf(),
						borderColor: '#fb2c36',
						label: {
							style: {
								color: '#fff',
								background: '#fb2c36',
							},
							text: 'Today',
						},
					},
				],
			},
			xaxis: {
				type: 'datetime',
			},
			grid: {
				row: {
					opacity: 1,
				},
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
				markers: { size: 6, shape: 'square', strokeWidth: 0, offsetX: -4 },
			},
		},
	});

	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<EXAMPLE.Ui.Dropdown.CompanyDetails />
				</CardHeaderChild>
				<CardHeaderChild>
					<EXAMPLE.Ui.Dropdown.Assign />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
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

export default ChartAndGraphTimelineExample;
// @end-snippet:: chartAndGraphTimelineExampleSource
`,y=()=>a.jsxs(a.Fragment,{children:[a.jsxs(i,{children:[a.jsx(d,{children:a.jsx(s,{list:[{...t.examples.exampleMain},{...t.examples.exampleMain.subPages.dataVisualization},{...t.examples.exampleMain.subPages.dataVisualization.subPages.chartsAndGraph}]})}),a.jsxs(o,{children:[a.jsx(l,{}),a.jsx(p,{}),a.jsx(n.Ui.Dropdown.Notifications,{})]})]}),a.jsx(c,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(m,{title:"Charts & Graphs",description:"Charts and graphs featuring a variety of Apexcharts bars and sorting toptions."}),a.jsx(e,{title:"Line Chart Datepicker",code:r(h,"chartAndGraphLineChartDatepickerExampleSource"),children:a.jsx(n.DataVisualization.ChartAndGraph.LineChartDatepicker,{})}),a.jsx(e,{title:"Basic Range Area Chart",code:r(C,"chartAndGraphBasicRangeAreaChartExampleSource"),children:a.jsx(n.DataVisualization.ChartAndGraph.BasicRangeAreaChart,{})}),a.jsx(e,{title:"Timeline Chart Report",code:r(v,"chartAndGraphTimelineChartReportExampleSource"),children:a.jsx(n.DataVisualization.ChartAndGraph.TimelineChartReport,{})}),a.jsx(e,{title:"Timeline Chart",code:r(x,"chartAndGraphTimelineExampleSource"),children:a.jsx(n.DataVisualization.ChartAndGraph.TimelineChart,{})})]})})]});export{y as default};
