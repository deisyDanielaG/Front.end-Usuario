import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Services/service.service';
import { Usuario } from '../../Entidad/usuario';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{
  constructor(private router : Router, private service : ServiceService){}
  ngOnInit(): void {
    this.buscar();
  }

  usuario :Usuario = new Usuario();
  buscar(){
    let LoginUsuario = JSON.parse(localStorage.getItem("login")||"[]");
    console.log(LoginUsuario);
    this.usuario.login = LoginUsuario;
    this.service.buscarU(this.usuario).subscribe(data=>{
      this.usuario=data;
    });
  }

  eliminar(){
    this.service.eliminarU(this.usuario).subscribe(data=>{
      //alert("Se eliminó el usuario "+ this.usuario.nombre);
      let accion = localStorage.getItem("accion");
      console.log(accion)
      if(accion==="gestion"){
        this.router.navigate(["gestion"]);
      }
      else{
        this.router.navigate(["listar"]);
      }
    });
  }

}
