import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { MapComponent } from './map/map.component';
import { TermsComponent } from './terms/terms.component';
import { TextComponent } from './text/text.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CollaboratorsComponent, CookiepolicyComponent, MapComponent, TermsComponent, TextComponent, VideoCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
