import{j as e}from"./vendor-D_nTE7E-.js";import{H as l,r as o,z as c,p as s,a as m,C,G as n,J as d,K as r,V as t,O as a,N as b,aC as x}from"./chunk-icon-Pdyc-Xig.js";import{M as i}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const p=`import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import useAsideStatus from '@/hooks/useAsideStatus';
import { TIcons } from '@/types/icons.type';
import Icon from '@/components/icon/Icon';

// @start-snippet:: interface
interface IAsideHeadProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const AsideHead: FC<IAsideHeadProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Aside/AsideHead'
			className={classNames('flex items-center justify-between px-4 pb-2', className)}
			{...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface IAsideBodyProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const AsideBody: FC<IAsideBodyProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Aside/AsideBody'
			className={classNames('h-full overflow-x-scroll px-4', 'no-scrollbar', className)}
			{...rest}>
			<div className='sticky top-0 h-4 bg-linear-to-b from-zinc-100 to-zinc-900/0 dark:from-zinc-900'></div>
			{children}
			<div className='sticky bottom-0 h-4 bg-linear-to-t from-zinc-100 to-zinc-900/0 dark:from-zinc-900'></div>
		</div>
	);
};

// @start-snippet:: interface
interface IAsideQuickContainerProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const AsideQuickContainer: FC<IAsideQuickContainerProps> = (props) => {
	const { children, className, ...rest } = props;
	const { asideStatus } = useAsideStatus();
	return (
		<div
			className={classNames(
				'mb-4 grid gap-2',
				{
					'grid-cols-2': asideStatus,
					'grid-cols-1': !asideStatus,
				},
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface IAsideQuickNavProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	icon?: TIcons;
	className?: string;
	isActive?: boolean;
}
// @end-snippet:: interface
export const AsideQuickNav: FC<IAsideQuickNavProps> = (props) => {
	const { icon, children, className, isActive, ...rest } = props;
	const { asideStatus } = useAsideStatus();

	return (
		<div
			data-component-name='Aside/AsideQuickNav'
			className={classNames(
				'flex cursor-pointer flex-col items-center justify-between gap-2 overflow-hidden rounded-xl',
				// 'transition-all duration-300 ease-in-out',
				{ 'bg-primary-500 hover:bg-primary-500/50 text-zinc-900': isActive },
				{
					'bg-white text-zinc-600 hover:bg-zinc-100/25 dark:bg-zinc-950 dark:hover:bg-zinc-950/50':
						!isActive,
				},
				{ 'p-4': asideStatus, 'p-2.5': !asideStatus },
				'transition-colors duration-300 ease-in-out',
				className,
			)}
			{...rest}>
			<div>{icon && <Icon icon={icon} size={asideStatus ? 'text-2xl' : 'text-xl'} />}</div>
			{asideStatus && <div className=''>{children}</div>}
		</div>
	);
};

// @start-snippet:: interface
interface IAsideFooterProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const AsideFooter: FC<IAsideFooterProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Aside/AsideFooter'
			className={classNames('px-4', className)}
			{...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface IAsideProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const Aside: FC<IAsideProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus } = useAsideStatus();
	return (
		<aside
			data-component-name='Aside'
			className={classNames(
				'peer',
				'fixed top-0 bottom-0 z-40 md:z-20',
				'flex flex-col',
				'bg-zinc-100',
				'py-2',
				'z-[100]',
				'dark:bg-zinc-900 dark:text-white',
				'transition-all duration-300 ease-in-out',
				className,
				// Mobile Design
				'max-md:w-[20rem] max-md:shadow-2xl max-md:ltr:-left-[20rem] max-md:rtl:-right-[20rem]',
				{
					'md:w-[20rem]': asideStatus,
					'md:w-[5.25em]': !asideStatus,
					'max-md:ltr:-left-[20rem] max-md:rtl:-right-[20rem]': !asideStatus,
					'max-md:ltr:left-0 max-md:rtl:right-0': asideStatus,
				},
			)}
			{...rest}>
			{children}
		</aside>
	);
};

export default Aside;
`,J="data:text/markdown;base64,YGBgdHN4Ci8vIC4uLgoKY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbCgl7CgkJcGF0aDogJy8nLAoJCWVsZW1lbnQ6IDxQcm92aWRlcnMgLz4sCgkJY2hpbGRyZW46IFsKCQkJewoJCQkJcGF0aDogJy8nLAoJCQkJZWxlbWVudDogPFJvb3QgLz4sCgkJCQljaGlsZHJlbjogWwoJCQkJCXsKCQkJCQkJcGF0aDogJy8nLAoJCQkJCQllbGVtZW50OiA8TGFuZGluZ1BhZ2UgLz4sCgkJCQkJfSwKCQkJCQkvLyBQdWJsaWMgcm91dGVzCgkJCQkJewoJCQkJCQlwYXRoOiBwYWdlcy5wYWdlc0V4YW1wbGVzLmxvZ2luLnRvLAoJCQkJCQllbGVtZW50OiA8TG9naW5QYWdlIC8+LAoJCQkJCX0sCgkJCQkJewoJCQkJCQlwYXRoOiBwYWdlcy5wYWdlc0V4YW1wbGVzLnNpZ251cC50bywKCQkJCQkJZWxlbWVudDogPFJlZ2lzdGVyUGFnZSAvPiwKCQkJCQl9LAoJCQkJCXsKCQkJCQkJcGF0aDogcGFnZXMucGFnZXNFeGFtcGxlcy51bmRlckNvbnN0cnVjdGlvbi50bywKCQkJCQkJZWxlbWVudDogPFVuZGVyQ29uc3RydWN0aW9uUGFnZSAvPiwKCQkJCQl9LAoJCQkJCXsKCQkJCQkJcGF0aDogJyonLAoJCQkJCQllbGVtZW50OiA8UGFnZTQwNFBhZ2UgLz4sCgkJCQkJfSwKCQkJCQkvLyBQcm90ZWN0ZWQgcm91dGVzCgkJCQkJewoJCQkJCQllbGVtZW50OiA8UHJvdGVjdGVkIHJvbGU9J2FkbWluJyAvPiwKCQkJCQkJY2hpbGRyZW46IFsKCQkJCQkJCXsKCQkJCQkJCQllbGVtZW50OiA8RGVmYXVsdExheW91dCAvPiwKCQkJCQkJCQljaGlsZHJlbjogWwoJCQkJCQkJCQkvLyBBcHBzCgkJCQkJCQkJCXsKCQkJCQkJCQkJCS8vIFNhbGVzCgkJCQkJCQkJCQlwYXRoOiBwYWdlcy5hcHBzLnNhbGVzLnRvLAoJCQkJCQkJCQkJZWxlbWVudDogPFNhbGVzTGF5b3V0IC8+LAoJCQkJCQkJCQkJY2hpbGRyZW46IFsKCQkJCQkJCQkJCQl7CgkJCQkJCQkJCQkJCXBhdGg6IHBhZ2VzLmFwcHMuc2FsZXMudG8sCgkJCQkJCQkJCQkJCWVsZW1lbnQ6IDxTYWxlc0Rhc2hib2FyZFBhZ2UgLz4sCgkJCQkJCQkJCQkJfSwKCQkJCQkJCQkJCV0sCgkJCQkJCQkJCX0sCgkJCQkJCQkJXSwKCQkJCQkJCX0sCgkJCQkJCV0sCgkJCQkJfSwKCQkJCV0sCgkJCX0sCgkJXSwKCX0sCl0pOwoKLy8gLi4uCmBgYAo=",k="data:text/markdown;base64,YGBgdHN4CmltcG9ydCBBc2lkZSwgeyBBc2lkZUJvZHksIEFzaWRlRm9vdGVyLCBBc2lkZUhlYWQgfSBmcm9tICcuL0FzaWRlJzsKaW1wb3J0IFdyYXBwZXIgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9XcmFwcGVyJzsKaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyJzsKCmNvbnN0IERlZmF1bHRMYXlvdXQgPSAoKSA9PiB7CglyZXR1cm4gKAoJCTw+CgkJCTxBc2lkZT4KCQkJCTxBc2lkZUhlYWQ+ey8qIEFzaWRlSGVhZCBjb250ZW50IGlzIGhlcmUgKi99PC9Bc2lkZUhlYWQ+CgkJCQk8QXNpZGVCb2R5PnsvKiBBc2lkZUJvZHkgY29udGVudCBpcyBoZXJlICovfTwvQXNpZGVCb2R5PgoJCQkJPEFzaWRlRm9vdGVyPnsvKiBBc2lkZUZvb3RlciBjb250ZW50IGlzIGhlcmUgKi99PC9Bc2lkZUZvb3Rlcj4KCQkJPC9Bc2lkZT4KCQkJPFdyYXBwZXI+CgkJCQk8T3V0bGV0IC8+CgkJCTwvV3JhcHBlcj4KCQk8Lz4KCSk7Cn07CgpleHBvcnQgZGVmYXVsdCBEZWZhdWx0TGF5b3V0OwpgYGAK",v=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsxs(o,{className:"flex-col items-start!",children:[e.jsx(c,{list:[{...s.documentation.layout},{...s.documentation.layout.subPages.aside}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(m,{icon:s.documentation.layout.subPages.aside.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:s.documentation.layout.subPages.aside.text})]})]})}),e.jsx(C,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"You can create a custom Aside for each page by using specially designed components tailored for the Aside section."}),e.jsx("h1",{children:"General Use"}),e.jsx("div",{children:"The general layout of the components:"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex h-[50rem] w-[18rem] animate-pulse flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Aside",e.jsx("div",{className:"flex items-center justify-between rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideHead"}),e.jsxs("div",{className:"no-scrollbar flex h-full flex-col gap-2 overflow-x-scroll rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:["AsideBody",e.jsx("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"Search"}),e.jsxs("div",{className:"rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["AsideQuickContainer",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"AsideQuickNav"})]}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:["Nav",e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavTitle"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavItem"}),e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-500/50 p-2",children:"NavCollapse"})]})]}),e.jsx("div",{className:"rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:"AsideFooter"})]}),e.jsxs("div",{className:"flex h-[50rem] w-full flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2",children:["Wrapper",e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Header"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"HeaderRight"})]})]}),e.jsxs("div",{className:"flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:[e.jsx("div",{children:"Subheader"}),e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderLeft"}),e.jsx("div",{className:"flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2",children:"SubheaderRight"})]})]}),e.jsx("div",{className:"flex h-full flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2",children:e.jsx("div",{children:"Container"})})]})]}),e.jsx("div",{children:"After preparing it as shown in the example above, you can use a router layout like the one below to reuse the same example across multiple pages."}),e.jsxs(n,{children:[e.jsx(d,{children:e.jsx(r,{children:e.jsx(t,{children:"// src/Routes/index.tsx"})})}),e.jsx(a,{children:e.jsx(i,{mdFile:J})})]}),e.jsxs(n,{children:[e.jsx(d,{children:e.jsx(r,{children:e.jsx(t,{children:"// src/layouts/Default.layout.tsx"})})}),e.jsx(a,{children:e.jsx(i,{mdFile:k})})]}),e.jsxs(n,{children:[e.jsx(d,{children:e.jsx(r,{children:e.jsx(b,{children:"API"})})}),e.jsx(a,{children:e.jsx(i,{code:x(p,"interface")})})]})]})})]});export{v as default};
