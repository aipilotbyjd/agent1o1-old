import{r as W,c as Z,j as e}from"./vendor-D_nTE7E-.js";import{a as y,aD as k,H as Y,r as F,z as Q,p as i,C as I,G as t,J as s,K as a,N as l,V as c,O as d,aB as o,aC as S}from"./chunk-icon-Pdyc-Xig.js";import{t as m,M as V}from"./chunk-mdviewer-RzNt5nmr.js";import{a as b}from"./colors.type-CqQ4Yd5W.js";import"./chunk-highlighter-bh0nNJlE.js";const n=x=>{const{borderWidth:r=m.borderWidth,children:j,className:g,color:p=m.themeColor,icon:h,iconSize:v="text-3xl",isClosable:f,rounded:C=m.rounded,title:u,variant:z="default",...P}=x,[N,J]=W.useState(!0),G={solid:{primary:"bg-primary-500 border-transparent text-zinc-800",secondary:"bg-secondary-500 border-transparent text-zinc-800 dark:text-zinc-200",zinc:"bg-zinc-500 border-transparent text-zinc-800 dark:text-zinc-200",red:"bg-red-500 border-transparent text-zinc-800 dark:text-zinc-200",amber:"bg-amber-500 border-transparent text-zinc-800 dark:text-zinc-200",lime:"bg-lime-500 border-transparent text-zinc-800 dark:text-zinc-200",emerald:"bg-emerald-500 border-transparent text-zinc-800 dark:text-zinc-200",sky:"bg-sky-500 border-transparent text-zinc-800 dark:text-zinc-200",blue:"bg-blue-500 border-transparent text-zinc-800 dark:text-zinc-200",violet:"bg-violet-500 border-transparent text-zinc-800 dark:text-zinc-200"},outline:{primary:"border-primary-500 bg-primary-500/10 text-primary-500",secondary:"border-secondary-500 bg-secondary-500/10 text-secondary-500",zinc:"border-zinc-500 bg-zinc-500/10 text-zinc-500",red:"border-red-500 bg-red-500/10 text-red-500",amber:"border-amber-500 bg-amber-500/10 text-amber-500",lime:"border-lime-500 bg-lime-500/10 text-lime-500",emerald:"border-emerald-500 bg-emerald-500/10 text-emerald-500",sky:"border-sky-500 bg-sky-500/10 text-sky-500",blue:"border-blue-500 bg-blue-500/10 text-blue-500",violet:"border-violet-500 bg-violet-500/10 text-violet-500"},default:{primary:"text-primary-500 border-transparent",secondary:"text-secondary-500 border-transparent",zinc:"text-zinc-500 border-transparent",red:"text-red-500 border-transparent",amber:"text-amber-500 border-transparent",lime:"text-lime-500 border-transparent",emerald:"text-emerald-500 border-transparent",sky:"text-sky-500 border-transparent",blue:"text-blue-500 border-transparent",violet:"text-violet-500 border-transparent"},soft:{primary:"bg-primary-500/10 text-primary-500 border-transparent",secondary:"bg-secondary-500/10 text-secondary-500 border-transparent",zinc:"bg-zinc-500/10 text-zinc-500 border-transparent",red:"bg-red-500/10 text-red-500 border-transparent",amber:"bg-amber-500/10 text-amber-500 border-transparent",lime:"bg-lime-500/10 text-lime-500 border-transparent",emerald:"bg-emerald-500/10 text-emerald-500 border-transparent",sky:"bg-sky-500/10 text-sky-500 border-transparent",blue:"bg-blue-500/10 text-blue-500 border-transparent",violet:"bg-violet-500/10 text-violet-500 border-transparent"}}[z][p],B=Z("relative","flex h-fit items-stretch","p-4",[`${r}`],[`${C}`],G,g);return N?e.jsxs("div",{"data-component-name":"Alert",className:B,...P,children:[h&&e.jsx(y,{icon:h,className:"shrink-0 self-center ltr:mr-4 rtl:ml-4",size:v}),e.jsxs("div",{className:"w-full grow self-center",children:[u&&e.jsx("div",{className:"text-lg font-semibold",children:u}),e.jsx("div",{children:j})]}),f&&e.jsx("div",{className:"flex h-full grow items-start",children:e.jsx(k,{color:p,setIsOpen:J,"aria-label":"Close"})})]}):null};n.displayName="Alert";const L=`import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';
import { TIcons } from '@/types/icons.type';
import Icon from '@/components/icon/Icon';
import { TFontSizes } from '@/types/fontSizes.type';
import { TRounded } from '@/types/rounded.type';
import { TBorderWidth } from '@/types/borderWidth.type';
import CloseButton from './CloseButton';

// @start-snippet:: interface
export type TAlertVariants = 'solid' | 'outline' | 'default' | 'soft';
// @end-snippet:: interface

// @start-snippet:: interface
interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
	borderWidth?: TBorderWidth;
	children: ReactNode;
	className?: string;
	color?: TColors;
	icon?: TIcons;
	iconSize?: TFontSizes;
	isClosable?: boolean;
	rounded?: TRounded;
	title?: string;
	variant?: TAlertVariants;
}
// @end-snippet:: interface
const Alert: FC<IAlertProps> = (props) => {
	const {
		borderWidth = themeConfig.borderWidth,
		children,
		className,
		color = themeConfig.themeColor,
		icon,
		iconSize = 'text-3xl',
		isClosable,
		rounded = themeConfig.rounded,
		title,
		variant = 'default',
		...rest
	} = props;
	const [status, setStatus] = useState<boolean>(true);

	const alertVariants: Record<TAlertVariants, Record<TColors, string>> = {
		solid: {
			primary: 'bg-primary-500 border-transparent text-zinc-800',
			secondary: 'bg-secondary-500 border-transparent text-zinc-800 dark:text-zinc-200',
			zinc: 'bg-zinc-500 border-transparent text-zinc-800 dark:text-zinc-200',
			red: 'bg-red-500 border-transparent text-zinc-800 dark:text-zinc-200',
			amber: 'bg-amber-500 border-transparent text-zinc-800 dark:text-zinc-200',
			lime: 'bg-lime-500 border-transparent text-zinc-800 dark:text-zinc-200',
			emerald: 'bg-emerald-500 border-transparent text-zinc-800 dark:text-zinc-200',
			sky: 'bg-sky-500 border-transparent text-zinc-800 dark:text-zinc-200',
			blue: 'bg-blue-500 border-transparent text-zinc-800 dark:text-zinc-200',
			violet: 'bg-violet-500 border-transparent text-zinc-800 dark:text-zinc-200',
		},
		outline: {
			primary: 'border-primary-500 bg-primary-500/10 text-primary-500',
			secondary: 'border-secondary-500 bg-secondary-500/10 text-secondary-500',
			zinc: 'border-zinc-500 bg-zinc-500/10 text-zinc-500',
			red: 'border-red-500 bg-red-500/10 text-red-500',
			amber: 'border-amber-500 bg-amber-500/10 text-amber-500',
			lime: 'border-lime-500 bg-lime-500/10 text-lime-500',
			emerald: 'border-emerald-500 bg-emerald-500/10 text-emerald-500',
			sky: 'border-sky-500 bg-sky-500/10 text-sky-500',
			blue: 'border-blue-500 bg-blue-500/10 text-blue-500',
			violet: 'border-violet-500 bg-violet-500/10 text-violet-500',
		},
		default: {
			primary: 'text-primary-500 border-transparent',
			secondary: 'text-secondary-500 border-transparent',
			zinc: 'text-zinc-500 border-transparent',
			red: 'text-red-500 border-transparent',
			amber: 'text-amber-500 border-transparent',
			lime: 'text-lime-500 border-transparent',
			emerald: 'text-emerald-500 border-transparent',
			sky: 'text-sky-500 border-transparent',
			blue: 'text-blue-500 border-transparent',
			violet: 'text-violet-500 border-transparent',
		},
		soft: {
			primary: 'bg-primary-500/10 text-primary-500 border-transparent',
			secondary: 'bg-secondary-500/10 text-secondary-500 border-transparent',
			zinc: 'bg-zinc-500/10 text-zinc-500 border-transparent',
			red: 'bg-red-500/10 text-red-500 border-transparent',
			amber: 'bg-amber-500/10 text-amber-500 border-transparent',
			lime: 'bg-lime-500/10 text-lime-500 border-transparent',
			emerald: 'bg-emerald-500/10 text-emerald-500 border-transparent',
			sky: 'bg-sky-500/10 text-sky-500 border-transparent',
			blue: 'bg-blue-500/10 text-blue-500 border-transparent',
			violet: 'bg-violet-500/10 text-violet-500 border-transparent',
		},
	};
	const alertVariantClasses = alertVariants[variant][color];

	const classes = classNames(
		'relative',
		'flex h-fit items-stretch',
		'p-4',
		[\`\${borderWidth}\`],
		[\`\${rounded}\`],
		alertVariantClasses,
		className,
	);

	if (status)
		return (
			<div data-component-name='Alert' className={classes} {...rest}>
				{icon && (
					<Icon
						icon={icon}
						className='shrink-0 self-center ltr:mr-4 rtl:ml-4'
						size={iconSize}
					/>
				)}
				<div className='w-full grow self-center'>
					{title && <div className='text-lg font-semibold'>{title}</div>}
					<div>{children}</div>
				</div>
				{isClosable && (
					<div className='flex h-full grow items-start'>
						<CloseButton color={color} setIsOpen={setStatus} aria-label='Close' />
					</div>
				)}
			</div>
		);
	return null;
};
Alert.displayName = 'Alert';

export default Alert;
`,X="data:text/markdown;base64,YGBgdHN4CjxBbGVydCB2YXJpYW50PSdzb2xpZCc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J291dGxpbmUnPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdkZWZhdWx0Jz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nc29mdCc+Li4uPC9BbGVydD4KYGBgCg==",H="data:text/markdown;base64,YGBgdHN4CjxBbGVydCB2YXJpYW50PSdzb2xpZCcgY29sb3I9J3ByaW1hcnknPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdzb2xpZCcgY29sb3I9J3NlY29uZGFyeSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvbGlkJyBjb2xvcj0nemluYyc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvbGlkJyBjb2xvcj0ncmVkJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nc29saWQnIGNvbG9yPSdhbWJlcic+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvbGlkJyBjb2xvcj0nbGltZSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvbGlkJyBjb2xvcj0nZW1lcmFsZCc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvbGlkJyBjb2xvcj0nc2t5Jz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nc29saWQnIGNvbG9yPSdibHVlJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nc29saWQnIGNvbG9yPSd2aW9sZXQnPi4uLjwvQWxlcnQ+CmBgYAo=",w="data:text/markdown;base64,YGBgdHN4CjxBbGVydCB2YXJpYW50PSdvdXRsaW5lJyBjb2xvcj0ncHJpbWFyeSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yPSdzZWNvbmRhcnknPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdvdXRsaW5lJyBjb2xvcj0nemluYyc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yPSdyZWQnPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdvdXRsaW5lJyBjb2xvcj0nYW1iZXInPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdvdXRsaW5lJyBjb2xvcj0nbGltZSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yPSdlbWVyYWxkJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nb3V0bGluZScgY29sb3I9J3NreSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yPSdibHVlJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nb3V0bGluZScgY29sb3I9J3Zpb2xldCc+Li4uPC9BbGVydD4KYGBgCg==",D="data:text/markdown;base64,YGBgdHN4CjxBbGVydCB2YXJpYW50PSdkZWZhdWx0JyBjb2xvcj0ncHJpbWFyeSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J2RlZmF1bHQnIGNvbG9yPSdzZWNvbmRhcnknPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdkZWZhdWx0JyBjb2xvcj0nemluYyc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J2RlZmF1bHQnIGNvbG9yPSdyZWQnPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdkZWZhdWx0JyBjb2xvcj0nYW1iZXInPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdkZWZhdWx0JyBjb2xvcj0nbGltZSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J2RlZmF1bHQnIGNvbG9yPSdlbWVyYWxkJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nZGVmYXVsdCcgY29sb3I9J3NreSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J2RlZmF1bHQnIGNvbG9yPSdibHVlJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nZGVmYXVsdCcgY29sb3I9J3Zpb2xldCc+Li4uPC9BbGVydD4KYGBgCg==",A="data:text/markdown;base64,YGBgdHN4CjxBbGVydCB2YXJpYW50PSdzb2Z0JyBjb2xvcj0ncHJpbWFyeSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdzZWNvbmRhcnknPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdzb2Z0JyBjb2xvcj0nemluYyc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdyZWQnPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdzb2Z0JyBjb2xvcj0nYW1iZXInPi4uLjwvQWxlcnQ+CjxBbGVydCB2YXJpYW50PSdzb2Z0JyBjb2xvcj0nbGltZSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdlbWVyYWxkJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nc29mdCcgY29sb3I9J3NreSc+Li4uPC9BbGVydD4KPEFsZXJ0IHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdibHVlJz4uLi48L0FsZXJ0Pgo8QWxlcnQgdmFyaWFudD0nc29mdCcgY29sb3I9J3Zpb2xldCc+Li4uPC9BbGVydD4KYGBgCg==",T="data:text/markdown;base64,YGBgdHN4CjxBbGVydCBpY29uPSdBbGVydDAxJz4uLi48L0FsZXJ0PgpgYGAK",K="data:text/markdown;base64,YGBgdHN4CjxBbGVydCBpc0Nsb3NhYmxlPi4uLjwvQWxlcnQ+CmBgYAo=",q=()=>{const x=["solid","outline","default","soft"];return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsxs(F,{className:"flex-col items-start!",children:[e.jsx(Q,{list:[{...i.documentation.baseComponent},{...i.documentation.baseComponent.subPages.alerts}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(y,{icon:i.documentation.baseComponent.subPages.alerts.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:i.documentation.baseComponent.subPages.alerts.text})]})]})}),e.jsx(I,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Use Tailwind CSS alerts of various colors and border style to provide contextual feedback massages. Browse alerts with lists, added links or action buttons."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"Settings05",color:"blue",size:"text-3xl"},children:"Variant"}),e.jsxs(c,{className:"flex gap-2",children:[e.jsx("code",{children:"TAlertVariants"}),e.jsx("div",{className:"text-xs",children:"'solid' | 'outline' | 'default' | 'soft'"})]})]})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Explore the most commonly used button styles such as solid, outline, ghost, soft, link, and more."}),e.jsx(o,{inIFrame:!1,mdFile:X,children:e.jsx("div",{className:"grid grid-cols-12 gap-4",children:x.map(r=>e.jsxs(n,{variant:r,className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:r})," ","alert! You should check in on some of those fields below."]},r))})})]})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"ColorPicker",color:"emerald",size:"text-3xl"},children:"Color"}),e.jsxs(c,{className:"flex gap-2",children:[e.jsx("code",{children:"TColors"}),e.jsx("div",{className:"text-xs",children:"'primary' | 'secondary' | 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet'"})]})]})}),e.jsxs(d,{className:"flex flex-col gap-4",children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(a,{children:e.jsx(l,{children:"Solid color variants"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Predefined solid color button styles."}),e.jsx(o,{inIFrame:!1,mdFile:H,children:e.jsx("div",{className:"grid grid-cols-12 gap-4",children:b.map(r=>e.jsxs(n,{variant:"solid",color:r,className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:r})," ","solid alert! You should check in on some of those fields below."]},r))})})]})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(a,{children:e.jsx(l,{children:"Outline color variants"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Predefined outline color button styles"}),e.jsx(o,{inIFrame:!1,mdFile:w,children:e.jsx("div",{className:"grid grid-cols-12 gap-4",children:b.map(r=>e.jsxs(n,{variant:"outline",color:r,className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:r})," ","outline alert! You should check in on some of those fields below."]},r))})})]})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(a,{children:e.jsx(l,{children:"Default color variants"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Predefined default color button styles"}),e.jsx(o,{inIFrame:!1,mdFile:D,children:e.jsx("div",{className:"grid grid-cols-12 gap-4",children:b.map(r=>e.jsxs(n,{variant:"default",color:r,className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:r})," ","default alert! You should check in on some of those fields below."]},r))})})]})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(a,{children:e.jsx(l,{children:"Soft color variants"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Predefined soft color button styles"}),e.jsx(o,{inIFrame:!1,mdFile:A,children:e.jsx("div",{className:"grid grid-cols-12 gap-4",children:b.map(r=>e.jsxs(n,{variant:"soft",color:r,className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:r})," ","soft alert! You should check in on some of those fields below."]},r))})})]})]})]})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"Award02",color:"secondary",size:"text-3xl"},children:"Icon"}),e.jsx(c,{children:e.jsx("code",{children:"TIcons"})})]})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-xl font-bold",children:"Solid color intensity variants"}),e.jsx("div",{className:"text-zinc-500",children:"Predefined outline color intensity alert styles."}),e.jsx(o,{inIFrame:!1,mdFile:T,children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsxs(n,{variant:"outline",icon:"Alert01",color:"amber",title:"Icon Outline Alert",className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:"Icon"})," outline alert! You should check in on some of those fields below."]}),e.jsxs(n,{variant:"soft",icon:"LaurelWreathFirst01",color:"emerald",title:"Icon Soft Alert",className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:"Icon"})," outline alert! You should check in on some of those fields below."]}),e.jsxs(n,{variant:"default",icon:"CancelSquare",color:"red",title:"Icon Soft Alert",className:"col-span-12",children:[e.jsx("span",{className:"font-bold capitalize",children:"Icon"})," outline alert! You should check in on some of those fields below."]})]})})]})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{iconProps:{icon:"Cancel01",color:"red",size:"text-3xl"},children:"Closable"}),e.jsx(c,{children:e.jsx("code",{children:"isClosable"})})]})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"You can add a close button."}),e.jsx(o,{inIFrame:!1,mdFile:K,children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsxs(n,{variant:"outline",icon:"Alert01",color:"amber",title:"Icon Outline Alert",className:"col-span-12",isClosable:!0,children:[e.jsx("span",{className:"font-bold capitalize",children:"Icon"})," outline alert! You should check in on some of those fields below."]}),e.jsxs(n,{variant:"soft",icon:"LaurelWreathFirst01",color:"emerald",title:"Icon Soft Alert",className:"col-span-12",isClosable:!0,children:[e.jsx("span",{className:"font-bold capitalize",children:"Icon"})," outline alert! You should check in on some of those fields below."]}),e.jsxs(n,{variant:"default",icon:"CancelSquare",color:"red",title:"Icon Soft Alert",className:"col-span-12",isClosable:!0,children:[e.jsx("span",{className:"font-bold capitalize",children:"Icon"})," outline alert! You should check in on some of those fields below."]})]})})]})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(a,{children:e.jsx(l,{children:"API"})})}),e.jsx(d,{children:e.jsx(V,{code:S(L,"interface")})})]})]})})]})};export{q as default};
