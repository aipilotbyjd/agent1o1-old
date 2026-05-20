import{j as e}from"./vendor-D_nTE7E-.js";import{H as i,r as s,z as o,p as n,s as l,x as d,y as c,E as a,C as m,aX as x,aY as t,aC as r}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u=`// @start-snippet:: navigationsMiniFloatingHeaderExampleSource
import { LogoDark, LogoLight } from '@/assets/images';
import { useState } from 'react';
import Icon from '@/components/icon/Icon';
import classNames from 'classnames';
import useDarkMode from '@/hooks/useDarkMode';

const NavigationsMiniFloatingHeaderExample = () => {
	const { isDarkTheme } = useDarkMode();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			{/* ========== HEADER ========== */}
			<header className='sticky inset-x-0 top-0 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start'>
				<nav className='relative mx-2 mt-4 w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white py-2.5 md:mx-auto md:flex md:items-center md:justify-between md:px-4 md:py-0 dark:border-zinc-700 dark:bg-zinc-900'>
					<div className='flex items-center justify-between px-4 md:px-0'>
						<div className='flex items-center'>
							{/* Logo */}
							<a
								className='inline-block flex-none rounded-md text-xl font-semibold focus:opacity-80 focus:outline-hidden'
								href='/'
								aria-label='Boltify'>
								<img
									src={isDarkTheme ? LogoLight : LogoDark}
									className='h-6'
									alt='Boltify'
								/>
							</a>
							{/* End Logo */}
							<div className='ms-1 sm:ms-2'></div>
						</div>

						<div className='md:hidden'>
							{/* Toggle Button */}
							<button
								type='button'
								className='flex size-7 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:bg-zinc-200 focus:bg-zinc-200 focus:outline-hidden dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700'
								aria-expanded={isOpen}
								aria-controls='hs-navbar-header-floating'
								aria-label='Toggle navigation'
								onClick={() => setIsOpen((prev) => !prev)}>
								<Icon icon={isOpen ? 'Cancel01' : 'Menu01'} />
							</button>
							{/* End Toggle Button */}
						</div>
					</div>

					<div
						className={classNames(
							'grow basis-full overflow-hidden transition-all duration-300 md:block',
							{
								hidden: !isOpen,
							},
						)}>
						<div className='mt-3 flex flex-col gap-2 py-2 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-3 md:py-0 md:ps-7'>
							<a
								className='border-s-2 border-zinc-800 px-4 py-0.5 font-medium text-zinc-800 focus:outline-hidden md:border-s-0 md:border-b-2 md:px-1 md:py-3 dark:border-zinc-200 dark:text-zinc-200'
								href='/'
								aria-current='page'>
								Home
							</a>
							<a
								className='border-s-2 border-transparent px-4 py-0.5 text-zinc-500 hover:text-zinc-800 focus:outline-hidden md:border-s-0 md:border-b-2 md:px-1 md:py-3 dark:text-zinc-400 dark:hover:text-zinc-200'
								href='/'>
								Projects
							</a>
							<a
								className='border-s-2 border-transparent px-4 py-0.5 text-zinc-500 hover:text-zinc-800 focus:outline-hidden md:border-s-0 md:border-b-2 md:px-1 md:py-3 dark:text-zinc-400 dark:hover:text-zinc-200'
								href='/'>
								Work
							</a>
							<a
								className='border-s-2 border-transparent px-4 py-0.5 text-zinc-500 hover:text-zinc-800 focus:outline-hidden md:border-s-0 md:border-b-2 md:px-1 md:py-3 dark:text-zinc-400 dark:hover:text-zinc-200'
								href='/'>
								Articles
							</a>
						</div>
					</div>
				</nav>
			</header>
			{/* ========== END HEADER ========== */}
		</>
	);
};

export default NavigationsMiniFloatingHeaderExample;
// @end-snippet:: navigationsMiniFloatingHeaderExampleSource
`,p=`// @start-snippet:: navbarsCenterAlignedExampleSource
import useDarkMode from '@/hooks/useDarkMode';
import { LogoDark, LogoLight } from '@/assets/images';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import Icon from '@/components/icon/Icon';
import classNames from 'classnames';

const NavbarsCenterAlignedExample = () => {
	const { isDarkTheme } = useDarkMode();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			{/* ========== HEADER ========== */}
			<header className='z-50 flex w-full flex-wrap py-7 lg:flex-nowrap lg:justify-start'>
				<nav className='relative mx-auto flex w-full max-w-7xl basis-full flex-wrap items-center px-4 md:px-6 lg:grid lg:grid-cols-12 lg:px-8'>
					<div className='flex items-center lg:col-span-3'>
						{/* Logo */}
						<a
							className='inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-hidden'
							href='/'
							aria-label='Boltify'>
							<img
								src={isDarkTheme ? LogoLight : LogoDark}
								className='h-10'
								alt='Boltify'
							/>
						</a>
						{/* End Logo */}

						<div className='ms-1 sm:ms-2'></div>
					</div>

					{/* Button Group */}
					<div className='ms-auto flex items-center gap-x-1 py-1 lg:order-3 lg:col-span-3 lg:gap-x-2 lg:ps-6'>
						<Button
							aria-label='Sign in'
							variant='outline'
							color='zinc'
							rounded='rounded-xl'>
							Sign in
						</Button>
						<Button
							aria-label='Hire us'
							variant='solid'
							color='primary'
							rounded='rounded-xl'>
							Hire us
						</Button>

						<div className='lg:hidden'>
							<button
								type='button'
								className='flex size-9.5 items-center justify-center rounded-xl border border-zinc-200 text-sm font-semibold text-black hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
								aria-expanded={isOpen}
								aria-label='Toggle navigation'
								onClick={() => setIsOpen((prev) => !prev)}>
								<Icon icon={isOpen ? 'Cancel01' : 'Menu01'} />
							</button>
						</div>
					</div>
					{/* End Button Group */}

					{/* Collapse */}
					<div
						className={classNames(
							'grow basis-full overflow-hidden transition-all duration-300 lg:order-2 lg:col-span-6 lg:block lg:w-auto lg:basis-auto',
							{ hidden: !isOpen },
						)}>
						<div className='mt-5 flex flex-col gap-x-0 gap-y-4 lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:gap-x-7 lg:gap-y-0'>
							<div>
								<a
									className='before:bg-primary-400 relative inline-block text-black before:absolute before:start-0 before:bottom-0.5 before:-z-1 before:h-1 before:w-full focus:outline-hidden dark:text-white'
									href='/'
									aria-current='page'>
									Work
								</a>
							</div>
							<div>
								<a
									className='inline-block text-black hover:text-zinc-600 focus:text-zinc-600 focus:outline-hidden dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300'
									href='/'>
									Services
								</a>
							</div>
							<div>
								<a
									className='inline-block text-black hover:text-zinc-600 focus:text-zinc-600 focus:outline-hidden dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300'
									href='/'>
									About
								</a>
							</div>
							<div>
								<a
									className='inline-block text-black hover:text-gray-600 focus:text-gray-600 focus:outline-hidden dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300'
									href='/'>
									Careers
								</a>
							</div>
							<div>
								<a
									className='inline-block text-black hover:text-gray-600 focus:text-gray-600 focus:outline-hidden dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300'
									href='/'>
									Blog
								</a>
							</div>
						</div>
					</div>
					{/* End Collapse */}
				</nav>
			</header>
			{/* ========== END HEADER ========== */}
		</>
	);
};

export default NavbarsCenterAlignedExample;
// @end-snippet:: navbarsCenterAlignedExampleSource
`,h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(s,{children:e.jsx(o,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.navigations},{...n.examples.exampleMain.subPages.navigations.subPages.header}]})}),e.jsxs(l,{children:[e.jsx(d,{}),e.jsx(c,{}),e.jsx(a.Ui.Dropdown.Notifications,{})]})]}),e.jsx(m,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(x,{title:"Header",description:"Navbars (Headers) serve as the central hub for site navigation, seamlessly guiding users to key sections while reinforcing brand identity and ensuring a consistent, accessible experience across all pages."}),e.jsx(t,{title:"Mini Floating Header",code:r(u,"navigationsMiniFloatingHeaderExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(a.Navigations.Navbars.MiniFloatingHeader,{})})}),e.jsx(t,{title:"Center aligned",code:r(p,"navbarsCenterAlignedExampleSource"),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(a.Navigations.Navbars.CenterAligned,{})})})]})})]});export{h as default};
