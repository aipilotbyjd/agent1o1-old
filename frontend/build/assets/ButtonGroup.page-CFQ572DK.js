import{j as n}from"./vendor-D_nTE7E-.js";import{H as p,r as x,z as h,p as t,a as b,C,G as o,J as r,K as a,N as d,V as c,O as l,aB as u,$ as m,aC as j}from"./chunk-icon-Pdyc-Xig.js";import{B as s,M as v}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const f="data:text/markdown;base64,YGBgdHN4CjxCdXR0b25Hcm91cCB2YXJpYW50PSdzb2xpZCc+Cgk8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPgoJPEJ1dHRvbj5CdXR0b248L0J1dHRvbj4KPC9CdXR0b25Hcm91cD4KCjxCdXR0b25Hcm91cCB2YXJpYW50PSdvdXRsaW5lJz4KCTxCdXR0b24+QnV0dG9uPC9CdXR0b24+Cgk8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPgo8L0J1dHRvbkdyb3VwPgoKPEJ1dHRvbkdyb3VwIHZhcmlhbnQ9J2RlZmF1bHQnPgoJPEJ1dHRvbj5CdXR0b248L0J1dHRvbj4KCTxCdXR0b24+QnV0dG9uPC9CdXR0b24+CjwvQnV0dG9uR3JvdXA+Cgo8QnV0dG9uR3JvdXAgdmFyaWFudD0nc29mdCc+Cgk8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPgoJPEJ1dHRvbj5CdXR0b248L0J1dHRvbj4KPC9CdXR0b25Hcm91cD4KYGBgCg==",R="data:text/markdown;base64,YGBgdHN4CjxCdXR0b25Hcm91cCBpc1ZlcnRpY2FsPgoJPEJ1dHRvbj5CdXR0b248L0J1dHRvbj4KCTxCdXR0b24+QnV0dG9uPC9CdXR0b24+CjwvQnV0dG9uR3JvdXA+CmBgYAo=",B=`import { Children, cloneElement, FC, HTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';
import { IButtonProps, TButtonDimensions, TButtonVariants } from './Button';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TColors } from '@/types/colors.type';
import { TRounded } from '@/types/rounded.type';

// @start-snippet:: interface
interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	borderWidth?: TBorderWidth;
	children: ReactElement<IButtonProps>[];
	className?: string;
	color?: TColors;
	isVertical?: boolean;
	rounded?: TRounded;
	dimension?: TButtonDimensions;
	variant?: TButtonVariants;
}
// @end-snippet:: interface
const ButtonGroup: FC<IButtonGroupProps> = (props) => {
	const {
		borderWidth,
		children,
		className,
		color,
		isVertical = false,
		rounded,
		dimension,
		variant,
		...rest
	} = props;

	const classes = classNames('flex flex-wrap', { 'flex-col': isVertical });

	const childClasses = classNames({
		/**
		 * For Horizontal
		 */
		'not-last:ltr:rounded-r-none!': !isVertical,
		'not-last:rtl:rounded-l-none!': !isVertical,
		'not-first:ltr:rounded-l-none!': !isVertical,
		'not-first:rtl:rounded-r-none!': !isVertical,
		/**
		 * For Vertical
		 */
		'not-last:rounded-b-none!': isVertical,
		'not-first:rounded-t-none!': isVertical,
	});

	return (
		<div data-component-name='ButtonGroup' className={classNames(classes, className)} {...rest}>
			{Children.map(children, (child) =>
				cloneElement(child, {
					className: classNames(childClasses, child.props.className),
					borderWidth: borderWidth || child.props.borderWidth,
					color: color || child.props.color,
					rounded: rounded || child.props.rounded,
					dimension: dimension || child.props.dimension,
					variant: variant || child.props.variant,
				}),
			)}
		</div>
	);
};
ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
`,G=()=>{const i=["solid","outline","default","soft"];return n.jsxs(n.Fragment,{children:[n.jsx(p,{children:n.jsxs(x,{className:"flex-col items-start!",children:[n.jsx(h,{list:[{...t.documentation.baseComponent},{...t.documentation.baseComponent.subPages.buttonGroup}]}),n.jsxs("div",{className:"flex items-center gap-4 py-8",children:[n.jsx(b,{icon:t.documentation.baseComponent.subPages.buttonGroup.icon,size:"text-4xl"}),n.jsx("span",{className:"text-4xl font-bold",children:t.documentation.baseComponent.subPages.buttonGroup.text})]})]})}),n.jsx(C,{children:n.jsxs("div",{className:"flex flex-col gap-8",children:[n.jsx("div",{className:"text-2xl text-zinc-500",children:"Button groups have the same properties as buttons, they are pre-built Tailwind CSS buttons that can be stacked in a vertical line or placed horizontally. They are often used in toolbars, such as in WYSIWYG editors."}),n.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),n.jsxs(o,{children:[n.jsx(r,{children:n.jsxs(a,{children:[n.jsx(d,{iconProps:{icon:"Settings05",color:"blue",size:"text-3xl"},children:"variant"}),n.jsx(c,{children:n.jsx("code",{children:"TButtonVariants"})})]})}),n.jsxs(l,{children:[n.jsx("div",{className:"text-zinc-500",children:"Explore the most commonly used button styles such as solid, outline, ghost, soft, link, and more."}),n.jsx(u,{mdFile:f,inIFrame:!1,children:n.jsx("div",{className:"flex flex-wrap items-center gap-4",children:i.map(e=>n.jsxs(m,{variant:e,children:[n.jsx(s,{"aria-label":"Example",children:e}),n.jsx(s,{"aria-label":"Example",children:"Button"}),n.jsx(s,{"aria-label":"Example",children:"Button"})]},e))})})]})]}),n.jsxs(o,{children:[n.jsx(r,{children:n.jsxs(a,{children:[n.jsx(d,{iconProps:{icon:"CarouselVertical",color:"secondary",size:"text-3xl"},children:"isVertical"}),n.jsx(c,{children:n.jsx("code",{children:"boolean"})})]})}),n.jsxs(l,{children:[n.jsx("div",{className:"text-zinc-500",children:"Explore the most commonly used button styles such as solid, outline, ghost, soft, link, and more."}),n.jsx(u,{mdFile:R,inIFrame:!1,children:n.jsx("div",{className:"flex flex-wrap items-center gap-4",children:i.map(e=>n.jsxs(m,{variant:e,isVertical:!0,color:"secondary",children:[n.jsx(s,{"aria-label":"Example",children:e}),n.jsx(s,{"aria-label":"Example",children:"Button"}),n.jsx(s,{"aria-label":"Example",children:"Button"})]},e))})})]})]}),n.jsxs(o,{children:[n.jsx(r,{children:n.jsx(a,{children:n.jsx(d,{children:"API"})})}),n.jsx(l,{children:n.jsx(v,{code:j(B,"interface")})})]})]})})]})};export{G as default};
