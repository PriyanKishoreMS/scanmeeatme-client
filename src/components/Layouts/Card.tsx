import { menuItems } from "../../data";
import { NonVegIcon, VegIcon } from "../IsVeg";

const Card: React.FC<{ item: (typeof menuItems)[0]; layout: string }> = ({
	item,
	layout,
}) => (
	<>
		{layout === "list" ? (
			<ListCard item={item} />
		) : (
			<div className='border border-gray-300 bg-gray-50 rounded-2xl overflow-hidden'>
				<img
					src={item.image}
					alt={item.name}
					className={`w-full ${
						layout === "masonry" ? "min-h-54" : "h-40 w-40"
					} object-cover rounded-2xl p-2`}
				/>
				<div className='flex px-2 pb-2 justify-between items-center'>
					<div className='flex gap-[2px] flex-col'>
						<h2 className='text-sm text-black'>{item.name}</h2>
						<p className='text-black text-sm font-semibold'>
							₹{item.price.toFixed(2)}
						</p>
					</div>
					{item.veg ? (
						<VegIcon className='ml-1' />
					) : (
						<NonVegIcon className='ml-1' />
					)}
				</div>
			</div>
		)}
	</>
);

const ListCard: React.FC<{ item: (typeof menuItems)[0] }> = ({ item }) => {
	return (
		<div className='flex items-center justify-between w-full border rounded-2xl bg-gray-50 border-gray-300 h-36'>
			<img
				src={item.image}
				alt={item.name}
				className='w-36 h-36 rounded-2xl p-2 object-cover'
			/>
			<div className='flex flex-col w-1/2 justify-between h-full p-4'>
				<div className='flex flex-col w-full items-end h-full'>
					<span className='flex items-center'>
						<h3 className='text-sm text-gray-800 text-right'>{item.name}</h3>
						{item.veg ? (
							<VegIcon className='ml-1' />
						) : (
							<NonVegIcon className='ml-1' />
						)}
					</span>
					<p className='text-black text-sm font-semibold'>
						₹{item.price.toFixed(2)}
					</p>
				</div>
				<span className='text-xs text-end text-gray-600'>
					{item.description}
				</span>
			</div>
		</div>
	);
};

export default Card;
