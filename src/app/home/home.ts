import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserInteractionComponent } from '../user-interaction/user-interaction';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UserInteractionComponent], // Required for the links in the card footer
  templateUrl: './home.html'
})
export class HomeComponent {
  // Application Info
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'user-avatar.png';
  developerName: string = 'Jacob';
  systemVersion: number = 1.2;
  isRegOpen: boolean = true;
}
