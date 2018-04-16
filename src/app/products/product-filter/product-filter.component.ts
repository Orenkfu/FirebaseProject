import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  categories$;
  categorySub$: Subscription;
  @Input('category') category;

  constructor(private categoryService: CategoryService,
  ) {
    this.categorySub$ = categoryService.getAllWKeys()
    .subscribe(categories => this.categories$ = categories);
    
  }
  
  ngOnInit() {
  }
      ngOnDestroy(): void {
this.categorySub$.unsubscribe();
      }

}
