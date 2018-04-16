import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

  constructor() { }
stringFilter(array: string[], filterBy){
  return array.filter(x=> x.toLowerCase().includes(filterBy.toLowerCase()));
}
}
