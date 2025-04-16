import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fmdService } from '../../../services/fmd.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-car-registers',
  imports: [MatIconModule, MatIconModule, MatDividerModule, MatButtonModule, DialogComponent],
  templateUrl: './car-registers.component.html',
  styleUrl: './car-register.component.css'
})
export class CarRegistersComponent implements OnInit {


  autos: any;
  readonly dialog = inject(MatDialog);
  constructor(private router: Router, private fmd: fmdService) {

  }
  ngOnInit(): void {
    this.dataCar()
  }

  async dataCar() {
    this.autos = await this.fmd.get('catalogs/carRecords', true)
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

  register() {
    this.router.navigate(['/vehiculos/lista/registroCarro'])
  }

  async openDialog(car: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: car
    });
    const confirm = await dialogRef.afterClosed().toPromise();
    if (confirm) {
      await this.fmd.delete(car.id, 'catalogs/carRecords');
      await this.dataCar();
    }
  }



}
