import { menuItems } from "../../data";
import { NonVegIcon, VegIcon } from "../IsVeg";

const Card: React.FC<{ item: (typeof menuItems)[0]; layout: string }> = ({
	item,
	layout,
}) => (
	<div className='card image-full'>
		<img
			src={item.image}
			alt={item.name}
			className={`w-full ${
				layout == "masonry" ? "min-h-54" : "h-64 md:h-96"
			} object-cover rounded-xl`}
		/>
		<div className='flex h-full items-end'>
			<div className='backdrop-blur-md flex justify-between items-center rounded-b-xl px-2 py-1 bg-stone-700/40 w-full'>
				<div className='flex gap-[2px] flex-col'>
					<h2 className='text-sm text-white'>{item.name}</h2>
					<p className='text-white text-sm font-semibold'>
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
	</div>
);

export default Card;
