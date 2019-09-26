import { Component, OnInit } from '@angular/core';
import sampleData from '../assets/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ReaderJson';
  User :any = sampleData;
  listUser: User[] = [];
  ngOnInit(){
    console.log(this.User);
    this.listUser = this.User;
    for(let i= 0;i <this.listUser.length;i++){
      console.log(this.listUser[i].id +" " + this.listUser[i].name);
    }
  }

  
}
export class User{
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}