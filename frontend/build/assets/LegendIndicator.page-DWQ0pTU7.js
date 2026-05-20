import{j as e,c as j}from"./vendor-D_nTE7E-.js";import{H as p,r as g,z as u,p as n,a as Z,C as h,G as a,J as r,K as c,N as d,V as i,O as o,aB as v,aC as W}from"./chunk-icon-Pdyc-Xig.js";import{a as C}from"./colors.type-CqQ4Yd5W.js";import{M as N}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const G=s=>{const{children:t,className:m,color:l,...b}=s,x={primary:"bg-primary-500",secondary:"bg-secondary-500",zinc:"bg-zinc-500",red:"bg-red-500",amber:"bg-amber-500",lime:"bg-lime-500",emerald:"bg-emerald-500",sky:"bg-sky-500",blue:"bg-blue-500",violet:"bg-violet-500"};return e.jsxs("div",{className:j("flex items-center gap-2",m),...b,children:[e.jsx("div",{className:`h-2 w-2 rounded-full ${l&&x[l]}`}),t]})},y="data:text/markdown;base64,YGBgdHN4CjxMZWdlbmRJbmRpY2F0b3IgY29sb3I9J3ByaW1hcnknPlByaW1hcnk8L0xlZ2VuZEluZGljYXRvcj4KPExlZ2VuZEluZGljYXRvciBjb2xvcj0nc2Vjb25kYXJ5Jz5TZWNvbmRhcnk8L0xlZ2VuZEluZGljYXRvcj4KPExlZ2VuZEluZGljYXRvciBjb2xvcj0nemluYyc+WmluYzwvTGVnZW5kSW5kaWNhdG9yPgo8TGVnZW5kSW5kaWNhdG9yIGNvbG9yPSdyZWQnPlJlZDwvTGVnZW5kSW5kaWNhdG9yPgo8TGVnZW5kSW5kaWNhdG9yIGNvbG9yPSdhbWJlcic+QW1iZXI8L0xlZ2VuZEluZGljYXRvcj4KPExlZ2VuZEluZGljYXRvciBjb2xvcj0nbGltZSc+TGltZTwvTGVnZW5kSW5kaWNhdG9yPgo8TGVnZW5kSW5kaWNhdG9yIGNvbG9yPSdlbWVyYWxkJz5FbWVyYWxkPC9MZWdlbmRJbmRpY2F0b3I+CjxMZWdlbmRJbmRpY2F0b3IgY29sb3I9J3NreSc+U2t5PC9MZWdlbmRJbmRpY2F0b3I+CjxMZWdlbmRJbmRpY2F0b3IgY29sb3I9J2JsdWUnPkJsdWU8L0xlZ2VuZEluZGljYXRvcj4KPExlZ2VuZEluZGljYXRvciBjb2xvcj0ndmlvbGV0Jz5WaW9sZXQ8L0xlZ2VuZEluZGljYXRvcj4KYGBgCg==",I=`import { FC, HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';

// @start-snippet:: interface
interface ILegendIndicatorProps extends HTMLProps<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	color?: TColors;
}
// @end-snippet:: interface
const LegendIndicator: FC<ILegendIndicatorProps> = (props) => {
	const { children, className, color, ...rest } = props;

	const colorClass: Record<TColors, string> = {
		primary: 'bg-primary-500',
		secondary: 'bg-secondary-500',
		zinc: 'bg-zinc-500',
		red: 'bg-red-500',
		amber: 'bg-amber-500',
		lime: 'bg-lime-500',
		emerald: 'bg-emerald-500',
		sky: 'bg-sky-500',
		blue: 'bg-blue-500',
		violet: 'bg-violet-500',
	};

	return (
		<div className={classNames('flex items-center gap-2', className)} {...rest}>
			<div className={\`h-2 w-2 rounded-full \${color && colorClass[color]}\`}></div>
			{children}
		</div>
	);
};

export default LegendIndicator;
`,V=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(g,{className:"flex-col items-start!",children:[e.jsx(u,{list:[{...n.documentation.baseComponent},{...n.documentation.baseComponent.subPages.legendIndicator}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(Z,{icon:n.documentation.baseComponent.subPages.legendIndicator.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:n.documentation.baseComponent.subPages.legendIndicator.text})]})]})}),e.jsx(h,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Browse and customize beautiful Tailwind CSS buttons in various styles, states, and sizes. Find active, disabled, pill, icon, and other free button examples."}),e.jsx("div",{className:"text-3xl font-bold",children:"Props"}),e.jsxs(a,{children:[e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"ColorPicker",color:"emerald",size:"text-3xl"},children:"Colors - color"}),e.jsx(i,{children:e.jsx("code",{children:"TColors"})}),e.jsx(i,{children:"LegendIndicator"})]})}),e.jsxs(o,{children:[e.jsx("div",{className:"text-zinc-500",children:"Zebra-striping list items."}),e.jsx(v,{mdFile:y,inIFrame:!1,children:C.map(s=>e.jsx(G,{color:s,children:e.jsx("span",{className:"capitalize",children:s})},s))})]})]}),e.jsxs(a,{children:[e.jsx(r,{children:e.jsx(c,{children:e.jsx(d,{children:"API"})})}),e.jsx(o,{children:e.jsx(N,{code:W(I,"interface")})})]})]})})]});export{V as default};
