import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  create(): any {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }
  constructor(private db: AngularFireDatabase) { }

}
