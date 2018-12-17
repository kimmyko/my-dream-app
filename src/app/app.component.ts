import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["apple", "orange", "banana"];
  newItem = "";
  pushItem = function(){
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index){
      this.items.splice(index, 1);
  }


  // title = 'my-dream-app';
  // obj = {
  //   id: "1",
  //   name: "Kimmy"
  // }
  // arr = ["apple", "orange", "banana"];
  // isTrue = true;
  // myName = "Kimmy";
}
