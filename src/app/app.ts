import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void {
    //getUsuarios() es un método que devuelve un array de usuarios, por lo que se puede imprimir en la consola para verificar su contenido
      console.log(this.usuarioService.getUsuarios());
    //addUsuario() es un método que agrega un nuevo usuario al array de usuarios, por lo que se puede llamar con un nuevo objeto de usuario para agregarlo a la lista
      this.usuarioService.addUsuario({ id: 4, nombre: "Special", email: 'special@usuario.dot.com', password: '12345', rol: 'uma' });
    //updateUsuario() es un método que actualiza un usuario existente en el array de usuarios, por lo que se puede llamar con un objeto de usuario actualizado para modificar la información del usuario correspondiente
      this.usuarioService.updateUsuario({ id: 2, nombre: "Cafe Updated", email: 'cafe.updated@usuario.com', password: 'updated123', rol: 'admin' });
    //deleteUsuario() es un método que elimina un usuario del array de usuarios, por lo que se puede llamar con el id de un usuario existente para eliminarlo de la lista
      this.usuarioService.deleteUsuario(3);
    }
  */
}
