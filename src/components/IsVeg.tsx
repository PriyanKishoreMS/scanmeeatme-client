import React from "react";

type MarkProps = {
	/** Pixel size of the outer square (default: 20) */
	size?: number;
	/** Extra classes for the outer square */
	className?: string;
	/** Tailwind class to override border color (e.g., "border-green-500") */
	borderColorClass?: string;
	/** Tailwind class to override inner shape color (e.g., "bg-emerald-600" or "text-red-600") */
	shapeColorClass?: string;
	/** Tailwind class to override rounding (e.g., "rounded-md", "rounded-xl") */
	roundedClass?: string;
	/** Tailwind class to override border width (e.g., "border") */
	borderWidthClass?: string;
};

const cx = (...classes: Array<string | undefined | false>) =>
	classes.filter(Boolean).join(" ");

export const VegIcon: React.FC<MarkProps> = ({
	size = 20,
	className,
	borderColorClass,
	shapeColorClass,
	roundedClass,
	borderWidthClass,
}) => {
	const outer = cx(
		"inline-grid place-items-center aspect-square",
		roundedClass ?? "rounded-md",
		borderWidthClass ?? "border-2",
		borderColorClass ?? "border-green-600",
		className
	);

	return (
		<div className={outer} style={{ width: size, height: size }}>
			<div
				className={cx(
					"w-[60%] h-[60%] rounded-full",
					shapeColorClass ?? "bg-green-600"
				)}
			/>
		</div>
	);
};

export const NonVegIcon: React.FC<MarkProps> = ({
	size = 20,
	className,
	borderColorClass,
	shapeColorClass,
	roundedClass,
	borderWidthClass,
}) => {
	const outer = cx(
		"inline-grid place-items-center aspect-square",
		roundedClass ?? "rounded-md",
		borderWidthClass ?? "border-2",
		borderColorClass ?? "border-red-600",
		className
	);

	const shapeColor = shapeColorClass ?? "text-red-600";

	return (
		<div className={outer} style={{ width: size, height: size }}>
			<svg
				className={cx("w-[60%] h-[60%]", shapeColor)}
				viewBox='0 0 100 100'
				aria-hidden
			>
				<polygon points='50,10 90,90 10,90' fill='currentColor' />
			</svg>
		</div>
	);
};
