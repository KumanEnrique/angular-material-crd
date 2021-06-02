import { Component, OnInit } from '@angular/core';

import {ServicioService} from '../../services/servicio.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public servicio : ServicioService) { }

  ngOnInit(): void {
  }

  addUser(name:HTMLInputElement,email:HTMLInputElement,phone:HTMLInputElement){
    console.log("form",name.value,email.value,phone.value)
    this.servicio.addUser(name.value,email.value,phone.value)
    name.value = ""
    name.focus()
    email.value = ""
    phone.value = ""
    return false
  }
}
