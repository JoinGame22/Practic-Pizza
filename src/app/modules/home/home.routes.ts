import { Routes } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/home/home.component';
import { SignInComponent } from '../sign-in/signin.component';

export default [
    {
        path     : '',
        component: SignInComponent,
    }
] as Routes;
