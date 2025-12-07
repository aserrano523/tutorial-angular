/**
 * tutorial.ts
 * Componente standalone que contiene TODO el contenido del tutorial.
 * Este componente actúa como una entrada de blog completa.
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
})
export class Tutorial {
  today = new Date().toLocaleDateString();
}
