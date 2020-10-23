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
      let sum: number = 0;
      this._items.forEach(element => {
        sum += element.price;
      });
      return sum;
    }

    discountedAmount(discount: number): number {
      let sum: number = 0;
      this._items.forEach(element => {
        sum += element.price;
      });
      return sum * (100 - discount) / 100;
    }

    remove(id: number): void {
      const index: number = this._items.findIndex((element) => {
        return id == element.id;
        
      });
      this._items.splice(index, 1);
  }
}
