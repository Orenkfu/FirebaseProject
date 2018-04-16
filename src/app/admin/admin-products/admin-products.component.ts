import { FilterService } from './../../filter.service';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  filteredProducts: Product[];
  productsSub: Subscription;
  products;
  productSnapshots: Product[];

  


  constructor(private productService: ProductService,
  ) {
    this.products = this.getAll();
    this.productsSub = productService.getAllWKeys().subscribe(
      products => {
        this.filteredProducts = this.productSnapshots = products;
       // this.initializeTable(products);
      });
  

  }
      

    
    log(value){
      let p = this.productService.get(value);
      
      p.snapshotChanges().subscribe(pr=>{
        console.log(pr);
      });
    }
    filter(query: string){
     
     this.filteredProducts = (query) ? this.productSnapshots
     .filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) : this.productSnapshots; 
    }
    getAll(){
      return this.productService.getAll();
    }
    ngOnInit() {
    }
    ngOnDestroy(): void {
     this.productsSub.unsubscribe();
    }
    
  }
  
  