import {ClienteComponent} from './cliente.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: '', component: ClienteListComponent,
      },
      {
        path: 'create', component: ClienteCreateComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClienteRoutingModule {
}
