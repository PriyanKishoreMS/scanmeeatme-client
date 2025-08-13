import { ChevronLeft, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Card from "../components/Layouts/Card";
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

	return (
		<div>
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
			<div className='min-h-dvh w-full flex justify-center p-2'>
				{layout == "masonry" ? (
					<Masonry
						breakpointCols={breakpoints}
						className='flex gap-2'
						columnClassName='space-y-2'
					>
						{menuItems.map((item, idx) => (
							<Card key={idx} item={item} layout={layout} />
						))}
					</Masonry>
				) : layout == "grid" ? (
					<div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
						{menuItems.map((item, idx) => (
							<Card key={idx} item={item} layout={layout} />
						))}
					</div>
				) : (
					<div>
						<h2 className='text-center text-black text-2xl font-bold'>
							Zomato kinda layout
						</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default Menu;
