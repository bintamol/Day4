import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'districts',component:DistrictsComponent
    },
    {
    path:'contact',component:ContactComponent
    },

    {
        path:'districts/:id',component:SingleComponent
        },
];
