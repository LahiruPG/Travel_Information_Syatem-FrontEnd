import { PlaceCategoryService } from './service/place-category.service';
import {HttpModule } from '@angular/http';
import { PlaceService } from './service/place.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlaceFormComponent } from './components/admin/place-form/place-form.component';
import { AdminPlaceComponent } from './components/admin/admin-place/admin-place.component';
import { ViewPlacesComponent } from './components/view-places/view-places.component';
import { PlacesFilterComponent } from './components/view-places/places-filter/places-filter.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomeComponent,
    AboutComponent,
    PlaceFormComponent,
    AdminPlaceComponent,
    ViewPlacesComponent,
    PlacesFilterComponent,
    PlaceCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    NgbModule.forRoot(),
    CustomFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'about',component: AboutComponent},
      {path: 'admin/manage-places/add-place',component: PlaceFormComponent},
      {path: 'admin/manage-places/add-place/:id', component: PlaceFormComponent},
      {path: 'admin/manage-places',component: AdminPlaceComponent},
      {path: 'view-places',component: ViewPlacesComponent},
      {path: 'login',component: LoginComponent}
      

    ])
  ],
  providers: [
    PlaceService,
    PlaceCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
