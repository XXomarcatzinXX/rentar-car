import { Injectable, inject } from '@angular/core';
import { Database, ref, push, set, update, remove, onValue } from '@angular/fire/database';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { Observable, of } from 'rxjs';
import { get, child } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class fmdService {
  private db = inject(Database);
  private auth = inject(Auth);
  private uid: string | null = null;

  constructor() {
    onAuthStateChanged(this.auth, user => {
      this.uid = user?.uid ?? null;
    });
  }

  async get(path: string, array: boolean): Promise<any> {
    const user = this.auth.currentUser;

    if (!user) throw new Error('Usuario no autenticado');

    const autoRef = ref(this.db);
    const snapshot = await get(child(autoRef, path));

    if (snapshot.exists()) {
      if (array) {
        const data = snapshot.val();
        return Object.entries(data || {}).map(([key, value]: any) => ({
          id: key,
          ...value
        }));
      } else {
        return snapshot.val()
      }
    } else {
      throw new Error('Auto no encontrado');
    }
  }
  async add(data: string, path: string): Promise<void> {
    if (!this.uid) throw new Error('Usuario no autenticado');
    const references = ref(this.db, `${path}`);
    await push(references, data);
  }

  read(path: string): Observable<any> {
    if (!this.uid) return of([]);
    const autoRef = ref(this.db, `${path}`);

    return new Observable(observer => {
      onValue(autoRef, snapshot => {
        const data = snapshot.val();
        const autos = [];

        for (let key in data) {
          autos.push({ id: key, ...data[key] });
        }

        observer.next(autos);
      });
    });
  }

  async update(id: string, data: any, path: string): Promise<void> {
    if (!this.uid) throw new Error('Usuario no autenticado');
    const autoRef = ref(this.db, `${path}/${id}`);
    await update(autoRef, data);
  }

  async delete(id: string, path: string): Promise<void> {
    if (!this.uid) throw new Error('Usuario no autenticado');
    const autoRef = ref(this.db, `${path}/${id}`);
    await remove(autoRef);
  }
}
