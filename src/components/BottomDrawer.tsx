import type { ReactNode } from "react";

interface BottomDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	height?: string; // e.g. "70%", "80vh"
	className?: string;
	children?: ReactNode;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
	isOpen,
	onClose,
	title = "Bottom Drawer",
	height = "70%",
	className = "",
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
				className={`fixed z-30 bottom-0 left-0 right-0 bg-base-200 rounded-t-2xl shadow-lg transform transition-transform duration-300 ease-in-out 
          ${
						isOpen ? "translate-y-0" : "translate-y-full"
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
			</div>
		</>
	);
};

export default BottomDrawer;
