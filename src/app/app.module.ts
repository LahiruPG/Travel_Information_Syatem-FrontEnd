import { AppRoutsModule } from './app.routs.component';
import { PlaceImageService } from './service/place-image.service';
import { PlaceReviewService } from './service/place-comment.service';
import { AuthGurdService } from './service/auth-gurd.service';
import { AuthService } from './service/auth.service';
import { PlaceCategoryService } from './service/place-category.service';
import { HttpModule } from '@angular/http';
import { PlaceService } from './service/place.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";

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
import { FooterComponent } from './components/footer/footer.component';
import { PlaceInfoComponent } from './components/place-info/place-info.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { ManagePlaceCategoryComponent } from './components/admin/manage-place-category/manage-place-category.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';


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
    FooterComponent,
    PlaceInfoComponent,
    AdminPanelComponent,
    ManagePlaceCategoryComponent,
    SignupComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    AppRoutsModule,
  ],
  providers: [
    PlaceService,
    PlaceCategoryService,
    AuthService,
    PlaceReviewService,
    AuthGurdService,
    PlaceImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
