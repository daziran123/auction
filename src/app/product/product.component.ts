import { StartsComponent } from './../starts/starts.component';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private products: Product[];

   public imgSrc = 'http://placehold.it/320x150' ;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // this.products.push(new Product(9, '第九个商品', 9.99, 2.5, '这是发布的第九个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']))
  }
}
