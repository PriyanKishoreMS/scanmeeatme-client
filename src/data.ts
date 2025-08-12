const categories: Record<string, number> = {
	biryani: 81,
	burger: 87,
	"butter-chicken": 22,
	dessert: 36,
	dosa: 83,
	idly: 77,
	pasta: 34,
	pizza: 95,
	rice: 35,
	samosa: 22,
};

const getRandomImage = () => {
	const categoryNames = Object.keys(categories);
	const randomCategory =
		categoryNames[Math.floor(Math.random() * categoryNames.length)];
	const maxImages = categories[randomCategory];
	const randomImageNumber = Math.floor(Math.random() * maxImages) + 1;
	return `https://foodish-api.com/images/${randomCategory}/${randomCategory}${randomImageNumber}.jpg`;
};

// Example usage
console.log(getRandomImage());

export const menuItems = [
	{
		name: "Chicken Biriyani",
		description:
			"Aromatic basmati rice layered with marinated chicken and spices.",
		price: 120.0,
		section: "Main Course",
		image: getRandomImage(),
	},
	{
		name: "Paneer Tikka",
		description:
			"Grilled paneer marinated in spices and served with mint chutney.",
		price: 100.0,
		section: "Appetizers",
		image: getRandomImage(),
	},
	{
		name: "Gulab Jamun",
		description: "Soft and spongy milk-based sweets soaked in sugar syrup.",
		price: 80.0,
		section: "Desserts",
		image: getRandomImage(),
	},
	{
		name: "Mutton Rogan Josh",
		description:
			"Tender lamb cooked in a rich, aromatic gravy with Kashmiri spices.",
		price: 180.0,
		section: "Main Course",
		image: getRandomImage(),
	},
	{
		name: "Veg Spring Rolls",
		description:
			"Crispy rolls stuffed with seasoned vegetables and served with chili sauce.",
		price: 90.0,
		section: "Appetizers",
		image: getRandomImage(),
	},
	{
		name: "Fish Curry",
		description:
			"Fresh fish simmered in a spicy and tangy coconut-based curry.",
		price: 150.0,
		section: "Main Course",
		image: getRandomImage(),
	},
	{
		name: "Masala Dosa",
		description:
			"Crispy rice crepe filled with spiced potato filling, served with chutneys.",
		price: 70.0,
		section: "Snacks",
		image: getRandomImage(),
	},
	{
		name: "Chocolate Brownie",
		description:
			"Rich chocolate brownie served with a scoop of vanilla ice cream.",
		price: 110.0,
		section: "Desserts",
		image: getRandomImage(),
	},
	{
		name: "Butter Naan",
		description: "Soft Indian flatbread brushed with butter.",
		price: 40.0,
		section: "Breads",
		image: getRandomImage(),
	},
	{
		name: "Tandoori Chicken",
		description:
			"Chicken marinated in yogurt and spices, grilled in a clay oven.",
		price: 140.0,
		section: "Appetizers",
		image: getRandomImage(),
	},
	{
		name: "Pav Bhaji",
		description: "Spicy mashed vegetables served with buttered bread rolls.",
		price: 85.0,
		section: "Snacks",
		image: getRandomImage(),
	},
	{
		name: "Prawn Masala",
		description: "Juicy prawns cooked in a spicy onion-tomato gravy.",
		price: 160.0,
		section: "Main Course",
		image: getRandomImage(),
	},
	{
		name: "Mango Lassi",
		description: "Refreshing yogurt-based mango drink.",
		price: 60.0,
		section: "Beverages",
		image: getRandomImage(),
	},
	{
		name: "Paneer Butter Masala",
		description: "Paneer cubes simmered in a creamy tomato-based gravy.",
		price: 130.0,
		section: "Main Course",
		image: getRandomImage(),
	},
	{
		name: "Veg Pulao",
		description:
			"Fragrant basmati rice cooked with vegetables and mild spices.",
		price: 100.0,
		section: "Main Course",
		image: getRandomImage(),
	},
	{
		name: "Chicken Manchurian",
		description: "Fried chicken balls tossed in a tangy Indo-Chinese sauce.",
		price: 140.0,
		section: "Appetizers",
		image: getRandomImage(),
	},
	{
		name: "Hakka Noodles",
		description: "Stir-fried noodles with vegetables and soy sauce.",
		price: 120.0,
		section: "Main Course",
		image: getRandomImage(),
	},
	{
		name: "Samosa",
		description: "Crispy pastry filled with spiced potatoes and peas.",
		price: 25.0,
		section: "Snacks",
		image: getRandomImage(),
	},
	{
		name: "Falooda",
		description:
			"Layered dessert with ice cream, sweet basil seeds, and vermicelli.",
		price: 90.0,
		section: "Desserts",
		image: getRandomImage(),
	},
	{
		name: "Chicken Soup",
		description: "Light and comforting soup with chicken and vegetables.",
		price: 70.0,
		section: "Soups",
		image: getRandomImage(),
	},
	{
		name: "Lemon Iced Tea",
		description: "Chilled tea with lemon and mint.",
		price: 50.0,
		section: "Beverages",
		image: getRandomImage(),
	},
	{
		name: "Mysore Pak",
		description:
			"Rich South Indian sweet made from gram flour, sugar, and ghee.",
		price: 100.0,
		section: "Desserts",
		image: getRandomImage(),
	},
	{
		name: "Chili Paneer",
		description:
			"Paneer cubes tossed in a spicy chili sauce with capsicum and onions.",
		price: 130.0,
		section: "Appetizers",
		image: getRandomImage(),
	},
];
