import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "lavacar-8b52c", appId: "1:29821938442:web:b93f4f4f222649db82e8f3", storageBucket: "lavacar-8b52c.firebasestorage.app", apiKey: "AIzaSyDJ_VgRIPyT2HWExssyE15kcRx-vyjrQYE", authDomain: "lavacar-8b52c.firebaseapp.com", messagingSenderId: "29821938442", measurementId: "G-PZQ5NNWDBN" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage())]
};
