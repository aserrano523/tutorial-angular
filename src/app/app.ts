/**
 * app.ts
 * Componente raíz de la aplicación.
 * Aquí se configura el router outlet para cargar las diferentes páginas.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,

  // Importamos RouterOutlet para poder usar <router-outlet>
  imports: [RouterOutlet],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
