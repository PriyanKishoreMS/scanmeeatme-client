import { useState } from "react";
import { useNavigate } from "react-router";

const Root = () => {
	const [restaurantName, setRestaurantName] = useState("");
	let navigate = useNavigate();
	return (
		<>
			{/* marquee start */}
			<div className='absolute z-10  w-full overflow-hidden bg-purple-50/90 backdrop-blur-md py-2'>
				<div className='flex whitespace-nowrap animate-marquee'>
					<span className='mx-4'>⚡ Faster table turnover</span>
					<span className='mx-4'>📊 Powerful analytics</span>
					<span className='mx-4'>🍽️ Seamless dining orders</span>
					<span className='mx-4'>🤖 Automated upselling</span>
					<span className='mx-4'>💸 Higher revenue, lower staff cost</span>
					<span className='mx-4'>📱 One scan, zero hassle</span>

					<span className='mx-4'>⚡ Faster table turnover</span>
					<span className='mx-4'>📊 Powerful analytics</span>
					<span className='mx-4'>🍽️ Seamless dining orders</span>
					<span className='mx-4'>🤖 Automated upselling</span>
					<span className='mx-4'>💸 Higher revenue, lower staff cost</span>
					<span className='mx-4'>📱 One scan, zero hassle</span>
				</div>
			</div>
			{/* marquee end */}
			<div
				className='flex flex-col items-center justify-between p-10 text-black h-dvh gap-2 bg-gradient-to-br from-purple-200 via-pink-50 to-blue-100 bg-cover bg-center'
				style={{ backgroundImage: "url('/resto.webp')" }}
			>
				<span className='absolute w-full h-full bottom-[0.5px] bg-black/40'></span>
				<span></span>
				<div
					className='relative flex gap-4 items-center justify-center w-80 h-70 rounded-xl p-5 text-center flex-col bg-cover bg-center'
					// style={{ backgroundImage: "url('/resto.webp')" }}
				>
					<div className='absolute bg-white/30 h-full w-full rounded-xl backdrop-blur-sm'></div>
					<div className='absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 rounded-tl-xl border-purple-200'></div>
					<div className='absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 rounded-tr-xl border-purple-200'></div>
					<div className='absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 rounded-bl-xl border-purple-200'></div>
					<div className='absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 rounded-br-xl border-purple-200'></div>
					<div className='flex flex-col'>
						<span className='text-3xl font-extrabold z-10  italic text-white'>
							Resto Scan
						</span>
						<span className='font-light z-10 text-gray-100'>
							The future of dining in one scan!
						</span>
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor='restaurant-name' className='floating-label'>
							<input
								type='text'
								className='input rounded-lg'
								placeholder='Enter Restaurant name 😋'
								value={restaurantName}
								onChange={e => setRestaurantName(e.target.value)}
							/>
							<span>Restaurant Name</span>
						</label>
						<button
							type='button'
							className='btn btn-primary z-10 rounded-lg'
							onClick={() =>
								navigate("/restaurant", { state: { name: restaurantName } })
							}
						>
							Go
						</button>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<button className='btn rounded-lg bg-white text-black z-10 border-[#e5e5e5]'>
						<svg
							aria-label='Email icon'
							width='16'
							height='16'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
						>
							<g
								strokeLinejoin='round'
								strokeLinecap='round'
								strokeWidth='2'
								fill='none'
								stroke='black'
							>
								<rect width='20' height='16' x='2' y='4' rx='2'></rect>
								<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
							</g>
						</svg>
						Login with Email
					</button>
					<button className='btn bg-white text-black border-[#e5e5e5] z-10 rounded-lg'>
						<svg
							aria-label='Google logo'
							width='16'
							height='16'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<g>
								<path d='m0 0H512V512H0' fill='#fff'></path>
								<path
									fill='#34a853'
									d='M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341'
								></path>
								<path
									fill='#4285f4'
									d='m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57'
								></path>
								<path
									fill='#fbbc02'
									d='m90 341a208 200 0 010-171l63 49q-12 37 0 73'
								></path>
								<path
									fill='#ea4335'
									d='m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55'
								></path>
							</g>
						</svg>
						Login with Google
					</button>
				</div>
			</div>
		</>
	);
};

export default Root;
