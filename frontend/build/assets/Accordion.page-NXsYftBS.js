import{r as k,j as e,c as P}from"./vendor-D_nTE7E-.js";import{a as R,w as q,H as I,r as W,z as y,p as x,C as B,G as s,J as n,K as l,N as a,V as b,O as c,aB as d,aC as Y}from"./chunk-icon-Pdyc-Xig.js";import{t as Z,M as T}from"./chunk-mdviewer-RzNt5nmr.js";import{a as A}from"./colors.type-CqQ4Yd5W.js";import{a as L}from"./rounded.type-C-wx7rR-.js";import"./chunk-highlighter-bh0nNJlE.js";const i=t=>{const{id:o,children:v,className:C,title:j,activeItem:p,setActiveItem:g,sign:h,signPosition:N,color:J=Z.themeColor,...G}=t,r=p===o;let m;switch(h){case"plus":m=r?"MinusSign":"PlusSign";break;case"arrow":m=r?"ArrowUp01":"ArrowDown01";break;default:m=null;break}const S=N==="left",f={primary:"data-active:text-primary-500",secondary:"data-active:text-secondary-500",zinc:"data-active:text-zinc-500",red:"data-active:text-red-500",amber:"data-active:text-amber-500",lime:"data-active:text-lime-500",emerald:"data-active:text-emerald-500",sky:"data-active:text-sky-500",blue:"data-active:text-blue-500",violet:"data-active:text-violet-500"};return e.jsxs("div",{id:o,"data-component-name":"Accordion/AccordionItem",className:P(C,"border-b border-inherit last:border-none"),...G,children:[e.jsxs("button",{...r&&{"data-active":""},onClick:()=>g?g(r?void 0:o):null,className:P("flex w-full items-center p-4 hover:opacity-75","transition-all duration-300 ease-in-out",f[J]),children:[e.jsxs("div",{className:"flex grow items-center gap-2",children:[m&&S&&e.jsx(R,{icon:m}),e.jsx("span",{className:"font-bold",children:j})]}),e.jsx("div",{children:m&&!S&&e.jsx(R,{icon:m})})]}),e.jsx(q,{isOpen:p===o,children:e.jsx("div",{className:"px-4 pb-4",children:v})},o)]},o)};i.displayName="AccordionItem";const u=t=>{const{children:o,className:v,activeItemId:C,sign:j="plus",signPosition:p="left",color:g,rounded:h=Z.rounded,...N}=t,[J,G]=k.useState(C||Array.isArray(o)&&o?.flat()[0].props.id);return e.jsx("div",{"data-component-name":"Accordion",className:P(v,h,"border border-zinc-500/10 dark:border-zinc-500/25"),...N,children:k.Children.map(o,r=>["AccordionItem"].includes(r?.type?.displayName)?k.cloneElement(r,{activeItem:J,setActiveItem:G,sign:j,signPosition:p,color:r?.props?.color||g}):e.jsx("code",{children:"Only AccordionItem component should be used as a child."}))})};u.displayName="Accordion";const Q=`import {
	Children,
	cloneElement,
	FC,
	HTMLAttributes,
	ReactElement,
	ReactNode,
	useState,
} from 'react';
import classNames from 'classnames';
import Collapse from './Collapse';
import Icon from '@/components/icon/Icon';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';
import { TRounded } from '@/types/rounded.type';

// @start-snippet:: interface
type TAccordionSignProps = 'plus' | 'arrow' | 'no';
type TAccordionSignPositionProps = 'left' | 'right';
// @end-snippet:: interface

// @start-snippet:: interface
interface IAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	id: string;
	title: string;
	// activeItem?: string;
	// setActiveItem?: Dispatch<SetStateAction<string | undefined>>;
	sign?: TAccordionSignProps;
	signPosition?: TAccordionSignPositionProps;
	color?: TColors;
}
// @end-snippet:: interface
export const AccordionItem: FC<IAccordionItemProps> = (props) => {
	const {
		id,
		children,
		className,
		title,
		// @ts-ignore
		activeItem,
		// @ts-ignore
		setActiveItem,
		sign,
		signPosition,
		color = themeConfig.themeColor,
		...rest
	} = props;

	const _isActive = activeItem === id;

	let _signIcon;

	switch (sign) {
		case 'plus':
			_signIcon = _isActive ? 'MinusSign' : 'PlusSign';
			break;
		case 'arrow':
			_signIcon = _isActive ? 'ArrowUp01' : 'ArrowDown01';
			break;
		default:
			_signIcon = null;
			break;
	}

	const _isLeftSign = signPosition === 'left';

	const accordionColor: Record<TColors, string> = {
		primary: 'data-active:text-primary-500',
		secondary: 'data-active:text-secondary-500',
		zinc: 'data-active:text-zinc-500',
		red: 'data-active:text-red-500',
		amber: 'data-active:text-amber-500',
		lime: 'data-active:text-lime-500',
		emerald: 'data-active:text-emerald-500',
		sky: 'data-active:text-sky-500',
		blue: 'data-active:text-blue-500',
		violet: 'data-active:text-violet-500',
	};

	return (
		<div
			key={id}
			id={id}
			data-component-name='Accordion/AccordionItem'
			className={classNames(className, 'border-b border-inherit last:border-none')}
			{...rest}>
			<button
				{...(_isActive && { 'data-active': '' })}
				onClick={() => (setActiveItem ? setActiveItem(_isActive ? undefined : id) : null)}
				className={classNames(
					'flex w-full items-center p-4 hover:opacity-75',
					'transition-all duration-300 ease-in-out',
					accordionColor[color],
				)}>
				<div className='flex grow items-center gap-2'>
					{_signIcon && _isLeftSign && <Icon icon={_signIcon} />}
					<span className='font-bold'>{title}</span>
				</div>
				<div>{_signIcon && !_isLeftSign && <Icon icon={_signIcon} />}</div>
			</button>
			<Collapse key={id} isOpen={activeItem === id}>
				<div className='px-4 pb-4'>{children}</div>
			</Collapse>
		</div>
	);
};
AccordionItem.displayName = 'AccordionItem';

// @start-snippet:: interface
interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	activeItemId?: string;
	sign?: TAccordionSignProps;
	signPosition?: TAccordionSignPositionProps;
	color?: TColors;
	rounded?: TRounded;
}
// @end-snippet:: interface
const Accordion: FC<IAccordionProps> = (props) => {
	const {
		children,
		className,
		activeItemId,
		sign = 'plus',
		signPosition = 'left',
		color,
		rounded = themeConfig.rounded,
		...rest
	} = props;

	const [activeItem, setActiveItem] = useState<string | undefined>(
		activeItemId || (Array.isArray(children) && children?.flat()[0].props.id),
	);
	return (
		<div
			data-component-name='Accordion'
			className={classNames(
				className,
				rounded,
				'border border-zinc-500/10 dark:border-zinc-500/25',
			)}
			{...rest}>
			{Children.map(children, (child) =>
				// @ts-ignore
				['AccordionItem'].includes(child?.type?.displayName) ? (
					cloneElement(child as ReactElement<IAccordionItemProps>, {
						// @ts-ignore
						activeItem,
						setActiveItem,
						sign,
						signPosition,
						// @ts-ignore
						color: child?.props?.color || color,
					})
				) : (
					<code>Only AccordionItem component should be used as a child.</code>
				),
			)}
		</div>
	);
};
Accordion.displayName = 'Accordion';

export default Accordion;
`,M="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9J1RpdGxlICMxJz4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT0nVGl0bGUgIzInPgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KYGBgCg==",X="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9J1RpdGxlICMxJz4KCQk8QWNjb3JkaW9uPgoJCQk8QWNjb3JkaW9uSXRlbSBpZD0nMS4xJyB0aXRsZT0nVGl0bGUgIzEuMSc+CgkJCQkuLi4KCQkJPC9BY2NvcmRpb25JdGVtPgoJCQk8QWNjb3JkaW9uSXRlbSBpZD0nMS4yJyB0aXRsZT0nVGl0bGUgIzEuMic+CgkJCQkuLi4KCQkJPC9BY2NvcmRpb25JdGVtPgoJCTwvQWNjb3JkaW9uPgoJPC9BY2NvcmRpb25JdGVtPgoJPEFjY29yZGlvbkl0ZW0gaWQ9JzInIHRpdGxlPSdUaXRsZSAjMic+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+CjwvQWNjb3JkaW9uPgpgYGAK",F="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9J1RpdGxlICMxJz4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT0nVGl0bGUgIzInPgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KYGBgCg==",V="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24gc2lnbj0nYXJyb3cnPgoJPEFjY29yZGlvbkl0ZW0gaWQ9JzEnIHRpdGxlPSdUaXRsZSAjMSc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMicgdGl0bGU9J1RpdGxlICMyJz4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KPC9BY2NvcmRpb24+CmBgYAo=",w="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24gc2lnbj0nbm8nPgoJPEFjY29yZGlvbkl0ZW0gaWQ9JzEnIHRpdGxlPSdUaXRsZSAjMSc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMicgdGl0bGU9J1RpdGxlICMyJz4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KPC9BY2NvcmRpb24+CmBgYAo=",U="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24gc2lnblBvc2l0aW9uPSdyaWdodCc+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9J1RpdGxlICMxJz4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT0nVGl0bGUgIzInPgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KYGBgCg==",D="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24+Cgk8QWNjb3JkaW9uSXRlbSBpZD0ncHJpbWFyeScgdGl0bGU9J1RpdGxlICNwcmltYXJ5JyBjb2xvcj0ncHJpbWFyeSc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nc2Vjb25kYXJ5JyB0aXRsZT0nVGl0bGUgI3NlY29uZGFyeScgY29sb3I9J3NlY29uZGFyeSc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nemluYycgdGl0bGU9J1RpdGxlICN6aW5jJyBjb2xvcj0nemluYyc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0ncmVkJyB0aXRsZT0nVGl0bGUgI3JlZCcgY29sb3I9J3JlZCc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nYW1iZXInIHRpdGxlPSdUaXRsZSAjYW1iZXInIGNvbG9yPSdhbWJlcic+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nbGltZScgdGl0bGU9J1RpdGxlICNsaW1lJyBjb2xvcj0nbGltZSc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nZW1lcmFsZCcgdGl0bGU9J1RpdGxlICNlbWVyYWxkJyBjb2xvcj0nZW1lcmFsZCc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nc2t5JyB0aXRsZT0nVGl0bGUgI3NreScgY29sb3I9J3NreSc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nYmx1ZScgdGl0bGU9J1RpdGxlICNibHVlJyBjb2xvcj0nYmx1ZSc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0ndmlvbGV0JyB0aXRsZT0nVGl0bGUgI3Zpb2xldCcgY29sb3I9J3Zpb2xldCc+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+CjwvQWNjb3JkaW9uPgpgYGAK",z="data:text/markdown;base64,YGBgdHN4CjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC1ub25lJz4KCTxBY2NvcmRpb25JdGVtIGlkPScxJyB0aXRsZT17YFRpdGxlICMxICdyb3VuZGVkLW5vbmUnYH0+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMicgdGl0bGU9e2BUaXRsZSAjMiAncm91bmRlZC1ub25lJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC14cyc+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9e2BUaXRsZSAjMSAncm91bmRlZC14cydgfT4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT17YFRpdGxlICMyICdyb3VuZGVkLXhzJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC1zbSc+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9e2BUaXRsZSAjMSAncm91bmRlZC1zbSdgfT4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT17YFRpdGxlICMyICdyb3VuZGVkLXNtJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC1tZCc+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9e2BUaXRsZSAjMSAncm91bmRlZC1tZCdgfT4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT17YFRpdGxlICMyICdyb3VuZGVkLW1kJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC1sZyc+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9e2BUaXRsZSAjMSAncm91bmRlZC1sZydgfT4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT17YFRpdGxlICMyICdyb3VuZGVkLWxnJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC14bCc+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMScgdGl0bGU9e2BUaXRsZSAjMSAncm91bmRlZC14bCdgfT4KCQkuLi4KCTwvQWNjb3JkaW9uSXRlbT4KCTxBY2NvcmRpb25JdGVtIGlkPScyJyB0aXRsZT17YFRpdGxlICMyICdyb3VuZGVkLXhsJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC0yeGwnPgoJPEFjY29yZGlvbkl0ZW0gaWQ9JzEnIHRpdGxlPXtgVGl0bGUgIzEgJ3JvdW5kZWQtMnhsJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgoJPEFjY29yZGlvbkl0ZW0gaWQ9JzInIHRpdGxlPXtgVGl0bGUgIzIgJ3JvdW5kZWQtMnhsJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC0zeGwnPgoJPEFjY29yZGlvbkl0ZW0gaWQ9JzEnIHRpdGxlPXtgVGl0bGUgIzEgJ3JvdW5kZWQtM3hsJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgoJPEFjY29yZGlvbkl0ZW0gaWQ9JzInIHRpdGxlPXtgVGl0bGUgIzIgJ3JvdW5kZWQtM3hsJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KCjxBY2NvcmRpb24gcm91bmRlZD0ncm91bmRlZC1mdWxsJz4KCTxBY2NvcmRpb25JdGVtIGlkPScxJyB0aXRsZT17YFRpdGxlICMxICdyb3VuZGVkLWZ1bGwnYH0+CgkJLi4uCgk8L0FjY29yZGlvbkl0ZW0+Cgk8QWNjb3JkaW9uSXRlbSBpZD0nMicgdGl0bGU9e2BUaXRsZSAjMiAncm91bmRlZC1mdWxsJ2B9PgoJCS4uLgoJPC9BY2NvcmRpb25JdGVtPgo8L0FjY29yZGlvbj4KYGBgCg==",ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsxs(W,{className:"flex-col items-start!",children:[e.jsx(y,{list:[{...x.documentation.baseComponent},{...x.documentation.baseComponent.subPages.accordion}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(R,{icon:x.documentation.baseComponent.subPages.accordion.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:x.documentation.baseComponent.subPages.accordion.text})]})]})}),e.jsx(B,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Browse free customizable Tailwind CSS accordions. Choose from basic, nested, bordered, arrowed, and other styles to collapse and expand UI elements."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(a,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"children"}),e.jsx(b,{children:e.jsx("code",{children:"ReactNode"})})]})}),e.jsxs(c,{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(l,{children:e.jsx(a,{children:"Basic Usage"})})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(d,{inIFrame:!1,mdFile:M,children:e.jsxs(u,{children:[e.jsx(i,{id:"1",title:"Title #1",children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."}),e.jsx(i,{id:"2",title:"Title #2",children:"Quisque a tellus eu ex eleifend lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt velit at massa semper, id tempor ligula venenatis. Donec gravida tellus in commodo lobortis. Praesent a lacus in diam aliquam auctor. Cras eleifend elementum dui sed vestibulum. Nulla lobortis ornare pellentesque. Nulla ac faucibus metus, non ultricies ante. Praesent dignissim pellentesque libero nec tempus. In ut scelerisque tortor, in facilisis arcu. Phasellus interdum congue risus, non commodo diam aliquet vel. Duis non mollis eros. Ut sit amet nunc eget est tincidunt vulputate."})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(l,{children:e.jsx(a,{children:"Nested Usage"})})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic form of the accordion with sub menu."}),e.jsx(d,{inIFrame:!1,mdFile:X,children:e.jsxs(u,{children:[e.jsx(i,{id:"1",title:"Title #1",children:e.jsxs(u,{children:[e.jsx(i,{id:"1.1",title:"Title #1.1",children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."}),e.jsx(i,{id:"1.2",title:"Title #1.2",children:"Quisque a tellus eu ex eleifend lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt velit at massa semper, id tempor ligula venenatis. Donec gravida tellus in commodo lobortis. Praesent a lacus in diam aliquam auctor. Cras eleifend elementum dui sed vestibulum. Nulla lobortis ornare pellentesque. Nulla ac faucibus metus, non ultricies ante. Praesent dignissim pellentesque libero nec tempus. In ut scelerisque tortor, in facilisis arcu. Phasellus interdum congue risus, non commodo diam aliquet vel. Duis non mollis eros. Ut sit amet nunc eget est tincidunt vulputate."})]})}),e.jsx(i,{id:"2",title:"Title #2",children:"Quisque a tellus eu ex eleifend lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt velit at massa semper, id tempor ligula venenatis. Donec gravida tellus in commodo lobortis. Praesent a lacus in diam aliquam auctor. Cras eleifend elementum dui sed vestibulum. Nulla lobortis ornare pellentesque. Nulla ac faucibus metus, non ultricies ante. Praesent dignissim pellentesque libero nec tempus. In ut scelerisque tortor, in facilisis arcu. Phasellus interdum congue risus, non commodo diam aliquet vel. Duis non mollis eros. Ut sit amet nunc eget est tincidunt vulputate."})]})})]})]})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(a,{iconProps:{icon:"PlusSign",color:"emerald",size:"text-3xl"},children:"sign"}),e.jsx(b,{children:e.jsx("code",{children:"TAccordionSignProps"})})]})}),e.jsxs(c,{className:"flex flex-col gap-4",children:[e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(l,{children:e.jsx(a,{children:"Plus"})})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(d,{inIFrame:!1,mdFile:F,children:e.jsxs(u,{children:[e.jsx(i,{id:"1",title:"Title #1",children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."}),e.jsx(i,{id:"2",title:"Title #2",children:"Quisque a tellus eu ex eleifend lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt velit at massa semper, id tempor ligula venenatis. Donec gravida tellus in commodo lobortis. Praesent a lacus in diam aliquam auctor. Cras eleifend elementum dui sed vestibulum. Nulla lobortis ornare pellentesque. Nulla ac faucibus metus, non ultricies ante. Praesent dignissim pellentesque libero nec tempus. In ut scelerisque tortor, in facilisis arcu. Phasellus interdum congue risus, non commodo diam aliquet vel. Duis non mollis eros. Ut sit amet nunc eget est tincidunt vulputate."})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(l,{children:e.jsx(a,{children:"Arrow"})})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic form of the accordion with sub menu."}),e.jsx(d,{inIFrame:!1,mdFile:V,children:e.jsxs(u,{sign:"arrow",children:[e.jsx(i,{id:"1",title:"Title #1",children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."}),e.jsx(i,{id:"2",title:"Title #2",children:"Quisque a tellus eu ex eleifend lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt velit at massa semper, id tempor ligula venenatis. Donec gravida tellus in commodo lobortis. Praesent a lacus in diam aliquam auctor. Cras eleifend elementum dui sed vestibulum. Nulla lobortis ornare pellentesque. Nulla ac faucibus metus, non ultricies ante. Praesent dignissim pellentesque libero nec tempus. In ut scelerisque tortor, in facilisis arcu. Phasellus interdum congue risus, non commodo diam aliquet vel. Duis non mollis eros. Ut sit amet nunc eget est tincidunt vulputate."})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(l,{children:e.jsx(a,{children:"No sign"})})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic form of the accordion with sub menu."}),e.jsx(d,{inIFrame:!1,mdFile:w,children:e.jsxs(u,{sign:"no",children:[e.jsx(i,{id:"1",title:"Title #1",children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."}),e.jsx(i,{id:"2",title:"Title #2",children:"Quisque a tellus eu ex eleifend lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt velit at massa semper, id tempor ligula venenatis. Donec gravida tellus in commodo lobortis. Praesent a lacus in diam aliquam auctor. Cras eleifend elementum dui sed vestibulum. Nulla lobortis ornare pellentesque. Nulla ac faucibus metus, non ultricies ante. Praesent dignissim pellentesque libero nec tempus. In ut scelerisque tortor, in facilisis arcu. Phasellus interdum congue risus, non commodo diam aliquet vel. Duis non mollis eros. Ut sit amet nunc eget est tincidunt vulputate."})]})})]})]})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(a,{iconProps:{icon:"ArrowDataTransferHorizontal",color:"amber",size:"text-3xl"},children:"signPosition"}),e.jsx(b,{children:e.jsx("code",{children:"TAccordionSignPositionProps"})})]})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(d,{inIFrame:!1,mdFile:U,children:e.jsxs(u,{signPosition:"right",children:[e.jsx(i,{id:"1",title:"Title #1",children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."}),e.jsx(i,{id:"2",title:"Title #2",children:"Quisque a tellus eu ex eleifend lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt velit at massa semper, id tempor ligula venenatis. Donec gravida tellus in commodo lobortis. Praesent a lacus in diam aliquam auctor. Cras eleifend elementum dui sed vestibulum. Nulla lobortis ornare pellentesque. Nulla ac faucibus metus, non ultricies ante. Praesent dignissim pellentesque libero nec tempus. In ut scelerisque tortor, in facilisis arcu. Phasellus interdum congue risus, non commodo diam aliquet vel. Duis non mollis eros. Ut sit amet nunc eget est tincidunt vulputate."})]})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(a,{iconProps:{icon:"ColorPicker",color:"blue",size:"text-3xl"},children:"color"}),e.jsx(b,{children:e.jsx("code",{children:"TColors"})})]})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(d,{inIFrame:!1,mdFile:D,children:e.jsx(u,{children:A.map(t=>e.jsx(i,{id:t,title:`Title #${t}`,color:t,children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."},t))})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(l,{children:[e.jsx(a,{iconProps:{icon:"JoinRound",color:"violet",size:"text-3xl"},children:"rounded"}),e.jsx(b,{children:e.jsx("code",{children:"TRounded"})})]})}),e.jsxs(c,{children:[e.jsx("div",{className:"text-zinc-500",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(d,{inIFrame:!1,mdFile:z,children:e.jsx("div",{className:"grid grid-cols-12 gap-4",children:L.map(t=>e.jsxs(u,{rounded:t,className:"col-span-12 md:col-span-6 lg:col-span-4",children:[e.jsx(i,{id:"1",title:`Title #1 ${t}`,children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."}),e.jsx(i,{id:"2",title:`Title #2 ${t}`,children:"Cras viverra diam id mattis sodales. Suspendisse nulla enim, dictum sed gravida id, pretium ut odio. Pellentesque condimentum dictum tristique. Nunc elementum mauris at turpis pharetra, ut elementum nisl sollicitudin. Morbi mauris nunc, interdum in sapien id, consectetur lobortis tortor. Nulla facilisi. Nam feugiat diam non quam mattis condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis nec metus a facilisis. Etiam mollis consectetur dui, non maximus libero varius a. Cras tincidunt pellentesque orci, eget luctus dui pretium laoreet. Quisque ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam lobortis odio id vulputate consequat. Pellentesque ultrices iaculis molestie."})]},t))})})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsx(l,{children:e.jsx(a,{children:"API"})})}),e.jsx(c,{children:e.jsx(T,{code:Y(Q,"interface")})})]})]})})]});export{ee as default};
