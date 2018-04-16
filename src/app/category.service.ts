import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
getAll(){
  return this.db.list('/categories');
}
getAllWKeys() {
return  this.db.list('/categories').snapshotChanges()
    .map(actions => {
      return actions.map(a => {
       const data = a.payload.val();
       const id = a.payload.key;
       return {id, ...data};
      });
    });
}
}


