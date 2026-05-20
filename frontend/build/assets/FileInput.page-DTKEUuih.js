import{j as e}from"./vendor-D_nTE7E-.js";import{H as m,r as h,z as u,p as c,a as p,C as b,G as s,J as i,K as a,N as l,V as t,O as d,aB as r,aM as n,X as o,W as x,T as j,aC as g}from"./chunk-icon-Pdyc-Xig.js";import{M as f}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const W=`import { forwardRef, InputHTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import Label from './Label';
import { IValidationBaseProps } from './Validation';
import { TRounded } from '@/types/rounded.type';
import { TInputDimension, TInputVariants } from './Input';
import themeConfig from '@/config/theme.config';

// @start-snippet:: interface
interface IFileInputBaseProps
	extends InputHTMLAttributes<HTMLInputElement>, Partial<IValidationBaseProps> {
	id?: string;
	className?: string;
	name: string;
	rounded?: TRounded;
	dimension?: TInputDimension;
	type?: 'file';
	value?: string | number | readonly string[] | undefined;
	variant?: TInputVariants;
	label?: string;
}

interface UnderlineFileVariantProps extends Omit<IFileInputBaseProps, 'variant' | 'rounded'> {
	variant: 'underline';
	rounded?: undefined;
}

interface OtherFileVariantProps extends IFileInputBaseProps {
	variant?: Exclude<TInputVariants, 'underline'>;
}

type TFileInputProps = UnderlineFileVariantProps | OtherFileVariantProps;
// @end-snippet:: interface

const FileInput = forwardRef<HTMLInputElement, TFileInputProps>((props, ref) => {
	const {
		id,
		className,
		name,
		rounded = themeConfig.rounded,
		dimension = 'default',
		variant = 'default',
		isValid,
		isTouched,
		invalidFeedback,
		label,
		...rest
	} = props;

	const defaultId = useId();

	const inputVariants: { [key in TInputVariants]: { general: string; validation: string } } = {
		default: {
			general: classNames(
				// Default
				'dark:bg-zinc-900 dark:text-zinc-400',
				'border-zinc-200 dark:border-zinc-700',
				'placeholder-zinc-500',
				// Focus
				'focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-zinc-600',
			),
			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
		solid: {
			general: classNames(
				// Default
				[\`border-zinc-100 dark:border-zinc-800\`],
				'bg-zinc-100 dark:bg-zinc-800',
				// Hover
				'hover:border-blue-500',
				'dark:hover:border-blue-500',
				// Focus
				'focus:border-zinc-300 dark:focus:border-zinc-800',
				'focus:bg-transparent dark:focus:bg-transparent',
				// Disabled
				'disabled:border-zinc-500!',
			),
			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
		gray: {
			general: classNames(
				// Default
				'bg-zinc-100 dark:bg-zinc-700',
				'dark:text-zinc-400',
				'border-transparent dark:border-transparent',
				'dark:placeholder-zinc-500',
				// Focus
				'focus:ring-blue-500 dark:focus:ring-zinc-600',
				'focus:border-blue-500',
			),

			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
		underline: {
			general: classNames(
				// Default
				'border-b-2 border-x-transparent! border-b-zinc-200 border-t-transparent!',
				'bg-transparent pe-0 dark:border-b-zinc-700 dark:text-zinc-400 dark:placeholder-zinc-500 ',
				// Focus
				'focus:border-x-transparent focus:border-b-blue-500 focus:border-t-transparent focus:ring-0 dark:focus:border-b-zinc-600 dark:focus:ring-zinc-600',
			),
			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
	};
	const inputVariantClasses = inputVariants[variant as TInputVariants].general;
	const inputValidationsClasses = inputVariants[variant as TInputVariants].validation;

	/**
	 * Padding & Font Size & Icon Margin
	 */
	const inputDimension: { [key in TInputDimension]: { general: string } } = {
		sm: {
			general: classNames('text-sm'),
		},
		default: {
			general: classNames('text-base'),
		},
		lg: {
			general: classNames('text-lg'),
		},
	};
	const inputDimensionClasses = inputDimension[dimension].general;

	const classes = classNames(
		'w-full peer block appearance-none outline-0',
		'text-black dark:text-white',
		'disabled:pointer-events-none disabled:opacity-50',
		// themeConfig.transition,
		inputVariantClasses,
		[\`\${inputDimensionClasses}\`],
		{ [\`\${rounded}\`]: variant !== 'underline' },
		inputValidationsClasses,
		className,
	);

	return (
		<>
			{label && <Label htmlFor={id || defaultId}>{label}</Label>}
			<input
				ref={ref}
				type='file'
				id={id || defaultId}
				name={name}
				className={classNames(
					'cursor-pointer overflow-hidden border file:me-4 file:border-0 file:bg-zinc-500 file:px-4 file:py-3 file:text-zinc-200 file:transition-all file:duration-300 file:ease-in-out hover:file:bg-zinc-600 focus:z-10',
					classes,
				)}
				{...rest}
			/>
		</>
	);
});
FileInput.displayName = 'FileInput';

export default FileInput;
`,G="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgbGFiZWw9J1RoaXMgaXMgbGFiZWwnIHsuLi5yZXN0fSAvPgpgYGAK",N="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgdmFyaWFudD0nZGVmYXVsdCcgey4uLnJlc3R9IC8+CmBgYAo=",I="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgdmFyaWFudD0nZ3JheScgey4uLnJlc3R9IC8+CmBgYAo=",v="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgdmFyaWFudD0nc29saWQnIHsuLi5yZXN0fSAvPgpgYGAK",z="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgdmFyaWFudD0ndW5kZXJsaW5lJyB7Li4ucmVzdH0gLz4KYGBgCg==",C="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgZGltZW5zaW9uPSdzbScgey4uLnJlc3R9IC8+CjxGaWxlSW5wdXQgZGltZW5zaW9uPSdkZWZhdWx0JyB7Li4ucmVzdH0gLz4KPEZpbGVJbnB1dCBkaW1lbnNpb249J2xnJyB7Li4ucmVzdH0gLz4KYGBgCg==",F="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgZGlzYWJsZWQgdmFyaWFudD0nZGVmYXVsdCcgey4uLnJlc3R9IC8+CjxGaWxlSW5wdXQgZGlzYWJsZWQgdmFyaWFudD0nZ3JheScgey4uLnJlc3R9IC8+CjxGaWxlSW5wdXQgZGlzYWJsZWQgdmFyaWFudD0nc29saWQnIHsuLi5yZXN0fSAvPgo8RmlsZUlucHV0IGRpc2FibGVkIHZhcmlhbnQ9J3VuZGVybGluZScgey4uLnJlc3R9IC8+CmBgYAo=",V="data:text/markdown;base64,YGBgdHN4CjxGaWxlSW5wdXQgbGFiZWw9J1RoaXMgaXMgbGFiZWwnIGFyaWEtZGVzY3JpYmVkYnk9J2lucHV0LWhlbHBlci10ZXh0JyB7Li4ucmVzdH0gLz4KPERlc2NyaXB0aW9uIGlkPSdpbnB1dC1oZWxwZXItdGV4dCcgY2xhc3NOYW1lPSdtdC0yJz4KCVdlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZGV0YWlscy4KPC9EZXNjcmlwdGlvbj4KYGBgCg==",w="data:text/markdown;base64,YGBgdHN4CjxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgc3BhY2UteS0yIHNtOmlubGluZS1mbGV4IHNtOml0ZW1zLWNlbnRlciBzbTpzcGFjZS15LTAgc206c3BhY2UteC0zIFsmPipdOm15LTAnPgoJPExhYmVsIGh0bWxGb3I9J2lucHV0LWhlbHBlcicgY2xhc3NOYW1lPSd3LWF1dG8hJz4KCQlUaGlzIGlzIGxhYmVsCgk8L0xhYmVsPgoJPEZpbGVJbnB1dAoJCWlkPSdpbnB1dC1oZWxwZXInCgkJYXJpYS1kZXNjcmliZWRieT0naW5wdXQtaGVscGVyLXRleHQnCgkJY2xhc3NOYW1lPSdtYXgtdy1zbScKCQl7Li4ucmVzdH0KCS8+Cgk8RGVzY3JpcHRpb24gaWQ9J2lucHV0LWhlbHBlci10ZXh0Jz5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGRldGFpbHMuPC9EZXNjcmlwdGlvbj4KPC9kaXY+CmBgYAo=",y="data:text/markdown;base64,YGBgdHN4CjxkaXYgY2xhc3NOYW1lPSdtYXgtdy1zbSc+Cgk8ZGl2IGNsYXNzTmFtZT0nbWItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gWyY+Kl06bWItMCc+CgkJPExhYmVsIGh0bWxGb3I9J2lucHV0LWhlbHBlcicgY2xhc3NOYW1lPSd3LWF1dG8hJz5UaGlzIGlzIGxhYmVsPC9MYWJlbD4KCQk8RGVzY3JpcHRpb24gaWQ9J2lucHV0LWhlbHBlci10ZXh0Jz5PcHRpb25hbDwvRGVzY3JpcHRpb24+Cgk8L2Rpdj4KCTxGaWxlSW5wdXQgaWQ9J2lucHV0LWhlbHBlcicgYXJpYS1kZXNjcmliZWRieT0naW5wdXQtaGVscGVyLXRleHQnIGNsYXNzTmFtZT0nbWF4LXctc20nIHsuLi5yZXN0fSAvPgo8L2Rpdj4KPGRpdiBjbGFzc05hbWU9J21heC13LXNtJz4KCTxkaXYgY2xhc3NOYW1lPSdtYi0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBbJj4qXTptYi0wJz4KCQk8TGFiZWwgaHRtbEZvcj0naW5wdXQtaGVscGVyLTInIGNsYXNzTmFtZT0ndy1hdXRvISc+VGhpcyBpcyBsYWJlbDwvTGFiZWw+CgkJPERlc2NyaXB0aW9uIGlkPSdpbnB1dC1oZWxwZXItdGV4dC0yJz4KCQkJPFRvb2x0aXAgdGV4dD0nT3B0aW9uYWwnIC8+CgkJPC9EZXNjcmlwdGlvbj4KCTwvZGl2PgoJPElucHV0IGlkPSdpbnB1dC1oZWxwZXItMicgYXJpYS1kZXNjcmliZWRieT0naW5wdXQtaGVscGVyLXRleHQtMicgY2xhc3NOYW1lPSdtYXgtdy1zbScgey4uLnJlc3R9IC8+CjwvZGl2PgpgYGAK",B=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(h,{className:"flex-col items-start!",children:[e.jsx(u,{list:[{...c.documentation.forms},{...c.documentation.forms.subPages.fileInput}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(p,{icon:c.documentation.forms.subPages.fileInput.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:c.documentation.forms.subPages.fileInput.text})]})]})}),e.jsx(b,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Browse and customize beautiful Tailwind CSS buttons in various styles, states, and sizes. Find active, disabled, pill, icon, and other free button examples."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"Label",color:"emerald",size:"text-3xl"},children:"Label - label"}),e.jsx(t,{children:e.jsx("code",{children:"string"})}),e.jsx(t,{children:"Input"})]})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic input example with label."}),e.jsx(r,{inIFrame:!1,mdFile:G,children:e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"basic",label:"This is label"})})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"Settings05",color:"amber",size:"text-3xl"},children:"Variant - variant"}),e.jsx(t,{children:e.jsx("code",{children:"TInputVariants"})}),e.jsx(t,{children:"FileInput"})]})}),e.jsxs(d,{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Default"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Default input variant."}),e.jsx(r,{inIFrame:!1,mdFile:N,children:e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"default",variant:"default",label:"Default"})})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Gray"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Gray input variant."}),e.jsx(r,{inIFrame:!1,mdFile:I,children:e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"gray",variant:"gray",label:"Gray"})})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Solid"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Solid input variant."}),e.jsx(r,{inIFrame:!1,mdFile:v,children:e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"solid",variant:"solid",label:"Solid"})})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Underline"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Underline input variant."}),e.jsx(r,{inIFrame:!1,mdFile:z,children:e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"underline",variant:"underline",label:"Underline"})})})]})]})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"Ruler",color:"violet",size:"text-3xl"},children:"Size - dimension"}),e.jsx(t,{children:e.jsx("code",{children:"TInputDimension"})}),e.jsx(t,{children:"Input"})]})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Inputs stacked small to large sizes."}),e.jsx(r,{inIFrame:!1,mdFile:C,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"small",dimension:"sm"})}),e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"default"})}),e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"large",dimension:"lg"})})]})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"EditOff",color:"red",size:"text-3xl"},children:"Disabled - disabled"}),e.jsx(t,{children:e.jsx("code",{children:"boolean"})}),e.jsx(t,{children:"Input"})]})}),e.jsxs(d,{children:[e.jsxs("div",{className:"text-zinc-500",children:["Add the ",e.jsx("code",{children:"disabled"})," boolean attribute on an input to remove pointer events, and prevent focusing."]}),e.jsx(r,{inIFrame:!1,mdFile:F,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"disabledDefault",label:"This is label",variant:"default",disabled:!0})}),e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"disabledGray",label:"This is label",variant:"gray",disabled:!0})}),e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"disabledSolid",label:"This is label",variant:"solid",disabled:!0})}),e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{name:"disabledUnderline",label:"This is label",variant:"underline",disabled:!0})})]})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{iconProps:{icon:"Settings05",color:"amber",size:"text-3xl"},children:"Helper text"})})}),e.jsxs(d,{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Basic"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic input example with helper text."}),e.jsx(r,{inIFrame:!1,mdFile:V,children:e.jsxs("div",{className:"max-w-sm",children:[e.jsx(n,{name:"helperBasic",label:"This is label",placeholder:"This is placeholder","aria-describedby":"input-helper-text"}),e.jsx(o,{id:"input-helper-text",className:"mt-2",children:"We'll never share your details."})]})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Inline helper text"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic input example with inline helper text."}),e.jsx(r,{inIFrame:!1,mdFile:w,children:e.jsxs("div",{className:"w-full space-y-2 sm:inline-flex sm:items-center sm:space-y-0 sm:space-x-3 [&>*]:my-0",children:[e.jsx(x,{htmlFor:"helperLine",className:"w-auto!",children:"This is label"}),e.jsx("div",{className:"max-w-sm",children:e.jsx(n,{id:"helperLine",name:"helperLine","aria-describedby":"input-helper-text"})}),e.jsx(o,{id:"input-helper-text",children:"We'll never share your details."})]})})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Corner hint"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic input example with corner-hint."}),e.jsx(r,{inIFrame:!1,mdFile:y,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"max-w-sm",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between [&>*]:mb-0",children:[e.jsx(x,{htmlFor:"input-helper",className:"w-auto!",children:"This is label"}),e.jsx(o,{id:"input-helper-text",children:"Optional"})]}),e.jsx(n,{id:"helperHint1",name:"helperHint1",placeholder:"This is placeholder","aria-describedby":"input-helper-text",className:"max-w-sm"})]}),e.jsxs("div",{className:"max-w-sm",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between [&>*]:mb-0",children:[e.jsx(x,{htmlFor:"input-helper",className:"w-auto!",children:"This is label"}),e.jsx(o,{id:"input-helper-text",children:e.jsx(j,{text:"Optional"})})]}),e.jsx(n,{id:"helperHint2",name:"helperHint2",placeholder:"This is placeholder","aria-describedby":"input-helper-text",className:"max-w-sm"})]})]})})]})]})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"API"})})}),e.jsx(d,{children:e.jsx(f,{code:g(W,"interface")})})]})]})})]});export{B as default};
