import{r as m,j as e}from"./vendor-D_nTE7E-.js";import{H as p,r as h,z as x,p as a,a as b,C,G as i,J as l,K as c,N as d,O as r,aB as g,aK as t,V as o,aC as R}from"./chunk-icon-Pdyc-Xig.js";import{M as N}from"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const v="data:text/markdown;base64,YGBgdHN4CmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOwppbXBvcnQgUmF0aW5ncywgeyBSYXRpbmdWYWx1ZXMgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvUmF0aW5ncyc7Cgpjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHsKCWNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8UmF0aW5nVmFsdWVzPig0KTsKCXJldHVybiA8UmF0aW5ncyBpZD0nc3Rhcicgc2VsZWN0ZWRSYXRpbmc9e3N0YXRlfSBzZXRTZWxlY3RlZFJhdGluZz17c2V0U3RhdGV9IHR5cGU9J3N0YXInIC8+Owp9OwoKZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQ7CmBgYAo=",j="data:text/markdown;base64,YGBgdHN4CmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOwppbXBvcnQgUmF0aW5ncywgeyBSYXRpbmdWYWx1ZXMgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvUmF0aW5ncyc7Cgpjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHsKCWNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8UmF0aW5nVmFsdWVzPig0KTsKCXJldHVybiAoCgkJPD4KCQkJPFJhdGluZ3MgaWQ9J3N0YXInIHNlbGVjdGVkUmF0aW5nPXtzdGF0ZX0gc2V0U2VsZWN0ZWRSYXRpbmc9e3NldFN0YXRlfSB0eXBlPSdzdGFyJyAvPgoJCQk8UmF0aW5ncyBpZD0naGVhcnQnIHNlbGVjdGVkUmF0aW5nPXtzdGF0ZX0gc2V0U2VsZWN0ZWRSYXRpbmc9e3NldFN0YXRlfSB0eXBlPSdoZWFydCcgLz4KCQk8Lz4KCSk7Cn07CgpleHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDsKYGBgCg==",V="data:text/markdown;base64,YGBgdHN4CmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOwppbXBvcnQgUmF0aW5ncywgeyBSYXRpbmdWYWx1ZXMgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvUmF0aW5ncyc7Cgpjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHsKCWNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8UmF0aW5nVmFsdWVzPig0KTsKCXJldHVybiAoCgkJPD4KCQkJPFJhdGluZ3MKCQkJCWlkPSdzdGFyJwoJCQkJc2VsZWN0ZWRSYXRpbmc9e3N0YXRlfQoJCQkJc2V0U2VsZWN0ZWRSYXRpbmc9e3NldFN0YXRlfQoJCQkJdHlwZT0nc3RhcicKCQkJCWlzRGlzYWJsZQoJCQkvPgoJCQk8UmF0aW5ncwoJCQkJaWQ9J2hlYXJ0JwoJCQkJc2VsZWN0ZWRSYXRpbmc9e3N0YXRlfQoJCQkJc2V0U2VsZWN0ZWRSYXRpbmc9e3NldFN0YXRlfQoJCQkJdHlwZT0naGVhcnQnCgkJCQlpc0Rpc2FibGUKCQkJLz4KCQk8Lz4KCSk7Cn07CgpleHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDsKYGBgCg==",u=`import { ChangeEvent, Dispatch, FC, Fragment, HTMLAttributes, SetStateAction } from 'react';
import classNames from 'classnames';

// @start-snippet:: interface
export type RatingValues = 0 | 1 | 2 | 3 | 4 | 5;
interface IRatingsProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	className?: string;
	selectedRating: RatingValues;
	setSelectedRating: Dispatch<SetStateAction<RatingValues>>;
	type?: 'star' | 'heart';
	isDisable?: boolean;
}
// @end-snippet:: interface

