import{j as e}from"./vendor-D_nTE7E-.js";import{H as p,r as h,z as j,p as s,a as u,C as v,G as n,J as r,K as o,N as c,V as g,O as t,aB as i,ac as d,P as a,A as l,ad as m,ae as x,aC as C}from"./chunk-icon-Pdyc-Xig.js";import{M as b}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const A="data:text/markdown;base64,YGBgdHN4CjxBdmF0YXJHcm91cD4KCTxBdmF0YXIgc3JjPScnIG5hbWU9Jy4uLicgLz4KCTxBdmF0YXIgc3JjPScnIG5hbWU9Jy4uLicgLz4KCTxBdmF0YXIgc3JjPScnIG5hbWU9Jy4uLicgLz4KCTxBdmF0YXIgbmFtZT0nKyAzJyAvPgo8L0F2YXRhckdyb3VwPgpgYGAK",f="data:text/markdown;base64,YGBgdHN4CjxBdmF0YXJHcm91cCBzaXplPSd3LTE2JyBjb2xvcj0nc2Vjb25kYXJ5Jz4KCTxBdmF0YXIgc3JjPScuLi4nIG5hbWU9Jy4uLicgLz4KCTxBdmF0YXIgc3JjPScuLi4nIG5hbWU9Jy4uLicgLz4KCTxBdmF0YXIgc3JjPScuLi4nIG5hbWU9Jy4uLicgLz4KCTxBdmF0YXIgbmFtZT0nKyAzJyBjb2xvcj0nZW1lcmFsZCcgLz4KPC9BdmF0YXJHcm91cD4KYGBgCg==",J=`import { Children, cloneElement, FC, ReactElement, ReactNode } from 'react';
import { IAvatarProps } from './Avatar';
import classNames from 'classnames';

// @start-snippet:: interface
export interface IAvatarGroupProps extends IAvatarProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const AvatarGroup: FC<IAvatarGroupProps> = (props) => {
	const { children, className, color, size, rounded, variant = 'solid', ...rest } = props;
	return (
		<div data-component-name='AvatarGroup' className={classNames('flex', className)} {...rest}>
			{Children.map(children, (child) =>
				// @ts-ignore
				['Avatar'].includes(child?.type?.displayName) ? (
					cloneElement(child as ReactElement<IAvatarProps>, {
						// @ts-ignore
						variant: child?.props?.variant || variant,
						// @ts-ignore
						color: child?.props?.color || color,
						// @ts-ignore
						size: child?.props?.size || size,
						// @ts-ignore
						rounded: child?.props?.rounded || rounded,
						// @ts-ignore
						className: \`\${child?.props?.className} first:ms-0 -ms-2 border-2 dark:border-zinc-950! border-white!\`,
					})
				) : (
					<code>Only Avatar component should be used as a child.</code>
				),
			)}
		</div>
	);
};
AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
`,y=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(h,{className:"flex-col items-start!",children:[e.jsx(j,{list:[{...s.documentation.baseComponent},{...s.documentation.baseComponent.subPages.avatarGroup}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(u,{icon:s.documentation.baseComponent.subPages.avatarGroup.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:s.documentation.baseComponent.subPages.avatarGroup.text})]})]})}),e.jsx(v,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Use Boltify Avatars as placeholders for user profile pictures or initials. Choose from circular, rounded, with status indicators, badges, and more."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(n,{children:[e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(c,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"children"}),e.jsx(g,{children:e.jsx("code",{children:"ReactNode"})})]})}),e.jsxs(t,{children:[e.jsx("div",{className:"text-zinc-500",children:"As a child, you can only use the Avatar component."}),e.jsx(i,{inIFrame:!1,mdFile:A,children:e.jsxs(d,{children:[e.jsx(a,{src:l,name:"John Doe"}),e.jsx(a,{src:m,name:"John Doe"}),e.jsx(a,{src:x,name:"John Doe"}),e.jsx(a,{name:"+ 3"})]})}),e.jsx(i,{inIFrame:!1,mdFile:f,children:e.jsxs(d,{size:"w-16",color:"secondary",children:[e.jsx(a,{src:l,name:"John Doe"}),e.jsx(a,{src:m,name:"John Doe"}),e.jsx(a,{src:x,name:"John Doe"}),e.jsx(a,{name:"+ 3",color:"emerald"})]})})]})]}),e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(o,{children:e.jsx(c,{children:"API"})})}),e.jsx(t,{children:e.jsx(b,{code:C(J,"interface")})})]})]})})]});export{y as default};
