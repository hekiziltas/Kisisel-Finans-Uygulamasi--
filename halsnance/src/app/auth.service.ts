import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  public startSession(authResult: any): void {
    sessionStorage.setItem('user', JSON.stringify(authResult));
  }

  public logout(): void {
    sessionStorage.removeItem('user');
  }

  public isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem('user') || '{}');
  }

  public getHomePage(): string {
    const user = this.getUser();
    return user.HomePage || '/default-home';
  }

  public BakiyeSorgula(): string {
    const user = this.getUser();
    return user.currency || 'TL'; // Default para birimi olarak 'TRY' kullanıyoruz
  }
}
