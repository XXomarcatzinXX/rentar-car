import { Component, inject, OnInit } from '@angular/core';
import { Database, push, ref } from '@angular/fire/database';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { fmdService } from '../../../services/fmd.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-car-register',
  imports: [MatIconModule, MatFormFieldModule, MatButtonModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './car-register.component.html',
  styleUrl: './car-register.component.css'
})
export class CarRegisterComponent implements OnInit {
  carForm: FormGroup;
  private db = inject(Database)
  car: any
  constructor(private fb: FormBuilder, private fmd: fmdService, private router: Router, private url: ActivatedRoute) {
    this.carForm = this.fb.group({
      model: ['', Validators.required],
      placas: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900)]],
      tipoSeguro: ['', Validators.required],
      poliza: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.dataCar()
  }


 async dataCar() {
    const id = this.url.snapshot.paramMap.get('id');
    const data = await this.fmd.get('catalogs/carRecords/' + id, false);
    this.car = data
    console.log(this.car)
  }





  async onSubmit() {
    if (this.carForm.valid) {
      const formData = this.carForm.value;
      try {
        this.fmd.add(formData, 'catalogs/carRecords'),
          this.router.navigate(['vehiculos/lista'])
      } catch (error) {
        console.error('Error al guardar en Firebase:', error);
      }
    }
  }
}
