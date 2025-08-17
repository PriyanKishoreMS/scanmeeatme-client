import { useEffect, useRef, useState } from "react";
import BottomDrawer from "../components/BottomDrawer";
import FAB from "../components/FAB";
import GridLayout from "../components/Layouts/GridLayout";
import ListLayout from "../components/Layouts/ListLayout";
import MasonryLayout from "../components/Layouts/MasonryLayout";
import LayoutConfig from "../components/MenuConfig";
import Navbar from "../components/Navbar";
import { menuItems } from "../data";

const menuLayouts = [
	{ label: "Masonry", value: "masonry" },
	{ label: "Grid", value: "grid" },
	{ label: "List", value: "list" },
];

const Menu = () => {
	const [layout, setLayout] = useState("masonry");
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("Menu");
	const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
	const [isCustomer, setIsCustomer] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0, rootMargin: "-50% 0px -50% 0px" }
		);

		Object.values(sectionRefs.current).forEach(ref => {
			if (ref) observer.observe(ref);
		});

		return () => {
			observer.disconnect();
		};
	}, [layout]);

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
					<Navbar
						activeSection={activeSection}
						setDrawerOpen={setDrawerOpen}
						drawerOpen={drawerOpen}
					/>
					<div className='px-2'>
						{isCustomer ? (
							<div className='h-60 w-full border-dashed border-purple-500 border-2 bg-gray-200 rounded-xl flex items-center justify-center mt-2'>
								<h1 className='text-center'>
									Image Carousel / Hotel Details <br /> placeholder
								</h1>
							</div>
						) : (
							<LayoutConfig
								layout={layout}
								setLayout={setLayout}
								menuLayouts={menuLayouts}
							/>
						)}
					</div>
					{/* <input
						type='checkbox'
						defaultChecked
						className='toggle'
						onChange={() => setIsCustomer(!isCustomer)}
					/> */}

					<div className='min-h-dvh w-full flex flex-col p-2 space-y-6'>
						{layout === "masonry" ? (
							<MasonryLayout
								menuItems={categorizedMenu}
								layout={layout}
								sectionRefs={sectionRefs}
							/>
						) : layout === "grid" ? (
							<GridLayout
								menuItems={categorizedMenu}
								layout={layout}
								sectionRefs={sectionRefs}
							/>
						) : (
							<ListLayout
								menuItems={categorizedMenu}
								sectionRefs={sectionRefs}
							/>
						)}
					</div>
				</div>
				<FAB categorizedMenu={categorizedMenu} />
			</div>
			<BottomDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
		</>
	);
};

export default Menu;
