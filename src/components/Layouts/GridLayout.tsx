import { useState } from "react";
import { menuItems } from "../../data";
import Card from "./Card";

interface LayoutConfigProps {
	menuItems: Record<string, typeof menuItems>;
	layout: string;
	sectionRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}

const GridLayout: React.FC<LayoutConfigProps> = ({
	menuItems,
	layout,
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
						tabIndex={0}
						ref={el => {
							sectionRefs.current[section] = el;
						}}
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

						<div className='collapse-content'>
							<div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
								{items.map((item, idx) => (
									<Card key={idx} item={item} layout={layout} />
								))}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default GridLayout;
