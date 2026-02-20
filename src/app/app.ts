import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Import your new components here

import { NavbarComponent } from './navbar/navbar';
import { ProfileComponent } from './profile/profile';
import { RegisterComponent } from './register/register';




@Component({
  selector: 'app-root',
  standalone: true, // Required for the imports array to work
  imports: [
    RouterOutlet,
    NavbarComponent,   // 2. Add them to this list
    ProfileComponent,
    RegisterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
