import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidad/usuario';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  constructor(private router : Router, private service : ServiceService){}
  usuario !: Usuario[];
  nombre !: String;

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
    localStorage.setItem("accion","tablero");
    this.router.navigate(["editar"]);
  }

  eliminar(usuario: Usuario){
    localStorage.setItem("login", JSON.stringify(usuario.login));
    localStorage.setItem("accion","tablero");
    this.router.navigate(["eliminar"]);
  }

  activos(){
    this.service.listarActivos().subscribe(data=>{
      this.usuario = data;
      console.log("Listar "+JSON.stringify(data));
    });
  }
  inactivos(){
    this.service.listarInactivos().subscribe(data=>{
      this.usuario = data;
      console.log("Listar "+JSON.stringify(data));
    });
  }
  revocados(){
    this.service.listarRevocados().subscribe(data=>{
      this.usuario = data;
      console.log("Listar "+JSON.stringify(data));
    });
  }
  porNombre(nombre : String){
    console.log("Recibido: "+nombre);
    this.service.listarporNombre(nombre).subscribe(data=>{
      this.usuario = data;
      console.log("Listar "+JSON.stringify(data));
    });

  }
}
