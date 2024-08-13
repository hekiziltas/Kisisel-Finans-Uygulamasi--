import { HomePage } from './home/home.page';
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean
    {
    if (this.authService.isLoggedIn()) {
      const HomePage = this.authService.getHomePage();
      this.router.navigateByUrl(HomePage);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
