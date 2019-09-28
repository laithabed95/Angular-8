import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { category } from '../category';

@Component({
  selector: 'app-catigory',
  templateUrl: './catigory.component.html',
  styleUrls: ['./catigory.component.css']
})
export class CatigoryComponent implements OnInit {

  cat:category=new category(0,"Unknown");

  constructor(private service:MyserviceService) { }

  ngOnInit() {
    this.service.sayHello("Category");
  }
  onSubmit(){
    console.log(this.cat);
  }

}
