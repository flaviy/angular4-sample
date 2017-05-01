import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'app works!';
  isTrue:boolean = true;
  items = ['Angular', 'React', 'Underscore'];
  day = new Date(1992, 3, 8);
  arr = [3,5,78,2,34,2];

  newItem = "";
  pushItem(){
    if(this.newItem != ""  && !(this.items.includes(this.newItem))){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  removeItem(index){
    this.items.splice(index, 1);
  }
}