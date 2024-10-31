import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private items: Item[] = [];
  private storageKey = 'shoppingList';

  constructor() {
    this.loadItems();
  }

  getItems(): Item[] {
    return this.items;
  }

  addItem(name: string, quantity: number): void {
    const newItem: Item = {
      id: Date.now(),
      name,
      quantity,
    };
    this.items.push(newItem);
    this.saveItems();
  }

  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    this.saveItems();
  }

  updateItem(id: number, name: string, quantity: number): void {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.name = name;
      item.quantity = quantity;
      this.saveItems();
    }
  }

  private saveItems(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  private loadItems(): void {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }
}
