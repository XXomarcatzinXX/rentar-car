import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  isSidebarHovered = false;
  openSubmenus: Record<string, any> = {
    vehiculos: false,
    conductores: false
  };  
  constructor(private authService: AuthService){
  }
  logout(){
    this.authService.logout()
  }
  toggleSubMenu(menu: string) {
    this.openSubmenus[menu] = !this.openSubmenus[menu];
  }
}
