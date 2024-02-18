import { Route } from '@angular/router';
import { SignInComponent } from './modules/sign-in/signin.component';
import { ChefMainComponent } from './modules/home/chef.component';
import { managerComponent } from './modules/manager/manager.component';
import { ChefAuthGuard } from './modules/Auths/chef-auth-guard';
import { OwnerAuthGuard } from './modules/Auths/owner-auth-guard';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    
    {
        path     : '',
        component: SignInComponent,
    },
    {
        path     : 'chef',
        component: ChefMainComponent,
        canActivate: [ChefAuthGuard] 

    },
    {
        path     : 'owner',
        component: managerComponent,
        canActivate: [OwnerAuthGuard] 
    }  
  

];
