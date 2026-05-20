import{j as e}from"./vendor-D_nTE7E-.js";import{H as i,r as n,z as t,p as a,s as d,x as r,y as l,E as s,C as c,aX as o,aY as p,aC as x}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const m=`// @start-snippet:: dataSnippetsUserListExampleSource
import Card, { CardBody } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';

const DataSnippetsUserListExample = () => {
	return (
		<>
			<Card>
				<CardBody>
					<div className='flex items-center gap-4'>
						<Icon icon='EditTable' color='emerald' size='text-3xl' />
						<div className=''>
							<div>user-list.xlsx</div>
							<div className='text-xs text-zinc-500'>136kb</div>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<div className='flex items-center gap-4'>
						<Icon icon='File01' color='blue' size='text-3xl' />
						<div className=''>
							<div>user-list.docx</div>
							<div className='text-xs text-zinc-500'>635kb</div>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<div className='flex items-center gap-4'>
						<Icon icon='Pdf01' color='red' size='text-3xl' />
						<div className=''>
							<div>user-list.pdf</div>
							<div className='text-xs text-zinc-500'>42kb</div>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<div className='flex items-center gap-4'>
						<Icon icon='EditTable' color='emerald' size='text-3xl' />
						<div className=''>
							<div>user-list.csv</div>
							<div className='text-xs text-zinc-500'>136kb</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default DataSnippetsUserListExample;
// @end-snippet:: dataSnippetsUserListExampleSource
`,f=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(n,{children:e.jsx(t,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.cards},{...a.examples.exampleMain.subPages.cards.subPages.dataSnippets}]})}),e.jsxs(d,{children:[e.jsx(r,{}),e.jsx(l,{}),e.jsx(s.Ui.Dropdown.Notifications,{})]})]}),e.jsx(c,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(o,{title:"Data Snippets",description:"Data Snippets offer concise data points for quick reference and easy analysis, helping users gain insights efficiently."}),e.jsx(p,{title:"User List",code:x(m,"dataSnippetsUserListExampleSource"),iFrameProps:{initialWidth:480},children:e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8",children:e.jsx(s.Card.DataSnippets.UserList,{})})})]})})]});export{f as default};
