import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'belajar-angular';

  firstName:string = "Aries Dimas"
  lastName:string = "Yudhistira"

  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"

  constructor() {
    console.log("hello world")

    this.title = "Belajar Angular"
  }

  hello(value:string) { 
    console.log(value)
  }
}
