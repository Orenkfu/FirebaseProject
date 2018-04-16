import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

categories$;
product = {};
getSub$: Observable<{}>;
id;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = categoryService.getAllWKeys();

    this.id= this.route.snapshot.paramMap.get('id');
    if (this.id) productService.get(this.id).valueChanges().take(1)
    .subscribe(p=> this.product = p);
  }
log(){
  console.log(this.product);
}

toListPage(){
  this.router.navigate(['/admin/products']);

}
delete(){
  if (!confirm('Are you sure you want to delete this product?')) return;

  this.productService.delete(this.id);
  this.toListPage();
}
  save(product) {
    if(this.id){ 
      this.productService.update(product, this.id);
    }else{
      this.productService.create(product);
          }
this.toListPage();

//for (let property in product){
 // console.log(property);
//}
   }
}
