import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  constructor(private cartService: ShoppingCartService) { }


@Input('product') product: Product[]; 
@Input('show-actions') showActions = true;

addToCart(product: Product) { 
  let cartId = localStorage.getItem('cartId');
  if (!cartId){

  }
}


 
}
