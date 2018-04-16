import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  
  products;
  constructor(private db: AngularFireDatabase) { }


  get(productId){
   return this.db.object('products/'+productId);
  }
  
update(product, id){
  return this.db.object('/products/'+id).update(product);
}

create(product){
  return this.db.list('/products').push(product);
}

delete(id){
  return this.db.list('/products/'+id).remove();
}
getAll() {
  return this.db.list('/products');
}
getAllWKeys(){
  return this.db.list('/products').snapshotChanges()
  .map(actions => {
    return actions.map(a => {
      const data = a.payload.val();
      const id = a.payload.key;
      return { id, ...data };
      });
    });

  }
}

