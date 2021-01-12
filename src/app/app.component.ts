import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CamStore';


  ngOnInit() {  
    
  }

  myFunction(){
    var elmnt = document.getElementById("myDIV");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    console.log("Hori" + x);
    console.log("V " + y);
  }
}