const Ratings: FC<IRatingsProps> = (props) => {
	const { id, className, selectedRating, setSelectedRating, type = 'star', isDisable } = props;

	const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedRating(Number(event.target.value) as RatingValues);
	};

	return (
		<div
			className={classNames(
				'flex flex-row-reverse items-center justify-end gap-0.5',
				className,
			)}>
			{[5, 4, 3, 2, 1].map((i) => (
				<Fragment key={i}>
					<input
						aria-label='Rating'
						id={\`ratings-\${id}-\${i}\`}
						type='radio'
						className={classNames(
							'peer -ms-5 size-5 appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0',
							{ 'cursor-not-allowed': isDisable, 'cursor-pointer': !isDisable },
						)}
						name={\`ratings-\${id}\`}
						value={i}
						onChange={!isDisable ? handleRatingChange : undefined}
						checked={selectedRating === i}
					/>
					<label
						aria-label={\`ratings-\${id}-\${i}\`}
						htmlFor={\`ratings-\${id}-\${i}\`}
						className={classNames(
							'pointer-events-none text-zinc-300 transition-all duration-300 ease-in-out dark:text-zinc-700',
							{
								'opacity-75': isDisable,
								'peer-checked:text-yellow-400 dark:peer-checked:text-yellow-600':
									type === 'star',
								'peer-hover:text-yellow-500!': type === 'star' && !isDisable,
								'peer-checked:text-red-400 dark:peer-checked:text-red-600':
									type === 'heart',
								'peer-hover:text-red-500!': type === 'heart' && !isDisable,
							},
						)}>
						{type === 'star' && (
							<svg
								className='size-5 shrink-0'
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								viewBox='0 0 16 16'>
								<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'></path>
							</svg>
						)}
						{type === 'heart' && (
							<svg
								className='size-5 shrink-0'
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								viewBox='0 0 16 16'>
								<path
									fillRule='evenodd'
									d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'></path>
							</svg>
						)}
					</label>
				</Fragment>
			))}
		</div>
	);
};
Ratings.displayName = 'Ratings';

export default Ratings;
`,W=()=>{const[n,s]=m.useState(4);return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(h,{className:"flex-col items-start!",children:[e.jsx(x,{list:[{...a.documentation.baseComponent},{...a.documentation.baseComponent.subPages.ratings}]}),e.jsxs("div",{className:"flex items-center gap-4 py-8",children:[e.jsx(b,{icon:a.documentation.baseComponent.subPages.ratings.icon,size:"text-4xl"}),e.jsx("span",{className:"text-4xl font-bold",children:a.documentation.baseComponent.subPages.ratings.text})]})]})}),e.jsx(C,{children:e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"text-2xl text-zinc-500",children:"The Boltify Ratings widget displays ratings or reviews using star or heart symbols. Perfect for reviews, testimonials, and feedback forms."}),e.jsx("div",{className:"text-3xl font-bold",children:"Usage"}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx(c,{children:e.jsx(d,{iconProps:{icon:"BookOpen02",color:"emerald",size:"text-3xl"},children:"Basic usage"})})}),e.jsxs(r,{children:[e.jsx("div",{className:"text-zinc-500",children:"Input example with star shapes."}),e.jsx(g,{mdFile:v,inIFrame:!1,children:e.jsx(t,{id:"star",selectedRating:n,setSelectedRating:s,type:"star"})})]})]}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Favourite",color:"red",size:"text-3xl"},children:"Type - type"}),e.jsx(o,{children:e.jsx("code",{children:"'star' | 'heart'"})}),e.jsx(o,{children:"Ratings"})]})}),e.jsxs(r,{children:[e.jsxs("div",{className:"text-zinc-500",children:["Can use ",e.jsx("code",{children:"star"})," or ",e.jsx("code",{children:"heart"})]}),e.jsx(g,{mdFile:j,inIFrame:!1,children:e.jsxs("div",{className:"flex flex-col flex-wrap gap-4",children:[e.jsx(t,{id:"star2",selectedRating:n,setSelectedRating:s,type:"star"}),e.jsx(t,{id:"heart2",selectedRating:n,setSelectedRating:s,type:"heart"})]})})]})]}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsxs(c,{children:[e.jsx(d,{iconProps:{icon:"Anchor",color:"blue",size:"text-3xl"},children:"Static - isDisable"}),e.jsx(o,{children:e.jsx("code",{children:"boolean"})}),e.jsx(o,{children:"Ratings"})]})}),e.jsxs(r,{children:[e.jsxs("div",{className:"text-zinc-500",children:[e.jsx("code",{children:"isDisable"})," prop can be used for static view."]}),e.jsx(g,{mdFile:V,inIFrame:!1,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{id:"star3",selectedRating:n,setSelectedRating:s,type:"star",isDisable:!0}),e.jsx(t,{id:"heart3",selectedRating:n,setSelectedRating:s,type:"heart",isDisable:!0})]})})]})]}),e.jsxs(i,{children:[e.jsx(l,{children:e.jsx(c,{children:e.jsx(d,{children:"API"})})}),e.jsx(r,{children:e.jsx(N,{code:R(u,"interface")})})]})]})})]})};export{W as default};
