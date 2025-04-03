import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LbbSideMenuComponent, TitleColor} from 'lbb-side-menu'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LbbSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lbb-testbed-app';

  TitleColor = TitleColor

  isAuthenticated = signal(true)
}
