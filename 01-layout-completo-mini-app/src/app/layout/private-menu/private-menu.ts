import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-private-menu',
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './private-menu.html',
  styleUrl: './private-menu.scss',
})
export class PrivateMenu {}