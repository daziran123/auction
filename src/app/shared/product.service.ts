import { Injectable } from '@angular/core';

@Injectable()
// { providedIn: 'root'}
export class ProductService {
  private products: Product[] = [
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


  private comments: Comment[] = [
    new Comment(1, 1, '2019-1-27 14:25:20', '翠花', 3 , '非常好'),
    new Comment(2, 1, '2019-1-27 15:25:20', '小丽', 2 , '非常好'),
    new Comment(3, 1, '2019-1-27 16:25:20', '小玲', 3 , '非常好'),
    new Comment(4, 2, '2019-1-27 17:25:20', '翠花', 4 , '非常好'),
    new Comment(5, 2, '2019-1-27 18:25:20', '翠花', 3 , '非常好'),
    new Comment(6, 3, '2019-1-27 19:25:20', '翠花', 1 , '非常好'),

  ];
  constructor() {}
  getProducts(): Product[] {
    return this.products;
    // 把数组返回去
  }

  getAllCategories(): string[] {
return ["电子","IT","图书"]
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
    // 获取商品的评论信息
  }
}


export  class  Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
