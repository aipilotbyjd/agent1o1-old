import{j as e,c as t}from"./vendor-D_nTE7E-.js";import{H as g,r as b,z as p,p as s,a as j,C as v,G as l,J as i,K as c,N as d,V as f,O as m,aB as h,aE as o,aC as N}from"./chunk-icon-Pdyc-Xig.js";import{M as z}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const _=x=>{const{src:a,className:r,device:u="mobile",...n}=x;return u==="mobile"?e.jsx("figure",{className:t("h-auto w-60 max-w-full",r),...n,children:e.jsx("div",{className:"rounded-3xl bg-zinc-800 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-neutral-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]",children:e.jsx("img",{className:"aspect-8/16 h-auto max-w-full rounded-[1.25rem] object-cover",src:a,alt:"Mobile Placeholder"})})}):e.jsxs("figure",{className:t("relative z-1 h-auto w-[50rem] max-w-full rounded-b-lg shadow-2xl",r),...n,children:[e.jsxs("div",{className:"relative flex max-w-[50rem] items-center rounded-t-lg bg-zinc-800 px-24 py-2 dark:bg-neutral-700",children:[e.jsxs("div",{className:"absolute start-4 top-2/4 flex -translate-y-1 gap-x-1",children:[e.jsx("span",{className:"size-2 rounded-full bg-zinc-600 dark:bg-neutral-600"}),e.jsx("span",{className:"size-2 rounded-full bg-zinc-600 dark:bg-neutral-600"}),e.jsx("span",{className:"size-2 rounded-full bg-zinc-600 dark:bg-neutral-600"})]}),e.jsx("div",{className:"flex size-full items-center justify-center rounded-xs bg-zinc-700 text-[.25rem] text-zinc-400 sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400",children:"www.omtanke.studio"})]}),e.jsx("div",{className:"rounded-b-lg bg-zinc-800",children:e.jsx("img",{className:"h-auto max-w-full rounded-b-lg object-cover",src:a,alt:"Browser Placeholder"})})]})},w="data:text/markdown;base64,YGBgdHN4CjxEZXZpY2VzIGRldmljZT0nZGVza3RvcCcgc3JjPScuLi4nIC8+CjxEZXZpY2VzIGRldmljZT0nbW9iaWxlJyBzcmM9Jy4uLicgLz4KYGBgCg==",C=`import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

// @start-snippet:: interface
type TDeviceTypes = 'mobile' | 'desktop';
interface IDevicesProps extends HTMLAttributes<HTMLElement> {
	src: string;
	className?: string;
	device?: TDeviceTypes;
}
// @end-snippet:: interface
const Devices: FC<IDevicesProps> = (props) => {
	const { src, className, device = 'mobile', ...rest } = props;

	if (device === 'mobile') {
		return (
			<figure className={classNames('h-auto w-60 max-w-full', className)} {...rest}>
				<div className='rounded-3xl bg-zinc-800 p-1.5 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-neutral-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]'>
					<img
						className='aspect-8/16 h-auto max-w-full rounded-[1.25rem] object-cover'
						src={src}
						alt='Mobile Placeholder'
					/>
				</div>
			</figure>
		);
	}
	return (
		<figure
			className={classNames(
				'relative z-1 h-auto w-[50rem] max-w-full rounded-b-lg shadow-2xl',
				className,
			)}
			{...rest}>
			<div className='relative flex max-w-[50rem] items-center rounded-t-lg bg-zinc-800 px-24 py-2 dark:bg-neutral-700'>
				<div className='absolute start-4 top-2/4 flex -translate-y-1 gap-x-1'>
					<span className='size-2 rounded-full bg-zinc-600 dark:bg-neutral-600'></span>
					<span className='size-2 rounded-full bg-zinc-600 dark:bg-neutral-600'></span>
					<span className='size-2 rounded-full bg-zinc-600 dark:bg-neutral-600'></span>
				</div>
				<div className='flex size-full items-center justify-center rounded-xs bg-zinc-700 text-[.25rem] text-zinc-400 sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400'>
					www.omtanke.studio
				</div>
			</div>

			<div className='rounded-b-lg bg-zinc-800'>
				<img
					className='h-auto max-w-full rounded-b-lg object-cover'
					src={src}
					alt='Browser Placeholder'
				/>
			</div>
		</figure>
	);
};

export default Devices;
`,D=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsxs(b,{className:"flex-col items-start!",children:[e.jsx(p,{list:[{...s.documentation.baseComponent},{...s.documentation.baseComponent.subPages.devices}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(j,{icon:s.documentation.baseComponent.subPages.devices.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:s.documentation.baseComponent.subPages.devices.text})]})]})}),e.jsx(v,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Boltify's Tailwind CSS Collapse component represents toggle buttons, to show and hide or collapse and expand content or navigation items, managing its visibility."}),e.jsx("div",{className:"text-3xl font-bold",children:"Props"}),e.jsxs(l,{children:[e.jsx(i,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"device"}),e.jsx(f,{children:e.jsx("code",{children:"TDeviceTypes"})})]})}),e.jsxs(m,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic card containing a title, content and an extra corner content."}),e.jsx(h,{mdFile:w,inIFrame:!1,children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(_,{device:"desktop",src:o}),e.jsx(_,{device:"mobile",src:o})]})})]})]}),e.jsxs(l,{children:[e.jsx(i,{children:e.jsx(c,{children:e.jsx(d,{children:"API"})})}),e.jsx(m,{children:e.jsx(z,{code:N(C,"interface")})})]})]})})]});export{D as default};
