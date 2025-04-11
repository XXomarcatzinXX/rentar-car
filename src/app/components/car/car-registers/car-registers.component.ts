import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-registers',
  imports: [MatIconModule],
  templateUrl: './car-registers.component.html',
  styleUrl: './car-register.component.css'
})
export class CarRegistersComponent {
  autos = [
    {
      model: 'Nissan Versa',
      placas: 'ABC-123',
      year: 2020,
      tipoSeguro: 'Cobertura Amplia',
      poliza: 'AXA-789456'
    },
    {
      model: 'Chevrolet Aveo',
      placas: 'XYZ-987',
      year: 2019,
      tipoSeguro: 'Limitado',
      poliza: 'GNP-456321'
    }
    // ...más autos
  ];

  constructor(private router:Router){

  }

  editarAuto(auto: any) {
    // lógica para editar
  }

  eliminarAuto(auto: any) {
    // lógica para eliminar
  }
  addCar() {

  }

  register(){
    console.log('entro por aqui')
    this.router.navigate(['/vehiculos/lista/registroCarro'])
  }

}
