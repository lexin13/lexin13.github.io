const productNames: string[] = [
    "Fresh Soap", "Pure Water", "Quick Snack", "Cozy Blanket", "Bright Light",
    "Soft Pillow", "Clean Towel", "Handy Tool", "Smart Pen", "Easy Chair",
    "Cool Fan", "Warm Jacket", "Fast Charger", "Sweet Candy", "Healthy Juice",
    "Safe Lock", "Clear Glass", "Sharp Knife", "Smooth Cream", "Fresh Bread",
    "Light Bulb", "Soft Tissue", "Handy Bag", "Quick Fix", "Smart Watch",
    "Easy Book", "Cool Drink", "Warm Socks", "Fast WiFi", "Sweet Fruit",
    "Healthy Snack", "Safe Box", "Clear Screen", "Sharp Scissors", "Smooth Lotion",
    "Fresh Milk", "Light Lamp", "Soft Blanket", "Handy Gadget", "Quick Meal",
    "Smart Phone", "Easy Tablet", "Cool Breeze", "Warm Gloves", "Fast Internet",
    "Sweet Treat", "Healthy Salad", "Safe Helmet", "Clear Window", "Sharp Razor",
    "Smooth Gel", "Fresh Juice", "Light Candle", "Soft Mattress", "Handy Organizer",
    "Quick Bite", "Smart Speaker", "Easy Planner", "Cool Mist", "Warm Scarf",
    "Fast Delivery", "Sweet Pastry", "Healthy Drink", "Safe Seat", "Clear View",
    "Sharp Blade", "Smooth Oil", "Fresh Vegetables", "Light Shade", "Soft Cushion",
    "Handy Case", "Quick Snack", "Smart Thermostat", "Easy Recipe", "Cool Air",
    "Warm Blanket", "Fast Service", "Sweet Dessert", "Healthy Meal", "Safe Ride",
    "Clear Sound", "Sharp Edge", "Smooth Surface", "Fresh Fruit", "Light Fixture",
    "Soft Fabric", "Handy Toolset", "Quick Repair", "Smart Light", "Easy Guide",
    "Cool Gel", "Warm Hat", "Fast Response", "Sweet Syrup", "Healthy Option",
    "Safe Guard", "Clear Path", "Sharp Point", "Smooth Finish", "Fresh Herbs"
];

const productQuality: string[] = [
    "Superior", "Excellent", "High-grade", "Impeccable", "Luxurious", "Sturdy",
    "Reliable", "Durable", "Exceptional", "Outstanding", "Remarkable", "Flawless",
    "Premium", "Top-notch", "First-rate", "Robust", "Innovative", "Efficient",
    "Versatile", "Elegant"
];

const productCategories: string[] = [
    "Electronics", "Clothing", "Home Appliances", "Books", "Toys",
    "Sports Equipment", "Beauty Products", "Furniture", "Groceries", "Automotive"
];

const getRandomNumber = (min: number, max: number): number =>
    Math.round(Math.random() * (max - min)) + min;

const getRandomQuality = (): string =>
    productQuality[getRandomNumber(0, productQuality.length - 1)];

const getRandomId = (): string => getRandomNumber(1, 99999999).toString();

const getRandomPrice = (): number => getRandomNumber(100, 999999) / 100;

const getRandomProductCategory = (): string =>
    productCategories[getRandomNumber(0, productCategories.length - 1)];

const getRandomProduct = (): string =>
    productNames[getRandomNumber(0, productNames.length - 1)];

const createRandomCategory = (): Category => {
    var id = getRandomId();
    var name = getRandomProductCategory();
    var photo = `https:\\example.com\\categoryphoto${id}.jpg`;
    return { id, name, photo };
}

type Category = {
    id: string;
    name: string;
    photo?: string;
}

type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}

type AbstractOperation = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
}

type Cost = AbstractOperation & { type: 'Cost'; }

type Profit = AbstractOperation & { type: 'Profit'; }

type Operation = Cost | Profit;

export const createRandomProduct = (createdAt: string): Product => {
    var id = getRandomId();
    var name = getRandomProduct();
    var photo = `https:\\example.com\\photo${id}.jpg`;
    var quality = getRandomQuality();
    var desc = `${quality} ${name}`;
    var oldPrice = getRandomPrice();
    var price = getRandomPrice();
    var category = createRandomCategory();
    return { id, name, photo, desc, createdAt, oldPrice, price, category };
};

export const createRandomOperation = (createdAt: string): Operation =>
    getRandomNumber(0, 1) ? createRandomCost(createdAt) : createRandomProfit(createdAt);

const createRandomCost = (createdAt: string): Cost => {
    var id = getRandomId();
    var name = getRandomProduct();
    var quality = getRandomQuality();
    var desc = `${quality} ${name}`;
    var amount = getRandomNumber(1, 10);
    var category = createRandomCategory();
    return { id, name, desc, createdAt, amount, category, type: 'Cost' };
};

const createRandomProfit = (createdAt: string): Profit => {
    var id = getRandomId();
    var name = getRandomProduct();
    var quality = getRandomQuality();
    var desc = `${quality} ${name}`;
    var amount = getRandomNumber(1, 10);
    var category = createRandomCategory();
    return { id, name, desc, createdAt, amount, category, type: 'Profit' };
};