import {NgModule} from '@angular/core';
import {ConfiguracionRoutingModule} from './configuracion-routing.module';
import {ConfiguracionComponent} from './configuracion.component';

@NgModule({
  declarations: [
    ConfiguracionComponent,
  ],
  imports: [
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule {
}
