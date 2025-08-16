import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import BottomDrawer from "../components/BottomDrawer";
import GridLayout from "../components/Layouts/GridLayout";
import ListLayout from "../components/Layouts/ListLayout";
import MasonryLayout from "../components/Layouts/MasonryLayout";
import LayoutConfig from "../components/MenuConfig";
import { menuItems } from "../data";

const menuLayouts = [
	{ label: "Masonry", value: "masonry" },
	{ label: "Grid", value: "grid" },
	{ label: "List", value: "list" },
];

const Menu = () => {
	const [layout, setLayout] = useState("masonry");
	const [drawerOpen, setDrawerOpen] = useState(false);

	const categorizedMenu = menuItems.reduce<Record<string, typeof menuItems>>(
		(acc, item) => {
			if (!acc[item.section]) acc[item.section] = [];
			acc[item.section].push(item);
			return acc;
		},
		{}
	);

	return (
		<>
			<div className='flex w-full justify-center'>
				<div className='md:w-2/5 w-full'>
					<div className='flex h-15 w-full sticky top-0 z-10 bg-white/80 backdrop-blur-xl'>
						<div className='p-2 pr-4 flex items-center justify-between w-full'>
							<div className='flex gap-3 items-center'>
								<ChevronLeft className='text-gray-800' />
								<div className='flex flex-col'>
									<span className='text-gray-700 text-xs font-medium'>
										Raja Rangooski Hotel
									</span>
									<div className='text-black text-lg font-medium flex gap-3 items-center'>
										Main Course
									</div>
								</div>
							</div>
							<div className='flex'>
								<button
									className='flex items-center justify-center gap-2 bg-gray-200 p-1 px-4 rounded-lg border border-gray-300 cursor-pointer'
									onClick={() => setDrawerOpen(!drawerOpen)}
								>
									<span className='text-sm font-medium'>Filter</span>
									<SlidersHorizontal size={12} />
								</button>
								{/* <EllipsisVertical /> */}
							</div>
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
							<MasonryLayout menuItems={categorizedMenu} layout={layout} />
						) : layout === "grid" ? (
							<GridLayout menuItems={categorizedMenu} layout={layout} />
						) : (
							<ListLayout menuItems={categorizedMenu} />
						)}
					</div>
				</div>
			</div>
			<BottomDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
				<div className='p-4'>
					<h2 className='text-lg font-semibold mb-4'>Menu Details</h2>
					<p className='text-gray-600'>
						Here you can add more details about the menu item.
					</p>
				</div>
			</BottomDrawer>
		</>
	);
};

export default Menu;
