import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    amount(): number {
      return this._items.reduce((a, b) => a + b.price, 0);
    }

    discountedAmount(discount: number): number {
      return this.amount() * (100 - discount) / 100;
    }

    remove(id: number): void {
      const index = this._items.findIndex((element) => {
        return id == element.id;
        
      });
      this._items.splice(index, 1);
  }
}
