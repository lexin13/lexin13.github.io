import { AccountService, UserTypeDiscount, ProductType, UserType } from './AccountService';
import Database from './Database';

jest.mock('./Database', () => {
  return jest.fn().mockImplementation(() => ({
        save: jest.fn(),
        load: jest.fn(),
    })
  );
});

describe('AccountService', () => {
    let accountService: AccountService;
    let database: jest.Mocked<Database>;


    beforeEach(() => {
        database = new Database() as jest.Mocked<Database>;
        accountService = new AccountService(database);
    });   

    afterEach(() => {
        jest.clearAllMocks();
      });

    it('should correctly return default user discounts', () => {
        expect(accountService.getUserDiscounts()).toEqual({ Standard: 0, Premium: 0, Gold: 0, Free: 0 });
    });

    it('should correctly set user discounts', () => {
        accountService.setUserDiscounts({ Standard: 11, Premium: 21, Gold: 31, Free: 1 });
        expect(accountService.getUserDiscounts()).toEqual({ Standard: 11, Premium: 21, Gold: 31, Free: 1 });
    });

    it('should correctly set one user discount', () => {
        accountService.setUserDiscounts({ Premium: 21 });
        expect(accountService.getUserDiscounts()).toEqual({ Standard: 0, Premium: 21, Gold: 0, Free: 0 });
    });

    it ('should throw error if user discount is negative', () => {    
        expect(() => accountService.setUserDiscounts({ Standard: -1, Premium: 21, Gold: 31, Free: 1 })).toThrow();
    });

    it ('should throw error if user discount more than 100 percent', () => {    
        expect(() => accountService.setUserDiscounts({ Standard: 101, Premium: 21, Gold: 31, Free: 1 })).toThrow();
    });

    it('should correctly return user discount', () => {
        accountService.setUserDiscounts({ Standard: 11, Premium: 21, Gold: 31, Free: 1 });
        expect(accountService.getUserDiscount('Premium')).toEqual(21);
    });

    it('should correctly set product discount', () => {
        accountService.setProductDiscount('Car', 'Free', 4);
        expect(accountService.getProductDiscount('Car', 'Free')).toEqual(4);
    });

    it('should throw error if product discount is negative', () => {    
        expect(() => accountService.setProductDiscount('Car', 'Free', -1)).toThrow();
    });

    it('should throw error if product discount more than 100 percent', () => {    
        expect(() => accountService.setProductDiscount('Car', 'Free', 101)).toThrow();
    });

    it('should return the correct discount for specific product types and users', () => {
        accountService.setUserDiscounts({ Standard: 10, Premium: 20, Gold: 30, Free: 0 });
        accountService.setProductDiscount('Car', 'Gold', 5);
        accountService.setProductDiscount('Food', 'Standard', 15);

        expect(accountService.getDiscount('Car', 'Gold')).toBe(35);
        expect(accountService.getDiscount('Food', 'Standard')).toBe(25);
        expect(accountService.getDiscount('Toy', 'Premium')).toBe(20);
    });

    it('should not return discount more than 100 percent', () => {
        accountService.setUserDiscounts({Gold: 30});
        accountService.setProductDiscount('Car', 'Gold', 80);
        expect(accountService.getDiscount('Car', 'Gold')).toBe(100);
    });

    it('should save discounts to the database', async () => {
        accountService.setUserDiscounts({ Standard: 10, Premium: 20, Gold: 30, Free: 0 });
        accountService.setProductDiscount('Car', 'Gold', 5);
        accountService.setProductDiscount('Food', 'Standard', 15);

        await accountService.saveToDatabase();
        expect(database.save).toHaveBeenNthCalledWith<[string, UserTypeDiscount]>(
            1, 'user_discounts', { Standard: 10, Premium: 20, Gold: 30, Free: 0 }
        );
        expect(database.save).toHaveBeenNthCalledWith<[string, [ProductType, UserType, number][]]>(
            2,'product_discounts', [['Car', 'Gold', 5], ['Food', 'Standard', 15]]
        );
    });

    it('should load discounts from the database', async () => { 
        const mockUserTypeDiscounts: UserTypeDiscount = { Standard: 10, Premium: 20, Gold: 30, Free: 0 };
        const mockProductTypeDiscounts: [ProductType, UserType, number][] = [['Car', 'Standard', 15]];

        (database.load as jest.Mock)
        .mockResolvedValueOnce(mockUserTypeDiscounts)
        .mockResolvedValueOnce(mockProductTypeDiscounts);

        await accountService.loadFromDatabase();
        
        expect(accountService.getUserDiscounts()).toEqual(mockUserTypeDiscounts);
        expect(accountService.getProductDiscount('Car', 'Standard')).toBe(15);
    });
});