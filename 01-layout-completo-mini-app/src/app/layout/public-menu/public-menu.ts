import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-public-menu',
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './public-menu.html',
  styleUrl: './public-menu.scss',
})
export class PublicMenu {}