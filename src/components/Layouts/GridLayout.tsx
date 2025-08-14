import { menuItems } from "../../data";
import Card from "./Card";

interface LayoutConfigProps {
	menuItems: Record<string, typeof menuItems>;
	layout: string;
}

const GridLayout: React.FC<LayoutConfigProps> = ({ menuItems, layout }) => (
	<div className='flex flex-col w-full'>
		{Object.entries(menuItems).map(([section, items]) => (
			<div key={section} className='flex flex-col mb-6'>
				<h2 className='text-xl font-bold mb-2'>{section}</h2>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
					{items.map((item, idx) => (
						<Card key={idx} item={item} layout={layout} />
					))}
				</div>
			</div>
		))}
	</div>
);

export default GridLayout;
