import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = ["../assets/fruitvariety.jpg", "../assets/berries.jpg", "../assets/grapevine.jpeg"];
 

constructor() { }

  ngOnInit() {
  }

}
