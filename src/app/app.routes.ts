import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { CarRegisterComponent } from './components/car/car-registers/car-register.component';
import { CarRegistersComponent } from './components/car/car-registers/car-registers.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'login', component: LoginComponent },
          { path: 'vehiculos/lista', component: CarRegistersComponent},
          { path: 'vehiculos/lista/registroCarro', component: CarRegisterComponent },
          { path: 'home', component: HomeComponent },
        ]
      },
      { path: '**', redirectTo: 'dashboard' }
    ];
    
