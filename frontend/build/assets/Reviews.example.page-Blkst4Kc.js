import{j as e}from"./vendor-D_nTE7E-.js";import{H as i,r as o,z as l,p as n,s as t,x as s,y as r,E as a,C as d,aX as c,aY as u,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const f=`// @start-snippet:: reviewSiteFeedbackExampleSource
import { useFormik } from 'formik';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal, { Content, ModalBody, ModalHeader } from '@/components/ui/Modal';
import Label from '@/components/form/Label';
import Radio, { RadioGroup } from '@/components/form/Radio';
import Ratings, { RatingValues } from '@/components/ui/Ratings';
import Select from '@/components/form/Select';
import Textarea from '@/components/form/Textarea';
import Icon from '@/components/icon/Icon';

const ReviewSiteFeedbackExample = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			tellUsAbout: '',
			difficult: '',
			experience: 0,
			reason: '',
			comment: '',
		},
		onSubmit: (values) => {
			console.log(values);
			setIsOpen(false);
		},
	});

	return (
		<>
			<Button icon='StarHalf' variant='solid' onClick={() => setIsOpen(true)}>
				Feedback
			</Button>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<ModalHeader>Feedback</ModalHeader>
				<ModalBody>
					<div className='flex flex-col gap-4'>
						<div>
							<Label htmlFor='tellUsAbout'>
								What would you like to tell us about?
							</Label>
							<RadioGroup isInline className='grid grid-cols-3'>
								<Radio
									labelClassName='p-4'
									name='tellUsAbout'
									selectedValue={formik.values.tellUsAbout}
									onChange={formik.handleChange}
									value='website'>
									<div className='flex flex-col items-center justify-center'>
										<Icon icon='Browser' size='text-3xl' />
										<div>Website</div>
									</div>
								</Radio>
								<Radio
									labelClassName='p-4'
									name='tellUsAbout'
									selectedValue={formik.values.tellUsAbout}
									onChange={formik.handleChange}
									value='socialMedia'>
									<div className='flex flex-col items-center justify-center'>
										<Icon icon='Facebook02' size='text-3xl' />
										<div>Social Media</div>
									</div>
								</Radio>
								<Radio
									labelClassName='p-4'
									name='tellUsAbout'
									selectedValue={formik.values.tellUsAbout}
									onChange={formik.handleChange}
									value='ourStore'>
									<div className='flex flex-col items-center justify-center'>
										<Icon icon='StoreLocation02' size='text-3xl' />
										<div>Our Store</div>
									</div>
								</Radio>
							</RadioGroup>
						</div>
						<div>
							<Label htmlFor='difficult'>
								How easy or difficult was it for you to complete this task?
							</Label>
							<RadioGroup isInline className='grid grid-cols-5'>
								<Radio
									labelClassName='p-4'
									name='difficult'
									selectedValue={formik.values.difficult}
									onChange={formik.handleChange}
									value='VeryDifficult'>
									<div className='flex flex-col items-center justify-center'>
										<div>😫</div>
										<div>Very Difficult</div>
									</div>
								</Radio>
								<Radio
									labelClassName='p-4'
									name='difficult'
									selectedValue={formik.values.difficult}
									onChange={formik.handleChange}
									value='Difficult'>
									<div className='flex flex-col items-center justify-center'>
										<div>🙁</div>
										<div>Difficult</div>
									</div>
								</Radio>
								<Radio
									labelClassName='p-4'
									name='difficult'
									selectedValue={formik.values.difficult}
									onChange={formik.handleChange}
									value='Neutral'>
									<div className='flex flex-col items-center justify-center'>
										<div>😐</div>
										<div>Neutral</div>
									</div>
								</Radio>
								<Radio
									labelClassName='p-4'
									name='difficult'
									selectedValue={formik.values.difficult}
									onChange={formik.handleChange}
									value='Easy'>
									<div className='flex flex-col items-center justify-center'>
										<div>🙂</div>
										<div>Easy</div>
									</div>
								</Radio>
								<Radio
									labelClassName='p-4'
									name='difficult'
									selectedValue={formik.values.difficult}
									onChange={formik.handleChange}
									value='VeryEasy'>
									<div className='flex flex-col items-center justify-center'>
										<div>😄</div>
										<div>Very Easy</div>
									</div>
								</Radio>
							</RadioGroup>
						</div>
						<div>
							<Label htmlFor='experience'>How was your experience?</Label>
							<Ratings
								id='experience'
								selectedRating={formik.values.experience as RatingValues}
								setSelectedRating={(value) =>
									formik.setFieldValue('experience', value)
								}
								type='star'
							/>
						</div>
						<div>
							<Label htmlFor='reason'>
								What was your main reason for visiting our site today?
							</Label>
							<Select
								id='reason'
								name='reason'
								placeholder='Select a reason'
								value={formik.values.reason}
								onChange={formik.handleChange}>
								<optgroup label='Goals'>
									<option value='findInformation'>🔍 To find information</option>
									<option value='makePurchase'>🛒 To make a purchase</option>
									<option value='exploreProducts'>
										📦 To explore products/services
									</option>
								</optgroup>
								<optgroup label='Intent'>
									<option value='getSupport'>🙋 To get support</option>
									<option value='justBrowsing'>🚀 Just browsing</option>
								</optgroup>
							</Select>
						</div>
						<div>
							<Label htmlFor='comment'>Comment</Label>
							<Textarea
								id='comment'
								name='comment'
								placeholder='Comment'
								value={formik.values.comment}
								onChange={formik.handleChange}
								rows={5}
							/>
						</div>
						<div className='text-sm text-zinc-500'>
							We really value your input! For any support-related issues, please
							contact our team directly via our official{' '}
							<a href='#support' className='font-bold underline'>
								support page
							</a>
							.
						</div>
						<Button type='submit' variant='solid' dimension='lg'>
							Submit feedback
						</Button>
					</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default ReviewSiteFeedbackExample;
// @end-snippet:: reviewSiteFeedbackExampleSource

// FOR DEVELOPMENT PREVIEW
export const ReviewSiteFeedbackExamplePreview = () => {
	const formik = useFormik({
		initialValues: {
			tellUsAbout: '',
			difficult: '',
			experience: 0,
			reason: '',
			comment: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Content>
			<ModalHeader>Feedback</ModalHeader>
			<ModalBody>
				<div className='flex flex-col gap-4'>
					<div>
						<Label htmlFor='tellUsAbout'>What would you like to tell us about?</Label>
						<RadioGroup isInline className='grid grid-cols-3'>
							<Radio
								labelClassName='p-4'
								name='tellUsAbout'
								selectedValue={formik.values.tellUsAbout}
								onChange={formik.handleChange}
								value='website'>
								<div className='flex flex-col items-center justify-center'>
									<Icon icon='Browser' size='text-3xl' />
									<div>Website</div>
								</div>
							</Radio>
							<Radio
								labelClassName='p-4'
								name='tellUsAbout'
								selectedValue={formik.values.tellUsAbout}
								onChange={formik.handleChange}
								value='socialMedia'>
								<div className='flex flex-col items-center justify-center'>
									<Icon icon='Facebook02' size='text-3xl' />
									<div>Social Media</div>
								</div>
							</Radio>
							<Radio
								labelClassName='p-4'
								name='tellUsAbout'
								selectedValue={formik.values.tellUsAbout}
								onChange={formik.handleChange}
								value='ourStore'>
								<div className='flex flex-col items-center justify-center'>
									<Icon icon='StoreLocation02' size='text-3xl' />
									<div>Our Store</div>
								</div>
							</Radio>
						</RadioGroup>
					</div>
					<div>
						<Label htmlFor='difficult'>
							How easy or difficult was it for you to complete this task?
						</Label>
						<RadioGroup isInline className='grid grid-cols-5'>
							<Radio
								labelClassName='p-4'
								name='difficult'
								selectedValue={formik.values.difficult}
								onChange={formik.handleChange}
								value='VeryDifficult'>
								<div className='flex flex-col items-center justify-center'>
									<div>😫</div>
									<div>Very Difficult</div>
								</div>
							</Radio>
							<Radio
								labelClassName='p-4'
								name='difficult'
								selectedValue={formik.values.difficult}
								onChange={formik.handleChange}
								value='Difficult'>
								<div className='flex flex-col items-center justify-center'>
									<div>🙁</div>
									<div>Difficult</div>
								</div>
							</Radio>
							<Radio
								labelClassName='p-4'
								name='difficult'
								selectedValue={formik.values.difficult}
								onChange={formik.handleChange}
								value='Neutral'>
								<div className='flex flex-col items-center justify-center'>
									<div>😐</div>
									<div>Neutral</div>
								</div>
							</Radio>
							<Radio
								labelClassName='p-4'
								name='difficult'
								selectedValue={formik.values.difficult}
								onChange={formik.handleChange}
								value='Easy'>
								<div className='flex flex-col items-center justify-center'>
									<div>🙂</div>
									<div>Easy</div>
								</div>
							</Radio>
							<Radio
								labelClassName='p-4'
								name='difficult'
								selectedValue={formik.values.difficult}
								onChange={formik.handleChange}
								value='VeryEasy'>
								<div className='flex flex-col items-center justify-center'>
									<div>😄</div>
									<div>Very Easy</div>
								</div>
							</Radio>
						</RadioGroup>
					</div>
					<div>
						<Label htmlFor='experience'>How was your experience?</Label>
						<Ratings
							id='experience'
							selectedRating={formik.values.experience as RatingValues}
							setSelectedRating={(value) => formik.setFieldValue('experience', value)}
							type='star'
						/>
					</div>
					<div>
						<Label htmlFor='reason'>
							What was your main reason for visiting our site today?
						</Label>
						<Select
							id='reason'
							name='reason'
							placeholder='Select a reason'
							value={formik.values.reason}
							onChange={formik.handleChange}>
							<optgroup label='Goals'>
								<option value='findInformation'>🔍 To find information</option>
								<option value='makePurchase'>🛒 To make a purchase</option>
								<option value='exploreProducts'>
									📦 To explore products/services
								</option>
							</optgroup>
							<optgroup label='Intent'>
								<option value='getSupport'>🙋 To get support</option>
								<option value='justBrowsing'>🚀 Just browsing</option>
							</optgroup>
						</Select>
					</div>
					<div>
						<Label htmlFor='comment'>Comment</Label>
						<Textarea
							id='comment'
							name='comment'
							placeholder='Comment'
							value={formik.values.comment}
							onChange={formik.handleChange}
							rows={5}
						/>
					</div>
					<div className='text-sm text-zinc-500'>
						We really value your input! For any support-related issues, please contact
						our team directly via our official{' '}
						<a href='#support' className='font-bold underline'>
							support page
						</a>
						.
					</div>
					<Button type='submit' variant='solid' dimension='lg'>
						Submit feedback
					</Button>
				</div>
			</ModalBody>
		</Content>
	);
};
`,h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(o,{children:e.jsx(l,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.overlays},{...n.examples.exampleMain.subPages.overlays.subPages.reviews}]})}),e.jsxs(t,{children:[e.jsx(s,{}),e.jsx(r,{}),e.jsx(a.Ui.Dropdown.Notifications,{})]})]}),e.jsx(d,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(c,{title:"Reviews",description:"Utilize interactive reviews modals to display and manage customer feedback, enhancing user engagement and review process."}),e.jsx(u,{title:"Site Feedback",code:m(f,"reviewSiteFeedbackExampleSource"),iFrameProps:{initialWidth:640},children:e.jsx("div",{children:e.jsx(a.Overlays.Review.SiteFeedback,{})})})]})})]});export{h as default};
