import{r as l,u as P,g as E,o as y,h as Q,s as M,j as e}from"./vendor-D_nTE7E-.js";import{aF as W,H as S,r as B,z as X,p as i,a as k,C as N,G as f,J as g,K as J,N as R,O as h,aB as H,i as v,j as n,ao as C,D as V,h as Y,aC as j}from"./chunk-icon-Pdyc-Xig.js";import{M as I}from"./chunk-mdviewer-RzNt5nmr.js";import{d as L}from"./Dropdown-Bjondl2M.js";import"./chunk-highlighter-bh0nNJlE.js";const G=l.forwardRef((o,x)=>{const{children:w}=o,[c,p]=l.useState(!1),a=l.useRef({pageX:0,pageY:0}),{refs:d,floatingStyles:Z,update:u}=P({placement:"bottom-start",middleware:[y(0),Q(),M()],whileElementsMounted:E}),m=l.useRef(null);return l.useEffect(()=>{const t=x.current;if(!t)return;const s=r=>{r.preventDefault(),a.current={pageX:r.pageX,pageY:r.pageY},p(!0)};return t.addEventListener("contextmenu",s),()=>{t.removeEventListener("contextmenu",s)}},[x]),l.useEffect(()=>{if(!c)return;const t={getBoundingClientRect:()=>{const r=a.current.pageX-window.scrollX,b=a.current.pageY-window.scrollY;return{width:0,height:0,top:b,right:r,bottom:b,left:r,x:r,y:b,toJSON:()=>{}}}};d.setReference(t),u();const s=()=>{u()};return window.addEventListener("scroll",s,!0),()=>{window.removeEventListener("scroll",s,!0)}},[c,d,u]),l.useEffect(()=>{if(!c)return;const t=s=>{m.current&&!m.current.contains(s.target)&&p(!1)};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)},[c]),e.jsx(e.Fragment,{children:c&&e.jsx(W,{children:e.jsx("div",{ref:t=>{m.current=t,d.setFloating(t)},className:"inline-flex",style:Z,children:w})})})});G.displayName="ContextMenu";const T="data:text/markdown;base64,YGBgdHN4CmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JzsKaW1wb3J0IERyb3Bkb3duLCB7CglEcm9wZG93bkRpdmlkZXIsCglEcm9wZG93bkl0ZW0sCglEcm9wZG93bk1lbnUsCglEcm9wZG93blRvZ2dsZSwKfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvRHJvcGRvd24nOwoKY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7Cgljb25zdCB0YXJnZXRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpOwoKCXJldHVybiAoCgkJPD4KCQkJPGRpdgoJCQkJcmVmPXt0YXJnZXRSZWZ9CgkJCQljbGFzc05hbWU9J2ZsZXggaC01NiB3LTk2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLWJsdWUtNTAwIHRleHQtMnhsJz4KCQkJCTxJY29uIGljb249J01vdXNlUmlnaHRDbGljazAxJyBzaXplPSd0ZXh0LTR4bCcgLz4KCQkJCTxzcGFuPlJpZ2h0IGNsaWNrPC9zcGFuPgoJCQk8L2Rpdj4KCQkJPENvbnRleHRNZW51IHJlZj17dGFyZ2V0UmVmfT4KCQkJCTxEcm9wZG93bk1lbnUgaXNPcGVuPgoJCQkJCTxEcm9wZG93bkl0ZW0gaWNvbj0nTWFpbFJlcGx5MDInPlJlcGx5PC9Ecm9wZG93bkl0ZW0+CgkJCQkJPERyb3Bkb3duSXRlbSBpY29uPSdNYWlsUmVwbHlBbGwwMic+UmVwbHkgYWxsPC9Ecm9wZG93bkl0ZW0+CgkJCQkJPERyb3Bkb3duSXRlbSBpY29uPSdMaW5rRm9yd2FyZCc+Rm9yd2FyZDwvRHJvcGRvd25JdGVtPgoJCQkJCTxEcm9wZG93bkl0ZW0gaWNvbj0nTWFpbFNlbmQwMic+UmVzZW5kPC9Ecm9wZG93bkl0ZW0+CgkJCQkJPERyb3Bkb3duRGl2aWRlciAvPgoJCQkJCTxEcm9wZG93bj4KCQkJCQkJPERyb3Bkb3duVG9nZ2xlPgoJCQkJCQkJPERyb3Bkb3duSXRlbSBpY29uPSdNb3JlSG9yaXpvbnRhbCc+TW9yZTwvRHJvcGRvd25JdGVtPgoJCQkJCQk8L0Ryb3Bkb3duVG9nZ2xlPgoJCQkJCQk8RHJvcGRvd25NZW51IHBsYWNlbWVudD0ncmlnaHQtc3RhcnQnPgoJCQkJCQkJPERyb3Bkb3duSXRlbT5JdGVtIDMuMy4xPC9Ecm9wZG93bkl0ZW0+CgkJCQkJCQk8RHJvcGRvd25JdGVtPkl0ZW0gMy4zLjI8L0Ryb3Bkb3duSXRlbT4KCQkJCQkJPC9Ecm9wZG93bk1lbnU+CgkJCQkJPC9Ecm9wZG93bj4KCQkJCQk8RHJvcGRvd25EaXZpZGVyIC8+CgkJCQkJPERyb3Bkb3duSXRlbSBpY29uPSdNYWlsMDInPk1hcmsgYXMgdW5yZWFkPC9Ecm9wZG93bkl0ZW0+CgkJCQkJPERyb3Bkb3duSXRlbSBpY29uPSdNYWlsT3BlbjAyJz5NYXJrIGFzIHJlYWQ8L0Ryb3Bkb3duSXRlbT4KCQkJCQk8RHJvcGRvd25JdGVtIGljb249J0RlbGl2ZXJ5Qm94MDInPkFyY2hpdmU8L0Ryb3Bkb3duSXRlbT4KCQkJCQk8RHJvcGRvd25JdGVtIGljb249J0RlbGV0ZTAyJyBjb2xvcj0ncmVkJz4KCQkJCQkJRGVsZXRlCgkJCQkJPC9Ecm9wZG93bkl0ZW0+CgkJCQkJPERyb3Bkb3duRGl2aWRlciAvPgoJCQkJCTxEcm9wZG93bkl0ZW0gaWNvbj0nSW5mb3JtYXRpb25DaXJjbGUnIGNvbG9yPSdhbWJlcic+CgkJCQkJCVJlcG9ydCBzcGFtCgkJCQkJPC9Ecm9wZG93bkl0ZW0+CgkJCQk8L0Ryb3Bkb3duTWVudT4KCQkJPC9Db250ZXh0TWVudT4KCQk8Lz4KCSk7Cn07CgpleHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDsKYGBgCg==",D=`import {
	forwardRef,
	HTMLAttributes,
	ReactNode,
	RefObject,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useFloating, offset, flip, shift, autoUpdate, VirtualElement } from '@floating-ui/react';
import Portal from '@/components/layout/Portal/Portal';

// @start-snippet:: interface
interface IContextMenuProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}
// @end-snippet:: interface
const ContextMenu = forwardRef<HTMLDivElement, IContextMenuProps>((props, ref) => {
	const { children } = props;

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const clickPositionRef = useRef<{ pageX: number; pageY: number }>({ pageX: 0, pageY: 0 });

	const { refs, floatingStyles, update } = useFloating({
		placement: 'bottom-start',
		middleware: [offset(0), flip(), shift()],
		whileElementsMounted: autoUpdate,
	});

	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const element = (ref as RefObject<HTMLDivElement>).current;
		if (!element) return;

		const handleContextMenu = (e: MouseEvent) => {
			e.preventDefault();
			clickPositionRef.current = { pageX: e.pageX, pageY: e.pageY };
			setIsOpen(true);
		};

		element.addEventListener('contextmenu', handleContextMenu);

		return () => {
			element.removeEventListener('contextmenu', handleContextMenu);
		};
	}, [ref]);

	useEffect(() => {
		if (!isOpen) return;

		const virtualEl: VirtualElement = {
			getBoundingClientRect: () => {
				const x = clickPositionRef.current.pageX - window.scrollX;
				const y = clickPositionRef.current.pageY - window.scrollY;
				return {
					width: 0,
					height: 0,
					top: y,
					right: x,
					bottom: y,
					left: x,
					x,
					y,
					toJSON: () => {},
				};
			},
		};

		refs.setReference(virtualEl);
		update();

		const handleScroll = () => {
			update();
		};

		window.addEventListener('scroll', handleScroll, true);

		return () => {
			window.removeEventListener('scroll', handleScroll, true);
		};
	}, [isOpen, refs, update]);

	useEffect(() => {
		if (!isOpen) return;

		const clickHandler = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	}, [isOpen]);

	return (
		<>
			{isOpen && (
				<Portal>
					<div
						ref={(node) => {
							menuRef.current = node;
							refs.setFloating(node);
						}}
						className='inline-flex'
						style={floatingStyles}>
						{children}
					</div>
				</Portal>
			)}
		</>
	);
});

ContextMenu.displayName = 'ContextMenu';

export default ContextMenu;
`,A=()=>{const o=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs(B,{className:"flex-col items-start!",children:[e.jsx(X,{list:[{...i.documentation.baseComponent},{...i.documentation.baseComponent.subPages.contextMenu}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(k,{icon:i.documentation.baseComponent.subPages.contextMenu.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:i.documentation.baseComponent.subPages.contextMenu.text})]})]})}),e.jsx(N,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Boltify's Tailwind CSS Collapse component represents toggle buttons, to show and hide or collapse and expand content or navigation items, managing its visibility."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(f,{children:[e.jsx(g,{children:e.jsx(J,{children:e.jsx(R,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"Basic usage"})})}),e.jsxs(h,{children:[e.jsx("div",{className:"text-zinc-500",children:"A basic card containing a title, content and an extra corner content."}),e.jsxs(H,{mdFile:T,inIFrame:!1,children:[e.jsxs("div",{ref:o,className:"flex h-56 w-96 items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-500 text-2xl",children:[e.jsx(k,{icon:"MouseRightClick01",size:"text-4xl"}),e.jsx("span",{children:"Right click"})]}),e.jsx(G,{ref:o,children:e.jsxs(v,{isOpen:!0,children:[e.jsx(n,{icon:"MailReply02",children:"Reply"}),e.jsx(n,{icon:"MailReplyAll02",children:"Reply all"}),e.jsx(n,{icon:"LinkForward",children:"Forward"}),e.jsx(n,{icon:"MailSend02",children:"Resend"}),e.jsx(C,{}),e.jsxs(V,{children:[e.jsx(Y,{children:e.jsx(n,{icon:"MoreHorizontal",children:"More"})}),e.jsxs(v,{placement:"right-start",children:[e.jsx(n,{children:"Item 3.3.1"}),e.jsx(n,{children:"Item 3.3.2"})]})]}),e.jsx(C,{}),e.jsx(n,{icon:"Mail02",children:"Mark as unread"}),e.jsx(n,{icon:"MailOpen02",children:"Mark as read"}),e.jsx(n,{icon:"DeliveryBox02",children:"Archive"}),e.jsx(n,{icon:"Delete02",color:"red",children:"Delete"}),e.jsx(C,{}),e.jsx(n,{icon:"InformationCircle",color:"amber",children:"Report spam"})]})})]})]})]}),e.jsxs(f,{children:[e.jsx(g,{children:e.jsx(J,{children:e.jsx(R,{children:"API"})})}),e.jsx(h,{children:e.jsx(I,{code:`${j(D,"interface")}

${j(L,"interface")}`})})]})]})})]})};export{A as default};
