import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
      },
      {
        path: 'apps/inbox',
        loadChildren: './pages/apps/inbox/inbox.module#InboxModule',
      },
      {
        path: 'apps/calendar',
        loadChildren: './pages/apps/calendar/calendar.module#CalendarAppModule',
      },
      {
        path: 'apps/chat',
        loadChildren: './pages/apps/chat/chat.module#ChatModule',
      },
      {
        path: 'components',
        loadChildren: './pages/components/components.module#ComponentsModule',
      },
      {
        path: 'forms/form-elements',
        loadChildren: './pages/forms/form-elements/form-elements.module#FormElementsModule',
      },
      {
        path: 'forms/form-wizard',
        loadChildren: './pages/forms/form-wizard/form-wizard.module#FormWizardModule',
      },
      {
        path: 'icons',
        loadChildren: './pages/icons/icons.module#IconsModule',
      },
      {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: './pages/level5/level5.module#Level5Module',
      },
      {
        path: 'maps/google-maps',
        loadChildren: './pages/maps/google-maps/google-maps.module#GoogleMapsModule',
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: './pages/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule',
      },
      {
        path: 'drag-and-drop',
        loadChildren: './pages/drag-and-drop/drag-and-drop.module#DragAndDropModule'
      },
      {
        path: 'editor',
        loadChildren: './pages/editor/editor.module#EditorModule',
      },
      {
        path: 'blank',
        loadChildren: './pages/blank/blank.module#BlankModule',
      },
      {
        path: 'configuracion',
        loadChildren: './configuracion/configuracion.module#ConfiguracionModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
