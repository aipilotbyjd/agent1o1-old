import{j as n}from"./vendor-D_nTE7E-.js";import{H as i,r as t,z as s,p as e,s as o,x as l,y as d,E as a,C as r,aX as m,aY as c,aC as p}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const v=`// @start-snippet:: shareAndInviteInviteUserExampleSource
import FieldWrap from '@/components/form/FieldWrap';
import Input from '@/components/form/Input';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/form/Checkbox';
import Avatar from '@/components/ui/Avatar';
import USERS from '@/mocks/users.mock';
import Tooltip from '@/components/ui/Tooltip';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Icon from '@/components/icon/Icon';
import { ChangeEvent, useState } from 'react';
import Modal, { Content, ModalBody, ModalHeader } from '@/components/ui/Modal';

const DropdownAuthExample = ({
	auth = 'Can view',
}: {
	auth: 'Can view' | 'Can edit' | 'Admin' | 'Remove';
}) => {
	return (
		<Dropdown>
			<DropdownToggle>
				<Button aria-label='Authentication' variant='link' color='zinc' className='!px-0'>
					{auth}
				</Button>
			</DropdownToggle>
			<DropdownMenu
				placement='bottom-end'
				fallbackPlacements={['top-end']}
				className='min-w-48! dark:bg-zinc-950! [&_*]:rounded-xl! [*]:rounded-2xl!'>
				<DropdownItem className='gap-2'>
					<span>Can view</span>
					{auth === 'Can view' && (
						<Icon icon='Tick02' size='text-xl' className='ms-auto' />
					)}
				</DropdownItem>
				<DropdownItem className='gap-2'>
					<span>Can edit</span>
					{auth === 'Can edit' && (
						<Icon icon='Tick02' size='text-xl' className='ms-auto' />
					)}
				</DropdownItem>
				<DropdownItem className='gap-2'>
					<span>Admin</span>
					{auth === 'Admin' && <Icon icon='Tick02' size='text-xl' className='ms-auto' />}
				</DropdownItem>
				<DropdownItem className='gap-2'>
					<span>Remove</span>
					{auth === 'Remove' && <Icon icon='Tick02' size='text-xl' className='ms-auto' />}
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

const SELECT = (
	<Dropdown>
		<DropdownToggle>
			<Button aria-label='View' variant='link' color='zinc' className='!px-0'>
				Can view
			</Button>
		</DropdownToggle>
		<DropdownMenu
			placement='bottom-end'
			fallbackPlacements={['top-end']}
			className='min-w-48! dark:bg-zinc-950! [&_*]:rounded-xl! [*]:rounded-2xl!'>
			<DropdownItem className='gap-2'>
				<span>Can view</span>
				<Icon icon='Tick02' size='text-xl' className='ms-auto' />
			</DropdownItem>
			<DropdownItem className='gap-2'>
				<span>Can Edit</span>
			</DropdownItem>
			<DropdownItem className='gap-2'>
				<span>Admin</span>
			</DropdownItem>
		</DropdownMenu>
	</Dropdown>
);

const ShareAndInviteInviteUserExample = () => {
	const [checked, setChecked] = useState<boolean>(false);
	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const [openStatus, setOpenStatus] = useState(false);
	return (
		<>
			<Button onClick={() => setOpenStatus(true)} variant='soft' icon='Share07'>
				Invite
			</Button>
			<Modal isOpen={openStatus} setIsOpen={setOpenStatus} size='sm'>
				<ModalHeader>Invite</ModalHeader>
				<ModalBody>
					<div className='flex flex-col gap-2 text-start'>
						<div>
							<div className='flex gap-4'>
								<FieldWrap lastSuffix={SELECT}>
									<Input
										name='email'
										type='email'
										variant='default'
										placeholder='Add username or email'
										dimension='sm'
									/>
								</FieldWrap>
								<Button
									aria-label='Send'
									variant='solid'
									color='blue'
									className='text-nowrap'>
									Send
								</Button>
							</div>
							<Checkbox
								label='Notify recipients via email'
								dimension='sm'
								checked={checked}
								onChange={handleCheckboxChange}
							/>
						</div>
						<hr className='-mx-2 border-zinc-500/25' />
						<div className='text-xl font-bold'>From GitHub</div>
						<div className='flex flex-col gap-2'>
							<div className='flex'>
								<div className='flex grow items-center gap-2'>
									<div>
										<Avatar src={USERS.nicolasLefevre.image.org} />
									</div>
									<div>
										<div className='flex items-baseline gap-2'>
											<span>{\`\${USERS.nicolasLefevre.firstName} \${USERS.nicolasLefevre.lastName}\`}</span>
											<span className='text-xs text-zinc-500'>(you)</span>
										</div>
										<div className='text-xs text-zinc-500'>
											{USERS.nicolasLefevre.email}
										</div>
									</div>
								</div>
								<div className=''>
									<DropdownAuthExample auth='Admin' />
								</div>
							</div>
							<div className='flex'>
								<div className='flex grow items-center gap-2'>
									<div>
										<Avatar src={USERS.aulisTiainen.image.org} />
									</div>
									<div>
										<div className='flex items-baseline gap-2'>
											<span>{\`\${USERS.aulisTiainen.firstName} \${USERS.aulisTiainen.lastName}\`}</span>
											<span className='text-xs text-zinc-500'>(you)</span>
										</div>
										<div className='text-xs text-zinc-500'>
											{USERS.aulisTiainen.email}
										</div>
									</div>
								</div>
								<div className=''>
									<DropdownAuthExample auth='Can view' />
								</div>
							</div>
							<div className='flex'>
								<div className='flex grow items-center gap-2'>
									<div>
										<Avatar src={USERS.danielaPetrova.image.org} />
									</div>
									<div>
										<div className='flex items-baseline gap-2'>
											<span>{\`\${USERS.danielaPetrova.firstName} \${USERS.danielaPetrova.lastName}\`}</span>
											<span className='text-xs text-zinc-500'>(you)</span>
										</div>
										<div className='text-xs text-zinc-500'>
											{USERS.danielaPetrova.email}
										</div>
									</div>
								</div>
								<div className=''>
									<DropdownAuthExample auth='Can edit' />
								</div>
							</div>
						</div>
						<hr className='-mx-2 border-zinc-500/25' />
						<div className='text-xl font-bold'>Shared read-only link</div>
						<div className='flex gap-4'>
							<Input
								name='email'
								type='email'
								variant='default'
								placeholder='https://github.com/omtanke/boltify'
								value='https://github.com/omtanke/boltify'
								readOnly
								dimension='sm'
							/>
							<Tooltip text='Copy'>
								<Button
									aria-label='Copy'
									variant='soft'
									color='zinc'
									icon='Copy01'
								/>
							</Tooltip>
						</div>
						<hr className='-mx-2 mt-2 border-zinc-500/25' />
						<div className=''>
							<Button aria-label='Read more' icon='HelpCircle' dimension='xs'>
								Read more about share
							</Button>
						</div>
					</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default ShareAndInviteInviteUserExample;
// @end-snippet:: shareAndInviteInviteUserExampleSource

// FOR DEVELOPMENT PREVIEW
export const ShareAndInviteInviteUserExamplePreview = () => {
	const [checked, setChecked] = useState<boolean>(false);
	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<Content>
			<ModalHeader>Invite</ModalHeader>
			<ModalBody>
				<div className='flex flex-col gap-2 text-start'>
					<div>
						<div className='flex gap-4'>
							<FieldWrap lastSuffix={SELECT}>
								<Input
									name='email'
									type='email'
									variant='default'
									placeholder='Add username or email'
									dimension='sm'
								/>
							</FieldWrap>
							<Button
								aria-label='Send'
								variant='solid'
								color='blue'
								className='text-nowrap'>
								Send
							</Button>
						</div>
						<Checkbox
							label='Notify recipients via email'
							dimension='sm'
							checked={checked}
							onChange={handleCheckboxChange}
						/>
					</div>
					<hr className='-mx-2 border-zinc-500/25' />
					<div className='text-xl font-bold'>From GitHub</div>
					<div className='flex flex-col gap-2'>
						<div className='flex'>
							<div className='flex grow items-center gap-2'>
								<div>
									<Avatar src={USERS.nicolasLefevre.image.org} />
								</div>
								<div>
									<div className='flex items-baseline gap-2'>
										<span>{\`\${USERS.nicolasLefevre.firstName} \${USERS.nicolasLefevre.lastName}\`}</span>
										<span className='text-xs text-zinc-500'>(you)</span>
									</div>
									<div className='text-xs text-zinc-500'>
										{USERS.nicolasLefevre.email}
									</div>
								</div>
							</div>
							<div className=''>
								<DropdownAuthExample auth='Admin' />
							</div>
						</div>
						<div className='flex'>
							<div className='flex grow items-center gap-2'>
								<div>
									<Avatar src={USERS.aulisTiainen.image.org} />
								</div>
								<div>
									<div className='flex items-baseline gap-2'>
										<span>{\`\${USERS.aulisTiainen.firstName} \${USERS.aulisTiainen.lastName}\`}</span>
										<span className='text-xs text-zinc-500'>(you)</span>
									</div>
									<div className='text-xs text-zinc-500'>
										{USERS.aulisTiainen.email}
									</div>
								</div>
							</div>
							<div className=''>
								<DropdownAuthExample auth='Can view' />
							</div>
						</div>
						<div className='flex'>
							<div className='flex grow items-center gap-2'>
								<div>
									<Avatar src={USERS.danielaPetrova.image.org} />
								</div>
								<div>
									<div className='flex items-baseline gap-2'>
										<span>{\`\${USERS.danielaPetrova.firstName} \${USERS.danielaPetrova.lastName}\`}</span>
										<span className='text-xs text-zinc-500'>(you)</span>
									</div>
									<div className='text-xs text-zinc-500'>
										{USERS.danielaPetrova.email}
									</div>
								</div>
							</div>
							<div className=''>
								<DropdownAuthExample auth='Can edit' />
							</div>
						</div>
					</div>
					<hr className='-mx-2 border-zinc-500/25' />
					<div className='text-xl font-bold'>Shared read-only link</div>
					<div className='flex gap-4'>
						<Input
							name='email'
							type='email'
							variant='default'
							placeholder='https://github.com/omtanke/boltify'
							value='https://github.com/omtanke/boltify'
							readOnly
							dimension='sm'
						/>
						<Tooltip text='Copy'>
							<Button aria-label='Copy' variant='soft' color='zinc' icon='Copy01' />
						</Tooltip>
					</div>
					<hr className='-mx-2 mt-2 border-zinc-500/25' />
					<div className=''>
						<Button aria-label='Read more' icon='HelpCircle' dimension='xs'>
							Read more about share
						</Button>
					</div>
				</div>
			</ModalBody>
		</Content>
	);
};
`,N=()=>n.jsxs(n.Fragment,{children:[n.jsxs(i,{children:[n.jsx(t,{children:n.jsx(s,{list:[{...e.examples.exampleMain},{...e.examples.exampleMain.subPages.overlays},{...e.examples.exampleMain.subPages.overlays.subPages.shareAndInvite}]})}),n.jsxs(o,{children:[n.jsx(l,{}),n.jsx(d,{}),n.jsx(a.Ui.Dropdown.Notifications,{})]})]}),n.jsx(r,{children:n.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[n.jsx(m,{title:"Share & Invite",description:"Discover modals, displaying collapsible sections for different team roles and permissions, alongside a one-click copy button for invite links."}),n.jsx(c,{title:"Invite User",code:p(v,"shareAndInviteInviteUserExampleSource"),children:n.jsx("div",{children:n.jsx(a.Overlays.ShareAndInvite.InviteUser,{})})})]})})]});export{N as default};
