import{j as a}from"./vendor-D_nTE7E-.js";import{H as r,r as t,z as n,p as e,s as i,x as o,y as l,E as s,C as d,aX as p,aY as x,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const c=`// @start-snippet:: integrationsCardExampleSource
import Card, { CardBody } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';

const IntegrationsCardExample = () => {
	return (
		<Card className='h-full'>
			<CardBody className='flex flex-col gap-4'>
				<EXAMPLE.PageSections.QuickActions.LargeGroupButton />
			</CardBody>
		</Card>
	);
};

export default IntegrationsCardExample;
// @end-snippet:: integrationsCardExampleSource
`,E=()=>a.jsxs(a.Fragment,{children:[a.jsxs(r,{children:[a.jsx(t,{children:a.jsx(n,{list:[{...e.examples.exampleMain},{...e.examples.exampleMain.subPages.cards},{...e.examples.exampleMain.subPages.cards.subPages.integrations}]})}),a.jsxs(i,{children:[a.jsx(o,{}),a.jsx(l,{}),a.jsx(s.Ui.Dropdown.Notifications,{})]})]}),a.jsx(d,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(p,{title:"Integrations",description:"Cards showing the status of integrations to other platforms."}),a.jsx(x,{title:"Project Card",iFrameProps:{initialWidth:480},code:m(c,"integrationsCardExampleSource"),children:a.jsx("div",{className:"flex flex-col gap-4",children:a.jsx(s.Card.Integrations.Card,{})})})]})})]});export{E as default};
