import{j as e}from"./vendor-D_nTE7E-.js";import{H as d,r as s,z as a,p as r,a as n,C as t,G as o,J as l,K as i,N as c,O as m,aC as h}from"./chunk-icon-Pdyc-Xig.js";import{M as x}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u=`import { FC, HTMLAttributes, ReactNode, RefObject, useRef } from 'react';
import classNames from 'classnames';
import useAsideStatus from '@/hooks/useAsideStatus';
import Icon from '@/components/icon/Icon';
import useDomRect from '@/hooks/useDomRect';

// @start-snippet:: interface
interface IHeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const HeaderLeft: FC<IHeaderLeftProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus, setAsideStatus } = useAsideStatus();

	return (
		<div
			data-component-name='Header/HeaderLeft'
			className={classNames('flex items-center gap-4', 'ltr:mr-auto rtl:ml-auto', className)}
			{...rest}>
			<button
				type='button'
				aria-label='Toggle Aside Menu'
				onClick={() => setAsideStatus(!asideStatus)}
				className='flex h-12 w-12 items-center justify-center md:hidden'>
				<Icon icon={asideStatus ? 'SidebarLeft01' : 'SidebarLeft'} className='text-2xl' />
			</button>
			{children}
		</div>
	);
};
HeaderLeft.displayName = 'HeaderLeft';

// @start-snippet:: interface
interface IHeaderRightProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const HeaderRight: FC<IHeaderRightProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Header/HeaderRight'
			className={classNames('flex items-center gap-4', 'ltr:ml-auto rtl:mr-auto', className)}
			{...rest}>
			{children}
		</div>
	);
};
HeaderRight.displayName = 'HeaderRight';

// @start-snippet:: interface
interface IHeaderProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const Header: FC<IHeaderProps> = (props) => {
	const { children, className, ...rest } = props;

	const divRef = useRef<HTMLDivElement>(null);
	const [domRect] = useDomRect(divRef as RefObject<HTMLElement>);

	return (
		<>
			<style>{\`:root {--header-height: \${domRect?.height || 0}px}\`}</style>
			<header
				ref={divRef}
				data-component-name='Header'
				className={classNames(
					'sticky top-6 z-30 mx-2 mt-2 px-5 py-4',
					'flex items-center justify-center rounded-xl shadow-md/5',
					'bg-zinc-100/50 backdrop-blur-md dark:bg-zinc-900/75',
					className,
				)}
				{...rest}>
				{children}
			</header>
		</>
	);
};
Header.displayName = 'Header';

export default Header;
`,j=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsxs(s,{className:"flex-col items-start!",children:[e.jsx(a,{list:[{...r.documentation.layout},{...r.documentation.layout.subPages.header}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(n,{icon:r.documentation.layout.subPages.header.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:r.documentation.layout.subPages.header.text})]})]})}),e.jsx(t,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"If you are going to use the same one on more than one page, you can use it in the layout you defined. If there is data related to the page, you are free to use it in the page. If you wish, you can also work with common data with context."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex h-[50rem] w-[18rem] flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Aside",e.jsx("div",{className:"flex items-center justify-between rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideHead"}),e.jsxs("div",{className:"no-scrollbar flex h-full flex-col gap-2 overflow-x-scroll rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:["AsideBody",e.jsx("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"Search"}),e.jsxs("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["AsideQuickContainer",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"AsideQuickNav"})]}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["Nav",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavTitle"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavItem"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavCollapse"})]})]}),e.jsx("div",{className:"rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideFooter"})]}),e.jsxs("div",{className:"flex h-[50rem] w-full flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Wrapper",e.jsxs("div",{className:"flex animate-pulse flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Header"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderRight"})]})]}),e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Subheader"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderRight"})]})]}),e.jsx("div",{className:"flex h-full flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:e.jsx("div",{children:"Container"})})]})]}),e.jsxs(o,{children:[e.jsx(l,{children:e.jsx(i,{children:e.jsx(c,{children:"API"})})}),e.jsx(m,{children:e.jsx(x,{code:h(u,"interface")})})]})]})})]});export{j as default};
