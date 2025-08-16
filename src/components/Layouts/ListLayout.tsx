import { useState } from "react";
import { menuItems } from "../../data";
import { NonVegIcon, VegIcon } from "../IsVeg";

interface LayoutConfigProps {
	menuItems: Record<string, typeof menuItems>;
	sectionRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}

const ListLayout: React.FC<LayoutConfigProps> = ({
	menuItems,
	sectionRefs,
}) => {
	const [openSections, setOpenSections] = useState<Record<string, boolean>>(
		Object.keys(menuItems).reduce(
			(acc, section) => ({ ...acc, [section]: true }),
			{}
		)
	);

	const toggleSection = (section: string) => {
		setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
	};

	return (
		<div className='flex flex-col w-full'>
			{Object.entries(menuItems).map(([section, items]) => {
				const isOpen = openSections[section];
				return (
					<div
						id={section}
						key={section}
						ref={el => {
							sectionRefs.current[section] = el;
						}}
						tabIndex={0}
						className={`collapse collapse-arrow shadow-sm bg-base-100 border border-base-300 mb-2 ${
							isOpen ? "collapse-open" : "collapse-close"
						}`}
					>
						<div
							className='collapse-title text-xl font-bold cursor-pointer'
							onClick={() => toggleSection(section)}
						>
							{section}
						</div>

						<div className='collapse-content flex flex-col gap-2'>
							{items.map((item, idx) => (
								<div
									key={idx}
									className='flex items-center justify-between w-full border rounded-lg border-gray-300 h-36'
								>
									<img
										src={item.image}
										alt={item.name}
										className='w-36 h-36 rounded-lg'
									/>
									<div className='flex flex-col w-1/2 justify-between h-full p-4'>
										<div className='flex flex-col w-full items-end h-full'>
											<span className='flex items-center'>
												<h3 className='text-sm text-gray-800 text-right'>
													{item.name}
												</h3>
												{item.veg ? (
													<VegIcon className='ml-1' />
												) : (
													<NonVegIcon className='ml-1' />
												)}
											</span>
											<p className='text-black text-sm font-semibold'>
												₹{item.price.toFixed(2)}
											</p>
										</div>
										<span className='text-xs text-end text-gray-600'>
											{item.description}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ListLayout;
