import{j as e}from"./vendor-D_nTE7E-.js";import{H as n,r as i,z as l,p as a,s as r,x as o,y as t,E as s,C as p,aX as d,aY as m,aC as c}from"./chunk-icon-Pdyc-Xig.js";import"./chunk-mdviewer-RzNt5nmr.js";import"./chunk-highlighter-bh0nNJlE.js";const x=`// @start-snippet:: formsFileUploadExampleSource
import Icon from '@/components/icon/Icon';

const FileUploadSimpleDragDropExample = () => {
	return (
		<>
			<div className='flex justify-center rounded-lg border-2 border-dashed border-zinc-500/25 px-6 py-10 dark:border-zinc-500/50'>
				<div className='text-center'>
					<Icon icon='Album02' color='zinc' className='mx-auto h-12 w-12' />
					<div className='mt-4 flex text-sm leading-6 text-zinc-500'>
						<label
							htmlFor='file-upload'
							className='relative cursor-pointer rounded-md font-semibold text-blue-500 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-transparent focus-within:outline-hidden hover:text-blue-600'>
							<span>Upload a file</span>
							<input
								aria-label='File upload'
								id='file-upload'
								name='file-upload'
								type='file'
								className='sr-only'
							/>
						</label>
						<span className='pl-1'>or drag and drop</span>
					</div>
					<p className='text-xs leading-5 text-zinc-500'>PNG, JPG, GIF up to 10MB</p>
				</div>
			</div>
		</>
	);
};

export default FileUploadSimpleDragDropExample;
// @end-snippet:: formsFileUploadExampleSource
`,b=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(i,{children:e.jsx(l,{list:[{...a.examples.exampleMain},{...a.examples.exampleMain.subPages.forms},{...a.examples.exampleMain.subPages.forms.subPages.fileUploads}]})}),e.jsxs(r,{children:[e.jsx(o,{}),e.jsx(t,{}),e.jsx(s.Ui.Dropdown.Notifications,{})]})]}),e.jsx(p,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[e.jsx(d,{title:"File Uploads",description:"Admin file upload forms with removable image media."}),e.jsx(m,{title:"Simple Drag & Drop",code:c(x,"formsFileUploadExampleSource"),iFrameProps:{initialWidth:640},children:e.jsx(s.Forms.FileUploads.SimpleDragDrop,{})})]})})]});export{b as default};
