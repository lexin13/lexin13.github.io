import { AccountService } from './AccountService';


describe('AccountService', () => {
    let accountService: AccountService;
    let writeMock: jest.SpyInstance;
    let readMock: jest.SpyInstance;

    beforeEach(() => {
        accountService = new AccountService({ Standard: 0.1, Premium: 0.2, Gold: 0.3 });
        writeMock = jest.spyOn(accountService, 'saveToDatabase').mockImplementation(() => Promise.resolve());
        readMock = jest.spyOn(accountService, 'loadFromDatabase').mockImplementation(() => Promise.resolve(null));        
    });   

    afterEach(() => {
        jest.clearAllMocks();
      });

    it('should correctly return default user discounts', () => {
        expect(accountService.getUserDiscounts()).toEqual({ Standard: 0.1, Premium: 0.2, Gold: 0.3, Free: 0 });
    });

    it('should correctly set user discounts', () => {
        accountService.setUserDiscounts({ Standard: 0.11, Premium: 0.21, Gold: 0.31, Free: 0.01 });
        expect(accountService.getUserDiscounts()).toEqual({ Standard: 0.11, Premium: 0.21, Gold: 0.31, Free: 0.01 });
    });

    it('should correctly set one user discount', () => {
        accountService.setUserDiscounts({ Premium: 0.21 });
        expect(accountService.getUserDiscounts()).toEqual({ Standard: 0.1, Premium: 0.21, Gold: 0.3, Free: 0 });
    });

    it('should correctly set product discount', () => {
        accountService.setProductDiscount('Car', 'Free', 0.04);
        expect(accountService.getProductDiscount('Car', 'Free')).toEqual(0.04);
    });

    it('should return the correct discount for specific product types and users', () => {
        accountService.setProductDiscount('Car', 'Gold', 0.05);
        accountService.setProductDiscount('Food', 'Standard', 0.15);

        expect(accountService.getDiscount('Car', 'Gold')).toBe(0.35);
        expect(accountService.getDiscount('Food', 'Standard')).toBe(0.25);
    });
});