import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome-page/welcome/welcome.component';
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignInEmailComponent } from './sign-in/sign-in-email/sign-in-email.component';
import {StoreModule} from "@ngrx/store";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './sign-up/sign-up-profile-info/profile-info/profile-info.component';
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./stores/effects/auth.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {authReducer} from "./stores/reducers/auth.reducers";
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import {profileInfoReducer} from "./stores/reducers/profile-info.reducers";
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { StatisticsComponent } from './profile/statistics/statistics.component';
import { TrainingComponent } from './profile/training/training.component';
import { HomeComponent } from './profile/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';


const appRoutes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signin/email', component: SignInEmailComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signup/info', component: ProfileInfoComponent},

  {path: 'home', component: HomeComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'profile', component: ProfileComponent, },
  {path: 'profile/edit', component: EditProfileComponent, },

  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: '/'}
]


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    SignInComponent,
    SignInEmailComponent,
    ProfileInfoComponent,
    ProfileComponent,
    EditProfileComponent,
    NavbarComponent,
    StatisticsComponent,
    TrainingComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot({
      'auth': authReducer,
      'profileInfo': profileInfoReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    [RouterModule.forRoot(appRoutes)],

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
