import { Component, OnInit } from '@angular/core';
import { ProductComponent } from './../product/product.component';
import { CarouselComponent } from './../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
