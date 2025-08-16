import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Card from "./Card";

interface LayoutConfigProps {
	menuItems: Record<string, any[]>;
	layout: string;
}

const MasonryLayout: React.FC<LayoutConfigProps> = ({ menuItems, layout }) => {
	const breakpoints = {
		default: 3,
		640: 2,
	};

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
		<>
			{Object.entries(menuItems).map(([section, items]) => {
				const isOpen = openSections[section];
				return (
					<div
						key={section}
						tabIndex={0}
						className={`collapse collapse-arrow bg-base-100 border border-base-300 mb-2 transition-all duration-300 ease-in-out ${
							isOpen ? "collapse-open" : "collapse-close"
						}`}
					>
						<div
							className='collapse-title text-xl font-bold cursor-pointer'
							onClick={() => toggleSection(section)}
						>
							{section}
						</div>

						<div className='collapse-content transition-all duration-300 ease-in-out'>
							<Masonry
								breakpointCols={breakpoints}
								className='flex gap-2'
								columnClassName='space-y-2'
							>
								{items.map((item, idx) => (
									<Card key={idx} item={item} layout={layout} />
								))}
							</Masonry>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default MasonryLayout;
