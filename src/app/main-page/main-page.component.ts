import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 
  cars:any;
  constructor(){
  this.cars=[
    {name:'a'},
    {name:'b'},
    {name:'d'},
    {name:'c'},
  ]
    
  }
  ngOnInit() {
  }


 

}
