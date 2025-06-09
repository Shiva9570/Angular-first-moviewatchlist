import { Routes } from '@angular/router';
import { User } from './user/user';
import { TrendingMovies } from './trending-movies/trending-movies';
import { Signup } from './signup/signup';
import { AppleSignin } from './apple-signin/apple-signin';

export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: User },
  { path: 'signup', component: Signup },
  { path: 'trending-movies', component: TrendingMovies },
  { path: 'apple-signin', component: AppleSignin }
];
