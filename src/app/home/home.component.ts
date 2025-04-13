import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CardsComponent } from '../cards/cards.component';
import { ChatwithusComponent } from '../chatwithus/chatwithus.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FooterComponent,CardsComponent,ChatwithusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
