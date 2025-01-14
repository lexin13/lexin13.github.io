export class Database {
    public static async save<T>(table: string, data: T): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    public static async load<T>(table: string): Promise<T | null> {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
}