import { Route } from '@angular/router';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/test'
    {path: '', loadChildren: () => import('app/modules/home/home.routes')},
    {path: 'test', loadChildren: () => import('app/modules/test/test.routes')}

];
