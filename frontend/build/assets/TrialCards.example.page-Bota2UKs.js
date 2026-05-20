import{j as a}from"./vendor-D_nTE7E-.js";import{H as n,r as t,z as s,p as e,s as d,x as i,y as l,E as r,C as o,aX as C,aY as m,aC as p}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const c=`// @start-snippet:: trialCardAlertExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
} from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import Progress from '@/components/ui/Progress';

const TrialCardAlertExample = () => {
	const [status, setStatus] = useState<boolean>(true);
	if (status) {
		return (
			<Card>
				<CardHeader className='-my-2'>
					<CardHeaderChild>
						<CardSubTitle>Trial ends in 10 days</CardSubTitle>
					</CardHeaderChild>
					<CardHeaderChild>
						<Button
							aria-label='Cancel'
							icon='Cancel01'
							color='red'
							onClick={() => setStatus(false)}
						/>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='mb-2'>Your free trial is expiring. Upgrade to Pro 🚀</div>
					<Progress value={64} />
				</CardBody>
				<CardFooter>
					<CardFooterChild>
						<Button aria-label='Schedule a call' variant='soft' icon='Video02'>
							Schedule a call
						</Button>
					</CardFooterChild>
				</CardFooter>
			</Card>
		);
	}
	return undefined;
};

export default TrialCardAlertExample;
// @end-snippet:: trialCardAlertExampleSource
`,f=()=>a.jsxs(a.Fragment,{children:[a.jsxs(n,{children:[a.jsx(t,{children:a.jsx(s,{list:[{...e.examples.exampleMain},{...e.examples.exampleMain.subPages.cards},{...e.examples.exampleMain.subPages.cards.subPages.trialCards}]})}),a.jsxs(d,{children:[a.jsx(i,{}),a.jsx(l,{}),a.jsx(r.Ui.Dropdown.Notifications,{})]})]}),a.jsx(o,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(C,{title:"Trial Cards",description:"Cards with information for trial versions."}),a.jsx(m,{title:"Alert",iFrameProps:{initialWidth:480},code:p(c,"trialCardAlertExampleSource"),children:a.jsx("div",{className:"flex flex-col gap-4",children:a.jsx(r.Card.TrialCards.Alert,{})})})]})})]});export{f as default};
