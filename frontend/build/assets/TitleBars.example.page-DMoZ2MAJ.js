import{j as e}from"./vendor-D_nTE7E-.js";import{H as s,r as o,z as i,p as t,s as d,x as l,y as c,E as n,C as p,aX as u,aY as a,aC as r}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const m=`// @start-snippet:: titleBarsProjectAndUsersExampleSource
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
	SubheaderSeparator,
} from '@/components/layout/Subheader';
import EXAMPLE from '@/examples/_index';

const TitleBarsProjectAndUsersExample = () => {
	return (
		<Subheader>
			<SubheaderLeft>
				<EXAMPLE.Ui.Dropdown.Project />
			</SubheaderLeft>
			<SubheaderRight>
				<EXAMPLE.Ui.Dropdown.InviteUser />
				<SubheaderSeparator />
				<EXAMPLE.Ui.Dropdown.Assign />
			</SubheaderRight>
		</Subheader>
	);
};

export default TitleBarsProjectAndUsersExample;
// @end-snippet:: titleBarsProjectAndUsersExampleSource
`,S=`// @start-snippet:: titleBarsTagsAndButtonsExampleSource
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
	SubheaderSeparator,
} from '@/components/layout/Subheader';
import EXAMPLE from '@/examples/_index';
import Button from '@/components/ui/Button';

const TitleBarsTagsAndButtonsExample = () => {
	return (
		<Subheader>
			<SubheaderLeft>
				<EXAMPLE.Ui.Dropdown.EditTag />
				<SubheaderSeparator />
				<EXAMPLE.Ui.Dropdown.ChangeStatus />
			</SubheaderLeft>
			<SubheaderRight>
				<EXAMPLE.Ui.Dropdown.InviteUser />
				<SubheaderSeparator />
				<Button aria-label='Send' color='emerald' variant='soft' icon='Sent02'>
					Send
				</Button>
			</SubheaderRight>
		</Subheader>
	);
};

export default TitleBarsTagsAndButtonsExample;
// @end-snippet:: titleBarsTagsAndButtonsExampleSource
`,x=`// @start-snippet:: titleBarsBadgeAndButtonsExampleSource
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layout/Subheader';
import Badge from '@/components/ui/Badge';
import PAYMENT_STATUS from '@/constants/paymentStatus.constant';
import ORDER_STATUS from '@/constants/orderStatus.constant';
import Icon from '@/components/icon/Icon';
import dayjs from 'dayjs';
import Button from '@/components/ui/Button';

const TitleBarsBadgeAndButtonsExample = () => {
	return (
		<Subheader>
			<SubheaderLeft>
				<div className='flex flex-col gap-2'>
					<div className='flex gap-2'>
						<div className='text-xl font-bold'>Order #123456</div>
						<Badge color={PAYMENT_STATUS.PAID.color} variant='soft'>
							<div className='truncate'>{PAYMENT_STATUS.PAID.text}</div>
						</Badge>
						<Badge color={ORDER_STATUS.FULFILLED.color} variant='soft'>
							<Icon icon={ORDER_STATUS.FULFILLED.icon} />
							<div className='truncate'>{ORDER_STATUS.FULFILLED.text}</div>
						</Badge>
					</div>
					<div className='text-zinc-500'>
						{dayjs().add(-5, 'day').add(2, 'hours').format('DD MMM, YYYY')}
					</div>
				</div>
			</SubheaderLeft>
			<SubheaderRight>
				<Button aria-label='Delete' variant='soft' color='red' icon='Delete02'>
					Delete
				</Button>
				<Button
					aria-label='Save'
					variant='soft'
					color='emerald'
					icon='FloppyDisk'
					onClick={() => {}}>
					Save changes
				</Button>
			</SubheaderRight>
		</Subheader>
	);
};

export default TitleBarsBadgeAndButtonsExample;
// @end-snippet:: titleBarsBadgeAndButtonsExampleSource
`,f=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(o,{children:e.jsx(i,{list:[{...t.examples.exampleMain},{...t.examples.exampleMain.subPages.pageSections},{...t.examples.exampleMain.subPages.pageSections.subPages.titleBars}]})}),e.jsxs(d,{children:[e.jsx(l,{}),e.jsx(c,{}),e.jsx(n.Ui.Dropdown.Notifications,{})]})]}),e.jsx(p,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(u,{title:"Title Bars",description:"Discover a collection of customizable Title Bars, perfect for enhancing user navigation and interface design."}),e.jsx(a,{title:"Project & Users",code:r(m,"titleBarsProjectAndUsersExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n.PageSections.TitleBars.ProjectAndUsers,{})})}),e.jsx(a,{title:"Project & Users",code:r(S,"titleBarsTagsAndButtonsExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n.PageSections.TitleBars.TagsAndButtons,{})})}),e.jsx(a,{title:"Badge & Buttons",code:r(x,"titleBarsBadgeAndButtonsExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(n.PageSections.TitleBars.BadgeAndButtons,{})})})]})})]});export{f as default};
