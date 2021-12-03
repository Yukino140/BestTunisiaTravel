import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { AboutComponent } from './about/about.component';
import { EssentialComponent } from './essential/essential.component';
import { HealthComponent } from './essential/health/health.component';
import { SafetyComponent } from './essential/safety/safety.component';
import { CurrencyComponent } from './essential/currency/currency.component';
import { TravelPapersComponent } from './essential/travel-papers/travel-papers.component';
import { EmergencyNumbersComponent } from './essential/emergency-numbers/emergency-numbers.component';
import { LanguageComponent } from './essential/language/language.component';
import { DestinationComponent } from './destination/destination.component';
import { ReserveComponent } from './reservation/reserve/reserve.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SeeMoreComponent } from './see-more/see-more.component';


const config = {
  apiKey: "AIzaSyB8yTTMyXCQ0HbOqbi8Hioj-Im-9Nc3e10",
  authDomain: "besttunisiatravel-53d93.firebaseapp.com",
  projectId: "besttunisiatravel-53d93",
  storageBucket: "besttunisiatravel-53d93.appspot.com",
  messagingSenderId: "427379768924",
  appId: "1:427379768924:web:780b7af62ca2ff8a807099"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DestinationsComponent,
    AboutComponent,
    EssentialComponent,
    HealthComponent,
    SafetyComponent,
    CurrencyComponent,
    TravelPapersComponent,
    EmergencyNumbersComponent,
    LanguageComponent,
    DestinationComponent,
    ReserveComponent,
    SeeMoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule

  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
