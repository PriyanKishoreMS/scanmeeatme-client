import { BookHeart, X } from "lucide-react";
import { useState } from "react";
import { menuItems } from "../data";

interface FABProps {
	categorizedMenu: Record<string, typeof menuItems>;
}

const FAB: React.FC<FABProps> = ({ categorizedMenu }) => {
	const [open, setOpen] = useState(false);

	const handleScrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
			setOpen(false);
		}
	};

	return (
		<div className='fixed bottom-3 right-3 z-10'>
			<button
				onClick={() => setOpen(prev => !prev)}
				className='p-4 rounded-xl shadow-lg bg-purple-500/70 backdrop-blur-xl text-white hover:bg-blue-700 transition'
			>
				{open ? <X size={24} /> : <BookHeart size={24} />}
			</button>

			{open && (
				<div className='absolute bottom-16 right-0 bg-gray-200/60 backdrop-blur-lg rounded-lg shadow-xl border border-gray-400 w-60 max-h-80 overflow-y-auto p-4 animate-in fade-in zoom-in duration-200'>
					<h3 className='text-lg font-semibold mb-2'>Categories</h3>
					<ul className='space-y-2'>
						{Object.entries(categorizedMenu).map(([section, items]) => (
							<li
								key={section}
								className='flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded'
								onClick={() => handleScrollTo(section)}
							>
								<span>{section}</span>
								<span className='text-sm text-gray-500'>{items.length}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default FAB;
