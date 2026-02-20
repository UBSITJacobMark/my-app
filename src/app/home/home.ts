import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common'; // Fix: Import from @angular/common
import { UserInteractionComponent } from '../user-interaction/user-interaction';


@Component({
  selector: 'app-home', // Added comma
  standalone: true,     // Added comma
  imports: [RouterLink, UserInteractionComponent, DatePipe], // Added comma
  templateUrl: './home.html', // Added comma
  styleUrl: './home.css'      // No comma needed for the last item
})

export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'user-avatar.png';
  isRegOpen: boolean = true;
  isHighlighted: boolean = true;
  currentDate: Date = new Date();

}
