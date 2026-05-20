import{j as n}from"./vendor-D_nTE7E-.js";import{H as d,r as i,z as s,p as e,s as t,x as r,y as l,E as a,C as o,aX as c,aY as m,aC as v}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u=`// @start-snippet:: addressAddAndEditExampleSource
import Card, { CardBody } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Icon from '@/components/icon/Icon';

const AddressAddAndEditExample = () => {
	return (
		<div className='grid grid-cols-4 gap-4 md:grid-cols-12'>
			<div className='col-span-4'>
				<Card className='h-full'>
					<CardBody className='m-1 rounded-lg bg-zinc-500/10'>
						<div className='mb-2 flex justify-between'>
							<div className='text-xl font-bold'>Head Office</div>
							<Badge variant='soft'>Default</Badge>
						</div>
						<div>John Doe</div>
						<div>1234 Elm Street, Apt 56B</div>
						<div>Los Angeles, CA 90001</div>
						<div>United States</div>
						<div className='mt-2'>+1 234 567 89</div>
					</CardBody>
					<CardBody>
						<div className='mt-2 flex items-center justify-center divide-x divide-zinc-500/25'>
							<div>
								<Button variant='link' className='py-0!' aria-label='Edit'>
									Edit
								</Button>
							</div>
							<div>
								<Button
									isDisable
									variant='link'
									className='py-0!'
									aria-label='Remove'>
									Remove
								</Button>
							</div>
							<div>
								<Button
									isDisable
									variant='link'
									className='py-0!'
									aria-label='Set as default'>
									Set as default
								</Button>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
			<div className='col-span-4'>
				<Card className='h-full'>
					<CardBody className='m-1 rounded-lg bg-zinc-500/10'>
						<div className='mb-2 flex justify-between'>
							<div className='text-xl font-bold'>Office</div>
						</div>
						<div>John Doe</div>
						<div>9876 Maple Avenue, Suite 1200</div>
						<div>Suite 1200, New York, NY 10001</div>
						<div>United States</div>
						<div className='mt-2'>+1 234 567 89</div>
					</CardBody>
					<CardBody>
						<div className='mt-2 flex items-center justify-center divide-x divide-zinc-500/25'>
							<div>
								<Button variant='link' className='py-0!' aria-label='Edit'>
									Edit
								</Button>
							</div>
							<div>
								<Button variant='link' className='py-0!' aria-label='Remove'>
									Remove
								</Button>
							</div>
							<div>
								<Button
									variant='link'
									className='py-0!'
									aria-label='Set as default'>
									Set as default
								</Button>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
			<div className='col-span-4'>
				<Card className='group h-full min-h-48 cursor-pointer border-dashed transition-all duration-300 ease-in-out hover:border-zinc-500/50!'>
					<CardBody className='flex items-center justify-center'>
						<div className='flex flex-col items-center gap-2'>
							<div>
								<Icon
									icon='PlusSign'
									size='text-3xl'
									color='zinc'
									className='transition-all duration-300 ease-in-out group-hover:text-blue-500!'
								/>
							</div>
							<div className='font-semibold transition-all duration-300 ease-in-out group-hover:text-blue-500!'>
								Add Address
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default AddressAddAndEditExample;
// @end-snippet:: addressAddAndEditExampleSource
`,A=()=>n.jsxs(n.Fragment,{children:[n.jsxs(d,{children:[n.jsx(i,{children:n.jsx(s,{list:[{...e.examples.exampleMain},{...e.examples.exampleMain.subPages.cards},{...e.examples.exampleMain.subPages.cards.subPages.locationAndAddress}]})}),n.jsxs(t,{children:[n.jsx(r,{}),n.jsx(l,{}),n.jsx(a.Ui.Dropdown.Notifications,{})]})]}),n.jsx(o,{children:n.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[n.jsx(c,{title:"Location & Address",description:"Cards containing addresses."}),n.jsx(m,{title:"Add & Edit Address",code:v(u,"addressAddAndEditExampleSource"),children:n.jsx(a.Card.LocationAddress.AddAndEdit,{})})]})})]});export{A as default};
