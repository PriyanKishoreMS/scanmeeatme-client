import { CircleStar, Egg } from "lucide-react";
import type { ReactNode } from "react";
import { NonVegIcon, VegIcon } from "./IsVeg";

interface BottomDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	height?: string; // e.g. "70%", "80vh"
	className?: string;
	children?: ReactNode;
	setIsCustomer: React.Dispatch<React.SetStateAction<boolean>>;
	isCustomer: boolean;
}

const sortby = [
	{
		value: "price_asc",
		label: "Price - low to high",
	},
	{
		value: "price_desc",
		label: "Price - high to low",
	},
	{
		value: "newest",
		label: "Newest First",
	},
];

const veg_preference = [
	{
		value: "veg",
		label: "Vegetarian",
	},
	{
		value: "nonveg",
		label: "Non-Vegetarian",
	},
	{
		value: "eggeterian",
		label: "Eggeterian",
	},
];

const top_picks = [{ value: "bestsellers", label: "Bestsellers" }];

const BottomDrawer: React.FC<BottomDrawerProps> = ({
	isOpen,
	onClose,
	title = "Filter",
	height = "70%",
	className = "",
	setIsCustomer,
	isCustomer,
	// children,
}) => {
	return (
		<>
			<div
				className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
					isOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				onClick={onClose}
			/>

			<div
				className={`fixed z-30 top-0 left-0 right-0 bg-base-200 rounded-b-2xl shadow-lg transform transition-transform duration-300 ease-in-out 
          ${
						isOpen ? "translate-y-0" : "-translate-y-full"
					} overflow-y-auto p-4 ${className}`}
				style={{ maxHeight: height }}
			>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-lg font-bold'>{title}</h2>
					<button onClick={onClose} className='btn btn-sm btn-circle'>
						✕
					</button>
				</div>

				{/* {children} */}
				<div className='w-full items-center'>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-md'>Sort</h1>
						<div className='gap-2 flex flex-wrap'>
							{sortby.map(option => (
								<span
									key={option.value}
									className='px-2 p-1 border border-gray-200 bg-gray-100 rounded-lg'
								>
									{option.label}
								</span>
							))}
						</div>
					</div>

					<div className='divider'></div>

					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-md'>Veg/Non-veg preference</h1>
						<div className='gap-2 flex flex-wrap'>
							{veg_preference.map(option => (
								<span
									key={option.value}
									className='px-2 flex items-center gap-2 p-1 border border-gray-200 bg-gray-100 rounded-lg'
								>
									{option.value == "veg" && <VegIcon />}
									{option.value == "nonveg" && <NonVegIcon />}
									{option.value == "eggeterian" && <Egg size={18} />}
									{option.label}
								</span>
							))}
						</div>
					</div>

					<div className='divider'></div>

					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-md'>Top Picks</h1>
						<div className='gap-2 flex flex-wrap'>
							{top_picks.map(option => (
								<span
									key={option.value}
									className='px-2 p-1 border border-gray-200 bg-gray-100 flex items-center gap-2 rounded-lg'
								>
									{option.value == "bestsellers" && (
										<CircleStar size={18} className='text-yellow-500' />
									)}
									{option.label}
								</span>
							))}
						</div>
					</div>

					<div className='divider'></div>

					<div className='flex  gap-2'>
						<span className='text-xs'>Toggle Customer/Resaurant View</span>
						<input
							type='checkbox'
							checked={isCustomer}
							onChange={() => setIsCustomer(!isCustomer)}
							onClick={onClose}
							className='toggle toggle-xs'
						/>
						<span className='text-xs'>(Dev mode)</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default BottomDrawer;
