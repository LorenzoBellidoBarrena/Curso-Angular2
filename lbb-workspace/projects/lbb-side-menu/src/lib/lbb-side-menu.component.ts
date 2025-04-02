import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-lbb-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './lbb-side-menu.component.html',
  styles: ``,
})
export class LbbSideMenuComponent {
  isAuthenticated = input(false)

  titleColor = input<TitleColor>(TitleColor.purple)

  onSignIn = output()
  onSignOut = output()
}
