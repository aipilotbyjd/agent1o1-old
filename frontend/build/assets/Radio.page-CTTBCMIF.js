import{E as u,j as e}from"./vendor-D_nTE7E-.js";import{H as b,r as g,z as f,p as c,a as j,C as v,G as l,J as d,K as r,N as o,V as s,O as t,aB as m,aO as p,aP as h,aC as N}from"./chunk-icon-Pdyc-Xig.js";import{M as R}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const C=`import {
	Children,
	cloneElement,
	FC,
	forwardRef,
	HTMLAttributes,
	InputHTMLAttributes,
	ReactElement,
	ReactNode,
	useId,
} from 'react';
import classNames from 'classnames';
import themeConfig from '@/config/theme.config';
import { IValidationBaseProps } from './Validation';

// @start-snippet:: interface
export type TRadioDimension = 'sm' | 'default' | 'lg' | 'xl';

type BaseRadioProps = InputHTMLAttributes<HTMLInputElement> &
	Partial<IValidationBaseProps> & {
		className?: string;
		id?: string;
		inputClassName?: string;
		labelClassName?: string;
		isInline?: boolean;
		name: string;
		selectedValue: string | number | undefined;
		dimension?: TRadioDimension;
		value: string | number;
		disabled?: boolean;
	};

export type IRadioProps =
	| (BaseRadioProps & { label: ReactNode; children?: never; description?: ReactNode })
	| (BaseRadioProps & { children: ReactNode; label?: never; description?: never });
// @end-snippet:: interface
const Radio = forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
	const {
		className,
		children,
		id,
		inputClassName,
		labelClassName,
		isInline = false,
		label,
		description,
		name,
		selectedValue,
		dimension = 'default',
		value,
		disabled = false,
		isValid,
		isTouched,
		invalidFeedback,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		validFeedback,
		...rest
	} = props;

	const defaultId = useId();

	/**
	 * Width&Height & Margin & Font Size
	 */
	const radioDimensions: { [key in TRadioDimension]: { general: string; label: string } } = {
		sm: {
			general: classNames('w-5', 'h-5', 'ltr:mr-1 rtl:ml-1'),
			label: classNames('text-sm'),
		},
		default: {
			general: classNames('w-7', 'h-7', 'ltr:mr-1.5 rtl:ml-1.5'),
			label: classNames('text-base'),
		},
		lg: {
			general: classNames('w-9', 'h-9', 'ltr:mr-2 rtl:ml-2'),
			label: classNames('text-lg'),
		},
		xl: {
			general: classNames('w-10', 'h-10', 'ltr:mr-2.5 rtl:ml-2.5'),
			label: classNames('text-xl'),
		},
	};
	const radioDimensionClasses = radioDimensions[dimension].general;
	const labelDimensionClasses = radioDimensions[dimension].label;

	const radioClasses = classNames(
		'peer',
		'cursor-pointer appearance-none',
		'rounded-full',
		'bg-transparent',
		// border
		'border-zinc-100 dark:border-zinc-800',
		// hover:border
		[\`hover:border-blue-500\`],
		[\`dark:hover:border-blue-500\`],
		'disabled:!border-zinc-500',
		// checked:ring
		'checked:ring-4 checked:ring-inset checked:ring-white dark:checked:ring-zinc-900 bg-none',
		// checked:bg
		[\`checked:bg-blue-500\`],
		{ 'sr-only': children },
		themeConfig.borderWidth,
		themeConfig.transition,
		radioDimensionClasses,
		inputClassName,
		// disabled
		'disabled:pointer-events-none disabled:opacity-50',
		{
			'!border-red-500 ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
			'!border-emerald-500 focus:ring-4 focus:ring-emerald-500/30':
				isValid && isTouched && !invalidFeedback,
		},
	);

	return (
		<div
			data-component-name='Radio'
			className={classNames(
				'items-center py-1.5',
				{ flex: !isInline, 'inline-flex': isInline, 'me-4': isInline },
				'disabled:!opacity-25',
				className,
			)}>
			<input
				ref={ref}
				id={id || defaultId}
				type='radio'
				name={name}
				className={radioClasses}
				checked={selectedValue === value}
				value={value}
				disabled={disabled}
				{...rest}
			/>
			{(label || description) && (
				<div className='flex flex-col'>
					{!!label && (
						<label
							htmlFor={id || defaultId}
							className={classNames(
								'cursor-pointer text-base',
								{ '!pointer-events-none opacity-50': disabled },
								labelDimensionClasses,
							)}>
							{label}
						</label>
					)}
					{!!description && (
						<label
							htmlFor={id || defaultId}
							className={classNames(
								'cursor-pointer text-sm text-zinc-500',
								{ '!pointer-events-none opacity-50': disabled },
								labelDimensionClasses,
							)}>
							{description}
						</label>
					)}
				</div>
			)}

			{!!children && (
				<label
					className={classNames(
						'flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border-transparent p-2 outline-1 outline-zinc-100 peer-checked:outline-2 peer-checked:outline-blue-500! peer-disabled:opacity-50! dark:outline-zinc-800',
						labelClassName,
					)}
					htmlFor={id || defaultId}>
					<div>{children}</div>
				</label>
			)}
		</div>
	);
});
Radio.displayName = 'Radio';

// @start-snippet:: interface
interface IRadioGroupProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement<IRadioProps> | ReactElement<IRadioProps>[];
	invalidFeedback?: string;
	isInline?: boolean;
	isTouched?: boolean;
	isValid?: boolean;
	isValidMessage?: boolean;
	validFeedback?: string;
}
// @end-snippet:: interface
export const RadioGroup: FC<IRadioGroupProps> = (props) => {
	const {
		children,
		invalidFeedback,
		isInline = false,
		isTouched = false,
		isValid = false,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage = true,
		validFeedback,
		...rest
	} = props;

	const childrenArray = Children.toArray(children);

	return (
		<div data-component-name='Radio/RadioGroup' {...rest}>
			{childrenArray.map((child, index) =>
				cloneElement(child as ReactElement<IRadioProps>, {
					isInline: (child as ReactElement<IRadioProps>).props.isInline || isInline,
					isValid,
					isTouched,
					invalidFeedback,
					validFeedback,
					isValidMessage: false,
					className: classNames(
						(child as ReactElement<IRadioProps>).props.className,
						index === childrenArray.length - 1 ? 'me-0!' : undefined,
					),
				}),
			)}
		</div>
	);
};

export default Radio;
`,I="data:text/markdown;base64,YGBgdHN4CjxSYWRpbyBsYWJlbD0nVGhpcyBpcyBhIGxhYmVsJyB7Li4ucmVzdH0gLz4KYGBgCg==",y="data:text/markdown;base64,YGBgdHN4CjxSYWRpbyBkaW1lbnNpb249J3NtJyB7Li4ucmVzdH0vPgo8UmFkaW8gZGltZW5zaW9uPSdkZWZhdWx0JyB7Li4ucmVzdH0vPgo8UmFkaW8gZGltZW5zaW9uPSdsZycgey4uLnJlc3R9Lz4KPFJhZGlvIGRpbWVuc2lvbj0neGwnIHsuLi5yZXN0fS8+CmBgYAo=",k="data:text/markdown;base64,YGBgdHN4CjxSYWRpbyBkaXNhYmxlZCB7Li4ucmVzdH0gLz4KYGBgCg==",V="data:text/markdown;base64,YGBgdHN4CjxSYWRpbyBkZXNjcmlwdGlvbj0nVGhpcyBpcyBhIGRlc2NyaXB0aW9uJyB7Li4ucmVzdH0gLz4KYGBgCg==",D=()=>{const a=["Option 1","Option 2","Option 3","Option 4"],x=["sm","default","lg","xl"],i=u({initialValues:{radioOption:a[1],optionsDimensionValue:x[1],radioDisableOption:a[1],radioDescOption:a[1]},onSubmit:()=>{}});return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs(g,{className:"flex-col items-start!",children:[e.jsx(f,{list:[{...c.documentation.forms},{...c.documentation.forms.subPages.radio}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(j,{icon:c.documentation.forms.subPages.radio.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:c.documentation.forms.subPages.radio.text})]})]})}),e.jsx(v,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"A radio input allows people to select only one option from a number of choices. Radio is generally displayed in a radio group."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsxs(r,{children:[e.jsx(o,{iconProps:{icon:"Label",color:"emerald",size:"text-3xl"},children:"Label - label"}),e.jsx(s,{children:e.jsx("code",{children:"string"})}),e.jsx(s,{children:"Radio"})]})}),e.jsxs(t,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic radio example with label."}),e.jsx(m,{inIFrame:!1,mdFile:I,children:e.jsx(p,{isInline:!0,children:a.map(n=>e.jsx(h,{label:n,name:"radioOption",value:n,selectedValue:i.values.radioOption,onChange:i.handleChange},n))})})]})]}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsxs(r,{children:[e.jsx(o,{iconProps:{icon:"Ruler",color:"violet",size:"text-3xl"},children:"Size - dimension"}),e.jsx(s,{children:e.jsx("code",{children:"TInputDimension"})}),e.jsx(s,{children:"Radio"})]})}),e.jsxs(t,{children:[e.jsx("div",{className:"text-zinc-500",children:"Radio input dimensions."}),e.jsx(m,{inIFrame:!1,mdFile:y,children:e.jsx(p,{isInline:!0,children:x.map(n=>e.jsx(h,{label:n,name:"optionsDimensionValue",value:n,selectedValue:i.values.optionsDimensionValue,onChange:i.handleChange,dimension:n},n))})})]})]}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsxs(r,{children:[e.jsx(o,{iconProps:{icon:"EditOff",color:"red",size:"text-3xl"},children:"Disabled - disabled"}),e.jsx(s,{children:e.jsx("code",{children:"boolean"})}),e.jsx(s,{children:"Radio"})]})}),e.jsxs(t,{children:[e.jsxs("div",{className:"text-zinc-500",children:["Add the ",e.jsx("code",{children:"disabled"})," boolean attribute on an input to remove pointer events, and prevent focusing."]}),e.jsx(m,{inIFrame:!1,mdFile:k,children:e.jsx(p,{isInline:!0,children:a.map(n=>e.jsx(h,{label:n,name:"radioDisableOption",value:n,selectedValue:i.values.radioDisableOption,onChange:i.handleChange,disabled:!0},n))})})]})]}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsxs(r,{children:[e.jsx(o,{iconProps:{icon:"HelpCircle",color:"violet",size:"text-3xl"},children:"Description - description"}),e.jsx(s,{children:e.jsx("code",{children:"ReactNode"})}),e.jsx(s,{children:"Radio"})]})}),e.jsxs(t,{children:[e.jsx("div",{className:"text-zinc-500",children:"Basic radio example with description."}),e.jsx(m,{inIFrame:!1,mdFile:V,children:e.jsx(p,{isInline:!0,children:["Option 1","Option 2"].map(n=>e.jsx(h,{label:n,name:"radioDescOption",value:n,selectedValue:i.values.radioDescOption,onChange:i.handleChange,description:"Notify me when this action happens. this action happens. this action happens."},n))})})]})]}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsx(r,{children:e.jsx(o,{children:"API"})})}),e.jsx(t,{children:e.jsx(R,{code:N(C,"interface")})})]})]})})]})};export{D as default};
