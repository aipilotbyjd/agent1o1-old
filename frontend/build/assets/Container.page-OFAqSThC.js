import{j as e}from"./vendor-D_nTE7E-.js";import{H as d,r as a,z as s,p as r,a as n,C as o,G as l,J as i,K as t,N as c,O as x,aC as m}from"./chunk-icon-Pdyc-Xig.js";import{M as b}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const h=`import { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

// @start-snippet:: interface
type TContainerBreakpoint =
	| 'container'
	| 'sm:container'
	| 'md:container'
	| 'lg:container'
	| 'xl:container'
	| '2xl:container'
	| null;

interface IContainerProps {
	children: ReactNode;
	className?: string;
	breakpoint?: TContainerBreakpoint;
}
// @end-snippet:: interface

const Container = forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
	const { children, className, breakpoint = 'container', ...rest } = props;

	return (
		<div
			ref={ref}
			data-component-name='Container'
			className={classNames(
				'mx-auto h-full w-full bg-white px-2 pt-4 pb-2 dark:bg-zinc-950',
				breakpoint,
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
});
Container.displayName = 'Container';

export default Container;
`,N=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsxs(a,{className:"flex-col items-start!",children:[e.jsx(s,{list:[{...r.documentation.layout},{...r.documentation.layout.subPages.container}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(n,{icon:r.documentation.layout.subPages.container.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:r.documentation.layout.subPages.container.text})]})]})}),e.jsx(o,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"You can use the carefully prepared components and examples prepared with these components to meet your project's needs here as you wish."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex h-[50rem] w-[18rem] flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Aside",e.jsx("div",{className:"flex items-center justify-between rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideHead"}),e.jsxs("div",{className:"no-scrollbar flex h-full flex-col gap-2 overflow-x-scroll rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:["AsideBody",e.jsx("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"Search"}),e.jsxs("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["AsideQuickContainer",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"AsideQuickNav"})]}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["Nav",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavTitle"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavItem"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavCollapse"})]})]}),e.jsx("div",{className:"rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideFooter"})]}),e.jsxs("div",{className:"flex h-[50rem] w-full flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Wrapper",e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Header"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderRight"})]})]}),e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Subheader"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderRight"})]})]}),e.jsx("div",{className:"flex h-full animate-pulse flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:e.jsx("div",{children:"Container"})})]})]}),e.jsxs(l,{children:[e.jsx(i,{children:e.jsx(t,{children:e.jsx(c,{children:"API"})})}),e.jsx(x,{children:e.jsx(b,{code:m(h,"interface")})})]})]})})]});export{N as default};
