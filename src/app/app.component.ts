import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { FooterComponent } from './footer/footer.component';
import { ChatwithusComponent } from './chatwithus/chatwithus.component';
import { CommonModule } from '@angular/common';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { MapComponent } from './map/map.component';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Navbar1Component,ChatwithusComponent, CollaboratorsComponent, MapComponent, TextComponent, VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
