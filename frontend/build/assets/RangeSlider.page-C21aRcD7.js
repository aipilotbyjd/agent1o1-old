import{r as h,j as e,c as g}from"./vendor-D_nTE7E-.js";import{H as p,r as x,z as k,p as n,a as w,C as f,G as t,J as i,K as s,N as l,O as d,aB as z,W as j,aC as N}from"./chunk-icon-Pdyc-Xig.js";import{M as S}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const o=m=>{const{className:u,id:a,type:b="range",...c}=m,r=h.useId();return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:a||r,className:"sr-only",children:"Example range"}),e.jsx("input",{type:b,id:a||r,className:g("w-full cursor-pointer appearance-none bg-transparent focus:outline-hidden","[&::-moz-range-track]:h-2","[&::-moz-range-track]:w-full","[&::-moz-range-track]:rounded-full","[&::-moz-range-track]:bg-zinc-100","&::-webkit-slider-runnable-track]:h-2","[&::-webkit-slider-runnable-track]:w-full","[&::-webkit-slider-runnable-track]:rounded-full","[&::-webkit-slider-runnable-track]:bg-zinc-100","dark:[&::-webkit-slider-runnable-track]:bg-zinc-700","[&::-webkit-slider-thumb]:-mt-0.5","[&::-webkit-slider-thumb]:h-2.5","[&::-webkit-slider-thumb]:w-2.5","[&::-webkit-slider-thumb]:appearance-none","[&::-webkit-slider-thumb]:rounded-full","[&::-webkit-slider-thumb]:bg-white","[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]","[&::-webkit-slider-thumb]:transition-all","[&::-webkit-slider-thumb]:duration-150","[&::-webkit-slider-thumb]:ease-in-out","dark:[&::-webkit-slider-thumb]:bg-zinc-700","[&::-moz-range-thumb]:h-2.5","[&::-moz-range-thumb]:w-2.5","[&::-moz-range-thumb]:appearance-none","[&::-moz-range-thumb]:rounded-full","[&::-moz-range-thumb]:border-4","[&::-moz-range-thumb]:border-blue-500","[&::-moz-range-thumb]:bg-white","[&::-moz-range-thumb]:transition-all","[&::-moz-range-thumb]:duration-150","[&::-moz-range-thumb]:ease-in-out","disabled:pointer-events-none disabled:opacity-50",u),...c})]})};o.displayName="RangeSlider";const I="data:text/markdown;base64,YGBgdHN4CjxSYW5nZVNsaWRlciBtaW49ezB9IG1heD17MTAwfSBzdGVwPXsxfSB2YWx1ZT17MjV9IC8+CmBgYAo=",y=`import { FC, InputHTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import { IValidationBaseProps } from './Validation';

// @start-snippet:: interface
interface IRangeSliderProps
	extends InputHTMLAttributes<HTMLInputElement>, Partial<IValidationBaseProps> {
	className?: string;
	id?: string;
	name: string;
	type?: 'range';
}
// @end-snippet:: interface
const RangeSlider: FC<IRangeSliderProps> = (props) => {
	const { className, id, type = 'range', ...rest } = props;

	const defaultId = useId();

	return (
		<>
			<label htmlFor={id || defaultId} className='sr-only'>
				Example range
			</label>
			<input
				type={type}
				id={id || defaultId}
				className={classNames(
					'w-full cursor-pointer appearance-none bg-transparent focus:outline-hidden',
					// Range track
					'[&::-moz-range-track]:h-2',
					'[&::-moz-range-track]:w-full',
					'[&::-moz-range-track]:rounded-full',
					'[&::-moz-range-track]:bg-zinc-100',
					// Slider runnable track
					'&::-webkit-slider-runnable-track]:h-2',
					'[&::-webkit-slider-runnable-track]:w-full',
					'[&::-webkit-slider-runnable-track]:rounded-full',
					'[&::-webkit-slider-runnable-track]:bg-zinc-100',
					'dark:[&::-webkit-slider-runnable-track]:bg-zinc-700',
					// Slider thumb
					'[&::-webkit-slider-thumb]:-mt-0.5',
					'[&::-webkit-slider-thumb]:h-2.5',
					'[&::-webkit-slider-thumb]:w-2.5',
					'[&::-webkit-slider-thumb]:appearance-none',
					'[&::-webkit-slider-thumb]:rounded-full',
					'[&::-webkit-slider-thumb]:bg-white',
					'[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]',
					'[&::-webkit-slider-thumb]:transition-all',
					'[&::-webkit-slider-thumb]:duration-150',
					'[&::-webkit-slider-thumb]:ease-in-out',
					'dark:[&::-webkit-slider-thumb]:bg-zinc-700',
					// Range thumb
					'[&::-moz-range-thumb]:h-2.5',
					'[&::-moz-range-thumb]:w-2.5',
					'[&::-moz-range-thumb]:appearance-none',
					'[&::-moz-range-thumb]:rounded-full',
					'[&::-moz-range-thumb]:border-4',
					'[&::-moz-range-thumb]:border-blue-500',
					'[&::-moz-range-thumb]:bg-white',
					'[&::-moz-range-thumb]:transition-all',
					'[&::-moz-range-thumb]:duration-150',
					'[&::-moz-range-thumb]:ease-in-out',
					// Disable
					'disabled:pointer-events-none disabled:opacity-50',
					className,
				)}
				// aria-orientation='horizontal'
				{...rest}
			/>
		</>
	);
};
RangeSlider.displayName = 'RangeSlider';

export default RangeSlider;
`,B=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(x,{className:"flex-col items-start!",children:[e.jsx(k,{list:[{...n.documentation.forms},{...n.documentation.forms.subPages.rangeSlider}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(w,{icon:n.documentation.forms.subPages.rangeSlider.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:n.documentation.forms.subPages.rangeSlider.text})]})]})}),e.jsx(f,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"The Slider component, a type of range input, offers a consistent and customizable way for users to select values within a defined range. This intuitive component is ideal for adjusting settings such as volume, brightness, or for applying filters in various applications."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(s,{children:e.jsx(l,{iconProps:{icon:"Hold04",color:"blue",size:"text-3xl"},children:"Example"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic range slider example with label."}),e.jsx(z,{inIFrame:!1,mdFile:I,children:e.jsxs("div",{className:"max-w-sm",children:[e.jsx(j,{htmlFor:"rangeSlider",children:"This is a label"}),e.jsx(o,{id:"rangeSlider",name:"range",min:0,max:100,step:1,value:25})]})})]})]}),e.jsxs(t,{children:[e.jsx(i,{children:e.jsx(s,{children:e.jsx(l,{children:"API"})})}),e.jsx(d,{children:e.jsx(S,{code:N(y,"interface")})})]})]})})]});export{B as default};
