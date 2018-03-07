import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login-page/login/login.component';
import { LandingComponent } from './landingpage/landing/landing.component';



//Prototype Team - Golden Layout
const routes: Routes = [
    {
        path: '',
        component:LandingComponent ,
        pathMatch: 'full',
       // canActivate: [AuthGuardService]
    },
    
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{initialNavigation: true});