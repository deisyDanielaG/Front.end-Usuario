import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Entidad/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url ='http://localhost:8015/Usuario/'

  listar(){
    return this.http.get<Usuario[]>(this.url + 'listar');
  }
  listarActivos(){
    return this.http.get<Usuario[]>(this.url + 'listarActivos');
  }
  listarInactivos(){
    return this.http.get<Usuario[]>(this.url + 'listarInactivos');
  }
  listarRevocados(){
    return this.http.get<Usuario[]>(this.url + 'listarRevocados');
  }
  listarporNombre(nombre : String){
    return this.http.get<Usuario[]>(this.url + 'buscarPorNombre/'+ nombre);
  }

  buscarU(usuario : Usuario){
    return this.http.post<Usuario>(this.url + 'buscar', usuario);
  }

  guardarU(usuario : Usuario){
    return this.http.post<Usuario>(this.url + 'guardar', usuario);
  }

  editarU(usuario : Usuario){
    return this.http.post<Usuario>(this.url + 'editar', usuario);
  }

  eliminarU(usuario : Usuario){
    return this.http.post<Usuario>(this.url + 'eliminar', usuario);
  }
}
