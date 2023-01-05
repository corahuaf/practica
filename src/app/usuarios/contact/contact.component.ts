import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]],
  });

  mensajeValidos: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe((_)=>{
      this.mensajeValidos = false;
    });
  }

  campoNoEsValido(control: string) {
    return (
      this.formulario.controls[control].errors && this.formulario.controls[control].touched
    );
  }

  mostrarMensaje() {
    this.mensajeValidos = true;
  }
}
