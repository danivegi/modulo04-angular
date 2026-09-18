import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '../../core/auth';

@Component({
  selector: 'app-private-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './private-header.html',
  styleUrl: './private-header.scss',
})
export class PrivateHeader {
  protected readonly auth = inject(Auth);
  private readonly router = inject(Router);

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}