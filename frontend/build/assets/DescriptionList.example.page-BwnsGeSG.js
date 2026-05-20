import{j as e}from"./vendor-D_nTE7E-.js";import{H as a,r as s,z as t,p as i,s as o,x as c,y as l,E as n,C as p,aX as r,aY as x,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const d=`// @start-snippet:: descriptionListSimpleWithIconExampleSource
import Icon from '@/components/icon/Icon';

const DescriptionListSimpleWithIconExample = () => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex gap-2'>
				<Icon icon='Office' size='text-2xl' color='zinc' />
				<span>Omtanke Studio</span>
			</div>
			<div className='flex gap-2'>
				<Icon icon='Location05' size='text-2xl' color='zinc' />
				<span>United States</span>
			</div>
			<div className='flex gap-2'>
				<Icon icon='Clock01' size='text-2xl' color='zinc' />
				<span>Europe/Berlin (GMT)</span>
			</div>
			<div className='flex gap-2'>
				<Icon icon='Mail01' size='text-2xl' color='zinc' />
				<span>namesurname@mail.com</span>
			</div>
			<div className='flex gap-2'>
				<Icon icon='Globe02' size='text-2xl' color='zinc' />
				<a href='/'>https://example.com/</a>
			</div>
			<div className='flex gap-2'>
				<Icon icon='Globe02' size='text-2xl' color='zinc' />
				<a href='/'>https://example.com/username</a>
			</div>
			<div className='flex gap-2'>
				<Icon icon='Globe02' size='text-2xl' color='zinc' />
				<a href='/'>https://example.com/nickname</a>
			</div>
		</div>
	);
};

export default DescriptionListSimpleWithIconExample;
// @end-snippet:: descriptionListSimpleWithIconExampleSource
`,u=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(s,{children:e.jsx(t,{list:[{...i.examples.exampleMain},{...i.examples.exampleMain.subPages.pageSections},{...i.examples.exampleMain.subPages.pageSections.subPages.descriptionList}]})}),e.jsxs(o,{children:[e.jsx(c,{}),e.jsx(l,{}),e.jsx(n.Ui.Dropdown.Notifications,{})]})]}),e.jsx(p,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(r,{title:"Description List",description:"Explore detailed and clear admin user description lists with vibrant icons, avatars, badges and links."}),e.jsx(x,{title:"Simple with Icon",iFrameProps:{initialWidth:480},code:m(d,"descriptionListSimpleWithIconExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n.PageSections.DescriptionList.SimpleWithIcon,{})})})]})})]});export{u as default};
