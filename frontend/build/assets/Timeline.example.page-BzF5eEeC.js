import{j as e}from"./vendor-D_nTE7E-.js";import{H as i,r as t,z as s,p as n,s as m,x as r,y as l,E as a,C as d,aX as c,aY as o,aC as p}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const x=`// @start-snippet:: timelineOrderActivityExampleSource
import Timeline, { TimelineHeader, TimelineItem } from '@/components/ui/Timeline';
import dayjs from 'dayjs';
import Icon from '@/components/icon/Icon';

const TimelineOrderActivityExample = () => {
	return (
		<Timeline>
			<TimelineHeader>{dayjs().add(-1, 'day').format('D MMM, YYYY')}</TimelineHeader>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='File01' size='text-xl' />
						<span>Order was placed (Order ID: #123456)</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(-23, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Your order has been placed successfully
			</TimelineItem>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='ShippingCenter' size='text-xl' />
						<span>Pick-up</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(-21.3, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Pick-up scheduled with courier
			</TimelineItem>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='ShippingLoading' size='text-xl' />
						<span>Dispatched</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(-18.5, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Item has been picked up by courier
			</TimelineItem>
			<TimelineHeader>{dayjs().format('D MMM, YYYY')}</TimelineHeader>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='ContainerTruck02' size='text-xl' />
						<span>Package arrived</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(2.31, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Package arrived at an Amazon facility, NY
			</TimelineItem>
			<TimelineItem
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='DeliverySent02' size='text-xl' />
						<span>Dispatched for delivery</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(5.93, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Package has left an Amazon facility, NY
			</TimelineItem>
			<TimelineItem
				lineClassName='after:bg-transparent!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='PackageDelivered' size='text-xl' />
						<span>Delivery</span>
					</div>
				}>
				Package will be delivered by tomorrow
			</TimelineItem>
		</Timeline>
	);
};

export default TimelineOrderActivityExample;
// @end-snippet:: timelineOrderActivityExampleSource
`,u=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(t,{children:e.jsx(s,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.pageSections},{...n.examples.exampleMain.subPages.pageSections.subPages.timeline}]})}),e.jsxs(m,{children:[e.jsx(r,{}),e.jsx(l,{}),e.jsx(a.Ui.Dropdown.Notifications,{})]})]}),e.jsx(d,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(c,{title:"Timeline",description:"Navigate your admin timeline with ease, and collapsible content revealing past entries for a clean view."}),e.jsx(o,{title:"Order Activity",iFrameProps:{initialWidth:480},code:p(x,"timelineOrderActivityExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(a.PageSections.Timeline.OrderActivity,{})})})]})})]});export{u as default};
