export default class Database {
    public async save<T>(table: string, data: T): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    public async load<T>(table: string): Promise<T | null> {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    }
}