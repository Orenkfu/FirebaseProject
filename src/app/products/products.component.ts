import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {
    productService.getAllWKeys().switchMap(products => {
      this.filteredProducts = this.products = products
      return route.queryParamMap;
    }).subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ? this.products.filter(p =>
        p.category === this.category) : this.products;
    });
  }

}
