import { Routes } from '@angular/router';
import { ChefMainComponent } from 'app/modules/chefPage/chef.component';
import { SignInComponent } from '../sign-in/signin.component';
import { TestComponent } from '../test/test.component';

export default [
    {
        path     : '',
        component: SignInComponent,
    },
    {
        path     : 'chef',
        component: ChefMainComponent,
    },
    {
        path     : 'owner',
        component: TestComponent,
    }
] as Routes;
