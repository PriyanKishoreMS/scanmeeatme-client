import { FileSpreadsheet, ScanText } from "lucide-react";

interface LayoutConfigProps {
	layout: string;
	setLayout: React.Dispatch<React.SetStateAction<string>>;
	menuLayouts: { label: string; value: string }[];
}

const LayoutConfig: React.FC<LayoutConfigProps> = ({
	layout,
	setLayout,
	menuLayouts,
}) => {
	return (
		<div>
			<div className='border bg-base-100 border-base-300 rounded-lg shadow-sm mb-2 flex flex-col gap-1'>
				<div className='flex flex-col p-2'>
					<label
						htmlFor='imports'
						className='divider text-xs font-medium uppercase tracking-wide text-gray-500 my-2 rounded-md w-fit'
					>
						Import Menu from
					</label>
					{/* <label className='divider text-xs font-medium uppercase tracking-wide text-gray-500'>
						Import Menu from
					</label> */}
					<div className='space-x-2 flex'>
						<button
							type='button'
							className='ripple btn flex-1 h-20 items-center gap-2 px-5 bg-blue-50 border-blue-200 border rounded-lg'
						>
							<ScanText className='text-blue-700' size={21} />
							<span className='text-blue-700 font-bold'>Scan</span>
						</button>
						<button
							type='button'
							className='btn flex-1 h-20 items-center gap-2 px-5 bg-blue-50 border-blue-200 border rounded-lg'
						>
							<FileSpreadsheet className='text-blue-700' size={21} />
							<span className='text-blue-700 font-bold'>Sheet</span>
						</button>
					</div>
				</div>

				<div className='p-2'>
					<label className='floating-label flex flex-col'>
						<input
							type='text'
							className='input w-full rounded-lg'
							placeholder='Restaurant Name'
						/>
						<span>Restaurant Name</span>
					</label>
				</div>
				<div className='flex flex-col p-2'>
					<label
						htmlFor='imports'
						className='divider text-xs font-medium uppercase tracking-wide text-gray-500 my-2 rounded-md w-fit'
					>
						Layouts
					</label>
					{/* <label className='divider text-xs font-medium uppercase tracking-wide text-gray-500'>
						Layout
					</label> */}

					<div className='flex w-full space-x-2'>
						{menuLayouts.map(lay => (
							<button
								type='button'
								key={lay.label}
								onClick={() => setLayout(lay.value)}
								className={`btn flex-1 btn-sm rounded-md ${
									layout === lay.value ? "btn-primary" : "btn-soft"
								}`}
							>
								<img src={`/${lay.value}.svg`} className='w-4 h-4' alt='' />
								{lay.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LayoutConfig;
