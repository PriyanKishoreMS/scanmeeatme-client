import { useState } from "react";
import Masonry from "react-masonry-css";
import Card from "../components/Layouts/Card";
import { menuItems } from "../data";

const Menu = () => {
	const [layout, setLayout] = useState("masonry");

	const breakpoints = {
		default: 3,
		640: 2,
	};

	return (
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
				<div className='p-2 grid grid-cols-2 gap-2'>
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
	);
};

export default Menu;
