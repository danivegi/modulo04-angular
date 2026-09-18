import { Injectable, signal, computed } from '@angular/core';

export interface Credentials {
  username: string;
  password: string;
}

const STORAGE_KEY = 'auth_username';

@Injectable({ providedIn: 'root' })
export class Auth {
  // Se inicializa leyendo de localStorage: si había sesión, arranca logueado
  private readonly _username = signal<string>(
    localStorage.getItem(STORAGE_KEY) ?? '',
  );

  readonly logged = computed(() => this._username() !== '');

  login({ username, password }: Credentials): boolean {
    const ok = username === 'master@lemoncode.net' && password === '12345678';
    if (ok) {
      this._username.set(username);
      localStorage.setItem(STORAGE_KEY, username);
    }
    return ok;
  }

  logout(): void {
    this._username.set('');
    localStorage.removeItem(STORAGE_KEY);
  }

  isLogged(): boolean {
    return this.logged();
  }

  getUsername(): string {
    return this._username();
  }
}