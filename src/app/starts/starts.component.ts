import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.scss']
})
export class StartsComponent implements OnInit {
   @Input()
  public rating = 0;
  public starts: boolean[];
  constructor() { }

  ngOnInit() {
    this.starts = [];
    for ( let i = 1; i <= 5; i++) {
      this.starts.push(i > this.rating);
    }

    // this.starts = [true, true, true, true, true ];
  }

}
