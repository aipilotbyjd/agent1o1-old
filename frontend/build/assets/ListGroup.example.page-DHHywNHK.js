import{j as e}from"./vendor-D_nTE7E-.js";import{H as o,r as s,z as l,p as n,s as r,x as c,y as m,E as a,C as d,aX as v,aY as t,aC as i}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u=`// @start-snippet:: listGroupLogoWithButtonExampleSource
import { Facebook, Google, Yandex } from '@/assets/images';
import Button from '@/components/ui/Button';

const ListGroupLogoWithButtonExample = () => {
	return (
		<div className='flex flex-col gap-4 divide-y divide-zinc-500/25 [&>*]:pb-4'>
			<div className='flex items-center justify-between gap-4'>
				<div className='flex items-center gap-4'>
					<img src={Google} alt='Gmail account' className='size-12' />
					<div className=''>
						<div className='text-lg font-bold'>Gmail account</div>
						<div className='text-zinc-500'>Import your Gmail account contacts.</div>
					</div>
				</div>
				<Button aria-label='Connect' variant='solid'>
					Connect
				</Button>
			</div>
			<div className='flex items-center justify-between gap-4'>
				<div className='flex items-center gap-4'>
					<img src={Facebook} alt='Facebook' className='size-12' />
					<div className=''>
						<div className='text-lg font-bold'>Facebook</div>
						<div className='text-zinc-500'>Import your Facebook contacts.</div>
					</div>
				</div>
				<Button aria-label='Connect' variant='solid'>
					Connect
				</Button>
			</div>
			<div className='flex items-center justify-between gap-4'>
				<div className='flex items-center gap-4'>
					<img src={Yandex} alt='Yandex' className='size-12' />
					<div className=''>
						<div className='text-lg font-bold'>Yandex</div>
						<div className='text-zinc-500'>Import your Yandex contacts.</div>
					</div>
				</div>
				<Button aria-label='Connect' variant='solid'>
					Connect
				</Button>
			</div>
		</div>
	);
};

export default ListGroupLogoWithButtonExample;
// @end-snippet:: listGroupLogoWithButtonExampleSource
`,p=`// @start-snippet:: listGroupAvatarWithButtonExampleSource
import Avatar from '@/components/ui/Avatar';
import USERS from '@/mocks/users.mock';
import Button from '@/components/ui/Button';

const ListGroupAvatarWithButtonExample = () => {
	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='flex'>
					<div className='flex grow items-center gap-4'>
						<Avatar
							src={USERS.aulisTiainen.image.org}
							name={\`\${USERS.aulisTiainen.firstName} \${USERS.aulisTiainen.lastName}\`}
							color={USERS.aulisTiainen.color}
						/>
						<div>
							<div>{\`\${USERS.aulisTiainen.firstName} \${USERS.aulisTiainen.lastName}\`}</div>
							<div className='text-sm text-zinc-500'>
								{USERS.aulisTiainen.username}
							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<Button aria-label='Connect' variant='outline' color='zinc'>
							Connect
						</Button>
					</div>
				</div>
				<div className='flex'>
					<div className='flex grow items-center gap-4'>
						<Avatar
							src={USERS.danielaPetrova.image.org}
							name={\`\${USERS.danielaPetrova.firstName} \${USERS.danielaPetrova.lastName}\`}
							color={USERS.danielaPetrova.color}
						/>
						<div>
							<div>{\`\${USERS.danielaPetrova.firstName} \${USERS.danielaPetrova.lastName}\`}</div>
							<div className='text-sm text-zinc-500'>
								{USERS.danielaPetrova.username}
							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<Button aria-label='Connect' variant='outline' color='zinc'>
							Connect
						</Button>
					</div>
				</div>
				<div className='flex'>
					<div className='flex grow items-center gap-4'>
						<Avatar
							src={USERS.nicolasLefevre.image.org}
							name={\`\${USERS.nicolasLefevre.firstName} \${USERS.nicolasLefevre.lastName}\`}
							color={USERS.nicolasLefevre.color}
						/>
						<div>
							<div>{\`\${USERS.nicolasLefevre.firstName} \${USERS.nicolasLefevre.lastName}\`}</div>
							<div className='text-sm text-zinc-500'>
								{USERS.nicolasLefevre.username}
							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<Button aria-label='Connect' variant='outline' color='zinc'>
							Connect
						</Button>
					</div>
				</div>
				<div className='flex'>
					<div className='flex grow items-center gap-4'>
						<Avatar
							src={USERS.oliviaNovak.image.org}
							name={\`\${USERS.oliviaNovak.firstName} \${USERS.oliviaNovak.lastName}\`}
							color={USERS.oliviaNovak.color}
						/>
						<div>
							<div>{\`\${USERS.oliviaNovak.firstName} \${USERS.oliviaNovak.lastName}\`}</div>
							<div className='text-sm text-zinc-500'>
								{USERS.oliviaNovak.username}
							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<Button aria-label='Connect' variant='outline' color='zinc'>
							Connect
						</Button>
					</div>
				</div>
				<div className='flex'>
					<div className='flex grow items-center gap-4'>
						<Avatar
							src={USERS.johndoe.image.org}
							name={\`\${USERS.johndoe.firstName} \${USERS.johndoe.lastName}\`}
							color={USERS.johndoe.color}
						/>
						<div>
							<div>{\`\${USERS.johndoe.firstName} \${USERS.johndoe.lastName}\`}</div>
							<div className='text-sm text-zinc-500'>{USERS.johndoe.username}</div>
						</div>
					</div>
					<div className='flex items-center'>
						<Button aria-label='Connect' variant='outline' color='zinc'>
							Connect
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListGroupAvatarWithButtonExample;
// @end-snippet:: listGroupAvatarWithButtonExampleSource
`,g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(s,{children:e.jsx(l,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.pageSections},{...n.examples.exampleMain.subPages.pageSections.subPages.listGroup}]})}),e.jsxs(r,{children:[e.jsx(c,{}),e.jsx(m,{}),e.jsx(a.Ui.Dropdown.Notifications,{})]})]}),e.jsx(d,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(v,{title:"List Group",description:"Discover admin list group options with user-friendly tabs, colorful icons, and friendly avatars."}),e.jsx(t,{title:"Logo with Button",iFrameProps:{initialWidth:480},code:i(u,"listGroupLogoWithButtonExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(a.PageSections.ListGroup.LogoWithButton,{})})}),e.jsx(t,{title:"Avatar with Button",iFrameProps:{initialWidth:480},code:i(p,"listGroupAvatarWithButtonExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(a.PageSections.ListGroup.AvatarWithButton,{})})})]})})]});export{g as default};
