import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // CRITICAL IMPORT
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html'
})
export class RegisterComponent {
  // Object to hold form data
  user = {
    email: '',
    password: '',
    level: 'beginner',
    bio: '',
    gender: 'male',
    acceptTerms: false
  };

  onSubmit() {
    console.log('Form Submitted!', this.user);
    alert('Registration Successful for: ' + this.user.email);
  }
}
