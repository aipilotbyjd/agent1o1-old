import{r as p,u as Z,g as B,o as z,h as J,s as Q,i as W,aZ as X,d as S,e as Y,f as H,j as e,c as x,a_ as V,a$ as D,F as j}from"./vendor-D_nTE7E-.js";import{H as K,r as U,z as E,p as l,a as T,C as M,G as i,J as r,K as c,N as g,O as d,aB as P,aE as O,a0 as L,a1 as $,V as N,aC as q}from"./chunk-icon-Pdyc-Xig.js";import{B as t,M as _}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const ee=n=>n?.props["data-component-name"]||n?.type?.displayName||n?.type,G=n=>n?.includes("right")?"ms-2":n?.includes("bottom")?"mt-2":n?.includes("left")?"me-2":"mb-2",s=n=>{const{children:C,className:h,content:o,placement:I="top",...f}=n,m=p.useRef(null),[b,R]=p.useState(!1),{refs:A,floatingStyles:u,context:a}=Z({open:b,onOpenChange:R,placement:I,middleware:[z(8),J(),Q(),W({element:m})],whileElementsMounted:B}),F=X(a),y=S(a),w=Y(a),{getReferenceProps:k,getFloatingProps:v}=H([F,y,w]);return e.jsxs(e.Fragment,{children:[p.cloneElement(C,{"data-component-name":`${ee(C)} is cloned with Popover`,ref:A.setReference,className:x("cursor-pointer",C.props.className),...k()}),b&&o&&e.jsx(V,{children:e.jsx(D,{context:a,modal:!1,children:typeof o=="string"?e.jsxs("div",{"data-component-name":"Tooltip/Popper",ref:A.setFloating,style:u,className:x("z-[9999] px-2 py-1","max-w-xs","rounded-md border border-zinc-500/10 shadow-lg backdrop-blur-xs",G(I),h),...v(),...f,children:[o,e.jsx(j,{ref:m,context:a,className:"relative z-[9999] fill-zinc-50 dark:fill-zinc-950 [&>path:first-of-type]:stroke-zinc-500/10",strokeWidth:.5})]}):e.jsxs("div",{ref:A.setFloating,style:u,className:x("z-[9999] drop-shadow-lg",G(I),h),...v(),...f,children:[o,e.jsx(j,{ref:m,context:a,className:"relative z-[9999] fill-zinc-50 dark:fill-zinc-950 [&>path:first-of-type]:stroke-zinc-500/10",strokeWidth:.5})]})})})]})};s.displayName="Popover";const ne="data:text/markdown;base64,YGBgdHN4CjxQb3BvdmVyCiAgICBjb250ZW50PXsKICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J21heC13LXNtJz4KICAgICAgICAgICAgPENhcmRIZWFkZXI+CiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlckNoaWxkPgogICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUKICAgICAgICAgICAgICAgICAgICAgICAgaWNvblByb3BzPXt7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnQ2xpcGJvYXJkJywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmlvbGV0JywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6ICd0ZXh0LTN4bCcsCiAgICAgICAgICAgICAgICAgICAgICAgIH19PgogICAgICAgICAgICAgICAgICAgICAgICBDYXJkIHRpdGxlCiAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+CiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXJDaGlsZD4KICAgICAgICAgICAgPC9DYXJkSGVhZGVyPgoKICAgICAgICAgICAgPENhcmRCb2R5PgogICAgICAgICAgICAgICAgPGltZwogICAgICAgICAgICAgICAgICAgIHNyYz17SW1hZ2V9CiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi00IHJvdW5kZWQtbWQnCiAgICAgICAgICAgICAgICAgICAgYWx0PScnCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQKICAgICAgICAgICAgICAgIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MKICAgICAgICAgICAgICAgIGNvbnRlbnQuCiAgICAgICAgICAgIDwvQ2FyZEJvZHk+CiAgICAgICAgICAgIDxDYXJkRm9vdGVyPgogICAgICAgICAgICAgICAgPENhcmRGb290ZXJDaGlsZD4KICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9J3NvZnQnIGljb249J1NlbnQnPgogICAgICAgICAgICAgICAgICAgICAgICBHbyBzb21ld2hlcmUKICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4KICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3RlckNoaWxkPgogICAgICAgICAgICA8L0NhcmRGb290ZXI+CiAgICAgICAgPC9DYXJkPgogICAgfT4KICAgIDxCdXR0b24gdmFyaWFudD0nc29mdCc+Q2xpY2sgbWUgKHdpdGggUmVhY3ROb2RlKTwvQnV0dG9uPgo8L1BvcG92ZXI+CjxQb3BvdmVyIGNvbnRlbnQ9J1RoaXMgaXMgYSB0ZXh0Jz4KICAgIDxCdXR0b24gdmFyaWFudD0nc29mdCc+Q2xpY2sgbWUgKHdpdGggc3RyaW5nKTwvQnV0dG9uPgo8L1BvcG92ZXI+CmBgYAo=",te="data:text/markdown;base64,YGBgdHN4CjxQb3BvdmVyIGNvbnRlbnQ9J1RoaXMgaXMgYSB0ZXh0JyBwbGFjZW1lbnQ9J3RvcCc+Cgk8QnV0dG9uIHZhcmlhbnQ9J3NvZnQnPlRvcDwvQnV0dG9uPgo8L1BvcG92ZXI+CjxQb3BvdmVyIGNvbnRlbnQ9J1RoaXMgaXMgYSB0ZXh0JyBwbGFjZW1lbnQ9J3JpZ2h0Jz4KCTxCdXR0b24gdmFyaWFudD0nc29mdCc+UmlnaHQ8L0J1dHRvbj4KPC9Qb3BvdmVyPgo8UG9wb3ZlciBjb250ZW50PSdUaGlzIGlzIGEgdGV4dCcgcGxhY2VtZW50PSdib3R0b20nPgoJPEJ1dHRvbiB2YXJpYW50PSdzb2Z0Jz5Cb3R0b208L0J1dHRvbj4KPC9Qb3BvdmVyPgo8UG9wb3ZlciBjb250ZW50PSdUaGlzIGlzIGEgdGV4dCcgcGxhY2VtZW50PSdsZWZ0Jz4KCTxCdXR0b24gdmFyaWFudD0nc29mdCc+TGVmdDwvQnV0dG9uPgo8L1BvcG92ZXI+CmBgYAo=",se=`import { cloneElement, FC, ReactElement, ReactNode, useRef, useState } from 'react';
import classNames from 'classnames';
import {
	useFloating,
	offset,
	flip,
	shift,
	arrow,
	autoUpdate,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingArrow,
	FloatingPortal,
	FloatingFocusManager,
	Placement,
} from '@floating-ui/react';

const getComponentName = (child: ReactNode): string => {
	// @ts-ignore
	return child?.props['data-component-name'] || child?.type?.displayName || child?.type;
};

// @start-snippet:: interface
interface IPopoverProps {
	children: ReactNode;
	content: ReactNode;
	className?: string;
	placement?: Placement;
}
// @end-snippet:: interface
const getSpacePlacement = (placement: Placement | undefined): string => {
	if (placement?.includes('right')) return 'ms-2';
	if (placement?.includes('bottom')) return 'mt-2';
	if (placement?.includes('left')) return 'me-2';
	return 'mb-2';
};

const Popover: FC<IPopoverProps> = (props) => {
	const { children, className, content, placement = 'top', ...rest } = props;

	const arrowRef = useRef(null);

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		// eslint-disable-next-line react-hooks/refs
		middleware: [offset(8), flip(), shift(), arrow({ element: arrowRef })],
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<>
			{cloneElement(children as ReactElement, {
				// @ts-ignore
				'data-component-name': \`\${getComponentName(children)} is cloned with Popover\`,
				ref: refs.setReference,
				// @ts-expect-error
				className: classNames('cursor-pointer', children.props.className),
				...getReferenceProps(),
			})}
			{isOpen && content && (
				<FloatingPortal>
					<FloatingFocusManager context={context} modal={false}>
						{typeof content === 'string' ? (
							<div
								data-component-name='Tooltip/Popper'
								ref={refs.setFloating}
								style={floatingStyles}
								className={classNames(
									'z-[9999] px-2 py-1',
									'max-w-xs',
									'rounded-md border border-zinc-500/10 shadow-lg backdrop-blur-xs',
									getSpacePlacement(placement),
									className,
								)}
								{...getFloatingProps()}
								{...rest}>
								{content}
								<FloatingArrow
									ref={arrowRef}
									context={context}
									className='relative z-[9999] fill-zinc-50 dark:fill-zinc-950 [&>path:first-of-type]:stroke-zinc-500/10'
									strokeWidth={0.5}
								/>
							</div>
						) : (
							<div
								// eslint-disable-next-line react-hooks/refs
								ref={refs.setFloating}
								style={floatingStyles}
								className={classNames(
									'z-[9999] drop-shadow-lg',
									getSpacePlacement(placement),
									className,
								)}
								{...getFloatingProps()}
								{...rest}>
								{content}
								<FloatingArrow
									ref={arrowRef}
									context={context}
									className='relative z-[9999] fill-zinc-50 dark:fill-zinc-950 [&>path:first-of-type]:stroke-zinc-500/10'
									strokeWidth={0.5}
								/>
							</div>
						)}
					</FloatingFocusManager>
				</FloatingPortal>
			)}
		</>
	);
};
Popover.displayName = 'Popover';

export default Popover;
`,re=()=>e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsxs(U,{className:"flex-col items-start!",children:[e.jsx(E,{list:[{...l.documentation.baseComponent},{...l.documentation.baseComponent.subPages.popover}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(T,{icon:l.documentation.baseComponent.subPages.popover.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:l.documentation.baseComponent.subPages.popover.text})]})]})}),e.jsx(M,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Boltify Popovers offer dismissible, interactive elements with custom content. Create user-friendly interfaces with clickable areas and in-popover interactions."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(c,{children:e.jsx(g,{iconProps:{icon:"BookOpen02",color:"emerald",size:"text-3xl"},children:"Basic usage"})})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"It can be used as any component you want or just as a string."}),e.jsx(P,{mdFile:ne,inIFrame:!1,children:e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{content:e.jsxs(i,{className:"max-w-sm",children:[e.jsx(r,{children:e.jsx(c,{children:e.jsx(g,{iconProps:{icon:"Clipboard",color:"violet",size:"text-3xl"},children:"Card title"})})}),e.jsxs(d,{children:[e.jsx("img",{src:O,className:"mb-4 rounded-md",alt:""}),"Some quick example text to build on the card title and make up the bulk of the card's content."]}),e.jsx(L,{children:e.jsx($,{children:e.jsx(t,{"aria-label":"Go to page",variant:"soft",icon:"Sent",children:"Go somewhere"})})})]}),children:e.jsx(t,{"aria-label":"Open",variant:"soft",children:"Click me (with ReactNode)"})}),e.jsx(s,{content:"This is a text",children:e.jsx(t,{"aria-label":"Open",variant:"soft",children:"Click me (with string)"})})]})})]})]}),e.jsxs(i,{children:[e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(g,{iconProps:{icon:"Navigation01",color:"violet",size:"text-3xl"},children:"placement"}),e.jsx(N,{children:e.jsx("code",{children:"Placement"})}),e.jsx(N,{children:"Popover"})]})}),e.jsxs(d,{children:[e.jsx("div",{className:"text-zinc-500",children:"Can be used in different directions."}),e.jsx(P,{mdFile:te,inIFrame:!1,children:e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{content:"This is a text",placement:"top",children:e.jsx(t,{"aria-label":"Top",variant:"soft",children:"Top"})}),e.jsx(s,{content:"This is a text",placement:"right",children:e.jsx(t,{"aria-label":"Right",variant:"soft",children:"Right"})}),e.jsx(s,{content:"This is a text",placement:"bottom",children:e.jsx(t,{"aria-label":"Bottom",variant:"soft",children:"Bottom"})}),e.jsx(s,{content:"This is a text",placement:"left",children:e.jsx(t,{"aria-label":"Left",variant:"soft",children:"Left"})})]})})]})]}),e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(c,{children:e.jsx(g,{children:"API"})})}),e.jsx(d,{children:e.jsx(_,{code:q(se,"interface")})})]})]})})]});export{re as default};
