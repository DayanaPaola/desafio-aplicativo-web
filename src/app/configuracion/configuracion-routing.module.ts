import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfiguracionComponent} from './configuracion.component';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionComponent,
    children: [
      {
        path: 'cliente',
        loadChildren: './cliente/cliente.module#ClienteModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ConfiguracionRoutingModule {
}
