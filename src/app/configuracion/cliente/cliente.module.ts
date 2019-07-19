import {ClienteComponent} from './cliente.component';
import {CommonModule} from '@angular/common';
import {ListModule} from '../../../@fury/shared/list/list.module';
import {MatInputModule} from '@angular/material';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';
import {ClienteService} from '../shared/service/cliente.service';

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListComponent,
    ClienteCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BreadcrumbsModule,
    ClienteRoutingModule,
    MatInputModule,
    ListModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule {
}
