import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WelcomeComponent} from './welcome-page/welcome/welcome.component';
import {Routes, RouterModule} from "@angular/router";
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignInEmailComponent} from './sign-in/sign-in-email/sign-in-email.component';
import {StoreModule} from "@ngrx/store";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from './profile/profile.component';
import {ProfileInfoComponent} from './sign-up/sign-up-profile-info/profile-info/profile-info.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./stores/effects/auth.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {authReducer} from "./stores/reducers/auth.reducers";
import {EditProfileComponent} from './profile/edit-profile/edit-profile.component';
import {profileInfoReducer} from "./stores/reducers/profile-info.reducers";
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {StatisticsComponent} from './profile/statistics/statistics.component';
import {TrainingComponent} from './profile/training/training.component';
import {HomeComponent} from './profile/home/home.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {ToastMessagesReducer} from "./stores/reducers/errors.reducer";
import {ErrorsComponent} from './layouts/errors/errors.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SignUpInfoGuard} from "./guards/signUpInfo.guard";
import {MatButtonModule} from "@angular/material/button";
import {DevPageComponent} from './dev-page/dev-page.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProfileInfoEffects} from "./stores/effects/profile-info.effects";
import {ProfileInfoService} from "./services/profile-info.service";
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth.interceptor";
import { CombinationChoiceComponent } from './profile/components/combination-choice/combination-choice.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

const appRoutes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signin/email', component: SignInEmailComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signup/info', component: ProfileInfoComponent, canActivate: [SignUpInfoGuard]},

  {path: 'profile/home', component: HomeComponent},
  {path: 'profile/statistics', component: StatisticsComponent},
  {path: 'profile/training', component: TrainingComponent},
  {path: 'profile', component: ProfileComponent,},
  {path: 'profile/edit', component: EditProfileComponent,},

  {path: 'devpage', component: DevPageComponent},
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
    ErrorsComponent,
    DevPageComponent,
    CombinationChoiceComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects, ProfileInfoEffects]),
    StoreModule.forRoot({
      'auth': authReducer,
      'profileInfo': profileInfoReducer,
      'errorMessage': ToastMessagesReducer,
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
    provideAuth(() => getAuth()),
    MatSnackBarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,

  ],
  exports: [RouterModule],
  providers: [SignUpInfoGuard, ProfileInfoService, AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
