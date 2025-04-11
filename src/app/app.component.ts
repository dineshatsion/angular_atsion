import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar1Component } from './navbar1/navbar1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Navbar1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
