import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData = new BehaviorSubject<User | null>(null);

  constructor(private auth: Auth, private router: Router) { }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.userData.next(result.user);
        this.router.navigate(['/dashboard']);
      });
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.userData.next(null);
      this.router.navigate(['/login']);
    });
  }

  get currentUser$() {
    return this.userData.asObservable();
  }
}
