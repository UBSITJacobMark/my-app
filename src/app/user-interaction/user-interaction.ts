import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user-interaction.html',
  styleUrl: './user-interaction.css'
})
export class UserInteractionComponent {
  message: string = 'Click the button!';
  clickCount: number = 0;

  onButtonClick(): void {
    this.clickCount++;
    // Corrected with backticks for template literal
    this.message = `Button clicked ${this.clickCount} times!`;
  }

  onMouseEnter(): void {
    console.log('Mouse entered the div!');
    // Add this line to see a visual change on the page
    this.message = 'You are hovering over the area!'; 
  }
  
  onMouseLeave(): void {
    this.message = 'Click the button!';
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Input changed:', target.value);
  }
}
