import{j as e}from"./vendor-D_nTE7E-.js";import{H as t,r as s,z as r,p as a,s as l,x as o,y as i,E as n,C as d,aX as p,aY as m,aC as x}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const c=`// @start-snippet:: filterPaymentModalExampleSource
import Button from '@/components/ui/Button';
import { useState } from 'react';
import Modal, { Content, ModalBody, ModalHeader } from '@/components/ui/Modal';
import EXAMPLE from '@/examples/_index';

const FilterPaymentModalExample = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<div>
				<Button
					aria-label='Filter'
					icon='Filter'
					variant='soft'
					onClick={() => setIsOpen(true)}>
					Filter
				</Button>
				<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
					<ModalHeader>Filter</ModalHeader>
					<ModalBody className='p-0!'>
						<EXAMPLE.Forms.Filters.Payments />
					</ModalBody>
				</Modal>
			</div>
		</>
	);
};

export default FilterPaymentModalExample;
// @end-snippet:: filterPaymentModalExampleSource

export const FilterPaymentModalExamplePreview = () => {
	return (
		<Content>
			<ModalHeader>Filter</ModalHeader>
			<ModalBody className='p-0!'>
				<EXAMPLE.Forms.Filters.Payments />
			</ModalBody>
		</Content>
	);
};
`,E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.overlays},{...a.examples.exampleMain.subPages.overlays.subPages.filters}]})}),e.jsxs(l,{children:[e.jsx(o,{}),e.jsx(i,{}),e.jsx(n.Ui.Dropdown.Notifications,{})]})]}),e.jsx(d,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(p,{title:"Filters",description:"Filters Modals provide a clean way to present apzi6 options inside modal windows, helping users refine their selections."}),e.jsx(m,{title:"Payments",code:x(c,"filterPaymentModalExampleSource"),iFrameProps:{initialWidth:640},children:e.jsx(n.Overlays.Filters.PaymentModal,{})})]})})]});export{E as default};
