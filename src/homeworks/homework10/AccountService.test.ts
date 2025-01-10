import { AccountService } from './AccountService';

describe('AccountService', () => {
    let accountService: AccountService;

    beforeEach(() => {
        accountService = new AccountService();
    });

    it('should return the correct general discount for each user type', () => {
        expect(accountService.getDiscount('Standard', 'Car')).toBe(0.1);
        expect(accountService.getDiscount('Premium', 'Car')).toBe(0.2);
        expect(accountService.getDiscount('Gold', 'Car')).toBe(0.3);
        expect(accountService.getDiscount('Free', 'Car')).toBe(0);
    });

    it('should return the correct discount for specific product types and users', () => {
        expect(accountService.getDiscount('Gold', 'Car')).toBe(0.35); // 30% user discount + 5% product discount
        expect(accountService.getDiscount('Premium', 'Toy')).toBe(0.2); // 20% user discount
        expect(accountService.getDiscount('Standard', 'Food')).toBe(0.1); // 10% user discount
    });

    it('should correctly sum the general and product-specific discounts', () => {
        expect(accountService.getDiscount('Gold', 'Car')).toBe(0.35); // 30% user discount + 5% product discount
        expect(accountService.getDiscount('Standard', 'Car')).toBe(0.1); // 10% user discount
    });
    //------------------------------------

    it('should return the correct discount for a Standard user on a Car', () => {
        const discount = accountService.getDiscount('Standard', 'Car');
        expect(discount).toBe(0.1); // Предположим, что скидка для Standard пользователя на Car составляет 10%
    });

    it('should return the correct discount for a Premium user on a Toy', () => {
        const discount = accountService.getDiscount('Premium', 'Toy');
        expect(discount).toBe(0.2); // Предположим, что скидка для Premium пользователя на Toy составляет 20%
    });

    it('should return the correct discount for a Gold user on Food', () => {
        const discount = accountService.getDiscount('Gold', 'Food');
        expect(discount).toBe(0.3); // Предположим, что скидка для Gold пользователя на Food составляет 30%
    });

    it('should return the correct discount for a Free user on a Car', () => {
        const discount = accountService.getDiscount('Free', 'Car');
        expect(discount).toBe(0); // Предположим, что скидка для Free пользователя на Car составляет 0%
    });

    it('should sum the user discount and product discount correctly', () => {
        const discount = accountService.getDiscount('Gold', 'Car');
        expect(discount).toBe(0.35); // Предположим, что скидка для Gold пользователя на Car составляет 30%, а для Car 5%
    });
});