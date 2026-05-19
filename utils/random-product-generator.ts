
export class RandomProductGenerator {
    static getRandomProduct<T>(products: T[]): T {
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex];
    }

    static getRandomQuantity(): number {
        return Math.floor(Math.random() * 3) + 1;
    }
}