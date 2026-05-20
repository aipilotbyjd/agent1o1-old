import{j as e}from"./vendor-D_nTE7E-.js";import{H as r,r as t,z as i,p as n,s as o,x as s,y as l,E as a,C as d,aX as c,aY as p,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const x=`// @start-snippet:: generalOrderActivityExampleSource
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal, { Content, ModalBody, ModalHeader } from '@/components/ui/Modal';
import EXAMPLE from '@/examples/_index';
import Icon from '@/components/icon/Icon';

const GeneralOrderActivityExample = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<Button
				aria-label='Dispatched for delivery'
				variant='soft'
				color='emerald'
				icon='DeliverySent02'
				onClick={() => setIsOpen(true)}>
				Dispatched for delivery
			</Button>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<ModalHeader className='flex gap-4'>
					<div className='flex items-center gap-2'>
						<Icon icon='ShippingLoading' color='emerald' />
						<div>Order activity</div>
					</div>
				</ModalHeader>
				<ModalBody>
					<EXAMPLE.PageSections.Timeline.OrderActivity />
				</ModalBody>
			</Modal>
		</>
	);
};

export default GeneralOrderActivityExample;
// @end-snippet:: generalOrderActivityExampleSource

export const GeneralOrderActivityExamplePreview = () => {
	return (
		<Content>
			<ModalHeader className='flex gap-4'>
				<div className='flex items-center gap-2'>
					<Icon icon='ShippingLoading' color='emerald' />
					<div>Order activity</div>
				</div>
			</ModalHeader>
			<ModalBody>
				<EXAMPLE.PageSections.Timeline.OrderActivity />
			</ModalBody>
		</Content>
	);
};
`,M=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(i,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.overlays},{...n.examples.exampleMain.subPages.overlays.subPages.general}]})}),e.jsxs(o,{children:[e.jsx(s,{}),e.jsx(l,{}),e.jsx(a.Ui.Dropdown.Notifications,{})]})]}),e.jsx(d,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(c,{title:"General",description:"Make every action effortless with admin modal forms, invoices, and keyboard shortcuts."}),e.jsx(p,{title:"Order Activity",code:m(x,"generalOrderActivityExampleSource"),children:e.jsx("div",{children:e.jsx(a.Overlays.General.OrderActivity,{})})})]})})]});export{M as default};
