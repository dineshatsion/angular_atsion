import { Routes } from '@angular/router';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { MapComponent } from './map/map.component';
import { TermsComponent } from './terms/terms.component';
import { TextComponent } from './text/text.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';

export const routes: Routes = [
    {
        path: "collaborators",
        component: CollaboratorsComponent
    },
    {
        path: "cookiepolicy",
        component: CookiepolicyComponent
    },
    {
        path: "map",
        component: MapComponent
    },
    {
        path: "terms",
        component: TermsComponent
    },
    {
        path: "text",
        component: TextComponent
    },
    {
        path: "videocarousel",
        component: VideoCarouselComponent
    }

];
