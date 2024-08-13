import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'yatirim',
    loadChildren: () => import('./yatirim/yatirim.module').then( m => m.YatirimPageModule)
  },
  {
    path: 'cuzdan',
    loadChildren: () => import('./cuzdan/cuzdan.module').then( m => m.CuzdanPageModule)
  },
  {
    path: 'hesaplarim',
    loadChildren: () => import('./hesaplarim/hesaplarim.module').then( m => m.HesaplarimPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }