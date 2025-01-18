import Database from './Database';

export type UserType = 'Standard' | 'Premium' | 'Gold' | 'Free';
export type ProductType = 'Car' | 'Toy' | 'Food';

export type UserTypeDiscount = Record<UserType, number>;
//type ProductTypeDiscount = Record<ProductType, UserTypeDiscount>;

export class AccountService {
    private userDiscounts: UserTypeDiscount = {
        Standard: 0,
        Premium: 0,
        Gold: 0,
        Free: 0,
    };
    
    private productDiscounts = new Map<ProductType, Map<UserType, number>>;
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public setUserDiscounts(userDiscounts: Partial<UserTypeDiscount>): void {
        if (Object.values(userDiscounts).some((discount) => discount < 0)) {
            throw new Error('Discount cannot be negative');
        }

        if (Object.values(userDiscounts).some((discount) => discount > 100)) {
            throw new Error('Discount cannot be more than 100');
        }

        this.userDiscounts = { ...this.userDiscounts, ...userDiscounts };
    }

    public getUserDiscounts(): UserTypeDiscount {
        return this.userDiscounts;
    }

    public getUserDiscount(userType: UserType): number {
        return this.userDiscounts[userType];
    }

    public getProductDiscount(productType: ProductType, userType: UserType): number {
        return this.productDiscounts.get(productType)?.get(userType) || 0;
    }

    public setProductDiscount(productType: ProductType, userType: UserType, discount: number): void {
        if (discount < 0) {
            throw new Error('Discount cannot be negative');
        }

        if (discount > 100) {
            throw new Error('Discount cannot be more than 100');
        }   

        if (!this.productDiscounts.has(productType)) {
            this.productDiscounts.set(productType, new Map<UserType, number>());
        }
        this.productDiscounts.get(productType)!.set(userType, discount);
    }

    public getDiscount(productType: ProductType, userType: UserType): number {
        const userDiscount = this.getUserDiscount(userType);
        const productDiscount = this.getProductDiscount(productType, userType);
        return Math.min(userDiscount + productDiscount, 100);
    }

    public async saveToDatabase(): Promise<void> {
        await this.database.save('user_discounts', this.userDiscounts);

        const productDiscounts: [ProductType, UserType, number][] = [];
        this.productDiscounts.forEach((discounts, productType) => {
            discounts.forEach((discount, userType) => {
                productDiscounts.push([productType, userType, discount]);
            });
        });
        await this.database.save('product_discounts', productDiscounts);
    }

    public async loadFromDatabase(): Promise<void> {
        const userTypeDiscounts = await this.database.load<UserTypeDiscount>('user_type_discounts');
        const productTypeDiscounts = await this.database.load<[ProductType, UserType, number][]>('product_type_discounts');

        if (userTypeDiscounts) {
            this.userDiscounts = userTypeDiscounts;
        }

        if (productTypeDiscounts) {
            this.productDiscounts = new Map<ProductType, Map<UserType, number>>;
            productTypeDiscounts.forEach(([productType, userType, discount]) => this.setProductDiscount(productType, userType, discount));
        }
    }

}