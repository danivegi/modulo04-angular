import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './core/auth';
import { PublicHeader } from './layout/public-header/public-header';
import { PrivateHeader } from './layout/private-header/private-header';
import { PublicMenu } from './layout/public-menu/public-menu';
import { PrivateMenu } from './layout/private-menu/private-menu';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PublicHeader, PrivateHeader,
    PublicMenu, PrivateMenu,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly auth = inject(Auth);
}