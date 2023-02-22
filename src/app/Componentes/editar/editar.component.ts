import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Services/service.service';
import { Usuario } from '../../Entidad/usuario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
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

  editar(){
    this.service.editarU(this.usuario).subscribe(data=>{
      //alert("Se edito el usuario "+ this.usuario.login);
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
