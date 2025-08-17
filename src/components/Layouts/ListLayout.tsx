import { useState } from "react";
import { menuItems } from "../../data";
import Card from "./Card";

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
								<Card key={idx} item={item} layout='list' />
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ListLayout;
