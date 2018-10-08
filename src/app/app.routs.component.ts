import { ManagePlaceCategoryComponent } from './components/admin/manage-place-category/manage-place-category.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { PlaceInfoComponent } from './components/place-info/place-info.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPlaceComponent } from './components/admin/admin-place/admin-place.component';
import { AuthGurdService } from './service/auth-gurd.service';
import { PlaceFormComponent } from './components/admin/place-form/place-form.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ViewPlacesComponent } from './components/view-places/view-places.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    {
        path: 'admin/admin-panel',
        component: AdminPanelComponent,
        canActivate: [AuthGurdService],
        children: [
            { path: 'manage-places', component: AdminPlaceComponent },
            { path: 'manage-places/add-place', component: PlaceFormComponent },
            { path: 'manage-places/add-place/:id', component: PlaceFormComponent },
            { path: 'manage-places-category', component: ManagePlaceCategoryComponent }
        ]
    },
    {
        path: 'user/dashbord',
        component: UserPanelComponent,
        children: [
            { path: 'add-place', component: PlaceFormComponent }
        ]
    },
    { path: 'view-places', component: ViewPlacesComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'view-places/place-info/:id', component: PlaceInfoComponent },


    //{path: '', redirectTo: '/home', pathMatch: 'full'}
];



@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ],

})
export class AppRoutsModule {
}