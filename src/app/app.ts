import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { NavbarComponent } from './navbar/navbar';
import { ProfileComponent } from './profile/profile';
import { RegisterComponent } from './register/register';




@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    NavbarComponent,  
    ProfileComponent,
    RegisterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
