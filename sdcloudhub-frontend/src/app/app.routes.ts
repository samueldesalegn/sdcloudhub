import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.HomeComponent),
  },

  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then((m) => m.ServicesComponent),
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products').then((m) => m.Products),
  },

  {
    path: 'training',
    loadComponent: () =>
      import('./pages/training/training').then((m) => m.TrainingComponent),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then((m) => m.ContactComponent),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
