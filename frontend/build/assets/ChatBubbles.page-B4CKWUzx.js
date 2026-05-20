import{j as e,r as y,c as p}from"./vendor-D_nTE7E-.js";import{P as X,H as Y,r as T,z as v,p as j,a as u,C as B,G as o,J as r,K as c,N as d,V as t,O as m,aB as b,U as n,aC as I}from"./chunk-icon-Pdyc-Xig.js";import{M as Q}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const Z=h=>{const{children:x,className:C,...a}=h;return e.jsx("div",{className:p("text-center text-sm text-zinc-500",C),...a,children:x})};Z.displayName="ChatBubblesSeparate";const s=h=>{const{children:x,className:C,isMyContent:a,myContentPosition:i,isAvatar:J,image:l,username:V,footer:N,...P}=h,G=J&&e.jsx("div",{children:e.jsx(X,{src:l,name:V})});return e.jsxs("div",{"data-component-name":"ChatBubbles/ChatBubblesItem",className:p({"ms-auto":i==="end"&&a,"ps-16":i==="end"&&a,"pe-16":!a||i==="start"},"flex max-w-(--breakpoint-lg) gap-4",C),...P,children:[(!a||i==="start"&&a)&&G,e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:p("w-fit self-end rounded-xl border border-zinc-500/10 p-4 dark:border-zinc-500/25",{"bg-blue-500 text-white":a}),children:x}),N&&e.jsx("div",{className:p("text-zinc-500",{"ms-auto":i==="end"&&a}),children:N})]}),i==="end"&&a&&G]})};s.displayName="ChatBubblesItem";const g=h=>{const{children:x,className:C,myContentPosition:a="end",isAvatar:i,...J}=h;return e.jsx("div",{"data-component-name":"ChatBubbles",className:p("flex flex-col gap-4",C),...J,children:y.Children.map(x,l=>["ChatBubblesItem","ChatBubblesSeparate"].includes(l?.type?.displayName)?y.cloneElement(l,{myContentPosition:a||l?.props.myContentPosition,isAvatar:i||l?.props.isAvatar,className:`${l?.props?.className||""}`}):e.jsx("code",{children:"Only ChatBubblesItem component should be used as a child."}))})},W="data:text/markdown;base64,YGBgdHN4CjxDaGF0QnViYmxlcz4KCTxDaGF0QnViYmxlc0l0ZW0gdXNlcm5hbWU9Jy4uLic+VGhpcyBpcyBjaGlsZHJlbjwvQ2hhdEJ1YmJsZXNJdGVtPgoJPENoYXRCdWJibGVzSXRlbSB1c2VybmFtZT0nLi4uJz5UaGlzIGlzIGNoaWxkcmVuICMyPC9DaGF0QnViYmxlc0l0ZW0+CjwvQ2hhdEJ1YmJsZXM+CmBgYAo=",f="data:text/markdown;base64,YGBgdHN4CjxDaGF0QnViYmxlcz4KCTxDaGF0QnViYmxlc0l0ZW0gdXNlcm5hbWU9Jy4uLic+VGhpcyBpcyBjaGlsZHJlbjwvQ2hhdEJ1YmJsZXNJdGVtPgoJPENoYXRCdWJibGVzSXRlbSB1c2VybmFtZT0nLi4uJyBpc015Q29udGVudD4KCQlUaGlzIGlzIGlzTXlDb250ZW50J3MgY2hpbGRyZW4KCTwvQ2hhdEJ1YmJsZXNJdGVtPgoJPENoYXRCdWJibGVzSXRlbSB1c2VybmFtZT0nLi4uJz5UaGlzIGlzIGNoaWxkcmVuPC9DaGF0QnViYmxlc0l0ZW0+Cgk8Q2hhdEJ1YmJsZXNJdGVtIHVzZXJuYW1lPScuLi4nIGlzTXlDb250ZW50PgoJCVRoaXMgaXMgaXNNeUNvbnRlbnQncyBjaGlsZHJlbgoJPC9DaGF0QnViYmxlc0l0ZW0+CjwvQ2hhdEJ1YmJsZXM+CmBgYAo=",z="data:text/markdown;base64,YGBgdHN4CjxDaGF0QnViYmxlcyBpc0F2YXRhcj4KCTxDaGF0QnViYmxlc0l0ZW0gdXNlcm5hbWU9Jy4uLic+VGhpcyBpcyBjaGlsZHJlbjwvQ2hhdEJ1YmJsZXNJdGVtPgoJPENoYXRCdWJibGVzSXRlbSB1c2VybmFtZT0nLi4uJyBpc015Q29udGVudD4KCQlUaGlzIGlzIGlzTXlDb250ZW50J3MgY2hpbGRyZW4KCTwvQ2hhdEJ1YmJsZXNJdGVtPgoJPENoYXRCdWJibGVzSXRlbSB1c2VybmFtZT0nLi4uJz5UaGlzIGlzIGNoaWxkcmVuPC9DaGF0QnViYmxlc0l0ZW0+Cgk8Q2hhdEJ1YmJsZXNJdGVtIHVzZXJuYW1lPScuLi4nIGlzTXlDb250ZW50PgoJCVRoaXMgaXMgaXNNeUNvbnRlbnQncyBjaGlsZHJlbgoJPC9DaGF0QnViYmxlc0l0ZW0+CjwvQ2hhdEJ1YmJsZXM+CmBgYAo=",F="data:text/markdown;base64,YGBgdHN4CjxDaGF0QnViYmxlcyBpc0F2YXRhcj4KCTxDaGF0QnViYmxlc0l0ZW0gdXNlcm5hbWU9Jy4uLicgaW1hZ2U9Jy4uLic+CgkJVGhpcyBpcyBjaGlsZHJlbgoJPC9DaGF0QnViYmxlc0l0ZW0+Cgk8Q2hhdEJ1YmJsZXNJdGVtIHVzZXJuYW1lPScuLi4nIGltYWdlPScuLi4nIGlzTXlDb250ZW50PgoJCVRoaXMgaXMgaXNNeUNvbnRlbnQncyBjaGlsZHJlbgoJPC9DaGF0QnViYmxlc0l0ZW0+Cgk8Q2hhdEJ1YmJsZXNJdGVtIHVzZXJuYW1lPScuLi4nIGltYWdlPScuLi4nPgoJCVRoaXMgaXMgY2hpbGRyZW4KCTwvQ2hhdEJ1YmJsZXNJdGVtPgoJPENoYXRCdWJibGVzSXRlbSB1c2VybmFtZT0nLi4uJyBpbWFnZT0nLi4uJyBpc015Q29udGVudD4KCQlUaGlzIGlzIGlzTXlDb250ZW50J3MgY2hpbGRyZW4KCTwvQ2hhdEJ1YmJsZXNJdGVtPgo8L0NoYXRCdWJibGVzPgpgYGAK",R="data:text/markdown;base64,YGBgdHN4CjxDaGF0QnViYmxlcyBpc0F2YXRhcj4KCTxDaGF0QnViYmxlc1NlcGFyYXRlPlRvZGF5IDA5OjAwPC9DaGF0QnViYmxlc1NlcGFyYXRlPgoJPENoYXRCdWJibGVzSXRlbQoJCWltYWdlPScuLi4nCgkJdXNlcm5hbWU9Jy4uLicKCQlmb290ZXI9ewoJCQk8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTInPgoJCQkJPEljb24gaWNvbj0nQWxlcnRDaXJjbGUnIC8+CgkJCQlFZGl0ZWQ6IDA5OjA4CgkJCTwvZGl2PgoJCX0+CgkJLi4uCgk8L0NoYXRCdWJibGVzSXRlbT4KCTxDaGF0QnViYmxlc0l0ZW0KCQlpbWFnZT0nLi4uJwoJCXVzZXJuYW1lPScuLi4nCgkJaXNNeUNvbnRlbnQKCQlmb290ZXI9ewoJCQk8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1ibHVlLTUwMCc+CgkJCQk8SWNvbiBpY29uPSdUaWNrRG91YmxlMDInIC8+CgkJCQlSZWFkOiAwOToxNgoJCQk8L2Rpdj4KCQl9PgoJCS4uLgoJPC9DaGF0QnViYmxlc0l0ZW0+Cgk8Q2hhdEJ1YmJsZXNJdGVtIGltYWdlPScuLi4nIHVzZXJuYW1lPScuLi4nPgoJCS4uLgoJPC9DaGF0QnViYmxlc0l0ZW0+Cgk8Q2hhdEJ1YmJsZXNJdGVtCgkJaW1hZ2U9Jy4uLicKCQl1c2VybmFtZT0nLi4uJwoJCWlzTXlDb250ZW50CgkJZm9vdGVyPXsKCQkJPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC0yJz4KCQkJCTxJY29uIGljb249J1RpY2swMicgLz4KCQkJCVNlbnQ6IDA5OjMyCgkJCTwvZGl2PgoJCX0+CgkJLi4uCgk8L0NoYXRCdWJibGVzSXRlbT4KCTxDaGF0QnViYmxlc0l0ZW0KCQlpbWFnZT0nLi4uJwoJCXVzZXJuYW1lPScuLi4nCgkJaXNNeUNvbnRlbnQKCQlmb290ZXI9ewoJCQk8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1yZWQtNTAwJz4KCQkJCTxJY29uIGljb249J0FsZXJ0MDEnIC8+CgkJCQlOb3QgU2VudAoJCQk8L2Rpdj4KCQl9PgoJCS4uLgoJPC9DaGF0QnViYmxlc0l0ZW0+CjwvQ2hhdEJ1YmJsZXM+CmBgYAo=",M=`import { Children, cloneElement, FC, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import Avatar from './Avatar';

// @start-snippet:: interface
type TMyContentPosition = 'start' | 'end';
// @end-snippet:: interface

// @start-snippet:: interface
interface IChatBubblesSeparateProps {
	children?: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const ChatBubblesSeparate: FC<IChatBubblesSeparateProps> = (props) => {
	const { children, className, ...rest } = props;
	return (
		<div className={classNames('text-center text-sm text-zinc-500', className)} {...rest}>
			{children}
		</div>
	);
};
ChatBubblesSeparate.displayName = 'ChatBubblesSeparate';

// @start-snippet:: interface
interface IChatBubblesItemProps {
	children: ReactNode;
	className?: string;
	isMyContent?: boolean;
	myContentPosition?: TMyContentPosition;
	image?: string;
	username: string;
	isAvatar?: boolean;
	footer?: ReactNode;
}
// @end-snippet:: interface
export const ChatBubblesItem: FC<IChatBubblesItemProps> = (props) => {
	const {
		children,
		className,
		isMyContent,
		myContentPosition,
		isAvatar,
		image,
		username,
		footer,
		...rest
	} = props;

	const AVATAR = isAvatar && (
		<div>
			<Avatar src={image} name={username} />
		</div>
	);

	return (
		<div
			data-component-name='ChatBubbles/ChatBubblesItem'
			className={classNames(
				{
					'ms-auto': myContentPosition === 'end' && isMyContent,
					'ps-16': myContentPosition === 'end' && isMyContent,
					'pe-16': !isMyContent || myContentPosition === 'start',
				},
				'flex max-w-(--breakpoint-lg) gap-4',
				className,
			)}
			{...rest}>
			{(!isMyContent || (myContentPosition === 'start' && isMyContent)) && AVATAR}
			<div className='flex flex-col gap-2'>
				<div
					className={classNames(
						'w-fit self-end rounded-xl border border-zinc-500/10 p-4 dark:border-zinc-500/25',
						{
							'bg-blue-500 text-white': isMyContent,
						},
					)}>
					{children}
				</div>
				{footer && (
					<div
						className={classNames('text-zinc-500', {
							'ms-auto': myContentPosition === 'end' && isMyContent,
						})}>
						{footer}
					</div>
				)}
			</div>
			{myContentPosition === 'end' && isMyContent && AVATAR}
		</div>
	);
};
ChatBubblesItem.displayName = 'ChatBubblesItem';

// @start-snippet:: interface
interface IChatBubblesProps {
	children: ReactNode;
	className?: string;
	myContentPosition?: TMyContentPosition;
	isAvatar?: boolean;
}
// @end-snippet:: interface
const ChatBubbles: FC<IChatBubblesProps> = (props) => {
	const { children, className, myContentPosition = 'end', isAvatar, ...rest } = props;
	return (
		<div
			data-component-name='ChatBubbles'
			className={classNames('flex flex-col gap-4', className)}
			{...rest}>
			{Children.map(children, (child) =>
				// @ts-ignore
				['ChatBubblesItem', 'ChatBubblesSeparate'].includes(child?.type?.displayName) ? (
					cloneElement(child as ReactElement<IChatBubblesItemProps>, {
						// @ts-ignore
						myContentPosition: myContentPosition || child?.props.myContentPosition,
						// @ts-ignore
						isAvatar: isAvatar || child?.props.isAvatar,
						// @ts-ignore
						className: \`\${child?.props?.className || ''}\`,
					})
				) : (
					<code>Only ChatBubblesItem component should be used as a child.</code>
				),
			)}
		</div>
	);
};

export default ChatBubbles;
`,D=()=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsxs(T,{className:"flex-col items-start!",children:[e.jsx(v,{list:[{...j.documentation.baseComponent},{...j.documentation.baseComponent.subPages.chatBubbles}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(u,{icon:j.documentation.baseComponent.subPages.chatBubbles.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:j.documentation.baseComponent.subPages.chatBubbles.text})]})]})}),e.jsx(B,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Ready-to-use Tailwind CSS Chat Bubble UI component. Perfect for organising conversations in chats, messaging apps, social media platforms, and more."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(o,{children:[e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"children"}),e.jsx(t,{children:e.jsx("code",{children:"ReactNode"})}),e.jsx(t,{children:"ChatBubblesItem"})]})}),e.jsxs(m,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic card containing a title, content and an extra corner content."}),e.jsx(b,{mdFile:W,inIFrame:!1,children:e.jsxs(g,{children:[e.jsx(s,{username:n.aulisTiainen.username,children:"This is children"}),e.jsx(s,{username:n.aulisTiainen.username,children:"This is children #2"})]})})]})]}),e.jsxs(o,{children:[e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"isMyContent"}),e.jsx(t,{children:e.jsx("code",{children:"boolean"})}),e.jsx(t,{children:"ChatBubblesItem"})]})}),e.jsxs(m,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic card containing a title, content and an extra corner content."}),e.jsx(b,{mdFile:f,inIFrame:!1,children:e.jsxs(g,{children:[e.jsx(s,{username:n.aulisTiainen.username,children:"This is children"}),e.jsx(s,{username:n.aulisTiainen.username,isMyContent:!0,children:"This is isMyContent's children"}),e.jsx(s,{username:n.aulisTiainen.username,children:"This is children"}),e.jsx(s,{username:n.aulisTiainen.username,isMyContent:!0,children:"This is isMyContent's children"})]})})]})]}),e.jsxs(o,{children:[e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"isAvatar"}),e.jsx(t,{children:e.jsx("code",{children:"boolean"})}),e.jsx(t,{children:"ChatBubbles"})]})}),e.jsxs(m,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic card containing a title, content and an extra corner content."}),e.jsx(b,{mdFile:z,inIFrame:!1,children:e.jsxs(g,{isAvatar:!0,children:[e.jsx(s,{username:n.aulisTiainen.username,children:"This is children"}),e.jsx(s,{username:n.johndoe.username,isMyContent:!0,children:"This is isMyContent's children"}),e.jsx(s,{username:n.aulisTiainen.username,children:"This is children"}),e.jsx(s,{username:n.johndoe.username,isMyContent:!0,children:"This is isMyContent's children"})]})})]})]}),e.jsxs(o,{children:[e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"image"}),e.jsx(t,{children:e.jsx("code",{children:"string"})}),e.jsx(t,{children:"ChatBubblesItem"})]})}),e.jsxs(m,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic card containing a title, content and an extra corner content."}),e.jsx(b,{mdFile:F,inIFrame:!1,children:e.jsxs(g,{isAvatar:!0,children:[e.jsx(s,{username:n.aulisTiainen.username,image:n.aulisTiainen.image.org,children:"This is children"}),e.jsx(s,{username:n.johndoe.username,image:n.johndoe.image.org,isMyContent:!0,children:"This is isMyContent's children"}),e.jsx(s,{username:n.aulisTiainen.username,image:n.aulisTiainen.image.org,children:"This is children"}),e.jsx(s,{username:n.johndoe.username,image:n.johndoe.image.org,isMyContent:!0,children:"This is isMyContent's children"})]})})]})]}),e.jsxs(o,{children:[e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"footer"}),e.jsx(t,{children:e.jsx("code",{children:"ReactNode"})}),e.jsx(t,{children:"ChatBubblesItem"})]})}),e.jsxs(m,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic card containing a title, content and an extra corner content."}),e.jsx(b,{mdFile:R,inIFrame:!1,children:e.jsxs(g,{isAvatar:!0,children:[e.jsx(Z,{children:"Today 09:00"}),e.jsx(s,{image:n.aulisTiainen.image.org,username:n.aulisTiainen.username,footer:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(u,{icon:"AlertCircle"}),"Edited: 09:08"]}),children:"Hello Scott, are you ready for the client meeting?"}),e.jsx(s,{image:n.johndoe.image.org,username:n.johndoe.username,isMyContent:!0,footer:e.jsxs("div",{className:"flex items-center gap-2 text-blue-500",children:[e.jsx(u,{icon:"TickDouble02"}),"Read: 09:16"]}),children:"Hello! Yes, I'm ready. I've reviewed our presentation one last time and I'm prepared for any questions."}),e.jsx(s,{image:n.aulisTiainen.image.org,username:n.aulisTiainen.username,children:"Great! Remember to focus on the advantages of our product to grab the clients' attention."}),e.jsx(s,{image:n.johndoe.image.org,username:n.johndoe.username,isMyContent:!0,footer:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(u,{icon:"Tick02"}),"Sent: 09:32"]}),children:"Understood, I'll emphasize the features of our product and demonstrate how we can provide solutions to their needs."}),e.jsx(s,{image:n.johndoe.image.org,username:n.johndoe.username,isMyContent:!0,footer:e.jsxs("div",{className:"flex items-center gap-2 text-red-500",children:[e.jsx(u,{icon:"Alert01"}),"Not Sent"]}),children:"??"})]})})]})]}),e.jsxs(o,{children:[e.jsx(r,{children:e.jsx(c,{children:e.jsx(d,{children:"API"})})}),e.jsx(m,{children:e.jsx(Q,{code:I(M,"interface")})})]})]})})]});export{D as default};
