import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { CookiepolicyComponent } from './cookiepolicy/cookiepolicy.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //  default to home
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
{ path:'privacypolicy',component:PrivacypolicyComponent},
{ path: 'cookiepolicy', component: CookiepolicyComponent },
{ path: 'terms', component: TermsComponent },
];
