import{j as e}from"./vendor-D_nTE7E-.js";import{H as n,r as t,z as r,p as a,s as o,x as i,y as d,E as s,C as c,aX as l,aY as p,aC as C}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const m=`// @start-snippet:: contactsUserConnectExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';

const ContactsUserConnectExample = () => {
	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Connections</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<EXAMPLE.PageSections.ListGroup.AvatarWithButton />
			</CardBody>
		</Card>
	);
};

export default ContactsUserConnectExample;
// @end-snippet:: contactsUserConnectExampleSource
`,g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.cards},{...a.examples.exampleMain.subPages.cards.subPages.contacts}]})}),e.jsxs(o,{children:[e.jsx(i,{}),e.jsx(d,{}),e.jsx(s.Ui.Dropdown.Notifications,{})]})]}),e.jsx(c,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(l,{title:"Contacts",description:"The Contacts section features inquiry forms, company details such as addresses, and other essential contact information."}),e.jsx(p,{title:"User Connect",iFrameProps:{initialWidth:480},code:C(m,"contactsUserConnectExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(s.Card.Contacts.UserConnect,{})})})]})})]});export{g as default};
