import {DOCUMENT} from '@angular/common';
import {Component, Inject, Renderer2} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {SidenavService} from './layout/sidenav/sidenav.service';
import {ThemeService} from '../@fury/services/theme.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private sidenavService: SidenavService,
              private iconRegistry: MatIconRegistry,
              private renderer: Renderer2,
              private themeService: ThemeService,
              @Inject(DOCUMENT) private document: Document) {
    this.iconRegistry.setDefaultFontSetClass('material-icons');
    this.themeService.theme$.subscribe(theme => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    this.sidenavService.addItems([
      {
        name: 'Mantenimiento',
        position: 1,
        icon: 'settings',
        subItems: [
          {
            name: 'Cliente',
            routeOrFunction: '/configuracion/cliente',
            position: 5
          },
        ]
      },
    ]);
  }
}
