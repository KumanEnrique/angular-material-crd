import { Injectable } from '@angular/core';
import {User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  users:User[] = []
  constructor() { 
  }
  addUser(name,email,phone){
    let user = new User ()
    user.name = name
    user.email = email
    user.phone = phone
    user.id = this.users.length  + 1
    this.users.push(user)
    console.log(this.users)
  }
  deleteUser(user:User){
    const newArray = this.users.filter(deleted => deleted.id != user.id)
    this.users = newArray
    console.log("users in delete",this.users)
  }
}
