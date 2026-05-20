import{j as e}from"./vendor-D_nTE7E-.js";import{H as d,r as a,z as s,p as r,a as n,C as t,G as o,J as l,K as i,N as c,O as h,aC as b}from"./chunk-icon-Pdyc-Xig.js";import{M as m}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const p=`import { FC, HTMLAttributes, ReactNode, RefObject, useRef } from 'react';
import classNames from 'classnames';
import useDomRect from '@/hooks/useDomRect';

// @start-snippet:: interface
interface ISubheaderLeftProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
// @end-snippet:: interface
export const SubheaderLeft: FC<ISubheaderLeftProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Subheader/SubheaderLeft'
			className={classNames('flex flex-wrap items-center gap-4', className)}
			{...rest}>
			{children}
		</div>
	);
};
SubheaderLeft.displayName = 'SubheaderLeft';

// @start-snippet:: interface
interface ISubheaderRightProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
// @end-snippet:: interface
export const SubheaderRight: FC<ISubheaderRightProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Subheader/SubheaderRight'
			className={classNames('flex flex-shrink-0 flex-wrap items-center gap-4', className)}
			{...rest}>
			{children}
		</div>
	);
};
SubheaderRight.displayName = 'SubheaderRight';

// @start-snippet:: interface
type ISubheaderSeparatorProps = HTMLAttributes<HTMLDivElement>;
// @end-snippet:: interface
export const SubheaderSeparator: FC<ISubheaderSeparatorProps> = (props) => {
	const { className, ...rest } = props;

	return (
		<div
			data-component-name='Subheader/SubheaderSeparator'
			className={classNames(
				'h-full border-e border-zinc-300/25 dark:border-zinc-800/50',
				className,
			)}
			{...rest}
		/>
	);
};
SubheaderSeparator.displayName = 'SubheaderSeparator';

// @start-snippet:: interface
interface ISubheaderProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const Subheader: FC<ISubheaderProps> = (props) => {
	const { children, className, ...rest } = props;

	const divRef = useRef<HTMLDivElement>(null);
	const [domRect] = useDomRect(divRef as RefObject<HTMLElement>);

	return (
		<>
			<style>{\`:root {--subheader-height: \${domRect?.height || 0}px}\`}</style>
			<div
				data-component-name='Subheader'
				ref={divRef}
				className={classNames(
					'sticky top-[calc(var(--header-height)+2rem)] z-20',
					'flex flex-wrap justify-between gap-4',
					'bg-white/75',
					'mx-2 mb-2 px-6 py-4',
					'rounded-xl shadow-md/5 backdrop-blur-md',
					'bg-zinc-100/50 dark:bg-zinc-900/75 dark:text-white',
					className,
				)}
				{...rest}>
				{children}
			</div>
		</>
	);
};
Subheader.displayName = 'Subheader';

export default Subheader;
`,j=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsxs(a,{className:"flex-col items-start!",children:[e.jsx(s,{list:[{...r.documentation.layout},{...r.documentation.layout.subPages.subheader}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(n,{icon:r.documentation.layout.subPages.subheader.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:r.documentation.layout.subPages.subheader.text})]})]})}),e.jsx(t,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"If you are going to use the same one on more than one page, you can use it in the layout you defined. If there is data related to the page, you are free to use it in the page. If you wish, you can also work with common data with context."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex h-[50rem] w-[18rem] flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Aside",e.jsx("div",{className:"flex items-center justify-between rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideHead"}),e.jsxs("div",{className:"no-scrollbar flex h-full flex-col gap-2 overflow-x-scroll rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:["AsideBody",e.jsx("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"Search"}),e.jsxs("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["AsideQuickContainer",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"AsideQuickNav"})]}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["Nav",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavTitle"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavItem"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavCollapse"})]})]}),e.jsx("div",{className:"rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideFooter"})]}),e.jsxs("div",{className:"flex h-[50rem] w-full flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Wrapper",e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Header"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderRight"})]})]}),e.jsxs("div",{className:"flex animate-pulse flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Subheader"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderRight"})]})]}),e.jsx("div",{className:"flex h-full flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:e.jsx("div",{children:"Container"})})]})]}),e.jsxs(o,{children:[e.jsx(l,{children:e.jsx(i,{children:e.jsx(c,{children:"API"})})}),e.jsx(h,{children:e.jsx(m,{code:b(p,"interface")})})]})]})})]});export{j as default};
