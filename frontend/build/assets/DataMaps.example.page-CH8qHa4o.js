import{j as e}from"./vendor-D_nTE7E-.js";import{H as t,r,z as o,p as n,s,x as l,y as i,E as a,C as d,aX as c,aY as p,aC as m}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const u=`// @start-snippet:: mapWorldExampleSource
import WorldMap from 'react-svg-worldmap';
import type { ISOCode } from 'react-svg-worldmap';
import colors from '@/tailwindcss/colors.tailwind';
import useDarkMode from '@/hooks/useDarkMode';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import TableTemplate from '@/templates/common/TableParts.template';
import priceFormat from '@/utils/priceFormat.util';

type IOrderProducts = {
	id: string;
	name: string;
	visit: number;
	purchases: number;
};

const columnHelper = createColumnHelper<IOrderProducts>();

const MapWorldExample = () => {
	const { isDarkTheme } = useDarkMode();

	const dataMap: { country: ISOCode; value: number }[] = [
		{ country: 'us', value: 17543 },
		{ country: 'in', value: 12482 },
		{ country: 'br', value: 9521 },
		{ country: 'de', value: 7865 },
		{ country: 'tr', value: 3521 },
	];

	const [data] = useState<IOrderProducts[]>([
		{
			id: 'us',
			name: '🇺🇸United States',
			visit: 17543,
			purchases: 8463,
		},
		{
			id: 'in',
			name: '🇮🇳India',
			visit: 12482,
			purchases: 5411,
		},
		{
			id: 'br',
			name: '🇧🇷Brazil',
			visit: 9521,
			purchases: 4562,
		},
		{
			id: 'de',
			name: '🇩🇪Germany',
			visit: 7865,
			purchases: 4882,
		},
		{
			id: 'tr',
			name: '🇹🇷Turkiye',
			visit: 3521,
			purchases: 1881,
		},
	]);

	const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: true }]);
	const [globalFilter, setGlobalFilter] = useState<string>('');

	const columns = [
		columnHelper.accessor('name', {
			cell: (info) => <div>{info.getValue()}</div>,
			header: () => 'Country',
			footer: () => 'Country',
		}),
		columnHelper.accessor('visit', {
			cell: (info) => <div>{info.getValue()}</div>,
			header: () => 'Visits',
			footer: () => 'Visits',
		}),
		columnHelper.accessor('purchases', {
			cell: (info) => <div>{priceFormat(info.getValue())}</div>,
			header: () => 'Purchases',
			footer: () => 'Purchases',
		}),
	];

	// eslint-disable-next-line react-hooks/incompatible-library
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			globalFilter,
		},
		onSortingChange: setSorting,
		enableRowSelection: true,
		enableGlobalFilter: true,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		initialState: {},
	});

	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'MapsGlobal01',
							color: 'blue',
							size: 'text-3xl',
						}}>
						Analytics
					</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='flex items-center justify-center'>
					<WorldMap
						color={colors.blue['500']}
						value-suffix='people'
						size='responsive'
						data={dataMap}
						backgroundColor='transparent'
						borderColor={isDarkTheme ? colors.zinc['300'] : colors.zinc['700']}
						tooltipTextFunction={({ countryName, countryValue }) =>
							\`\${countryName} - Visit: \${countryValue?.toLocaleString()} people\`
						}
					/>
				</div>
			</CardBody>
			<CardBody className='overflow-auto'>
				<TableTemplate table={table} hasFooter={false} />
			</CardBody>
		</Card>
	);
};

export default MapWorldExample;
// @end-snippet:: mapWorldExampleSource
`,h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(r,{children:e.jsx(o,{list:[{...n.examples.exampleMain},{...n.examples.exampleMain.subPages.dataVisualization},{...n.examples.exampleMain.subPages.dataVisualization.subPages.dataMaps}]})}),e.jsxs(s,{children:[e.jsx(l,{}),e.jsx(i,{}),e.jsx(a.Ui.Dropdown.Notifications,{})]})]}),e.jsx(d,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(c,{title:"Data Maps",description:"Dive deeper with data maps, customizable tabs and insightful tables, all in one centralized dashboard."}),e.jsx(p,{title:"World",code:m(u,"mapWorldExampleSource"),children:e.jsx(a.DataVisualization.Map.World,{})})]})})]});export{h as default};
