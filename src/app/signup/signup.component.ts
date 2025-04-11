import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  mobile: string = '';
  age: number | null = null;
  gender: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) {}

  onSignup() {
    if (!this.name || !this.email || !this.mobile || !this.age || !this.gender || !this.password || !this.confirmPassword) {
      alert('Please fill all fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const userData = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      age: this.age,
      gender: this.gender,
      password: this.password
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', userData).subscribe(response => {
      console.log('Signup Success:', response);
      alert('Signup Successful!');
      this.resetForm();
    }, error => {
      console.error('Signup Failed:', error);
      alert('Signup failed. Try again.');
    });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.age = null;
    this.gender = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
