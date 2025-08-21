import { InfoIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { SiSwiggy, SiWhatsapp, SiZomato } from "react-icons/si";
import { useLocation } from "react-router";
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
	const [isCustomer, setIsCustomer] = useState(true);
	const location = useLocation();
	let { name } = location.state || {};
	name = name.charAt(0).toUpperCase() + name.slice(1);

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
						restaurantName={name}
						activeSection={activeSection}
						setDrawerOpen={setDrawerOpen}
						drawerOpen={drawerOpen}
					/>
					<div className='px-2'>
						{isCustomer ? (
							<div className='w-full bg-base-100 flex-col border border-base-300 rounded-lg shadow-sm flex p-4 mt-2 gap-4'>
								<div>
									<div className='text-xl font-bold flex gap-2 items-center'>
										<span>{name || "My Restaurant"}</span>
										<InfoIcon size={15} className='text-gray-500' />
									</div>
									<div>
										<span className='text-sm font-light'>
											Mugalivakkam, Porur, Chennai
										</span>
									</div>
								</div>
								<div className='flex gap-2'>
									Google Reviews:{" "}
									<div className='flex items-center gap-1'>
										<span className='font-bold'>4.5</span>
										<div className='flex'>
											<FaStar className='text-yellow-500' />
											<FaStar className='text-yellow-500' />
											<FaStar className='text-yellow-500' />
											<FaStar className='text-yellow-500' />
											<FaStarHalf className='text-yellow-500' />
										</div>
										<span>(217)</span>
									</div>
								</div>
								<div className='flex justify-between'>
									<button
										type='button'
										className='btn border border-[#FC8019]/50 bg-[#FFF4EC] text-[#FC8019] rounded-xl hover:bg-[#FFE0CC]'
									>
										<SiSwiggy />
										Swiggy
									</button>

									<button
										type='button'
										className='btn border border-[#E23744]/50 bg-[#FDECEE] rounded-xl text-[#E23744] hover:bg-[#F9D5DA]'
									>
										<SiZomato size={60} />
									</button>

									<button
										type='button'
										className='btn border border-[#25D366]/50 rounded-xl bg-[#E7F9EF] text-[#25D366] hover:bg-[#D2F3E0]'
									>
										<SiWhatsapp />
										Whatsapp
									</button>
								</div>
								<div>
									<button
										type='button'
										className='btn btn-primary w-full rounded-xl'
									>
										{" "}
										Provide Orders
									</button>
								</div>
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
			<BottomDrawer
				setIsCustomer={setIsCustomer}
				isOpen={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				isCustomer={isCustomer}
			/>
		</>
	);
};

export default Menu;
