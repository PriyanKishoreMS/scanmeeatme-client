import { EllipsisVertical } from "lucide-react";
import { menuItems } from "../../data";

const Card: React.FC<{ item: (typeof menuItems)[0]; layout: string }> = ({
	item,
	layout,
}) => (
	<div className='card image-full'>
		<img
			src={item.image}
			alt={item.name}
			className={`w-full ${
				layout == "masonry" ? "min-h-54" : "h-64"
			} object-cover rounded-xl`}
		/>
		<div className='flex h-full items-end'>
			<div className='backdrop-blur-md flex justify-between items-center rounded-b-xl px-2 py-1 bg-stone-700/40 w-full'>
				<div>
					<h2 className='text-md font-bold'>{item.name}</h2>
					<p className='text-white text-sm font-extrabold'>
						₹{item.price.toFixed(2)}
					</p>
				</div>
				<EllipsisVertical />
			</div>
		</div>
	</div>
);

export default Card;
