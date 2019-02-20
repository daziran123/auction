import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService , Comment} from '../shared/product.service';
import { StartsComponent } from '../starts/starts.component'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  public rating:number =5;
product: Product;
comments: Comment[];
newRating:number = 5;

newComment:string = "";
@Input()
  public readonly:boolean = true;
public isCommentHidden:boolean =true;
// 保存最新的平均等级和内容
  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {

    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
addComment(){
  let comment = new Comment(0,this.product.id,new Date().toISOString(),"someone",this.newRating,this.newComment)
  // 然后推到评论数组里去

  this.comments.unshift(comment);
  
// 重新计算 评星的值,赋值给 Product.rating
  let sum = this.comments.reduce((sum,comment)=> sum+comment.rating,0)
this.product.rating =sum/this.comments.length;
// 评论过之后 操作
 this.newComment=null;
 this.newRating = 5;
 this.isCommentHidden = true;

}


}
