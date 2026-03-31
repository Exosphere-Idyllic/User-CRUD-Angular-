import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormUsuario } from '../form-usuario/form-usuario';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../services/usuario';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, FormUsuario],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSelecionado: Usuario | null = null;
  mostrarFormulario: boolean = false;
  
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  // Método para cargar usuarios (simulado)
  cargarUsuarios() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  // Método para abrir el formulario de creación de usuario
  openForm(): void {
    this.usuarioSelecionado = null;
    this.mostrarFormulario = true;
  }
  // Método para abrir el formulario de edición de usuario
  editUsuario(usuario: Usuario): void {
    this.usuarioSelecionado = usuario;
    this.mostrarFormulario = true;
  }

  //guardar usuario (simulado)
  saveUsuario(usuario: Usuario): void {
    if (this.usuarioSelecionado) {
      // Editar usuario existente
      this.usuarioService.updateUsuario(usuario);
    } else {
      // Crear nuevo usuario
      this.usuarioService.addUsuario(usuario);
    }
    this.cargarUsuarios();
    this.mostrarFormulario = false;
  }
  // Método para eliminar un usuario
  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id);
    this.cargarUsuarios();
  }  
  // Método para cerrar el formulario
  closeForm(): void {
    this.mostrarFormulario = false;
  }
}
