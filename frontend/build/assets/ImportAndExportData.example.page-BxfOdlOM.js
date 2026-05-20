import{j as a}from"./vendor-D_nTE7E-.js";import{H as t,r as o,z as n,p as r,s as d,x as s,y as p,E as e,C as i,aX as m,aY as l,aC as x}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const C=`// @start-snippet:: importAndExportImportContactsExampleSource
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';

const ImportAndExportImportContactsExample = () => {
	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle iconProps={{ icon: 'FileImport', size: 'text-3xl', color: 'amber' }}>
						Import contacts
					</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<EXAMPLE.PageSections.ListGroup.LogoWithButton />
				<hr className='border-dashed border-zinc-500/25' />
			</CardBody>
			<CardHeader>
				<CardHeaderChild>
					<CardSubTitle>Import contacts</CardSubTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<EXAMPLE.Forms.FileUploads.SimpleDragDrop />
			</CardBody>
		</Card>
	);
};

export default ImportAndExportImportContactsExample;
// @end-snippet:: importAndExportImportContactsExampleSource
`,g=()=>a.jsxs(a.Fragment,{children:[a.jsxs(t,{children:[a.jsx(o,{children:a.jsx(n,{list:[{...r.examples.exampleMain},{...r.examples.exampleMain.subPages.cards},{...r.examples.exampleMain.subPages.cards.subPages.importAndExportData}]})}),a.jsxs(d,{children:[a.jsx(s,{}),a.jsx(p,{}),a.jsx(e.Ui.Dropdown.Notifications,{})]})]}),a.jsx(i,{children:a.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[a.jsx(m,{title:"Import & Export Data",description:"Import & Export data effortlessly with card list groups, revealing dropdown menus, and seamless upload forms."}),a.jsx(l,{title:"Import Contacts",code:x(C,"importAndExportImportContactsExampleSource"),iFrameProps:{initialWidth:480},children:a.jsx(e.Card.ImportAndExport.ImportContacts,{})})]})})]});export{g as default};
