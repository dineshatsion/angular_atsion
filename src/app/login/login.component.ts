import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Please enter email and password.');
      return;
    }

    // Example login API call
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        console.log('API Response:', response);
        alert('Login Successful!');
        this.email = '';
        this.password = '';
      },
      error => {
        console.error('Login Failed:', error);
        alert('Invalid Credentials');
      }
    );
  }
}
