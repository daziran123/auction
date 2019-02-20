import { StartsComponent } from './../starts/starts.component';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public keyword: string;
// 声明formcontrol类型的属性 titlefilter，在input  用formControl 绑定到一起
  public titleFilter: FormControl = new FormControl();

   public imgSrc = 'http://placehold.it/320x150' ;
  constructor(
    private productService: ProductService
  ) { 
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
      value => this.keyword = value
    );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // this.products.push(new Product(9, '第九个商品', 9.99, 2.5, '这是发布的第九个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']))
  }
}
