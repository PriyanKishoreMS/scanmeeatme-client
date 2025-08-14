import { ChevronLeft, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Card from "../components/Layouts/Card";
import GridLayout from "../components/Layouts/GridLayout";
import ListLayout from "../components/Layouts/ListLayout";
import LayoutConfig from "../components/Layouts/MenuConfig";
import { menuItems } from "../data";

const menuLayouts = [
	{ label: "Masonry", value: "masonry" },
	{ label: "Grid", value: "grid" },
	{ label: "List", value: "list" },
];

const Menu = () => {
	const [layout, setLayout] = useState("masonry");

	const breakpoints = {
		default: 3,
		640: 2,
	};

	const categorizedMenu = menuItems.reduce<Record<string, typeof menuItems>>(
		(acc, item) => {
			if (!acc[item.section]) acc[item.section] = [];
			acc[item.section].push(item);
			return acc;
		},
		{}
	);

	return (
		<div className='flex w-full justify-center'>
			<div className='md:w-1/2 w-full'>
				<div className='flex h-15 w-full sticky top-0 z-10 bg-white/80 backdrop-blur-xl'>
					<div className='p-2 pr-4 flex items-center justify-between w-full'>
						<div className='flex gap-3 items-center'>
							<ChevronLeft className='text-gray-800' />
							<div className='flex flex-col'>
								<span className='text-gray-700 text-xs font-medium'>
									Raja Rangooski Hotel
								</span>
								<span className='text-black text-lg font-medium'>
									Main Course
								</span>
							</div>
						</div>
						<EllipsisVertical />
					</div>
				</div>
				<div className='px-2'>
					<LayoutConfig
						layout={layout}
						setLayout={setLayout}
						menuLayouts={menuLayouts}
					/>
				</div>
				<div className='min-h-dvh w-full flex flex-col p-2 space-y-6'>
					{layout === "masonry" ? (
						<>
							{Object.entries(categorizedMenu).map(([section, items]) => (
								<div key={section}>
									<h2 className='text-xl font-bold mb-2'>{section}</h2>

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
							))}
						</>
					) : layout === "grid" ? (
						<GridLayout menuItems={categorizedMenu} layout={layout} />
					) : (
						<ListLayout menuItems={categorizedMenu} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Menu;
