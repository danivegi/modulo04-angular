import { Component } from '@angular/core';
import { Gallery } from './gallery/gallery';
import { Rotate } from './rotate';

@Component({
  selector: 'app-root',
  imports: [Gallery, Rotate],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}