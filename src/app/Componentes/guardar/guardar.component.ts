import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Services/service.service';
import { Usuario } from '../../Entidad/usuario';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit{

  constructor (private router : Router, private service : ServiceService){}
  ngOnInit(): void {}

  usuario : Usuario = new Usuario();

  guardar(){
    this.service.guardarU(this.usuario).subscribe(data=>{
      //alert("Se guardo el usuario "+ this.usuario.nombre);
      this.router.navigate(["gestion"]);
    });
  }
}
