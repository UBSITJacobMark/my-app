import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html'
})
export class ProfileComponent {
  user = {
    firstName: 'Mark LLoyd ',
    lastName: 'Jacob',
    location: 'Baguio City, Philippines',
    email: '202021414@s.ubaguio.edu',
    phone: '(+63) 912-345-6789',
    bio: 'Passionate about building clean and responsive user interfaces with Angular and Bootstrap.'
  };
}
