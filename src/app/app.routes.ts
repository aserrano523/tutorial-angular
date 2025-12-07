/**
 * app.routes.ts
 * Definición centralizada del sistema de enrutado de la aplicación.
 *
 * Aquí se declaran las rutas principales que permiten navegar entre
 * las diferentes páginas o componentes standalone. Cada entrada del
 * array `routes` asocia una URL interna con el componente que debe
 * renderizarse cuando el usuario accede a esa ruta.
 */

import { Routes } from '@angular/router';
import { Tutorial } from './pages/tutorial/tutorial';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Tutorial },
  { path: 'about', component: About },
];
