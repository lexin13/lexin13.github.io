type UserType = 'Standard' | 'Premium' | 'Gold' | 'Free';
type ProductType = 'Car' | 'Toy' | 'Food';

import Database from './Database';

export class AccountService {
    private userDiscounts: Record<UserType, number> = {
        Standard: 0,
        Premium: 0,
        Gold: 0,
        Free: 0,
    };
    
    constructor(userDiscounts: Partial<Record<UserType, number>>){
        this.setUserDiscounts(userDiscounts);
    }    

    private productDiscounts = new Map<ProductType, Map<UserType, number>>;

    public setUserDiscounts(userDiscounts: Partial<Record<UserType, number>>): void {
        this.userDiscounts = { ...this.userDiscounts, ...userDiscounts };
    }

    public getUserDiscounts(): Record<UserType, number> {
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
        const userDiscounts = await Database.load<Record<UserType, number>>('user_discounts');
        const productDiscounts = await Database.load<[ProductType, [UserType, number][]][]>('product_discounts');

        if (userDiscounts) {
            this.userDiscounts = userDiscounts;
        }

        if (productDiscounts) {
            this.productDiscounts = new Map(
                productDiscounts.map(([productType, discounts]) => [productType, new Map(discounts)])
            );
        }
    }

}