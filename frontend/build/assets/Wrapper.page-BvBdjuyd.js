import{j as e}from"./vendor-D_nTE7E-.js";import{H as s,r as d,z as a,p as r,a as t,C as o,G as l,J as i,K as c,N as n,O as b,aC as m}from"./chunk-icon-Pdyc-Xig.js";import{M as u}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const p=`import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import useAsideStatus from '@/hooks/useAsideStatus';

// @start-snippet:: interface
interface IWrapperProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const Wrapper: FC<IWrapperProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus } = useAsideStatus();

	return (
		<section
			data-component-name='Wrapper'
			className={classNames(
				'flex flex-auto flex-col',
				'bg-white dark:bg-zinc-950',
				'border-s-[1rem] border-e-[1rem] border-zinc-100 md:border-s-0 dark:border-zinc-900',
				'transition-all duration-300 ease-in-out',
				className,
				{
					'md:peer-[&]:ltr:pl-[20rem] md:peer-[&]:rtl:pr-[20rem]': asideStatus,
					// Mobile Design
					'md:peer-[&]:ltr:pl-[5.25em] md:peer-[&]:rtl:pr-[5.25em]': !asideStatus,
				},
			)}
			{...rest}>
			<div className='sticky top-0 z-99 h-full max-h-4 min-h-4 bg-zinc-100 before:absolute before:start-0 before:top-[calc(1rem+1px)] before:h-4 before:w-4 before:rotate-180 before:content-[url("/src/assets/required/corner.svg")] after:absolute after:end-px after:top-4 after:h-4 after:w-4 after:-rotate-90 after:content-[url("/src/assets/required/corner.svg")] rtl:before:top-4 rtl:before:-rotate-90 rtl:after:-left-px rtl:after:rotate-180 dark:bg-zinc-900 dark:before:content-[url("/src/assets/required/dark:corner.svg")] dark:after:content-[url("/src/assets/required/dark:corner.svg")]'></div>
			{children}
			<div className='sticky bottom-0 z-99 h-full max-h-4 min-h-4 bg-zinc-100 before:absolute before:start-px before:-top-4 before:h-4 before:w-4 before:rotate-90 before:content-[url("/src/assets/required/corner.svg")] after:absolute after:end-0 after:-top-[calc(1rem+1px)] after:h-4 after:w-4 after:content-[url("/src/assets/required/corner.svg")] rtl:before:start-0 rtl:before:rotate-0 rtl:after:-top-4 rtl:after:rotate-90 dark:bg-zinc-900 dark:before:content-[url("/src/assets/required/dark:corner.svg")] dark:after:content-[url("/src/assets/required/dark:corner.svg")]'></div>
		</section>
	);
};

export default Wrapper;
`,v=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(d,{className:"flex-col items-start!",children:[e.jsx(a,{list:[{...r.documentation.layout},{...r.documentation.layout.subPages.wrapper}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(t,{icon:r.documentation.layout.subPages.wrapper.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:r.documentation.layout.subPages.wrapper.text})]})]})}),e.jsx(o,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Generally, you can use it in layouts such as DefaultLayout, but you can use it however you want as long as you preserve the structure in the scheme."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex h-[50rem] w-[18rem] flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Aside",e.jsx("div",{className:"flex items-center justify-between rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideHead"}),e.jsxs("div",{className:"no-scrollbar flex h-full flex-col gap-2 overflow-x-scroll rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:["AsideBody",e.jsx("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"Search"}),e.jsxs("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["AsideQuickContainer",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"AsideQuickNav"})]}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["Nav",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavTitle"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavItem"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavCollapse"})]})]}),e.jsx("div",{className:"rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideFooter"})]}),e.jsxs("div",{className:"flex h-[50rem] w-full animate-pulse flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Wrapper",e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Header"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderRight"})]})]}),e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Subheader"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderRight"})]})]}),e.jsx("div",{className:"flex h-full flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:e.jsx("div",{children:"Container"})})]})]}),e.jsxs(l,{children:[e.jsx(i,{children:e.jsx(c,{children:e.jsx(n,{children:"API"})})}),e.jsx(b,{children:e.jsx(u,{code:m(p,"interface")})})]})]})})]});export{v as default};
