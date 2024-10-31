import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../lista.service';
import { Router } from '@angular/router';
import { Item } from '../item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[] = [];

  constructor(private shoppingService: ShoppingService, private router: Router) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.items = this.shoppingService.getItems();
  }

  removeItem(id: number) {
    this.shoppingService.removeItem(id);
    this.loadItems();  // Atualiza a lista após remover o item
  }

  editItem(item: Item) {
    // Navega para a página de edição passando o ID do item
    this.router.navigate(['/edit-product', item.id]);
  }
}
