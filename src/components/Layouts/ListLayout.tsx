import type React from "react";
import { menuItems } from "../../data";

interface LayoutConfigProps {
	menuItems: Record<string, typeof menuItems>;
}

const ListLayout: React.FC<LayoutConfigProps> = ({ menuItems }) => {
	return (
		<div className='flex flex-col w-full'>
			{Object.entries(menuItems).map(([section, items]) => (
				<div key={section} className='flex flex-col mb-6 gap-2'>
					<h2 className='text-xl font-bold mb-2'>{section}</h2>

					{items.map((item, idx) => (
						<div
							key={idx}
							className='flex items-center justify-between w-full h-full border rounded-lg border-gray-300'
						>
							<img
								src={item.image}
								alt={item.name}
								className='w-36 h-36 rounded-lg'
							/>
							<div className='flex flex-col max-w-3/5 justify-between h-full p-4'>
								<div className='flex flex-col w-full items-end'>
									<h3 className='text-sm text-gray-800'>{item.name}</h3>
									<p className='text-black text-sm font-semibold'>
										₹{item.price.toFixed(2)}
									</p>
								</div>
								<span className='text-xs text-end text-gray-600'>
									{item.description}
								</span>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default ListLayout;
