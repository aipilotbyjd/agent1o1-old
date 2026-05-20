import{j as e}from"./vendor-D_nTE7E-.js";import{H as m,r as x,z as p,p as n,a as j,C as b,G as s,J as r,K as a,N as t,O as i,aB as l,V as c,aC as g}from"./chunk-icon-Pdyc-Xig.js";import{b as d}from"./index-CtDFLBYu.js";import{a as h}from"./colors.type-CqQ4Yd5W.js";import{M as C}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u="data:text/markdown;base64,YGBgdHN4CjxTcGlubmVyIC8+CmBgYAo=",f="data:text/markdown;base64,YGBgdHN4CjxTcGlubmVyIGNvbG9yPSdwcmltYXJ5JyAvPgo8U3Bpbm5lciBjb2xvcj0nc2Vjb25kYXJ5JyAvPgo8U3Bpbm5lciBjb2xvcj0nemluYycgLz4KPFNwaW5uZXIgY29sb3I9J3JlZCcgLz4KPFNwaW5uZXIgY29sb3I9J2FtYmVyJyAvPgo8U3Bpbm5lciBjb2xvcj0nbGltZScgLz4KPFNwaW5uZXIgY29sb3I9J2VtZXJhbGQnIC8+CjxTcGlubmVyIGNvbG9yPSdza3knIC8+CjxTcGlubmVyIGNvbG9yPSdibHVlJyAvPgo8U3Bpbm5lciBjb2xvcj0ndmlvbGV0JyAvPgpgYGAK",v=`import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';

// @start-snippet:: interface
interface ISpinnerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	color?: TColors;
}
// @end-snippet:: interface
const Spinner: FC<ISpinnerProps> = (props) => {
	const { className, color = themeConfig.themeColor, ...rest } = props;

	const colorClass: Record<TColors, string> = {
		primary: 'text-primary-500',
		secondary: 'text-secondary-500',
		zinc: 'text-zinc-500',
		red: 'text-red-500',
		amber: 'text-amber-500',
		lime: 'text-lime-500',
		emerald: 'text-emerald-500',
		sky: 'text-sky-500',
		blue: 'text-blue-500',
		violet: 'text-violet-500',
	};

	return (
		<div
			className={classNames(
				'inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent',
				[\`\${color && colorClass[color]}\`],
				className,
			)}
			role='status'
			aria-label='loading'
			{...rest}>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
Spinner.displayName = 'Spinner';

export default Spinner;
`,B=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(x,{className:"flex-col items-start!",children:[e.jsx(p,{list:[{...n.documentation.baseComponent},{...n.documentation.baseComponent.subPages.spinners}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(j,{icon:n.documentation.baseComponent.subPages.spinners.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:n.documentation.baseComponent.subPages.spinners.text})]})]})}),e.jsx(b,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Spinner component indicates a loading state using a rotating circle animation. A visual cue for loading pages, cards, components, forms, etc."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(s,{children:[e.jsx(r,{children:e.jsx(a,{children:e.jsx(t,{iconProps:{icon:"BookOpen02",color:"emerald",size:"text-3xl"},children:"Basic usage"})})}),e.jsxs(i,{children:[e.jsx("div",{className:"text-zinc-500",children:"A simple loading status."}),e.jsx(l,{mdFile:u,inIFrame:!1,children:e.jsx(d,{})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:e.jsxs(a,{children:[e.jsx(t,{iconProps:{icon:"ColorPicker",color:"amber",size:"text-3xl"},children:"Color - color"}),e.jsx(c,{children:e.jsx("code",{children:"TColors"})}),e.jsx(c,{children:"Spinner"})]})}),e.jsxs(i,{children:[e.jsx("div",{className:"text-zinc-500",children:"Predefined spinner color styles."}),e.jsx(l,{mdFile:f,inIFrame:!1,children:e.jsx("div",{className:"flex gap-4",children:h.map(o=>e.jsx(d,{color:o},o))})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:e.jsx(a,{children:e.jsx(t,{children:"API"})})}),e.jsx(i,{children:e.jsx(C,{code:g(v,"interface")})})]})]})})]});export{B as default};
