import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../model/usuario.model';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-usuario.html',
  styleUrl: './form-usuario.css',
})
export class FormUsuario implements OnInit {
  @Input() usuario: Usuario | null = null;
  @Output() save = new EventEmitter<Usuario>();
  @Output() cancel = new EventEmitter<void>();

  formData: Usuario = { id: 0, nombre: '', email: '', password: '', rol: 'usuario' };

  ngOnInit() {
    if (this.usuario) {
      this.formData = { ...this.usuario };
    }
  }

  onSubmit() {
    this.save.emit(this.formData);
  }

  onCancel() {
    this.cancel.emit();
  }
}
