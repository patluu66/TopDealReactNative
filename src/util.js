export const priceDisplay = (priceInCents) => {
	const price = priceInCents/100;
	return "$" + price;
};