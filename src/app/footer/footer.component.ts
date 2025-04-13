import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChatwithusComponent } from '../chatwithus/chatwithus.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
