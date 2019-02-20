import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.scss']
})
export class StartsComponent implements OnInit,OnChanges {
   @Input()
  public rating = 0;

  @Output()
  public ratingChange:EventEmitter<number> =new EventEmitter();


  public starts: boolean[];

  @Input()
  public readonly:boolean = true;
  constructor() { }

  ngOnInit() {
    this.starts = [];
    for ( let i = 1; i <= 5; i++) {
      this.starts.push(i > this.rating);
    }
  }
    // this.starts = [true, true, true, true, true ];
  
  clickStar(index:number){
    this.rating = index+1;
    this.ngOnInit();
    this.ratingChange.emit(this.rating)

// 用上边定义的 Output 输出属性发射事件
  }

  ngOnChanges(){
    this.starts = [];
    for ( let i = 1; i <= 5; i++) {
      this.starts.push(i > this.rating);
  }
}
}