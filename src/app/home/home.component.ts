import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CardsComponent } from '../cards/cards.component';
import { ChatwithusComponent } from '../chatwithus/chatwithus.component';
import { MapComponent } from '../map/map.component';
import { TextComponent } from '../text/text.component';
import { VideoComponent } from '../video/video.component';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FooterComponent,CardsComponent,ChatwithusComponent,MapComponent,TextComponent,VideoComponent,CollaboratorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
