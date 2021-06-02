import { Component } from '@angular/core';

import {ServicioService} from './services/servicio.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public servicio : ServicioService) { }
  usersArray = this.servicio.users
  deleteUser(user){
    // this.servicio.deleteUser(user)
    const newArray = this.usersArray.filter(deleted => deleted.id != user.id)
    this.usersArray = newArray
    console.log(user)
  }
}
