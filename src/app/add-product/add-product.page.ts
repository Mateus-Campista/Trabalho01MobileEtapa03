import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService } from '../lista.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {
  newItemName = '';
  newItemQuantity = 1;

  constructor(private shoppingService: ShoppingService, private router: Router) {}

  addItem() {
    if (this.newItemName.trim()) {
      this.shoppingService.addItem(this.newItemName, this.newItemQuantity);
      this.router.navigate(['/home']);  // Volta para a lista de produtos
    }
  }
}
