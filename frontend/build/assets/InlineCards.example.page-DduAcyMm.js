import{j as e}from"./vendor-D_nTE7E-.js";import{H as r,r as i,z as s,p as a,s as o,x as l,y as d,E as n,C as t,aX as c,aY as p,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const C=`// @start-snippet:: inlineCardListViewExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Ss4, Ss5 } from '@/assets/images';

const InlineCardListViewExample = () => {
	return (
		<>
			<Card className='@container grid grid-cols-12 gap-4'>
				<div className='col-span-12 flex flex-col @lg:col-span-6'>
					<CardHeader>
						<CardHeaderChild>
							<CardTitle
								iconProps={{
									icon: 'DocumentCode',
									color: 'emerald',
									size: 'text-3xl',
								}}>
								Documentation
							</CardTitle>
						</CardHeaderChild>
					</CardHeader>
					<CardBody>
						Comprehensive documentation provides clear guidelines and practical examples
						for using each UI component efficiently in your projects.
					</CardBody>
					<CardFooter className='sticky bottom-0'>
						<CardFooterChild>
							<Button
								aria-label='Learn more'
								variant='default'
								rightIcon='ArrowRight01'
								className='px-0!'>
								Learn More
							</Button>
						</CardFooterChild>
					</CardFooter>
				</div>
				<div className='col-span-12 p-4 @lg:col-span-6'>
					<img src={Ss4} alt='' className='rounded-lg' />
				</div>
			</Card>
			<Card className='@container grid grid-cols-12 gap-4'>
				<div className='col-span-12 flex flex-col @lg:col-span-6'>
					<CardHeader>
						<CardHeaderChild>
							<CardTitle
								iconProps={{
									icon: 'PerplexityAi',
									color: 'amber',
									size: 'text-3xl',
								}}>
								Examples
							</CardTitle>
						</CardHeaderChild>
					</CardHeader>
					<CardBody>
						Explore ready-to-use examples that demonstrate how to quickly build powerful
						interfaces with our components.
					</CardBody>
					<CardFooter className='sticky bottom-0'>
						<CardFooterChild>
							<Button
								aria-label='Explore examples'
								variant='default'
								rightIcon='ArrowRight01'
								className='px-0!'>
								Explore examples
							</Button>
						</CardFooterChild>
					</CardFooter>
				</div>
				<div className='col-span-12 p-4 @lg:col-span-6'>
					<img src={Ss5} alt='' className='rounded-lg' />
				</div>
			</Card>
		</>
	);
};

export default InlineCardListViewExample;
// @end-snippet:: inlineCardListViewExampleSource
`,f=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(s,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.cards},{...a.examples.exampleMain.subPages.cards.subPages.inlineCards}]})}),e.jsxs(o,{children:[e.jsx(l,{}),e.jsx(d,{}),e.jsx(n.Ui.Dropdown.Notifications,{})]})]}),e.jsx(t,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(c,{title:"Inline Cards",description:"Cards used in the form of lines."}),e.jsx(p,{title:"List View",code:m(C,"inlineCardListViewExampleSource"),iFrameProps:{initialWidth:640},children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n.Card.InlineCards.ListView,{})})})]})})]});export{f as default};
