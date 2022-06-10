import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome-page/welcome/welcome.component';
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileBirthdayComponent } from './sign-up/sign-up-profile-info/profile-birthday/profile-birthday.component';
import { ProfileNameComponent } from './sign-up/sign-up-profile-info/profile-name/profile-name.component';
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignInEmailComponent } from './sign-in/sign-in-email/sign-in-email.component';
import { ProfileGenderComponent } from './sign-up/sign-up-profile-info/profile-gender/profile-gender.component';
import {StoreModule} from "@ngrx/store";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./stores/effects/auth.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {authReducer} from "./stores/reducers/auth.reducers";


const appRoutes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signin/email', component: SignInEmailComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signup/gender', component: ProfileGenderComponent},
  {path: 'signup/bday', component: ProfileBirthdayComponent},
  {path: 'signup/name', component: ProfileNameComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'profile/edit', component: ProfileInfoComponent},

  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: '/'}
]


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    ProfileBirthdayComponent,
    ProfileNameComponent,
    SignInComponent,
    SignInEmailComponent,
    ProfileGenderComponent,
    ProfileComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot({
      'auth': authReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    [RouterModule.forRoot(appRoutes)],

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
