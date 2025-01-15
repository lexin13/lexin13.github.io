import Database from './Database';

type UserType = 'Standard' | 'Premium' | 'Gold' | 'Free';
type ProductType = 'Car' | 'Toy' | 'Food';

type UserTypeDiscount = Record<UserType, number>;
//type ProductTypeDiscount = Record<ProductType, UserTypeDiscount>;

export class AccountService {
    private userDiscounts: UserTypeDiscount = {
        Standard: 0,
        Premium: 0,
        Gold: 0,
        Free: 0,
    };

    private productDiscounts = new Map<ProductType, Map<UserType, number>>;

    constructor(userDiscounts: Partial<UserTypeDiscount>) {
        this.setUserDiscounts(userDiscounts);
    }

    public setUserDiscounts(userDiscounts: Partial<UserTypeDiscount>): void {
        this.userDiscounts = { ...this.userDiscounts, ...userDiscounts };
    }

    public getUserDiscounts(): UserTypeDiscount {
        return this.userDiscounts;
    }

    public getUserDiscount(userType: UserType): number {
        return this.userDiscounts[userType] || 0;
    }

    public getProductDiscount(productType: ProductType, userType: UserType): number {
        return this.productDiscounts.get(productType)?.get(userType) || 0;
    }

    public setProductDiscount(productType: ProductType, userType: UserType, discount: number): void {
        if (!this.productDiscounts.has(productType)) {
            this.productDiscounts.set(productType, new Map<UserType, number>());
        }
        this.productDiscounts.get(productType)!.set(userType, discount);
    }

    public getDiscount(productType: ProductType, userType: UserType): number {
        const userDiscount = this.getUserDiscount(userType);
        const productDiscount = this.getProductDiscount(productType, userType);
        return userDiscount + productDiscount;
    }

    public async saveToDatabase(): Promise<void> {
        await Database.save('user_discounts', this.userDiscounts);
        await Database.save('product_discounts', Array.from(this.productDiscounts.entries()));
    }

    public async loadFromDatabase(): Promise<void> {
        const userTypeDiscounts = await Database.load<UserTypeDiscount>('user_type_discounts');
        const productTypeDiscounts = await Database.load<[ProductType, UserType, number][]>('product_type_discounts');

        if (userTypeDiscounts) {
            this.userDiscounts = userTypeDiscounts;
        }

        if (productTypeDiscounts) {
            this.productDiscounts = new Map<ProductType, Map<UserType, number>>;
            productTypeDiscounts.forEach(([productType, userType, discount]) => this.setProductDiscount(productType, userType, discount));
        }
    }

}