import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-car-register',
  imports: [MatIconModule, MatFormFieldModule, MatButtonModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './car-register.component.html',
  styleUrl: './car-register.component.css'
})
export class CarRegisterComponent {
  carForm: FormGroup;
 constructor(private fb: FormBuilder){
  this.carForm = this.fb.group({
    model: ['', Validators.required],
    placas: ['', Validators.required],
    year: ['', [Validators.required, Validators.min(1900)]],
    tipoSeguro: ['', Validators.required],
    poliza: ['', Validators.required],
  });
 }
 onSubmit() {
  if (this.carForm.valid) {
    console.log('Formulario enviado:', this.carForm.value);
    // Aquí puedes hacer el POST o lógica de guardado
  }
}
}
