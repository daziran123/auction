import { StartsComponent } from './../starts/starts.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   public products: Array<Product>;
   public imgSrc = 'http://placehold.it/320x150' ;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 1.5, '这是发布的第一个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 2.5, '这是发布的第二个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(3, '第三个商品', 3.99, 3.5, '这是发布的第三个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(4, '第四个商品', 4.99, 4.5, '这是发布的第四个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(5, '第五个商品', 5.99, 3.5, '这是发布的第五个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(6, '第六个商品', 6.99, 2.5, '这是发布的第六个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(7, '第七个商品', 7.99, 3.5, '这是发布的第七个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(8, '第八个商品', 8.99, 4.5, '这是发布的第八个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
      new Product(9, '第九个商品', 9.99, 2.5, '这是发布的第九个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']),
    ];
    // this.products.push(new Product(9, '第九个商品', 9.99, 2.5, '这是发布的第九个商品，这个商品好吃又不贵便宜又实惠', ['电子产品', '硬件设备']))
  }
}
 export class  Product {
   constructor(
     public id: number,
     public title: string,
     public price: number,
     public rating: number,
     public desc: string,
     public categories: Array<string>
   ) {}
 }
