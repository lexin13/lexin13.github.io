type UserType = 'Standard' | 'Premium' | 'Gold' | 'Free';
type ProductType = 'Car' | 'Toy' | 'Food';

interface Discount {
    userType: UserType;
    productType: ProductType;
    discount: number;
}

export class AccountService {
    private userDiscounts: Record<UserType, number> = {
        Standard: 0.1,
        Premium: 0.2,
        Gold: 0.3,
        Free: 0,
    };

    private productDiscounts: Record<ProductType, Record<UserType, number>> = {
        Car: { Standard: 0, Premium: 0, Gold: 0, Free: 0 },
        Toy: { Standard: 0, Premium: 0, Gold: 0, Free: 0 },
        Food: { Standard: 0, Premium: 0, Gold: 0, Free: 0 },
    };

    public setUserDiscounts(userDiscounts: Partial<Record<UserType, number>>): void {
        this.userDiscounts = { ...this.userDiscounts, ...userDiscounts };
    }

    public getUserDiscounts(): Record<UserType, number> {
        return this.userDiscounts;
    }

    public getDiscount(userType: UserType, productType: ProductType): number {
        const userDiscount = this.userDiscounts[userType] || 0;
        const productDiscount = this.productDiscounts[productType][userType] || 0;
        return userDiscount + productDiscount;
    }
}