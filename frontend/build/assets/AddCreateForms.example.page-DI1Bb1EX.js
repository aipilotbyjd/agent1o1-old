import{j as e}from"./vendor-D_nTE7E-.js";import{H as r,r as n,z as d,p as a,s as t,x as o,y as l,E as s,C as i,aX as p,aY as m,aC as x}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const c=`// @start-snippet:: addCreateNewUserModalExampleSource
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal, { Content, ModalBody, ModalHeader } from '@/components/ui/Modal';
import EXAMPLE from '@/examples/_index';

const AddCreateNewUserModalExample = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<div>
				<Button
					icon='UserAdd02'
					variant='solid'
					onClick={() => setIsOpen(true)}
					aria-label='New User'>
					New User
				</Button>
				<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
					<ModalHeader>Add User</ModalHeader>
					<ModalBody className='p-0!'>
						<EXAMPLE.Forms.AddCreate.NewUser />
					</ModalBody>
				</Modal>
			</div>
		</>
	);
};

export default AddCreateNewUserModalExample;
// @end-snippet:: addCreateNewUserModalExampleSource

export const AddCreateNewUserModalExamplePreview = () => {
	return (
		<Content>
			<ModalHeader>Filter</ModalHeader>
			<ModalBody className='p-0!'>
				<EXAMPLE.Forms.AddCreate.NewUser />
			</ModalBody>
		</Content>
	);
};
`,N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(n,{children:e.jsx(d,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.overlays},{...a.examples.exampleMain.subPages.overlays.subPages.addAndCreateForms}]})}),e.jsxs(t,{children:[e.jsx(o,{}),e.jsx(l,{}),e.jsx(s.Ui.Dropdown.Notifications,{})]})]}),e.jsx(i,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(p,{title:"Add/Create Forms",description:"Simplified data inputs with date pickers, upload forms to create admin Add/Create Form Modals."}),e.jsx(m,{title:"New User",code:x(c,"addCreateNewUserModalExampleSource"),iFrameProps:{initialWidth:640},children:e.jsx(s.Overlays.AddCreate.NewUserModal,{})})]})})]});export{N as default};
