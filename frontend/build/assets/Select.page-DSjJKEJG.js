import{j as e}from"./vendor-D_nTE7E-.js";import{H as x,r as p,z as m,p as t,a as b,C as u,G as s,J as n,K as a,N as i,V as d,O as r,aB as c,Y as l,X as o,W as h,T as j,aC as v}from"./chunk-icon-Pdyc-Xig.js";import{M as g}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const C=`import { FC, ReactNode, SelectHTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import themeConfig from '@/config/theme.config';
import { TRounded } from '@/types/rounded.type';
import { IValidationBaseProps } from './Validation';
import Label from './Label';

// @start-snippet:: interface
export type TSelectVariants = 'solid' | 'default' | 'gray' | 'underline';
export type TSelectDimension = 'sm' | 'default' | 'lg';

export interface ISelectBaseProps
	extends SelectHTMLAttributes<HTMLSelectElement>, Partial<IValidationBaseProps> {
	id?: string;
	className?: string;
	children: ReactNode;
	name: string;
	rounded?: TRounded;
	value?: string | number | readonly string[] | undefined;
	variant?: TSelectVariants;
	placeholder?: string;
	label?: string;
	isFloatingLabel?: boolean;
}

interface UnderlineVariantProps extends Omit<ISelectBaseProps, 'variant' | 'rounded'> {
	variant: 'underline';
	rounded?: undefined;
}
interface OtherVariantProps extends ISelectBaseProps {
	variant?: Exclude<TSelectVariants, 'underline'>;
}

interface FloatingLabelProps extends ISelectBaseProps {
	isFloatingLabel: true;
	label: string;
	dimension?: undefined;
}
interface NonFloatingLabelProps extends ISelectBaseProps {
	isFloatingLabel?: false;
	label?: string;
	dimension?: TSelectDimension;
}
type TSelectProps = (FloatingLabelProps | NonFloatingLabelProps) &
	(UnderlineVariantProps | OtherVariantProps);
// @end-snippet:: interface
const Select: FC<TSelectProps> = (props) => {
	const {
		id,
		className,
		children,
		name,
		rounded = themeConfig.rounded,
		dimension = 'default',
		variant = 'default',
		placeholder,
		label,
		isFloatingLabel,
		isValid,
		isTouched,
		invalidFeedback,
		...rest
	} = props;

	const defaultId = useId();

	const selectVariants: {
		[key in TSelectVariants]: { general: string; validation: string };
	} = {
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
	const selectVariantClasses = selectVariants[variant as TSelectVariants].general;
	const selectValidationsClasses = selectVariants[variant as TSelectVariants].validation;

	/**
	 * Padding & Font Size & Icon Margin
	 */
	const selectDimension: { [key in TSelectDimension]: { general: string } } = {
		sm: {
			general: classNames('px-4', 'py-2', 'text-sm'),
		},
		default: {
			general: classNames('px-4', 'py-3', 'text-base'),
		},
		lg: {
			general: classNames('px-4', 'py-4', 'text-lg'),
		},
	};
	const selectDimensionClasses = selectDimension[dimension].general;

	const classes = classNames(
		'w-full appearance-none outline-0',
		'text-black dark:text-white',
		'disabled:pointer-events-none disabled:opacity-50',
		// themeConfig.transition,
		{
			'peer pe-9 text-sm block': isFloatingLabel,
			'autofill:pb-2 autofill:pt-6 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6':
				isFloatingLabel,
			'focus:border-blue-500 focus:pb-2 focus:pt-6 focus:ring-blue-500 dark:focus:ring-zinc-600':
				isFloatingLabel,
		},
		themeConfig.transition,
		selectVariantClasses,
		selectDimensionClasses,
		{ [\`\${selectDimensionClasses}\`]: !isFloatingLabel, 'p-4': isFloatingLabel },
		{ [\`\${rounded}\`]: variant !== 'underline' },
		selectValidationsClasses,
		className,
	);

	const _SELECT = (
		<select data-component-name='select' className={classes} name={name} {...rest}>
			{placeholder && !rest?.value && (
				<option value={undefined} hidden>
					{placeholder}
				</option>
			)}
			{children}
		</select>
	);

	if (isFloatingLabel) {
		return (
			<div className='relative'>
				{_SELECT}
				<Label
					htmlFor={id || defaultId}
					className='pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 transition duration-100 ease-in-out peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-zinc-500 peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-zinc-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 dark:text-white dark:peer-not-placeholder-shown:text-zinc-500 dark:peer-focus:text-zinc-500'>
					{label}
				</Label>
			</div>
		);
	}
	return (
		<>
			{label && !isFloatingLabel && <Label htmlFor={id || defaultId}>{label}</Label>}
			{_SELECT}
		</>
	);
};
Select.displayName = 'Select';

export default Select;
`,G="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgcGxhY2Vob2xkZXI9J1RoaXMgaXMgcGxhY2Vob2xkZXInIHsuLi5yZXN0fSAvPgpgYGAK",S="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgbGFiZWw9J1RoaXMgaXMgbGFiZWwnIHsuLi5yZXN0fSAvPgpgYGAK",N="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgdmFyaWFudD0nZGVmYXVsdCcgey4uLnJlc3R9IC8+CmBgYAo=",f="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgdmFyaWFudD0nZ3JheScgey4uLnJlc3R9IC8+CmBgYAo=",W="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgdmFyaWFudD0nc29saWQnIHsuLi5yZXN0fSAvPgpgYGAK",V="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgdmFyaWFudD0ndW5kZXJsaW5lJyB7Li4ucmVzdH0gLz4KYGBgCg==",F="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgbGFiZWw9J1RoaXMgaXMgbGFiZWwnIGlzRmxvYXRpbmdMYWJlbCB2YXJpYW50PSdkZWZhdWx0JyB7Li4ucmVzdH0gLz4KPFNlbGVjdCBsYWJlbD0nVGhpcyBpcyBsYWJlbCcgaXNGbG9hdGluZ0xhYmVsIHZhcmlhbnQ9J2dyYXknIHsuLi5yZXN0fSAvPgo8U2VsZWN0IGxhYmVsPSdUaGlzIGlzIGxhYmVsJyBpc0Zsb2F0aW5nTGFiZWwgdmFyaWFudD0nc29saWQnIHsuLi5yZXN0fSAvPgo8U2VsZWN0IGxhYmVsPSdUaGlzIGlzIGxhYmVsJyBpc0Zsb2F0aW5nTGFiZWwgdmFyaWFudD0ndW5kZXJsaW5lJyB7Li4ucmVzdH0gLz4KYGBgCg==",w="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgZGltZW5zaW9uPSdzbScgey4uLnJlc3R9IC8+CjxTZWxlY3QgZGltZW5zaW9uPSdkZWZhdWx0JyB7Li4ucmVzdH0gLz4KPFNlbGVjdCBkaW1lbnNpb249J2xnJyB7Li4ucmVzdH0gLz4KYGBgCg==",Z="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgZGlzYWJsZWQgdmFyaWFudD0nZGVmYXVsdCcgey4uLnJlc3R9IC8+CjxTZWxlY3QgZGlzYWJsZWQgdmFyaWFudD0nZ3JheScgey4uLnJlc3R9IC8+CjxTZWxlY3QgZGlzYWJsZWQgdmFyaWFudD0nc29saWQnIHsuLi5yZXN0fSAvPgo8U2VsZWN0IGRpc2FibGVkIHZhcmlhbnQ9J3VuZGVybGluZScgey4uLnJlc3R9IC8+CmBgYAo=",Y="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QKCW5hbWU9J3BsYWNlaG9sZGVyLXRlc3QnCglsYWJlbD0nVGhpcyBpcyBsYWJlbCcKCXBsYWNlaG9sZGVyPSdUaGlzIGlzIHBsYWNlaG9sZGVyJwoJYXJpYS1kZXNjcmliZWRieT0naW5wdXQtaGVscGVyLXRleHQnCi8+CjxEZXNjcmlwdGlvbiBpZD0naW5wdXQtaGVscGVyLXRleHQnIGNsYXNzTmFtZT0nbXQtMic+CglXZSdsbCBuZXZlciBzaGFyZSB5b3VyIGRldGFpbHMuCjwvRGVzY3JpcHRpb24+CmBgYAo=",y="data:text/markdown;base64,YGBgdHN4CjxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgc3BhY2UteS0yIHNtOmlubGluZS1mbGV4IHNtOml0ZW1zLWNlbnRlciBzbTpzcGFjZS15LTAgc206c3BhY2UteC0zIFsmPipdOm15LTAnPgoJPExhYmVsIGh0bWxGb3I9J2lucHV0LWhlbHBlcicgY2xhc3NOYW1lPSd3LWF1dG8hJz4KCQlUaGlzIGlzIGxhYmVsCgk8L0xhYmVsPgoJPFNlbGVjdAoJCWlkPSdpbnB1dC1oZWxwZXInCgkJbmFtZT0ncGxhY2Vob2xkZXItdGVzdCcKCQlwbGFjZWhvbGRlcj0nVGhpcyBpcyBwbGFjZWhvbGRlcicKCQlhcmlhLWRlc2NyaWJlZGJ5PSdpbnB1dC1oZWxwZXItdGV4dCcKCQljbGFzc05hbWU9J21heC13LXNtJwoJLz4KCTxEZXNjcmlwdGlvbiBpZD0naW5wdXQtaGVscGVyLXRleHQnPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZGV0YWlscy48L0Rlc2NyaXB0aW9uPgo8L2Rpdj4KYGBgCg==",z="data:text/markdown;base64,YGBgdHN4CjxkaXYgY2xhc3NOYW1lPSdtYXgtdy1zbSc+Cgk8ZGl2IGNsYXNzTmFtZT0nbWItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gWyY+Kl06bWItMCc+CgkJPExhYmVsCgkJCWh0bWxGb3I9J2lucHV0LWhlbHBlcicKCQkJY2xhc3NOYW1lPSd3LWF1dG8hJz4KCQkJVGhpcyBpcyBsYWJlbAoJCTwvTGFiZWw+CgkJPERlc2NyaXB0aW9uIGlkPSdpbnB1dC1oZWxwZXItdGV4dCc+CgkJCU9wdGlvbmFsCgkJPC9EZXNjcmlwdGlvbj4KCTwvZGl2PgoJPFNlbGVjdAoJCWlkPSdpbnB1dC1oZWxwZXInCgkJbmFtZT0ncGxhY2Vob2xkZXItdGVzdCcKCQlwbGFjZWhvbGRlcj0nVGhpcyBpcyBwbGFjZWhvbGRlcicKCQlhcmlhLWRlc2NyaWJlZGJ5PSdpbnB1dC1oZWxwZXItdGV4dCcKCQljbGFzc05hbWU9J21heC13LXNtJwoJLz4KPC9kaXY+CjxkaXYgY2xhc3NOYW1lPSdtYXgtdy1zbSc+Cgk8ZGl2IGNsYXNzTmFtZT0nbWItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gWyY+Kl06bWItMCc+CgkJPExhYmVsCgkJCWh0bWxGb3I9J2lucHV0LWhlbHBlcicKCQkJY2xhc3NOYW1lPSd3LWF1dG8hJz4KCQkJVGhpcyBpcyBsYWJlbAoJCTwvTGFiZWw+CgkJPERlc2NyaXB0aW9uIGlkPSdpbnB1dC1oZWxwZXItdGV4dCc+CgkJCTxUb29sdGlwIHRleHQ9J09wdGlvbmFsJyAvPgoJCTwvRGVzY3JpcHRpb24+Cgk8L2Rpdj4KCTxTZWxlY3QKCQlpZD0naW5wdXQtaGVscGVyJwoJCW5hbWU9J3BsYWNlaG9sZGVyLXRlc3QnCgkJcGxhY2Vob2xkZXI9J1RoaXMgaXMgcGxhY2Vob2xkZXInCgkJYXJpYS1kZXNjcmliZWRieT0naW5wdXQtaGVscGVyLXRleHQnCgkJY2xhc3NOYW1lPSdtYXgtdy1zbScKCS8+CjwvZGl2PgpgYGAK",k="data:text/markdown;base64,YGBgdHN4CjxTZWxlY3QgbXVsdGlwbGUgey4uLnJlc3R9IC8+CmBgYAo=",B=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs(p,{className:"flex-col items-start!",children:[e.jsx(m,{list:[{...t.documentation.forms},{...t.documentation.forms.subPages.select}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(b,{icon:t.documentation.forms.subPages.select.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:t.documentation.forms.subPages.select.text})]})]})}),e.jsx(u,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Select allows users to make a single selection or multiple selections from a list of options."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(i,{iconProps:{icon:"Hold04",color:"blue",size:"text-3xl"},children:"Placeholder - placeholder"}),e.jsx(d,{children:e.jsx("code",{children:"string"})}),e.jsx(d,{children:"Select"})]})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic select example with placeholder."}),e.jsx(c,{inIFrame:!1,mdFile:G,children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",placeholder:"This is a placeholder",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(i,{iconProps:{icon:"Label",color:"emerald",size:"text-3xl"},children:"Label - label"}),e.jsx(d,{children:e.jsx("code",{children:"string"})}),e.jsx(d,{children:"Select"})]})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic select example with label."}),e.jsx(c,{inIFrame:!1,mdFile:S,children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(i,{iconProps:{icon:"Settings05",color:"amber",size:"text-3xl"},children:"Variant - variant"}),e.jsx(d,{children:e.jsx("code",{children:"TSelectVariants"})}),e.jsx(d,{children:"Select"})]})}),e.jsxs(r,{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"Default"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Default select variant."}),e.jsx(c,{inIFrame:!1,mdFile:N,children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"Gray"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Gray select variant."}),e.jsx(c,{inIFrame:!1,mdFile:f,children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"gray",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"Solid"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Solid select variant."}),e.jsx(c,{inIFrame:!1,mdFile:W,children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"solid",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"Underline"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Underline select variant."}),e.jsx(c,{inIFrame:!1,mdFile:V,children:e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"underline",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})})]})]})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(i,{iconProps:{icon:"KeyframesMultiple",color:"blue",size:"text-3xl"},children:"Multiple item - multiple"}),e.jsx(d,{children:e.jsx("code",{children:"boolean"})}),e.jsx(d,{children:"Select"})]})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic select example with placeholder."}),e.jsx(c,{inIFrame:!1,mdFile:k,children:e.jsxs("div",{className:"max-w-sm",children:[e.jsxs(l,{name:"placeholder-test",multiple:!0,label:"This is label",placeholder:"Select option","aria-describedby":"select-helper-text",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]}),e.jsxs(o,{id:"select-helper-text",className:"mt-2",children:["Hold ",e.jsx("kbd",{children:"Cmd"})," (Mac) / ",e.jsx("kbd",{children:"Ctrl"})," (Windows) to select multiple options."]})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(i,{iconProps:{icon:"Shuffle",color:"emerald",size:"text-3xl"},children:"Float Label - isFloatingLabel"}),e.jsx(d,{children:e.jsx("code",{children:"boolean"})}),e.jsx(d,{children:"Select"})]})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Note that to use this you need to define a label using the Select component's label prop."}),e.jsx(c,{inIFrame:!1,mdFile:F,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"default",isFloatingLabel:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"gray",isFloatingLabel:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"solid",isFloatingLabel:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"underline",isFloatingLabel:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(i,{iconProps:{icon:"Ruler",color:"violet",size:"text-3xl"},children:"Size - dimension"}),e.jsx(d,{children:e.jsx("code",{children:"TSelectDimension"})}),e.jsx(d,{children:"Select"})]})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Selects stacked small to large sizes."}),e.jsx(c,{inIFrame:!1,mdFile:w,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",placeholder:"Small size",dimension:"sm",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",placeholder:"Default size",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",placeholder:"Large size",dimension:"lg",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(i,{iconProps:{icon:"EditOff",color:"red",size:"text-3xl"},children:"Disabled - disabled"}),e.jsx(d,{children:e.jsx("code",{children:"boolean"})}),e.jsx(d,{children:"Select"})]})}),e.jsxs(r,{children:[e.jsxs("div",{className:"text-zinc-500",children:["Add the ",e.jsx("code",{children:"disabled"})," boolean attribute on an select to remove pointer events, and prevent focusing."]}),e.jsx(c,{inIFrame:!1,mdFile:Z,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"default",isFloatingLabel:!0,disabled:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"gray",isFloatingLabel:!0,disabled:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"solid",isFloatingLabel:!0,disabled:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})}),e.jsx("div",{className:"max-w-sm",children:e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option",variant:"underline",isFloatingLabel:!0,disabled:!0,children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{iconProps:{icon:"Settings05",color:"amber",size:"text-3xl"},children:"Helper text"})})}),e.jsxs(r,{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"Basic"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic select example with helper text."}),e.jsx(c,{inIFrame:!1,mdFile:Y,children:e.jsxs("div",{className:"max-w-sm",children:[e.jsxs(l,{name:"placeholder-test",label:"This is label",placeholder:"Select option","aria-describedby":"select-helper-text",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]}),e.jsx(o,{id:"select-helper-text",className:"mt-2",children:"We'll never share your details."})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"Inline helper text"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic select example with inline helper text."}),e.jsx(c,{inIFrame:!1,mdFile:y,children:e.jsxs("div",{className:"w-full space-y-2 sm:inline-flex sm:items-center sm:space-y-0 sm:space-x-3 [&>*]:my-0",children:[e.jsx(h,{htmlFor:"select-helper",className:"w-auto!",children:"This is label"}),e.jsxs(l,{id:"select-helper",name:"placeholder-test",placeholder:"Select option","aria-describedby":"select-helper-text",className:"max-w-sm",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]}),e.jsx(o,{id:"select-helper-text",children:"We'll never share your details."})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"Corner hint"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic select example with corner-hint."}),e.jsx(c,{inIFrame:!1,mdFile:z,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"max-w-sm",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between [&>*]:mb-0",children:[e.jsx(h,{htmlFor:"select-helper",className:"w-auto!",children:"This is label"}),e.jsx(o,{id:"select-helper-text",children:"Optional"})]}),e.jsxs(l,{id:"select-helper",name:"placeholder-test",placeholder:"Select option","aria-describedby":"select-helper-text",className:"max-w-sm",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})]}),e.jsxs("div",{className:"max-w-sm",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between [&>*]:mb-0",children:[e.jsx(h,{htmlFor:"select-helper",className:"w-auto!",children:"This is label"}),e.jsx(o,{id:"select-helper-text",children:e.jsx(j,{text:"Optional"})})]}),e.jsxs(l,{id:"select-helper",name:"placeholder-test",placeholder:"Select option","aria-describedby":"select-helper-text",className:"max-w-sm",children:[e.jsxs("optgroup",{label:"Swedish Cars",children:[e.jsx("option",{value:"volvo",children:"Volvo"}),e.jsx("option",{value:"saab",children:"Saab"})]}),e.jsxs("optgroup",{label:"German Cars",children:[e.jsx("option",{value:"mercedes",children:"Mercedes"}),e.jsx("option",{value:"audi",children:"Audi"})]})]})]})]})})]})]})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(a,{children:e.jsx(i,{children:"API"})})}),e.jsx(r,{children:e.jsx(g,{code:v(C,"interface")})})]})]})})]});export{B as default};
