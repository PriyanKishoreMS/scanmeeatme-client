import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface NavbarProps {
	activeSection: string;
	setDrawerOpen: (open: boolean) => void;
	drawerOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
	activeSection,
	setDrawerOpen,
	drawerOpen,
}) => {
	const [showNav, setShowNav] = useState(true);

	let navigate = useNavigate();
	// const [lastScrollY, setLastScrollY] = useState(0);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > lastScrollY) {
	// 			// scrolling down
	// 			setShowNav(false);
	// 		} else {
	// 			// scrolling up
	// 			setShowNav(true);
	// 		}
	// 		setLastScrollY(window.scrollY);
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [lastScrollY]);

	return (
		<div
			className={`flex h-15 w-full sticky top-0 z-30 bg-white/80 backdrop-blur-xl transition-transform duration-300 
				${showNav ? "translate-y-0" : "-translate-y-full"}
			`}
		>
			<div className='p-2 pr-4 flex items-center justify-between w-full'>
				<div className='flex gap-3 items-center'>
					<ChevronLeft
						className='text-gray-800'
						onClick={() => navigate("/")}
					/>
					<div className='flex flex-col'>
						<span className='text-gray-700 text-xs font-medium'>
							Raja Rangooski Hotel
						</span>
						<div
							key={activeSection}
							className='text-black text-lg font-medium flex items-center transition-all duration-300 ease-out opacity-0 translate-y-1 animate-fade-in'
						>
							{activeSection || "Menu"}
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
				</div>
			</div>
		</div>
	);
};

export default Navbar;
