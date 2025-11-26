import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaListComponent } from "./components/datos/tabla-list/tabla-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
