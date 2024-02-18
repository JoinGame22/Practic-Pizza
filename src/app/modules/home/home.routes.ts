import { Routes } from '@angular/router';
import { ChefMainComponent } from 'app/modules/home/chef.component';
import { SignInComponent } from '../sign-in/signin.component';
import { managerComponent } from '../manager/manager.component';

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
        component: managerComponent,
    }
] as Routes;
