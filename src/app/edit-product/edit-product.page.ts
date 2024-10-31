import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingService } from '../lista.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  item: Item = { id: 0, name: '', quantity: 0 };

  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.item = this.shoppingService.getItems().find(i => i.id === id)!;
  }

  updateItem() {
    this.shoppingService.updateItem(this.item.id, this.item.name, this.item.quantity);
    this.router.navigate(['/home']);
  }
}
