import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Entidad/usuario';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit{

  constructor(private router : Router, private service : ServiceService){}
  usuario !: Usuario[];

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe(data=>{
      this.usuario = data;
      console.log("Listar "+JSON.stringify(data));
    });
  }

  editar(usuario: Usuario){
    localStorage.setItem("login", JSON.stringify(usuario.login));
    localStorage.setItem("accion","gestion");
    this.router.navigate(["editar"]);
  }

  eliminar(usuario: Usuario){
    localStorage.setItem("login",  JSON.stringify(usuario.login));
    localStorage.setItem("accion","gestion");
    this.router.navigate(["eliminar"]);
  }

  guardar(){
    this.router.navigate(['guardar']);
  }
}
