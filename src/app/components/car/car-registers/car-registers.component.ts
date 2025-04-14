import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { fmdService } from '../../../services/fmd.service';

@Component({
  selector: 'app-car-registers',
  imports: [MatIconModule],
  templateUrl: './car-registers.component.html',
  styleUrl: './car-register.component.css'
})
export class CarRegistersComponent implements OnInit {


  autos: any;

  constructor(private router: Router, private fmd: fmdService) {

  }
  ngOnInit(): void {
    this.dataCar()
  }

  async dataCar() {
    await this.fmd.get('catalogs/carRecords', true).then((data) => {
      this.autos = data
    });
  }

  editarAuto(car: any): void {
    if (car && car.id) {
      console.log('Editando carro con ID:', car.id);
      this.router.navigate(['/vehiculos/lista/registroCarro', car.id]);
      this.autos = car
    } else {
      console.error('Carro no válido para editar:', car);
    }
  }


  async eliminarAuto(car: any) {
    if (car) {
      await this.fmd.delete(car.id, 'catalogs/carRecords');
      await this.dataCar();
    }
  }
  

  register() {
    this.router.navigate(['/vehiculos/lista/registroCarro'])
  }

}
