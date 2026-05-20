import{j as a}from"./vendor-D_nTE7E-.js";import{H as t,r as o,z as i,p as d,s,x as l,y as c,E as n,C as m,aX as C,aY as e,aC as r}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const p=`// @start-snippet:: statSeparateCardsExampleSource
import Card, { CardBody } from '@/components/ui/Card';
import { Bing, Google, Yahoo, Yandex } from '@/assets/images';
import priceFormat from '@/utils/priceFormat.util';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/icon/Icon';

const StatSeparateCardsExample = () => {
	return (
		<Card>
			<CardBody className='!p-0'>
				<div className='grid grid-cols-1 divide-x divide-y divide-zinc-500/10 lg:grid-cols-2 xl:grid-cols-4 xl:divide-y-0 dark:divide-zinc-500/25 [&>*]:p-6'>
					<div className='flex flex-col gap-4'>
						<img src={Google} alt='Google' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(2134191)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='emerald' rounded='rounded-lg'>
								<Icon icon='TradeUp' /> 7.6
							</Badge>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<img src={Bing} alt='Bing' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(1241245)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='red' rounded='rounded-lg'>
								<Icon icon='TradeDown' /> 4.2
							</Badge>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<img src={Yandex} alt='Yandex' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(96831)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='emerald' rounded='rounded-lg'>
								<Icon icon='TradeUp' /> 8.3
							</Badge>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<img src={Yahoo} alt='Yahoo' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(60812)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='emerald' rounded='rounded-lg'>
								<Icon icon='TradeUp' /> 21.4
							</Badge>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default StatSeparateCardsExample;
// @end-snippet:: statSeparateCardsExampleSource
`,v=`// @start-snippet:: statTradeBadgeExampleSource
import Badge from '@/components/ui/Badge';
import Icon from '@/components/icon/Icon';

const StatTradeBadgeExample = () => {
	return (
		<div className='mx-auto w-full lg:max-w-5xl'>
			<div className='grid grid-cols-1 md:grid-cols-3'>
				<div className='flex flex-col gap-2'>
					<div className='mb-2'>Support request</div>
					<div className='flex items-center gap-2'>
						<span className='text-2xl font-bold'>452</span>
						<Badge variant='default' color='emerald' rounded='rounded-lg'>
							<Icon icon='TradeUp' /> 18.4
						</Badge>
					</div>
					<div className='text-zinc-500'>4 last week</div>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='mb-2'>Resolved request</div>
					<div className='flex items-center gap-2'>
						<span className='text-2xl font-bold'>247</span>
						<Badge variant='default' color='red' rounded='rounded-lg'>
							<Icon icon='TradeDown' /> 12.8
						</Badge>
					</div>
					<div className='text-zinc-500'>4 last week</div>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='mb-2'>Ticket resolved by AI</div>
					<div className='flex items-center gap-2'>
						<span className='text-2xl font-bold'>121</span>
						<Badge variant='default' color='emerald' rounded='rounded-lg'>
							<Icon icon='TradeUp' />
							9.6
						</Badge>
					</div>
					<div className='text-zinc-500'>4 last week</div>
				</div>
			</div>
		</div>
	);
};

export default StatTradeBadgeExample;
// @end-snippet:: statTradeBadgeExampleSource
`,x=`// @start-snippet:: statCardsAndActionExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import Button from '@/components/ui/Button';
import AvatarGroup from '@/components/ui/AvatarGroup';
import Avatar from '@/components/ui/Avatar';
import { Avatar1, Avatar2, Avatar3 } from '@/assets/images';

const StatCardsAndActionExample = () => {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<Icon icon='User' size='text-4xl' color='emerald' />
					</CardHeaderChild>
					<CardHeaderChild>
						<Button aria-label='More' icon='MoreVertical' variant='link' color='zinc' />
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='flex items-end'>
						<div className='grow'>
							<div className='text-lg'>Active User</div>
							<div className='text-3xl font-bold'>46</div>
						</div>
						<div>
							<AvatarGroup size='w-8' variant='soft'>
								<Avatar src={Avatar1} />
								<Avatar src={Avatar2} color='emerald' />
								<Avatar src={Avatar3} color='amber' />
							</AvatarGroup>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<Icon icon='UserGroup02' size='text-4xl' color='amber' />
					</CardHeaderChild>
					<CardHeaderChild>
						<Button aria-label='More' icon='MoreVertical' variant='link' color='zinc' />
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='flex items-end'>
						<div className='grow'>
							<div className='text-lg'>Total User</div>
							<div className='text-3xl font-bold'>278</div>
						</div>
						<div>
							<AvatarGroup size='w-8' variant='soft'>
								<Avatar src={Avatar1} />
								<Avatar src={Avatar2} color='emerald' />
								<Avatar src={Avatar3} color='amber' />
							</AvatarGroup>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<Icon icon='UserAccount' size='text-4xl' color='blue' />
					</CardHeaderChild>
					<CardHeaderChild>
						<Button aria-label='More' icon='MoreVertical' variant='link' color='zinc' />
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='flex items-end'>
						<div className='grow'>
							<div className='text-lg'>New User</div>
							<div className='text-3xl font-bold'>12</div>
						</div>
						<div>
							<AvatarGroup size='w-8' variant='soft'>
								<Avatar src={Avatar1} />
								<Avatar src={Avatar2} color='emerald' />
								<Avatar src={Avatar3} color='amber' />
							</AvatarGroup>
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<Icon icon='UserShield01' size='text-4xl' color='violet' />
					</CardHeaderChild>
					<CardHeaderChild>
						<Button aria-label='More' icon='MoreVertical' variant='link' color='zinc' />
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='flex items-end'>
						<div className='grow'>
							<div className='text-lg'>Admin User</div>
							<div className='text-3xl font-bold'>4</div>
						</div>
						<div>
							<AvatarGroup size='w-8' variant='soft'>
								<Avatar src={Avatar1} />
								<Avatar src={Avatar2} color='emerald' />
								<Avatar src={Avatar3} color='amber' />
							</AvatarGroup>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default StatCardsAndActionExample;
// @end-snippet:: statCardsAndActionExampleSource
`,u=`// @start-snippet:: statWithIconExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import priceFormat from '@/utils/priceFormat.util';
import Badge from '@/components/ui/Badge';

const StatWithIconExample = () => (
	<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<span className='text-zinc-500'>In-store sales</span>
				</CardHeaderChild>
				<CardHeaderChild>
					<Icon icon='Store01' size='text-xl' color='zinc' />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<span className='text-4xl font-bold'>{priceFormat(6432)}</span>
				<div className='flex items-center gap-2'>
					<div className='text-zinc-500'>3k orders</div>
					<Badge variant='soft' color='emerald' rounded='rounded-lg'>
						<Icon icon='TradeUp' /> 18.4
					</Badge>
				</div>
			</CardBody>
		</Card>
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<span className='text-zinc-500'>Website sales</span>
				</CardHeaderChild>
				<CardHeaderChild>
					<Icon icon='Globe02' size='text-xl' color='zinc' />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<span className='text-4xl font-bold'>{priceFormat(18484.55)}</span>
				<div className='flex items-center gap-2'>
					<div className='text-zinc-500'>3k orders</div>
					<Badge variant='soft' color='red' rounded='rounded-lg'>
						<Icon icon='TradeDown' />
						2.3
					</Badge>
				</div>
			</CardBody>
		</Card>
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<span className='text-zinc-500'>Discount</span>
				</CardHeaderChild>
				<CardHeaderChild>
					<Icon icon='DiscountTag02' size='text-xl' color='zinc' />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<span className='text-4xl font-bold'>{priceFormat(3000)}</span>
				<div className='flex items-center gap-2'>
					<div className='text-zinc-500'>3k orders</div>
					<Badge variant='soft' color='zinc' rounded='rounded-lg'>
						<Icon icon='MinusSign' /> 0.0
					</Badge>
				</div>
			</CardBody>
		</Card>
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<span className='text-zinc-500'>Affiliate</span>
				</CardHeaderChild>
				<CardHeaderChild>
					<Icon icon='Affiliate' size='text-xl' color='zinc' />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<span className='text-4xl font-bold'>{priceFormat(875)}</span>
				<div className='flex items-center gap-2'>
					<div className='text-zinc-500'>3k orders</div>
					<Badge variant='soft' color='emerald' rounded='rounded-lg'>
						<Icon icon='TradeUp' /> 6.4
					</Badge>
				</div>
			</CardBody>
		</Card>
	</div>
);

export default StatWithIconExample;
// @end-snippet:: statWithIconExampleSource
`,g=`// @start-snippet:: statWithAvatarExampleSource
import Card, { CardBody, CardHeader, CardHeaderChild } from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import { Avatar2, Avatar3, Avatar4, Avatar5 } from '@/assets/images';
import AvatarGroup from '@/components/ui/AvatarGroup';

const StatWithAvatarExample = () => {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<span className='text-4xl font-bold'>1</span>
					</CardHeaderChild>
					<CardHeaderChild>
						<Avatar src={Avatar2} size='w-8' />
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='text-zinc-500'>Super Admin</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<span className='text-4xl font-bold'>4</span>
					</CardHeaderChild>
					<CardHeaderChild>
						<AvatarGroup size='w-8'>
							<Avatar src={Avatar2} color='zinc' />
							<Avatar name='Omtanke Studio' color='amber' />
							<Avatar src={Avatar4} color='emerald' />
							<Avatar src={Avatar5} color='blue' />
						</AvatarGroup>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='text-zinc-500'>Admin</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<span className='text-4xl font-bold'>8</span>
					</CardHeaderChild>
					<CardHeaderChild>
						<AvatarGroup size='w-8'>
							<Avatar src={Avatar5} color='blue' />
							<Avatar src={Avatar4} color='emerald' />
							<Avatar src={Avatar2} color='zinc' />
							<Avatar name='John Doe' color='violet' />
							<Avatar src={Avatar3} color='amber' />
							<Avatar name='+ 3' color='zinc' />
						</AvatarGroup>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='text-zinc-500'>Creator</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<span className='text-4xl font-bold'>142</span>
					</CardHeaderChild>
					<CardHeaderChild>
						<AvatarGroup size='w-8'>
							<Avatar src={Avatar5} color='blue' />
							<Avatar src={Avatar4} color='emerald' />
							<Avatar src={Avatar2} color='zinc' />
							<Avatar name='John Doe' color='violet' />
							<Avatar src={Avatar3} color='amber' />
							<Avatar name='1 H' color='zinc' />
						</AvatarGroup>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='text-zinc-500'>Members</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default StatWithAvatarExample;
// @end-snippet:: statWithAvatarExampleSource
`,h=`// @start-snippet:: statWithButtonExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const StatWithButtonExample = () => {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle
							iconProps={{
								icon: 'Clock01',
								color: 'zinc',
								size: 'text-3xl',
							}}>
							Total Hours
						</CardTitle>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<span className='text-4xl font-extrabold'>32h 28m</span>
				</CardBody>
				<CardFooter>
					<CardFooterChild>
						<Button
							aria-label='View reports'
							rightIcon='ArrowRight01'
							className='!px-0'>
							View reports
						</Button>
					</CardFooterChild>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle
							iconProps={{
								icon: 'Timer02',
								color: 'zinc',
								size: 'text-3xl',
							}}>
							Avg. Daily Hours
						</CardTitle>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<span className='text-4xl font-extrabold'>5h 46m</span>
				</CardBody>
				<CardFooter>
					<CardFooterChild>
						<Button
							aria-label='View reports'
							rightIcon='ArrowRight01'
							className='!px-0'>
							View reports
						</Button>
					</CardFooterChild>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle
							iconProps={{
								icon: 'TimeQuarter',
								color: 'zinc',
								size: 'text-3xl',
							}}>
							Over Limit
						</CardTitle>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<span className='text-4xl font-extrabold'>0h 0m</span>
				</CardBody>
				<CardFooter>
					<CardFooterChild>
						<Button
							aria-label='View reports'
							rightIcon='ArrowRight01'
							className='!px-0'>
							View reports
						</Button>
					</CardFooterChild>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle
							iconProps={{
								icon: 'TimeQuarterPass',
								color: 'zinc',
								size: 'text-3xl',
							}}>
							Under Limit
						</CardTitle>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<span className='text-4xl font-extrabold'>2h 32m</span>
				</CardBody>
				<CardFooter>
					<CardFooterChild>
						<Button
							aria-label='View reports'
							rightIcon='ArrowRight01'
							className='!px-0'>
							View reports
						</Button>
					</CardFooterChild>
				</CardFooter>
			</Card>
		</div>
	);
};

export default StatWithButtonExample;
// @end-snippet:: statWithButtonExampleSource
`,N=()=>a.jsxs(a.Fragment,{children:[a.jsxs(t,{children:[a.jsx(o,{children:a.jsx(i,{list:[{...d.examples.exampleMain},{...d.examples.exampleMain.subPages.dataVisualization},{...d.examples.exampleMain.subPages.dataVisualization.subPages.stats}]})}),a.jsxs(s,{children:[a.jsx(l,{}),a.jsx(c,{}),a.jsx(n.Ui.Dropdown.Notifications,{})]})]}),a.jsx(m,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(C,{title:"Stats",description:"Stats cards with avatars and badges that provide a clear overview of key metrics."}),a.jsx(e,{title:"Separate Cards, Badges",code:r(p,"statSeparateCardsExampleSource"),children:a.jsx(n.DataVisualization.Stat.SeparateCards,{})}),a.jsx(e,{title:"Trade badges",code:r(v,"statTradeBadgeExampleSource"),children:a.jsx(n.DataVisualization.Stat.TradeBadge,{})}),a.jsx(e,{title:"Cards and Actions",code:r(x,"statCardsAndActionExampleSource"),children:a.jsx(n.DataVisualization.Stat.CardsAndAction,{})}),a.jsx(e,{title:"Stats with Icon",code:r(u,"statWithIconExampleSource"),children:a.jsx(n.DataVisualization.Stat.WithIcon,{})}),a.jsx(e,{title:"Stats with Avatar",code:r(g,"statWithAvatarExampleSource"),children:a.jsx(n.DataVisualization.Stat.WithAvatar,{})}),a.jsx(e,{title:"Stats with Button",code:r(h,"statWithButtonExampleSource"),children:a.jsx(n.DataVisualization.Stat.WithButton,{})})]})})]});export{N as default};
