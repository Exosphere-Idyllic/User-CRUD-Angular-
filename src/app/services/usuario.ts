import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private usuario: Usuario[] = [
    { id: 1, nombre: "Meisho Doto", email: 'jem@dot.com', password: '123456', rol: 'user' },
    { id: 2, nombre: "Cafe", email: 'jem@dot.com', password: '123456', rol: 'user' },
    { id: 3, nombre: "João", email: 'jem@dot.com', password: '123456', rol: 'user' }
  ];

  // Método para obtener todos los usuarios
  getUsuarios(): Usuario[] {
    return this.usuario;
  }

  // Método para agregar un nuevo usuario
  addUsuario(usuario: Usuario): void {
    const newId = this.usuario.length > 0 ? Math.max(...this.usuario.map(u => u.id)) + 1 : 1;
    usuario.id = newId;
    this.usuario.push(usuario);
  }
  
  // Método para actualizar un usuario existente
  updateUsuario(updatedUsuario: Usuario): void {
    const index = this.usuario.findIndex(u => u.id === updatedUsuario.id);
    if (index !== -1) {
      this.usuario[index] = updatedUsuario;
    }
  }

  // Método para eliminar un usuario por ID
  deleteUsuario(id: number): void {
    this.usuario = this.usuario.filter(u => u.id !== id);
  }
}
