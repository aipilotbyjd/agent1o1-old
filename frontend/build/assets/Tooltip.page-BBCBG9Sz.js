import{j as e}from"./vendor-D_nTE7E-.js";import{H as C,r as u,z as h,p as a,a as p,C as g,G as r,J as i,K as l,N as d,O as s,aB as c,T as t,aC as m,B as o,V as b}from"./chunk-icon-Pdyc-Xig.js";import{B as f,M as v}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const x=`import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import MdViewer from '@/components/utils/MdViewer';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Tooltip from '@/components/ui/Tooltip';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Placement } from '@floating-ui/react';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import sourceCode from './Tooltip.page.tsx?raw'; // eslint-disable-line import/extensions
import tooltipSource from '@/components/ui/Tooltip.tsx?raw'; // eslint-disable-line import/extensions
import placementMd from './_md/placement.md';

const TooltipPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.tooltip },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.tooltip.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.tooltip.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Use tooltip component, floating non-actionable labels that explain interface
						elements or features, to improve user experience and navigation.
					</div>

					<div className='text-3xl font-bold'>Usage</div>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'BookOpen02',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Basic usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Tooltip are meant to be exactly that, a hint or tip on what a tool
								or other interaction does. They are meant to clarify or help you use
								the content that they hover over, not add additional content:
							</div>
							<PreviewComponent
								code={extractSnippetUtil(sourceCode, 'basic')}
								inIFrame={false}>
								{/* @start-snippet:: basic */}
								<Tooltip text='Lorem ipsum dolor sit amet' />
								{/* @end-snippet:: basic */}
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									With children
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Tooltip can also be used to enter a description for any component or
								html element.
							</div>
							<PreviewComponent
								code={extractSnippetUtil(sourceCode, 'withChildren')}
								inIFrame={false}>
								<div className='flex flex-wrap items-center gap-4'>
									{/* @start-snippet:: withChildren */}
									<Tooltip text='Lorem ipsum dolor sit amet'>
										<Button aria-label='Hover me' variant='soft'>
											Hover me
										</Button>
									</Tooltip>
									<Tooltip text='Lorem ipsum dolor sit amet'>
										<Badge variant='soft' color='amber' rounded='rounded-full'>
											<Icon icon='Alert02' /> Attention
										</Badge>
									</Tooltip>
									{/* @end-snippet:: withChildren */}
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ArrowAllDirection',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Placement
								</CardTitle>
								<CardSubTitle>
									<code>Placement</code>
								</CardSubTitle>
								<CardSubTitle>Tooltip</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Hover over the following badges to see the other tooltip
								orientation:
							</div>
							<PreviewComponent mdFile={placementMd} inIFrame={false}>
								<div className='grid w-fit grid-cols-3 gap-4'>
									{['top-start', 'top', 'top-end'].map((item) => (
										<Tooltip
											key={item}
											placement={item as Placement}
											text='Lorem ipsum dolor sit amet'>
											<Badge
												variant='soft'
												color='blue'
												className='justify-center'
												rounded='rounded-full'>
												{item}
											</Badge>
										</Tooltip>
									))}
									{['left-start', undefined, 'right-start'].map((item) =>
										item ? (
											<Tooltip
												key={item}
												placement={item as Placement}
												text='Lorem ipsum dolor sit amet'>
												<Badge
													variant='soft'
													color='amber'
													className='justify-center'
													rounded='rounded-full'>
													{item}
												</Badge>
											</Tooltip>
										) : (
											<div key={item}></div>
										),
									)}
									{['left', undefined, 'right'].map((item) =>
										item ? (
											<Tooltip
												key={item}
												placement={item as Placement}
												text='Lorem ipsum dolor sit amet'>
												<Badge
													variant='soft'
													color='amber'
													className='justify-center'
													rounded='rounded-full'>
													{item}
												</Badge>
											</Tooltip>
										) : (
											<div key={item}></div>
										),
									)}
									{['left-end', undefined, 'right-end'].map((item) =>
										item ? (
											<Tooltip
												key={item}
												placement={item as Placement}
												text='Lorem ipsum dolor sit amet'>
												<Badge
													variant='soft'
													color='amber'
													className='justify-center'
													rounded='rounded-full'>
													{item}
												</Badge>
											</Tooltip>
										) : (
											<div key={item}></div>
										),
									)}
									{['bottom-start', 'bottom', 'bottom-end'].map((item) => (
										<Tooltip
											key={item}
											placement={item as Placement}
											text='Lorem ipsum dolor sit amet'>
											<Badge
												variant='soft'
												color='blue'
												className='justify-center'
												rounded='rounded-full'>
												{item}
											</Badge>
										</Tooltip>
									))}
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>API</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<MdViewer code={extractSnippetUtil(tooltipSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default TooltipPage;
`,Z=`import { cloneElement, FC, HTMLAttributes, ReactElement, ReactNode, useState, useRef } from 'react';
import classNames from 'classnames';
import {
	useFloating,
	offset,
	flip,
	shift,
	arrow,
	autoUpdate,
	useHover,
	useFocus,
	useDismiss,
	useRole,
	useInteractions,
	FloatingArrow,
	Placement,
} from '@floating-ui/react';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TRounded } from '@/types/rounded.type';
import Icon from '@/components/icon/Icon';
import Portal from '@/components/layout/Portal/Portal';

// @start-snippet:: interface
interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
	text: ReactNode;
	placement?: Placement;
	borderWidth?: TBorderWidth;
	rounded?: TRounded;
}
// @end-snippet:: interface
const Tooltip: FC<ITooltipProps> = (props) => {
	const {
		children,
		className,
		text,
		placement = 'top',
		borderWidth = 'border',
		rounded = 'rounded-lg',
		...rest
	} = props;

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const arrowRef = useRef(null);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		// eslint-disable-next-line react-hooks/refs
		middleware: [offset(8), flip(), shift(), arrow({ element: arrowRef, padding: 8 })],
		whileElementsMounted: autoUpdate,
	});

	const hover = useHover(context);
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

	const getComponentName = (child: ReactNode): string =>
		// @ts-ignore
		child?.props['data-component-name'] || child?.type?.displayName || child?.type;

	return (
		<>
			{['string', 'undefined'].includes(typeof children) ? (
				<span
					data-component-name='Tooltip/Reference'
					ref={refs.setReference}
					className='cursor-pointer'
					{...getReferenceProps()}>
					{children || (
						<Icon
							icon='InformationCircle'
							className={classNames('inline-flex', className)}
						/>
					)}
				</span>
			) : (
				// eslint-disable-next-line react-hooks/refs
				cloneElement(children as ReactElement, {
					// @ts-ignore
					'data-component-name': \`\${getComponentName(children)} is cloned with Tooltip\`,
					// eslint-disable-next-line react-hooks/refs
					ref: refs.setReference,
					// @ts-expect-error
					className: classNames('cursor-pointer', children.props.className),
					...getReferenceProps(),
				})
			)}
			{isOpen && text !== '' && (
				<Portal>
					<div
						data-component-name='Tooltip/Popper'
						// eslint-disable-next-line react-hooks/refs
						ref={refs.setFloating}
						style={floatingStyles}
						className={classNames(
							'z-[9998] px-2 py-1',
							'max-w-xs',
							'border-zinc-500/10 drop-shadow-lg backdrop-blur-xs',
							borderWidth,
							rounded,
							className,
						)}
						{...getFloatingProps()}
						{...rest}>
						{text}
						<FloatingArrow
							ref={arrowRef}
							context={context}
							className='relative z-[9999] fill-zinc-50 backdrop-blur-xs dark:fill-zinc-950 [&>path:first-of-type]:stroke-zinc-500/10'
							strokeWidth={0.5}
						/>
					</div>
				</Portal>
			)}
		</>
	);
};
Tooltip.displayName = 'Tooltip';

export default Tooltip;
`,J="data:text/markdown;base64,YGBgdHN4CjxkaXYgY2xhc3NOYW1lPSdncmlkIHctZml0IGdyaWQtY29scy0zIGdhcC00Jz4KCTxUb29sdGlwIHBsYWNlbWVudD0ndG9wLXN0YXJ0JyB0ZXh0PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCc+CgkJPEJhZGdlIHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdibHVlJyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyJyByb3VuZGVkPSdyb3VuZGVkLWZ1bGwnPgoJCQl0b3Atc3RhcnQKCQk8L0JhZGdlPgoJPC9Ub29sdGlwPgoJPFRvb2x0aXAgcGxhY2VtZW50PSd0b3AnIHRleHQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Jz4KCQk8QmFkZ2UgdmFyaWFudD0nc29mdCcgY29sb3I9J2JsdWUnIGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXInIHJvdW5kZWQ9J3JvdW5kZWQtZnVsbCc+CgkJCXRvcAoJCTwvQmFkZ2U+Cgk8L1Rvb2x0aXA+Cgk8VG9vbHRpcCBwbGFjZW1lbnQ9J3RvcC1lbmQnIHRleHQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Jz4KCQk8QmFkZ2UgdmFyaWFudD0nc29mdCcgY29sb3I9J2JsdWUnIGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXInIHJvdW5kZWQ9J3JvdW5kZWQtZnVsbCc+CgkJCXRvcC1lbmQKCQk8L0JhZGdlPgoJPC9Ub29sdGlwPgoKCTxUb29sdGlwIHBsYWNlbWVudD0nbGVmdC1zdGFydCcgdGV4dD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnPgoJCTxCYWRnZSB2YXJpYW50PSdzb2Z0JyBjb2xvcj0nYmx1ZScgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlcicgcm91bmRlZD0ncm91bmRlZC1mdWxsJz4KCQkJbGVmdC1zdGFydAoJCTwvQmFkZ2U+Cgk8L1Rvb2x0aXA+Cgk8VG9vbHRpcCBwbGFjZW1lbnQ9J3JpZ2h0LXN0YXJ0JyB0ZXh0PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCc+CgkJPEJhZGdlIHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdibHVlJyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyJyByb3VuZGVkPSdyb3VuZGVkLWZ1bGwnPgoJCQlyaWdodC1zdGFydAoJCTwvQmFkZ2U+Cgk8L1Rvb2x0aXA+CgoJPFRvb2x0aXAgcGxhY2VtZW50PSdsZWZ0JyB0ZXh0PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCc+CgkJPEJhZGdlIHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdibHVlJyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyJyByb3VuZGVkPSdyb3VuZGVkLWZ1bGwnPgoJCQlsZWZ0CgkJPC9CYWRnZT4KCTwvVG9vbHRpcD4KCTxUb29sdGlwIHBsYWNlbWVudD0ncmlnaHQnIHRleHQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Jz4KCQk8QmFkZ2UgdmFyaWFudD0nc29mdCcgY29sb3I9J2JsdWUnIGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXInIHJvdW5kZWQ9J3JvdW5kZWQtZnVsbCc+CgkJCXJpZ2h0CgkJPC9CYWRnZT4KCTwvVG9vbHRpcD4KCgk8VG9vbHRpcCBwbGFjZW1lbnQ9J2xlZnQtZW5kJyB0ZXh0PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCc+CgkJPEJhZGdlIHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdibHVlJyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyJyByb3VuZGVkPSdyb3VuZGVkLWZ1bGwnPgoJCQlsZWZ0LWVuZAoJCTwvQmFkZ2U+Cgk8L1Rvb2x0aXA+Cgk8VG9vbHRpcCBwbGFjZW1lbnQ9J3JpZ2h0LWVuZCcgdGV4dD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnPgoJCTxCYWRnZSB2YXJpYW50PSdzb2Z0JyBjb2xvcj0nYmx1ZScgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlcicgcm91bmRlZD0ncm91bmRlZC1mdWxsJz4KCQkJcmlnaHQtZW5kCgkJPC9CYWRnZT4KCTwvVG9vbHRpcD4KCgk8VG9vbHRpcCBwbGFjZW1lbnQ9J2JvdHRvbS1zdGFydCcgdGV4dD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnPgoJCTxCYWRnZSB2YXJpYW50PSdzb2Z0JyBjb2xvcj0nYmx1ZScgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlcicgcm91bmRlZD0ncm91bmRlZC1mdWxsJz4KCQkJYm90dG9tLXN0YXJ0CgkJPC9CYWRnZT4KCTwvVG9vbHRpcD4KCTxUb29sdGlwIHBsYWNlbWVudD0nYm90dG9tJyB0ZXh0PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCc+CgkJPEJhZGdlIHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdibHVlJyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyJyByb3VuZGVkPSdyb3VuZGVkLWZ1bGwnPgoJCQlib3R0b20KCQk8L0JhZGdlPgoJPC9Ub29sdGlwPgoJPFRvb2x0aXAgcGxhY2VtZW50PSdib3R0b20tZW5kJyB0ZXh0PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCc+CgkJPEJhZGdlIHZhcmlhbnQ9J3NvZnQnIGNvbG9yPSdibHVlJyBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyJyByb3VuZGVkPSdyb3VuZGVkLWZ1bGwnPgoJCQlib3R0b20tZW5kCgkJPC9CYWRnZT4KCTwvVG9vbHRpcD4KPC9kaXY+CmBgYAo=",B=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs(u,{className:"flex-col items-start!",children:[e.jsx(h,{list:[{...a.documentation.baseComponent},{...a.documentation.baseComponent.subPages.tooltip}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(p,{icon:a.documentation.baseComponent.subPages.tooltip.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:a.documentation.baseComponent.subPages.tooltip.text})]})]})}),e.jsx(g,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"Use tooltip component, floating non-actionable labels that explain interface elements or features, to improve user experience and navigation."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(l,{children:e.jsx(d,{iconProps:{icon:"BookOpen02",color:"emerald",size:"text-3xl"},children:"Basic usage"})})}),e.jsxs(s,{children:[e.jsx("div",{className:"text-zinc-500",children:"Tooltip are meant to be exactly that, a hint or tip on what a tool or other interaction does. They are meant to clarify or help you use the content that they hover over, not add additional content:"}),e.jsx(c,{code:m(x,"basic"),inIFrame:!1,children:e.jsx(t,{text:"Lorem ipsum dolor sit amet"})})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(l,{children:e.jsx(d,{iconProps:{icon:"Svg3DView",color:"blue",size:"text-3xl"},children:"With children"})})}),e.jsxs(s,{children:[e.jsx("div",{className:"text-zinc-500",children:"Tooltip can also be used to enter a description for any component or html element."}),e.jsx(c,{code:m(x,"withChildren"),inIFrame:!1,children:e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(t,{text:"Lorem ipsum dolor sit amet",children:e.jsx(f,{"aria-label":"Hover me",variant:"soft",children:"Hover me"})}),e.jsx(t,{text:"Lorem ipsum dolor sit amet",children:e.jsxs(o,{variant:"soft",color:"amber",rounded:"rounded-full",children:[e.jsx(p,{icon:"Alert02"})," Attention"]})})]})})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsxs(l,{children:[e.jsx(d,{iconProps:{icon:"ArrowAllDirection",color:"emerald",size:"text-3xl"},children:"Placement"}),e.jsx(b,{children:e.jsx("code",{children:"Placement"})}),e.jsx(b,{children:"Tooltip"})]})}),e.jsxs(s,{children:[e.jsx("div",{className:"text-zinc-500",children:"Hover over the following badges to see the other tooltip orientation:"}),e.jsx(c,{mdFile:J,inIFrame:!1,children:e.jsxs("div",{className:"grid w-fit grid-cols-3 gap-4",children:[["top-start","top","top-end"].map(n=>e.jsx(t,{placement:n,text:"Lorem ipsum dolor sit amet",children:e.jsx(o,{variant:"soft",color:"blue",className:"justify-center",rounded:"rounded-full",children:n})},n)),["left-start",void 0,"right-start"].map(n=>n?e.jsx(t,{placement:n,text:"Lorem ipsum dolor sit amet",children:e.jsx(o,{variant:"soft",color:"amber",className:"justify-center",rounded:"rounded-full",children:n})},n):e.jsx("div",{},n)),["left",void 0,"right"].map(n=>n?e.jsx(t,{placement:n,text:"Lorem ipsum dolor sit amet",children:e.jsx(o,{variant:"soft",color:"amber",className:"justify-center",rounded:"rounded-full",children:n})},n):e.jsx("div",{},n)),["left-end",void 0,"right-end"].map(n=>n?e.jsx(t,{placement:n,text:"Lorem ipsum dolor sit amet",children:e.jsx(o,{variant:"soft",color:"amber",className:"justify-center",rounded:"rounded-full",children:n})},n):e.jsx("div",{},n)),["bottom-start","bottom","bottom-end"].map(n=>e.jsx(t,{placement:n,text:"Lorem ipsum dolor sit amet",children:e.jsx(o,{variant:"soft",color:"blue",className:"justify-center",rounded:"rounded-full",children:n})},n))]})})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:e.jsx(l,{children:e.jsx(d,{children:"API"})})}),e.jsx(s,{children:e.jsx(v,{code:m(Z,"interface")})})]})]})})]});export{B as default};
